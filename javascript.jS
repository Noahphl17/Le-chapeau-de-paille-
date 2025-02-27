const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });
  
  // Observer le titre
  const menuTitle = document.querySelector('.menu h2');
  if (menuTitle) {
    observer.observe(menuTitle);
  }
  
  // Observer les rectangles de catégories
  document.querySelectorAll('.menu-rectangle').forEach((el) => {
    observer.observe(el);
  });
