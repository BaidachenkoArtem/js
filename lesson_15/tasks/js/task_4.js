"use strict"

// Розробити клас Baner

if (confirm("Почати тестування?")) {
	class Banner {
		constructor(initBanners) {
			this.banners = initBanners
		}
		getRandomBanner(){
			return Math.floor(Math.random() * this.banners.length)
		}
		showBanner(){
			const randomBanner = this.banners[this.getRandomBanner()]
			document.write(`
				<a target="_blank" href="${randomBanner.link}">
					<img src="${randomBanner.image}" alt="Баннер" width="800">
				</a>
			`)
		}
	
	}
		
	const banners = [
		{
			image: "img/image-2.webp",
			link: 'https://www.rozetka.com.ua'
		}
	]
	
	const newBanners = new Banner(banners)
	newBanners.showBanner()
}