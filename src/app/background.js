(function () {
    'use strict';
    chrome.app.runtime.onLaunched.addListener(function () {
        // Center window on screen.
        var screenWidth = screen.availWidth;
        var screenHeight = screen.availHeight;
        var width = 933;
        var height = 500;
        chrome.app.window.create('app/app.html', {
            id: "com.lancecaraccioli.apps.chrome.right-angles",
            bounds: {
                width: width,
                height: height,
                left: Math.round((screenWidth - width) / 2),
                top: Math.round((screenHeight - height) / 2)
            }
        });
    });
})();
