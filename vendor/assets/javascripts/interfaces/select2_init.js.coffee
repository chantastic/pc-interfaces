$(document).on 'ready page:load', ->
  $('select').select2()

$(document).on 'ready page:load', ->
  $('select.select2--nosearch').select2({
    minimumResultsForSearch: -1
    });
