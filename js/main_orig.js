/* ===============================
   DinkaLing.com — Main JS
   =============================== */

/* Dynamically Load Header and Footer */
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', 'includes/header.html');
    loadComponent('footer', 'includes/footer.html');
    highlightActiveNav();
  });
  
  function loadComponent(id, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        highlightActiveNav();
      })
      .catch(err => console.error(`Error loading ${url}:`, err));
  }
  
  /* Highlight current nav item */
  function highlightActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  }
  