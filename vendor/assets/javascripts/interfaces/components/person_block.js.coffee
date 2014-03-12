# TODO: componentize like `app_switcher.js`

$(document).on "click", ".js-droptoggle", (event) ->
  $(this).closest(".js-dropwrap").toggleClass("active-state")
