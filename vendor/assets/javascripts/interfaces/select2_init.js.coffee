window.INTERFACES ?= {}

INTERFACES.formInit = ->
  # Handles edge-cases with browser-sniffing
  # [device.js](https://github.com/matthewhudson/device.js)

  isNotTouchEnabled = do =>
    not window.Modernizr.touch

  isTouchAndMouseDevice = do =>
    # add edge-case devices here

  isSecondTierBrowserWithCrappyFormSupport = do =>
    # add edge-case devices here

  userIsBetterOffWithSelect2 = do =>
    (isNotTouchEnabled or
     isTouchAndMouseDevice or
     isSecondTierBrowserWithCrappyFormSupport)

  defaultSelect2Options  = { minimumResultsForSearch: 12 }
  nosearchSelect2Options = { minimumResultsForSearch: -1 }

  if userIsBetterOffWithSelect2
    $('select.select2').select2(defaultSelect2Options)
    $('select.select2--nosearch').select2(nosearchSelect2Options)

  # Issue: https://github.com/ministrycentered/interfaces/issues/76
  $('select.select2.select2--force').select2(defaultSelect2Options)
  $('select.select2--nosearch.select2--force').select2(nosearchSelect2Options)

$(document).on 'ready page:load modal:load', ->
  INTERFACES.formInit()
