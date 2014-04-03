window.INTERFACES ?= {}

INTERFACES.dataAPI =
  init: ->
    @_attachDocumentListeners()

  showTriggeredModal: ->
    _id = $(@).data 'modal-id'

    modal = new INTERFACES.ModalView(_id)
    modal.show()

  hideModalLayer: ->
    INTERFACES.modalLayer.hide()

  # private

  _attachDocumentListeners: ->
    $(document).on 'click', '[data-modal-id]', @showTriggeredModal
    $(document).on 'click', '[data-modal-close]', @hideModalLayer
