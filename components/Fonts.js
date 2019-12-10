const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
	const link = document.createElement('link');
	link.href =
		'https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	const josefin = new FontFaceObserver('Josefin Sans');

	josefin.load().then(() => {
		document.documentElement.classList.add('josefin+sans');
	});
};

export default Fonts;
