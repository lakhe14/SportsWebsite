// Navbar mobile toggle (for future expansion)
// Smooth scroll for anchor links
// Simple fade-in animation on scroll

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));

  // Hero video switcher
  const heroVideo = document.getElementById('heroVideo');
  const nextVideoBtn = document.getElementById('nextVideoBtn');
  const videoSources = [
    'assets/videos/hero1.mp4',
    'assets/videos/hero2.mp4',
    'assets/videos/hero3.mp4',
    'assets/videos/hero4.mp4',
    'assets/videos/hero5.mp4'
  ];
  let currentVideo = 0;

  if (heroVideo && nextVideoBtn) {
    nextVideoBtn.addEventListener('click', function() {
      currentVideo = (currentVideo + 1) % videoSources.length;
      const source = heroVideo.querySelector('source');
      source.setAttribute('src', videoSources[currentVideo]);
      heroVideo.load();
      heroVideo.play();
    });
  }
}); 