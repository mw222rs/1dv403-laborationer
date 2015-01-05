"use strict";

require.config({
    paths: {
        "Mustache": "lib/mustache",
        "jquery": "lib/jquery",
        "Window": "lib/windows/Window",
        "ImageViewerWindow": "lib/windows/ImageViewerWindow"
    }
});

require(["lib/app"]);