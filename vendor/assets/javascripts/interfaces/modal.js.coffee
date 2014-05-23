window.INTERFACES ?= {}

class INTERFACES.ModalView
  constructor: (@content = '') ->

  show: =>
    INTERFACES.modalLayer.emptyAndPushModal @content

class INTERFACES.ModalIdView extends INTERFACES.ModalView
  constructor: (@id) ->
    @content = $('#' + @id).clone()

class INTERFACES.ModalUrlView extends INTERFACES.ModalView
  constructor: (@content) ->

  show: =>
    super()
    @_publishModalLoad()

  _publishModalLoad: =>
    $(document).trigger 'modal:load'
