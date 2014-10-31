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
      $(document).trigger('modal:error', [err])
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

    if __userClickedSelectedTab__ = $(node).hasClass('is-open')
      return new INTERFACES.TabList(tabContentId).toggle()

    new INTERFACES.Tab(tabContentId).open()

  handleAppListHide: ->
    new INTERFACES.AppSwitcher().hideAppList()

  handleAppListShow: ->
    new INTERFACES.AppSwitcher().showAppList()

  # DANGER: THIS IS PROTOTYPE-LEVEL CODE. DO NOT USE THIS IN PRODUCTION.
  # IT WILL BE ROMOVED WITH LITTLE WARNING
  toggleDropdown: ({target}) ->
    new INTERFACES.Dropdown(target).toggle()

  # private

  _attachDocumentListeners: ->
    $(document)
      .on('vclick', '[data-modal-id]',        @showTriggeredModal)
      .on('vclick', '[data-modal-url]',       @createAndShowUrlModal)
      .on('vclick', '[data-modal-close]',     @hideModalLayer)
      .on('vclick', '[data-app-list="show"]', @handleAppListShow)
      .on('vclick', '[data-app-list="hide"]', @handleAppListHide)

    # DANGER: THIS IS PROTOTYPE-LEVEL CODE. DO NOT USE THIS IN PRODUCTION.
    # IT WILL BE ROMOVED WITH LITTLE WARNING
    $(document).on('vclick', '[data-dropdown-toggle]', @toggleDropdown)

  _attachDocumentActionHandlers: ->
    $(document).on('tab:change', @handleTabChange)

  _attachDocumentActionTriggers: ->
    $(document).on('vclick', '[data-tab-content-id]', @triggerTabChange)
