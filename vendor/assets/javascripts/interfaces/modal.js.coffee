window.INTERFACES ?= {}

class INTERFACES.ModalView
  constructor: ->
    console.warn """
                 INTERFACES [warning]:
                   ModalView doesn't do much directly.  You'll want to use the appropriate subclass of ModalView that suites your purpose:
                   ModalIdView  is used to create a modal from your current template with a matching id
                   ModalUrlView is used to create a modal from an external page on your domain
                 """

  show: ->
    INTERFACES.modalLayer.emptyAndPushModal @content


class INTERFACES.ModalIdView extends INTERFACES.ModalView
  constructor: (@id) ->
    @content = $('#' + @id).clone()


class INTERFACES.ModalUrlView extends INTERFACES.ModalView
  constructor: (@content) ->
