# TODO: componentize like `app_switcher.js`

$(document).on "click", "#toggle-sidebar", (event) ->
  $('body').toggleClass("left-off-canvas-active")
