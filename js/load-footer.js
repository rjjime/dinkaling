// Load footer on all pages
(function() {
    // Determine the correct path to footer based on current page location
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/html/');
    const footerPath = isInSubfolder ? '../includes/footer.html' : 'includes/footer.html';
    
    // Create a placeholder for the footer
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.id = 'footer-placeholder';
    
    // Find where to insert footer (before closing body or at the end)
    document.body.appendChild(footerPlaceholder);
    
    // Fetch and insert footer
    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Footer not found');
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback to simple footer if fetch fails
            footerPlaceholder.innerHTML = `
                <footer class="site-footer" style="background: #2c3e50; color: white; padding: 20px; text-align: center;">
                    <p>&copy; 2025 Dinkaling.com</p>
                    <p><a href="https://buymeacoffee.com/dinkaling" target="_blank" style="color: #ffdd00;">☕ Support Us</a></p>
                </footer>
            `;
        });
})();
