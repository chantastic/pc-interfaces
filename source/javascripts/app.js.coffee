# Place all the behaviors and hooks related to site-wide utilities and helpers here

$ =>
  ########### Generic toggle helper
  $(document).on "click", ".js-togglehelper:not(.disabled)", (event) ->
    $(this).toggleClass("alt-state")

  ########### Toggle the top menu bar for mobile
  $(document).on "click", ".js-toggleancestor", (event) ->
    $(this).closest(".js-toggletarget").toggleClass("expanded")

  ########### Toggle dropdowns
  $(document).on "click", ".toggle_ancestor", (event) ->
    $(this).closest(".js-toggletarget").toggleClass("expanded") 

  ########### LEFT OFF-CANVAS SIDEBAR
  $(document).on "click", "#toggle-sidebar", (event) ->
    $('body').toggleClass("left-off-canvas-active") 
