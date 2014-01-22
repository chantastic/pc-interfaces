foundation_options =
  reveal:
    animation: 'fade'
    animation_speed: 100

$(document).on 'ready page:load', ->
  $(document).foundation(foundation_options)
