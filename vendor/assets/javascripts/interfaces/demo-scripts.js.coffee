# Place all the behaviors and hooks related to site-wide utilities and helpers here

$ =>
  ########### Generic toggle helper
  # $(document).on "click", ".app-switcher-wrap.js-togglehelper", (event) ->
    # $(this).toggleClass("alt-state")

  ########### Toggle the dropdown menus
  # $(document).on "click", ".dropdown-toggle", (event) ->
    # $(this).closest(".dropdown").toggleClass("active-state")    

  ########### FIND AND INIT SELECT BOXES
  $("select").select2 minimumResultsForSearch: 12
  $(".select2--nosearch").select2 minimumResultsForSearch: -1

  ########### INII SELECT 2
  # $("select").select2();

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

  $('.btn--checkbox input[type=checkbox]').on 'change', () ->
    if $(@).is ':checked'
      $(@).parent().addClass('selected')
    else
      $(@).parent().removeClass('selected')
