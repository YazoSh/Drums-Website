var keys = ['W','A', 'S', 'D', 'J', 'K', 'L'];

var drums = {};

for(let i = 0; i < keys.length; i++)
	drums[keys[i]] = {
						element: document.querySelector('.' + 'drum' + keys[i]),
						key: keys[i],
						sound: new Audio('/assets/sounds/drum' + keys[i] + '.mp3'),
					};


var loadsounds = function() {
	function playsound(sound) {
		sound.pause();
		sound.currentTime = 0;
		sound.play();
	};

	for(const drum in drums)
	{
		// Add sound event for mouse click
		var clicksound = function() {
			const sound = drums[drum].sound;
			playsound(sound);

			drums[drum].element.classList.add('squeeze');
		};
		drums[drum].element.addEventListener('click', clicksound);

		// Add sound event for key press
		var keysound = function(event) {
			const sound = drums[drum].sound;

			if(event.code === ('Key' + drums[drum].key))
				playsound(sound);
		};
		document.addEventListener('keydown', keysound);
	}
}();
