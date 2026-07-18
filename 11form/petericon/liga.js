/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'zoom-out': '&#xe600;',
			'zoom-in': '&#xe601;',
			'world': '&#xe602;',
			'warning': '&#xe603;',
			'user': '&#xe604;',
			'tick': '&#xe605;',
			'thumbs-up': '&#xe606;',
			'list': '&#xe607;',
			'star': '&#xe608;',
			'printer': '&#xe609;',
			'pin': '&#xe60a;',
			'pin-outline': '&#xe60b;',
			'info': '&#xe60c;',
			'group': '&#xe60d;',
			'home': '&#xe60e;',
			'image': '&#xe60f;',
			'folder': '&#xe610;',
			'edit': '&#xe611;',
			'document': '&#xe612;',
			'device-tablet': '&#xe613;',
			'device-desktop': '&#xe614;',
			'device-phone': '&#xe615;',
			'chart-pie': '&#xe616;',
			'chart-bar': '&#xe617;',
			'calculator': '&#xe618;',
			'at': '&#xe619;',
			'arrow-repet': '&#xe61a;',
			'arrow-sync': '&#xe61b;',
			'arrow-forward': '&#xe61c;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());