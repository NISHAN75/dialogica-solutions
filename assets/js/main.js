(function ($) {
		$(document).ready(function () { 
				// gsap
				// gsap.registerPlugin(ScrollTrigger , SplitText);
	
				// gsap.utils.toArray('.fade-up').forEach((element) => {
				// 	gsap.fromTo(element,
				// 	  { opacity: 0, y: 50 }, 
				// 	  { 
				// 		opacity: 1, 
				// 		y: 0, 
				// 		duration: 0.5, 
				// 		ease: "power1.out", 
				// 		scrollTrigger: {
				// 		  trigger: element,
				// 		  start: 'top 75%',
				// 		  end: 'bottom 75%', 
				// 		  scrub: false,  
				// 		}
				// 	  }
				// 	);
				//   });
				  
				  
				  




			// card animation 
		// function getScrollAmount() {
		// 	let offset= $(".container").offset();
		// 	let containerLeftOffset = offset.left;
		// 	console.log(containerLeftOffset);
		// 	let racesWidth = $(".card-move-info")[0].scrollWidth;
		// 	let innerWidth=$(window).innerWidth();
		// 	let scrollAmount =( racesWidth - $(window).innerWidth()) + containerLeftOffset + containerLeftOffset;

		// 	return scrollAmount;
		// }

		// // Create GSAP tween animation
		// const tween = gsap.to(".card-move-info", {
		// 	x: () => -getScrollAmount(), 
		// 	duration: 3,
		// 	ease: "none",
		// });

		// // Create ScrollTrigger
		// function updateScrollTrigger() {
		// 	ScrollTrigger.create({
		// 		trigger: ".card-move-wrapper",
		// 		start: "top 30%",
		// 		end: () => `+=${getScrollAmount()}`, 
		// 		pin: true,
		// 		animation: tween,
		// 		scrub: 1,
		// 		invalidateOnRefresh: true,
		// 	});
		// }

		// // Initialize ScrollTrigger
		// updateScrollTrigger();

		// // Update ScrollTrigger on window resize
		// $(window).on('resize', function() {
		// 	ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
		// 	updateScrollTrigger(); 
		// });		

		// Lenis
		const lenis = new Lenis()

		lenis.on('scroll', (e) => {
		console.log(e)
		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time)=>{
		lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)
	});
})(jQuery);