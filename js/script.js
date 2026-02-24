document.addEventListener('DOMContentLoaded', function() {
    // Initialize Owl Carousel for testimonials
// Update the testimonial carousel initialization
if (document.querySelector('.testimonial-carousel')) {
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
}

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formName = this.getAttribute('id');
            
            // Here you would typically send the data to a server
            console.log(`Form ${formName} submitted:`, Object.fromEntries(formData));
            
            // Show success message
            alert('Thank you for your submission! We will contact you shortly.');
            this.reset();
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled', 'shadow');
        } else {
            navbar.classList.remove('navbar-scrolled', 'shadow');
        }
    });

    // Activate tab based on URL hash
    if (window.location.hash) {
        const tabTrigger = new bootstrap.Tab(document.querySelector(`[href="${window.location.hash}"]`));
        tabTrigger.show();
    }

    // Change tab URL when clicked
    const tabLinks = document.querySelectorAll('[data-bs-toggle="list"], [data-bs-toggle="tab"], [data-bs-toggle="pill"]');
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            history.pushState(null, null, this.getAttribute('href'));
        });
    });
});

// Initialize Hero Carousel with options
document.addEventListener('DOMContentLoaded', function() {
    const heroCarousel = new bootstrap.Carousel('#heroCarousel', {
        interval: 5000, // 5 second interval
        pause: 'hover', // Pause on hover
        wrap: true, // Infinite loop
        ride: 'carousel' // Auto-rotate
    });
    
    // Optional: Add smooth transition
    $('#heroCarousel').on('slide.bs.carousel', function () {
        setTimeout(function() {
            $('.carousel-item.active').addClass('transition-active');
        }, 50);
    });
});