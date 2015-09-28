if (isLegacyIe) {
	window.attachEvent('onload', function() {
		ukeGeeks.scriptasaurus.init(true);
	});
}
else {
	(function() {
		ukeGeeks.scriptasaurus.init(false);
	})();
}
ukeGeeks.settings.scale(0.8);
ukeGeeks.settings.fonts = {
        dot: 'bold 9pt Oswald',
        text: 'bold 12pt Oswald',
        fret: 'bold 10pt Oswald'
};
ukeGeeks.settings.tabs['labelFont'] = '10pt Oswald';
ukeGeeks.settings.tabs['textFont'] = '9pt Oswald';
ukeGeeks.settings.tabs['textColor'] = '#222222';
ukeGeeks.settings.tabs['dotColor'] = '#ffffff';
ukeGeeks.settings.tabs['dotRadius'] = 8;
ukeGeeks.settings.tabs['bottomPadding'] = 0;
ukeGeeks.settings.tabs['labelWidth'] = 8;
ukeGeeks.settings.tabs['noteSpacing'] = 10;
ukeGeeks.settings.tabs['lineColor'] = '#222222';
ukeGeeks.settings.colors['dots'] = '#1f8dd6';
ukeGeeks.settings.colors['text'] = '#222222';
ukeGeeks.settings.colors['fretLines'] = '#222222';
ukeGeeks.scriptasaurus.run();
