// Wait for DOM to be fully loaded
window.addEventListener('load', function() {
    console.log('Script loaded!');
    
    // Language Switcher with localStorage
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('healthtrack-lang') || 'pt';
    
    // Apply saved language on page load
    function applyLanguage(lang) {
        currentLang = lang;
        
        // Update active button
        langButtons.forEach(function(b) {
            b.classList.remove('active');
            if (b.getAttribute('data-lang') === lang) {
                b.classList.add('active');
            }
        });
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-pt]');
        elements.forEach(function(el) {
            if (currentLang === 'pt') {
                el.textContent = el.getAttribute('data-pt');
            } else {
                el.textContent = el.getAttribute('data-en');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', currentLang);
    }
    
    // Apply language on load
    applyLanguage(currentLang);
    console.log('Applied language:', currentLang);
    
    // Add click listeners
    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            console.log('Language button clicked:', this.getAttribute('data-lang'));
            const newLang = this.getAttribute('data-lang');
            
            // Save to localStorage
            localStorage.setItem('healthtrack-lang', newLang);
            
            // Apply language
            applyLanguage(newLang);
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('FAQ questions found:', faqQuestions.length);
    
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            console.log('FAQ clicked');
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Close all items
            const allItems = document.querySelectorAll('.faq-item');
            allItems.forEach(function(i) {
                i.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Screenshots Carousel
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (track && prevBtn && nextBtn) {
        const scrollAmount = 400;
        
        nextBtn.addEventListener('click', function() {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', function() {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        // Hide/show buttons based on scroll position
        track.addEventListener('scroll', function() {
            if (track.scrollLeft > 0) {
                prevBtn.style.display = 'block';
            } else {
                prevBtn.style.display = 'none';
            }
            
            if (track.scrollLeft < (track.scrollWidth - track.clientWidth - 10)) {
                nextBtn.style.display = 'block';
            } else {
                nextBtn.style.display = 'none';
            }
        });
        
        // Initial button state
        prevBtn.style.display = 'none';
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
});

