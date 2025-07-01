  // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const logoImg = document.getElementById('logo-img');

        

        window.addEventListener('scroll', () => {
            if (window.scrollY > heroHeight - 100) {
                navbar.classList.remove('transparent');
                navbar.classList.add('scrolled');
                        logoImg.src = './assets/logo.png'; // replace with scrolled logo

            } else {
                navbar.classList.remove('scrolled');
                navbar.classList.add('transparent');
                        logoImg.src = './assets/blacklogo.png'; // replace with default logo

            }
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenu = document.getElementById('close-mobile-menu');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close mobile menu when clicking on links
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link, .cta-button');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Video fallback for better compatibility
        const video = document.querySelector('.hero-video');
        video.addEventListener('error', () => {
            // If video fails to load, add a fallback background
            const hero = document.querySelector('.hero');
            hero.style.background = 'linear-gradient(135deg, #000000 0%, #1e40af 100%)';
        });


          const videotimer = document.getElementById("heroVideo");

  // Restart video every 30 seconds
  setInterval(() => {
    if (videotimer) {
      videotimer.currentTime = 0;
      videotimer.play(); // Ensure it resumes playback
    }
  }, 30000); // 30,000 milliseconds = 30 sec

  //contact
  // Add subtle hover effects for better interactivity
        document.querySelectorAll('.contact-item-contact').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--secondary-color)';
                this.style.borderRadius = '8px';
                this.style.margin = '0 -16px';
                this.style.padding = '20px 16px';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.borderRadius = '0';
                this.style.margin = '0';
                this.style.padding = '20px 0';
            });
        });
        //loader
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
  //scroll to top
  const scrollBtn = document.getElementById('scrollToTop');
  const icon = scrollBtn.querySelector('i');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('show');
      icon.classList.add('rotating');
    } else {
      scrollBtn.classList.remove('show');
      icon.classList.remove('rotating');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
window.addEventListener("scroll", () => {
  const callBtn = document.getElementById("callButton");
  if (window.scrollY > 100) {
    callBtn.classList.add("show");
  } else {
    callBtn.classList.remove("show");
  }
});