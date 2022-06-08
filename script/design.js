const circles = document.querySelectorAll(".circle");
window.addEventListener("mousemove", (e) => {
	circles.forEach((circle) => {
		circle.style.top = `${e.clientY}px`;
		circle.style.left = `${e.clientX}px`;
	});

	document.querySelectorAll(".layer").forEach((layer) => {
		const speed = layer.getAttribute("data-speed");
		const x = (window.innerWidth - e.pageX * speed) / 100;
		const y = (window.innerHeight - e.pageY * speed) / 100;

		layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
});
