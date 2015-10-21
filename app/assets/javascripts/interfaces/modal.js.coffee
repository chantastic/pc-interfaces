window.INTERFACES ?= {}
window.INTERFACES.errors ?= {}

class INTERFACES.ModalView
  constructor: (@content = '') ->
    @_catchAndLogContentErrors()

  show: =>
    INTERFACES.modalLayer.emptyAndPushModal @content
    @_publishModalLoad()

  _catchAndLogContentErrors: =>
    $content = $(@content)

  # It is less good that this event is called `modal:load`
  # now that it is triggered on all modals. What shold be?
  _publishModalLoad: =>
    $(document).trigger 'modal:load'

class INTERFACES.ModalPushView extends INTERFACES.ModalView
  show: =>
    INTERFACES.modalLayer.pushAndEmptyModal @content
    @_publishModalLoad()

class INTERFACES.ModalIdView extends INTERFACES.ModalView
  constructor: (@id) ->
    content = $('#' + @id).clone()
    super(content)

class INTERFACES.ModalUrlView extends INTERFACES.ModalView
