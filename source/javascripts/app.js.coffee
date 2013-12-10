# Place all the behaviors and hooks related to site-wide utilities and helpers here

$ =>
  ########### Generic toggle helper
  $(document).on "click", ".js-togglehelper:not(.disabled)", (event) ->
    $(this).toggleClass("alt-state")

  ########### Toggle the top menu bar for mobile
  $(document).on "click", ".js-toptoggle", (event) ->
    $(this).closest(".js-topwrap").toggleClass("active-state")

  ########### Toggle the dropdown menus
  $(document).on "click", ".dropdown-toggle", (event) ->
    $(this).closest(".dropdown").toggleClass("active-state")    


  ########### LEFT OFF-CANVAS SIDEBAR
  $(document).on "click", "#toggle-sidebar", (event) ->
    $('body').toggleClass("left-off-canvas-active") 
