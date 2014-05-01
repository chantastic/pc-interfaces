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

INTERFACES.hashAPI =
  init: ->
    @_showModal()

  # THIS MIGHT NOT BE A GOOD IDEA.
  # HOLD LOOSELY TO THIS API
  _showModal: ->
    $ ->
      modalId       = window.location.hash.slice(1)
      modalSelector = modalId + '.modal' if modalId
      pageHasModal  = do -> $('#' + modalSelector).length

      if pageHasModal
        modal = new INTERFACES.ModalView(modalSelector)
        modal.show()
