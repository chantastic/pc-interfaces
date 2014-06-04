window.INTERFACES ?= {}

class INTERFACES.ModalView
  constructor: (@content = '') ->

  show: =>
    INTERFACES.modalLayer.emptyAndPushModal @content
    @_publishModalLoad()

  # It is less good that this event is called `modal:load`
  # now that it is triggered on all modals. What shold be?
  _publishModalLoad: =>
    $(document).trigger 'modal:load'

class INTERFACES.ModalIdView extends INTERFACES.ModalView
  constructor: (@id) ->
    @content = $('#' + @id).clone()

class INTERFACES.ModalUrlView extends INTERFACES.ModalView
  constructor: (@content) ->
