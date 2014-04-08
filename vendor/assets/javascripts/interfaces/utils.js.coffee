window.INTERFACES ?= {}

INTERFACES.utils =

  # http://davidwalsh.name/fakepath
  unfakepath: (path) ->
    path.replace("C:\\fakepath\\", "")
