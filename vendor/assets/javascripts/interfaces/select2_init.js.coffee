window.INTERFACES ?= {}

INTERFACES.formInit = ->
  $('select.select2').select2({ minimumResultsForSearch: 12 })
  $('select.select2--nosearch').select2({ minimumResultsForSearch: -1 })

$(document).on 'ready page:load modal:load', ->
  INTERFACES.formInit()
