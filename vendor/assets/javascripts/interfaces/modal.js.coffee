window.INTERFACES ?= {}

class INTERFACES.ModalView
  constructor: (@id) ->
    @node = $('#' + @id)

  show: ->
    INTERFACES.modalLayer.emptyAndPushModal @node.clone()
