$(document).on 'ready page:load', ->
  $('select').select2()

$(document).on 'ready page:load', ->
  $('select.no-search').select2({
    minimumResultsForSearch: -1
    });
