"use strict";

require.config({
    paths: {
        "jQuery": "lib/jquery.min",
        "Window": "lib/windows/Window",
        "ImageViewerWindow": "lib/windows/ImageViewerWindow"
    }
});

require(["lib/app"]);