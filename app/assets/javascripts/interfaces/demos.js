//= require prism
//= require interfaces/demo-scripts

// initialize Prism for Turbolinks
$(document).on('ready page:load', function () { Prism.highlightAll(); });
