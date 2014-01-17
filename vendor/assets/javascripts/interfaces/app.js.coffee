# Place all the behaviors and hooks related to site-wide utilities and helpers here

$ =>

  ########### Generic toggle helper
  $(document).on "click", ".js-togglehelper:not(.disabled)", (event) ->
    $(this).toggleClass("alt-state")

  ########### Toggle the top menu bar for mobile
  $(document).on "click", ".js-droptoggle", (event) ->
    $(this).closest(".js-dropwrap").toggleClass("active-state")

  ########### Toggle the dropdown menus
  $(document).on "click", ".dropdown-toggle", (event) ->
    $(this).closest(".dropdown").toggleClass("active-state")    


  ########### LEFT OFF-CANVAS SIDEBAR
  $(document).on "click", "#toggle-sidebar", (event) ->
    $('body').toggleClass("left-off-canvas-active") 

  ########### FIND AND INIT SELECT BOXES
  $("select").select2 minimumResultsForSearch: 12
  $(".select2--nosearch").select2 minimumResultsForSearch: 999

  ########### INII SELECT 2
  $("select").select2();

  ########### ACCORDIONS
  $(document).on "click", ".acc__trigger", (event) ->

    myPanel       = $(this).next(".acc__panel")
    myPanelHeader = $(this)

    myPanel.slideToggle()
    
    if (myPanel.hasClass("active-state") || myPanelHeader.hasClass("active-state"))
      myPanel.removeClass("active-state")
      myPanelHeader.removeClass("active-state")
    else (
      myPanel.addClass("active-state")
      myPanelHeader.addClass("active-state")
      )





  ##DEMO CODE BELOW THIS LINE
  # generic demo toggle
  $('.code-sample-button').on 'click', (e) ->
    e.preventDefault(); e.stopPropagation()

    $(this).siblings('.code-sample').toggle()
