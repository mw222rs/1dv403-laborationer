"use strict";

require.config({
   paths: {
       "Mustache": "lib/mustache",
       "Window": "lib/Window",
       "App": "lib/app"
   } 
});

require(["lib/app"]);