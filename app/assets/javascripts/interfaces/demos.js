/* global $, Prism */

//= require prism
//= require lodash
//= require interfaces/demo-scripts

// initialize Prism for Turbolinks
$(document).on("ready page:load", function () { "use strict"; Prism.highlightAll(); });
