# Place all the behaviors and hooks related to site-wide utilities and helpers here

$ =>
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
  $('.btn--checkbox input[type=checkbox]').on 'change', () ->
    if $(@).is ':checked'
      $(@).parent().addClass('selected')
    else
      $(@).parent().removeClass('selected')
