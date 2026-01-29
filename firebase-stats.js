// Firebase Configuration para contador de visitas
const firebaseConfig = {
    apiKey: "AIzaSyBASLBon-i4t41-2wa62dxWSiRRXBM2CCI",
    authDomain: "healthtrackfree.firebaseapp.com",
    databaseURL: "https://healthtrackfree-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "healthtrackfree",
    storageBucket: "healthtrackfree.firebasestorage.app",
    messagingSenderId: "310049032992",
    appId: "1:310049032992:web:8f1e9c0a1234567890abcd"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

// Incrementar contador de visitas APENAS quando página carrega
// Usa cookie para não contar refreshes do mesmo visitante
function trackPageVisit() {
    // Verificar se já visitou hoje (usar sessionStorage)
    const visitedToday = sessionStorage.getItem('htf_visited_today');
    
    if (!visitedToday) {
        // Incrementar contador
        db.ref('stats/website_visits').transaction(current => {
            return (current || 0) + 1;
        }).then(() => {
            console.log('Visita registada');
            sessionStorage.setItem('htf_visited_today', Date.now());
        }).catch(err => {
            console.error('Erro ao registar visita:', err);
        });
    }
}

// Chamar quando página carrega
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageVisit);
} else {
    trackPageVisit();
}

// Função para admins verem stats (adicionar ?admin=true no URL)
function showStats() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        db.ref('stats').once('value').then(snapshot => {
            const stats = snapshot.val();
            console.log('📊 STATS HEALTHTRACKFREE:');
            console.log('Visitas Website:', stats?.website_visits || 0);
            console.log('Códigos Gerados:', stats?.pairing_codes_generated || 0);
            console.log('Dashboards Acedidos:', stats?.dashboard_accesses || 0);
            
            // Mostrar na página
            const statsDiv = document.createElement('div');
            statsDiv.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#000;color:#fff;padding:15px;border-radius:8px;font-family:monospace;z-index:9999;font-size:12px;';
            statsDiv.innerHTML = `
                <b>📊 STATS</b><br>
                🌐 Visitas: ${stats?.website_visits || 0}<br>
                🔗 Códigos: ${stats?.pairing_codes_generated || 0}<br>
                📱 Dashboards: ${stats?.dashboard_accesses || 0}
            `;
            document.body.appendChild(statsDiv);
        });
    }
}
showStats();
