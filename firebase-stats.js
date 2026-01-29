// Visitor Counter - Server-side via GitHub Actions
// SEM exposição de API keys!

(async function() {
    // Verificar se já visitou hoje
    const visitedToday = sessionStorage.getItem('htf_visited_today');
    
    if (!visitedToday) {
        try {
            // Disparar GitHub Action via repository_dispatch
            // Requer Personal Access Token no GitHub Secrets
            await fetch('https://api.github.com/repos/rf-mref/healthtrackfree/dispatches', {
                method: 'POST',
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event_type: 'page_view'
                })
            });
            
            sessionStorage.setItem('htf_visited_today', Date.now());
        } catch (err) {
            // Falha silenciosa - não crítico
            console.log('Stats tracking unavailable');
        }
    }
    
    // Mostrar stats para admin
    showStatsIfAdmin();
})();

async function showStatsIfAdmin() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        try {
            const response = await fetch('stats.json');
            const stats = await response.json();
            
            const statsDiv = document.createElement('div');
            statsDiv.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#000;color:#fff;padding:15px;border-radius:8px;font-family:monospace;z-index:9999;font-size:12px;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
            statsDiv.innerHTML = `
                <b>📊 STATS</b><br>
                🌐 Visitas: ${stats.visits}<br>
                🕐 Atualizado: ${new Date(stats.updated).toLocaleString('pt-PT')}
            `;
            document.body.appendChild(statsDiv);
        } catch (err) {
            console.error('Erro ao carregar stats:', err);
        }
    }
}

