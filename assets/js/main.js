(function ($) {
	$(document).ready(function () {


		// offcanvas
		let offcanvasElement = $('.offcanvas-header');
		offcanvasElement.on('show.bs.offcanvas', function () {
			$('.humbarger-btn').addClass('open');
			$('.btn-close span:nth-child(1)').css({
				transform: 'rotate(45deg)',
				marginBottom: '0'
			});
			$('.btn-close span:nth-child(2)').css({
				transform: 'rotate(-45deg)',
				marginTop: '-4px'
			});
		});
		offcanvasElement.on('hide.bs.offcanvas', function () {
			$('.humbarger-btn').removeClass('open');
			$('.btn-close span:nth-child(1)').css({
				transform: '',
				marginBottom: ''
			});
			$('.btn-close span:nth-child(2)').css({
				transform: '',
				marginTop: ''
			});
		});

		// gsap
		gsap.registerPlugin(ScrollTrigger);
		// fade up animation
		gsap.utils.toArray('.fade-up').forEach((element) => {
			// Read the animation-delay attribute
			const animationDelay = element.getAttribute('animation-delay');
			const delay = animationDelay ? parseFloat(animationDelay) : 0;

			gsap.fromTo(element, {
				opacity: 0,
				y: 50
			}, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: "none",
				delay: delay, // Apply the delay if present
				scrollTrigger: {
					trigger: element,
					start: 'top bottom',
					end: 'top center',
					once: true,
					toggleActions: 'play none none none',
				}
			});
		});


		// card animation
		function getScrollAmount(element) {
			let offset = $(".container").offset();
			let containerLeftOffset = offset ? offset.left : 0;
		
			let $element = $(element);
			if ($element.length === 0) {
				console.warn(`${element} not found`);
				return 0;
			}
		
			let racesWidth = $element[0].scrollWidth;
			let innerWidth = $(window).innerWidth();
			let scrollAmount = (racesWidth - innerWidth) + (2 * containerLeftOffset);
		
			return scrollAmount;
		}
		
		function createGSAPTween(target, scrollAmount) {
			return gsap.to(target, {
				x: () => -scrollAmount,
				duration: 3,
				ease: "none",
				paused: true, 
			});
		}
		
		function createScrollTrigger(triggerElement, targetElement) {
			let scrollAmount = getScrollAmount(targetElement);
			let tween = createGSAPTween(targetElement, scrollAmount);
		
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top center", 
				end: () => `+=${scrollAmount}`,
				pin: true,
				animation: tween,
				scrub: 1,
				invalidateOnRefresh: true,
				onEnter: () => tween.play(), 
				onLeave: () => tween.pause(), 
				onLeaveBack: () => tween.pause(), 
			});
		}
		
		function initializeScrollTriggers() {
			if ($(window).width() > 991) { // Check if window width is 991px or greater
				$(".card-move-wrapper").each(function () {
					let targetElement = $(this).find(".card-move-info").first(); 
					createScrollTrigger(this, targetElement);
				});
			}
		}
		
		function handleResize() {
			// Kill existing ScrollTriggers and reinitialize if width is 991px or greater
			if ($(window).width() >= 991) {
				ScrollTrigger.getAll().forEach(trigger => trigger.kill());
				initializeScrollTriggers();
			} else {
			}
		}
		// Initialize on page load
		initializeScrollTriggers();
		
		// Update ScrollTrigger on window resize
		$(window).on('resize', handleResize);
		// card animation

		// rotate 
		function aboutCardRotate() {
			if ($(window).width() > 991) { 
				gsap.to(".about-card-img-inner", {
					scrollTrigger: {
					  trigger: ".about-card-wrapper",
					  start: "top 50%",
					  end: "bottom top",
					  scrub: true,
					},
					rotation: 360, 
					stagger: 0.1,
					ease: "power1.out",
					transformOrigin: "center center", 
					duration: 1
				  });
			}
		}
		aboutCardRotate();

		  
		// rotate


		// Lenis
		const lenis = new Lenis()

		lenis.on('scroll', (e) => {
		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)
	});
})(jQuery);