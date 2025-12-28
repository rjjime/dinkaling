
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1 && document.querySelector(targetId)) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav ul');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('show-nav');
            
            // Update ARIA attributes for accessibility
            const isExpanded = nav.classList.contains('show-nav');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
            
            // Change button icon
            mobileToggle.textContent = isExpanded ? '✕' : '☰';
        });
        
        // Close menu when clicking on a nav link (for mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('show-nav');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mobileToggle.textContent = '☰';
                }
            });
        });
        
        // Close menu when clicking outside (for mobile)
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768 && 
                !event.target.closest('.site-header') && 
                nav.classList.contains('show-nav')) {
                nav.classList.remove('show-nav');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                nav.classList.remove('show-nav');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.textContent = '☰';
            }
        });
    }
});
