/* ============================================
   DeBrownies Website JavaScript
   All Interactive Features & Functionalities
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE NAVIGATION ==========
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : '';
        });
    }

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            if (mobileToggle) {
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        }
    });

    // ========== SMOOTH SCROLLING ==========
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                
                // Smooth scroll to target
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // ========== NAVBAR SCROLL EFFECT ==========
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();

        lastScroll = currentScroll;
    });

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // ========== HERO SLIDER ==========
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Show specific slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (n + totalSlides) % totalSlides;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Change slide function (called by buttons)
    window.changeSlide = function(n) {
        showSlide(currentSlide + n);
    };

    // Go to specific slide (called by dots)
    window.currentSlide = function(n) {
        showSlide(n - 1);
    };

    // Auto slide every 5 seconds
    let slideInterval = setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });

        sliderContainer.addEventListener('mouseleave', function() {
            slideInterval = setInterval(function() {
                showSlide(currentSlide + 1);
            }, 5000);
        });
    }

    // ========== ANIMATED COUNTERS ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    function animateCounters() {
        if (counted) return;
        
        const partnershipSection = document.querySelector('.partnership-section');
        const sectionTop = partnershipSection.offsetTop;
        const sectionHeight = partnershipSection.offsetHeight;
        const scrollPos = window.pageYOffset + window.innerHeight;

        if (scrollPos > sectionTop + (sectionHeight / 2)) {
            counted = true;

            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const increment = target / 50;
                let current = 0;

                const updateCounter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(updateCounter);
                    } else {
                        stat.textContent = Math.ceil(current);
                    }
                }, 30);
            });
        }
    }

    window.addEventListener('scroll', animateCounters);

    // ========== PRODUCT FILTER ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Animate in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========== SHOPPING CART ==========
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Increment cart count
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Animate button
            this.style.transform = 'scale(0.9)';
            this.textContent = 'Ditambahkan!';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.textContent = 'Tambah ke Keranjang';
            }, 1000);

            // Animate cart icon
            const cartFloat = document.querySelector('.cart-float');
            cartFloat.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartFloat.style.transform = 'scale(1)';
            }, 300);

            // Show notification
            showNotification('Produk berhasil ditambahkan ke keranjang!');
        });
    });

    // ========== PROMO MODAL ==========
    const modal = document.getElementById('promoModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');

    window.openModal = function(promoId) {
        modal.style.display = 'block';
        // In production, you would load the actual image
        // For now, we'll use a placeholder
        modalImg.src = `images/${promoId}.jpg`;
        document.body.style.overflow = 'hidden';
    };

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ========== NOTIFICATION SYSTEM ==========
    function showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.5s ease;
            font-weight: 600;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ========== LAZY LOADING IMAGES ==========
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ========== SCROLL REVEAL ANIMATION ==========
    const revealElements = document.querySelectorAll('.product-card, .testimonial-card, .outlet-card, .career-card, .promo-card');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });

    // ========== TESTIMONIALS AUTO SCROLL ==========
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    let isTestimonialDragging = false;
    let startX;
    let scrollLeft;

    if (testimonialsSlider) {
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isTestimonialDragging = true;
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });

        testimonialsSlider.addEventListener('mouseleave', () => {
            isTestimonialDragging = false;
        });

        testimonialsSlider.addEventListener('mouseup', () => {
            isTestimonialDragging = false;
        });

        testimonialsSlider.addEventListener('mousemove', (e) => {
            if (!isTestimonialDragging) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
    }

    // ========== FORM VALIDATION (for Career Apply) ==========
    const applyButtons = document.querySelectorAll('.btn-apply');
    
    applyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const jobTitle = this.closest('.career-card').querySelector('h3').textContent;
            
            // In production, this would open a form modal or redirect to application page
            const confirmApply = confirm(`Anda akan melamar untuk posisi: ${jobTitle}\n\nApakah Anda ingin melanjutkan ke WhatsApp untuk mengirim lamaran?`);
            
            if (confirmApply) {
                const message = `Halo, saya tertarik melamar untuk posisi ${jobTitle} di DeBrownies.`;
                window.open(`https://wa.me/6281240806323?text=${encodeURIComponent(message)}`, '_blank');
            }
        });
    });

    // ========== PARTNERSHIP CONTACT ==========
    const partnershipButtons = document.querySelectorAll('.partnership-card .btn-primary');
    
    partnershipButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const programType = this.closest('.partnership-card').querySelector('h2').textContent;
            const message = `Halo, saya tertarik dengan ${programType}. Mohon informasi lebih lanjut.`;
            window.open(`https://wa.me/6281240806323?text=${encodeURIComponent(message)}`, '_blank');
        });
    });

    // ========== OUTLET DIRECTION ==========
    const directionButtons = document.querySelectorAll('.btn-direction');
    
    directionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const outletName = this.closest('.outlet-card').querySelector('h3').textContent;
            const outletAddress = this.closest('.outlet-card').querySelectorAll('p')[0].textContent;
            
            // Open Google Maps with the address
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outletAddress)}`;
            window.open(mapsUrl, '_blank');
        });
    });

    // ========== QUICK VIEW PRODUCT ==========
    const quickViewButtons = document.querySelectorAll('.quick-view');
    
    quickViewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Create quick view modal
            const quickViewModal = document.createElement('div');
            quickViewModal.className = 'modal';
            quickViewModal.style.display = 'block';
            quickViewModal.innerHTML = `
                <div class="modal-content" style="background: white; padding: 40px; border-radius: 15px; max-width: 600px;">
                    <span class="close" style="color: #8B4513;">&times;</span>
                    <h2 style="color: #8B4513; font-family: 'Playfair Display', serif; margin-bottom: 20px;">${productName}</h2>
                    <p style="font-size: 28px; color: #8B4513; font-weight: 700; margin-bottom: 20px;">${productPrice}</p>
                    <p style="color: #666; line-height: 1.8; margin-bottom: 30px;">
                        Brownies premium dengan bahan berkualitas tinggi. Tekstur lembut dan fudgy yang sempurna untuk menemani waktu santai Anda.
                    </p>
                    <button class="btn-add-cart" style="width: 100%; padding: 15px; background: #8B4513; color: white; border: none; border-radius: 25px; font-weight: 600; cursor: pointer;">
                        Tambah ke Keranjang
                    </button>
                </div>
            `;
            
            document.body.appendChild(quickViewModal);
            document.body.style.overflow = 'hidden';
            
            // Close quick view
            const closeBtn = quickViewModal.querySelector('.close');
            closeBtn.addEventListener('click', function() {
                quickViewModal.remove();
                document.body.style.overflow = 'auto';
            });
            
            quickViewModal.addEventListener('click', function(e) {
                if (e.target === quickViewModal) {
                    quickViewModal.remove();
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Add to cart from quick view
            const addToCartBtn = quickViewModal.querySelector('.btn-add-cart');
            addToCartBtn.addEventListener('click', function() {
                cartCount++;
                cartCountElement.textContent = cartCount;
                showNotification('Produk berhasil ditambahkan ke keranjang!');
                quickViewModal.remove();
                document.body.style.overflow = 'auto';
            });
        });
    });

    // ========== SCROLL TO TOP BUTTON ==========
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 180px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(139, 69, 19, 0.3)';
    });

    // ========== PRELOADER (Optional) ==========
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // ========== CONSOLE MESSAGE ==========
    console.log('%c🍫 DeBrownies Website', 'color: #8B4513; font-size: 24px; font-weight: bold;');
    console.log('%cCustom Brownies | Fudgy Brownies', 'color: #D2691E; font-size: 14px;');
    console.log('%cWebsite loaded successfully!', 'color: #4CAF50; font-size: 12px;');

});

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-dependent code here
}, 10));
