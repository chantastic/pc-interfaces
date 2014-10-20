window.INTERFACES ?= {}

INTERFACES.dataAPI =
  init: ->
    @_attachDocumentListeners()
    @_attachDocumentActionHandlers()
    @_attachDocumentActionTriggers()

  showTriggeredModal: ->
    _id = $(@).data 'modal-id'

    modal = new INTERFACES.ModalIdView(_id)
    modal.show()

  createAndShowUrlModal: ->
    _url = $(@).data 'modal-url'

    return if not _url

    _req = $.get(_url)

    modal = new INTERFACES.ModalView().show()

    _req.fail (err) ->
      modal.hide()

    _req.done (res) ->
      modal = new INTERFACES.ModalUrlView(res)
      modal.show()

  hideModalLayer: ->
    INTERFACES.modalLayer.hide()

  triggerTabChange: ->
    $(document).trigger('tab:change', [@])

  handleTabChange: (_, node) ->
    return if not node

    tabContentId = node.getAttribute('data-tab-content-id')
    new INTERFACES.Tab(tabContentId).activate()

  # private

  _attachDocumentListeners: ->
    $(document)
      .on('click', '[data-modal-id]',    @showTriggeredModal)
      .on('click', '[data-modal-url]',   @createAndShowUrlModal)
      .on('click', '[data-modal-close]', @hideModalLayer)

  _attachDocumentActionHandlers: ->
    $(document).on('tab:change', @handleTabChange)

  _attachDocumentActionTriggers: ->
    $(document).on('click', '[data-tab-content-id]', @triggerTabChange)
