window.INTERFACES ?= {}

INTERFACES.dataAPI =
  init: ->
    @_attachDocumentListeners()

  showTriggeredModal: ->
    _id = $(@).data 'modal-id'

    modal = new INTERFACES.ModalIdView(_id)
    modal.show()

  createAndShowUrlModal: ->
    _url = $(@).data 'modal-url'
    _req = $.get(_url)

    _req.done (res) ->
      modal = new INTERFACES.ModalUrlView(res)
      modal.show()

  hideModalLayer: ->
    INTERFACES.modalLayer.hide()

  # private

  _attachDocumentListeners: ->
    $(document).on 'click', '[data-modal-id]',    @showTriggeredModal
    $(document).on 'click', '[data-modal-url]',   @createAndShowUrlModal
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
        modal = new INTERFACES.ModalIdView(modalSelector)
        modal.show()
