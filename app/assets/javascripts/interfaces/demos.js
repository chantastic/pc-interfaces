/* global $, Prism */

//= require prism
//= require lodash
//= require interfaces/demo-scripts
//= require_tree ../interfaces/demo/components

// initialize Prism for Turbolinks
$(document).on("ready page:load", function() {
  "use strict";
  Prism.highlightAll();
});
