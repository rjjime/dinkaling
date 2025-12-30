// Add floating pickleball Buy Me a Coffee button with image
(function() {
    // Create floating button
    const floatingBtn = document.createElement('a');
    floatingBtn.href = 'https://buymeacoffee.com/dinkaling';
    floatingBtn.target = '_blank';
    floatingBtn.className = 'floating-support-btn';
    floatingBtn.setAttribute('aria-label', 'Support us on Buy Me a Coffee');
    floatingBtn.setAttribute('title', 'Support DinkALing');
    
    // Add pickleball image
    const img = document.createElement('img');
    img.src = 'assets/pickleball.png'; // Update this path to your actual image
    img.alt = 'Pickleball';
    img.style.pointerEvents = 'none';
    floatingBtn.appendChild(img);
    
    // Add coffee icon overlay
    const icon = document.createElement('span');
    icon.className = 'floating-support-btn-icon';
    icon.textContent = '☕';
    floatingBtn.appendChild(icon);
    
    // Add text label
    const label = document.createElement('span');
    label.className = 'floating-support-btn-text';
    label.textContent = 'Support Us';
    floatingBtn.appendChild(label);
    
    // Add to page
    document.body.appendChild(floatingBtn);
    
    // Hide when scrolled to footer
    const footer = document.querySelector('footer');
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingBtn.style.opacity = '0';
                    floatingBtn.style.pointerEvents = 'none';
                } else {
                    floatingBtn.style.opacity = '1';
                    floatingBtn.style.pointerEvents = 'auto';
                }
            });
        }, { threshold: 0.1 });
        observer.observe(footer);
    }
    
    floatingBtn.style.transition = 'opacity 0.5s ease';
})();
