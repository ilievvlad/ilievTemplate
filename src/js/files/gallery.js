import lightGallery from 'lightgallery';

// Basic styles
import '@scss/libs/gallery/lightgallery.scss';

// Addon Styles
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// All styles
// import '@scss/libs/gallery/lightgallery-bundle.scss';

const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
	galleries.forEach(gallery => {
		lightGallery(gallery, {
			licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
			speed: 500,
		});
	});
}





