window.INTERFACES ?= {}

INTERFACES.dataAPI =
  init: ->
    if INTERFACES.dataAPI.isInitialized
      return

    @_attachDocumentListeners()
    @_attachDocumentActionHandlers()
    @_attachDocumentActionTriggers()

    INTERFACES.dataAPI.isInitialized = true

  showTriggeredModal: ->
    _id = @.getAttribute('data-modal-id')

    modal = new INTERFACES.ModalIdView(_id)
    modal.show()

  createAndShowUrlModal: ->
    _url = @.getAttribute('data-modal-url')

    return if not _url

    _req = $.get(_url)

    modal = new INTERFACES.ModalView().show()

    _req.fail (err) ->
      modal.hide()
      $(document).trigger('modal:error', [err])

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

  handleAccountInfoToggle: ->
    new INTERFACES.AccountInfo().toggleMenu()
    return false

  handleAppListHide: ->
    new INTERFACES.AppSwitcher().hideAppList()
    return false

  handleAppListShow: ->
    new INTERFACES.AppSwitcher().showAppList()
    return false

  handleAppListToggle: ->
    new INTERFACES.AppSwitcher().toggleAppList()

  handleInstructionToggle: ({target: { dataset: { instructionId }}}) ->
    instructionNode = document.getElementById(instructionId)

    if !instructionNode.style.maxHeight
      instructionNode.style.maxHeight = instructionNode.scrollHeight + "px"
    else
      instructionNode.style.maxHeight = ""

  handleTopBarToggle: ->
    new INTERFACES.TopBar().toggleMenu()
    return false

  # DANGER: THIS IS PROTOTYPE-LEVEL CODE. DO NOT USE THIS IN PRODUCTION.
  # IT WILL BE ROMOVED WITH LITTLE WARNING
  toggleDropdown: ({target}) ->
    new INTERFACES.Dropdown(target).toggle()

  # private

  _attachDocumentListeners: ->
    $(document)
      .on('click', '[data-modal-id]',               @showTriggeredModal)
      .on('click', '[data-modal-url]',              @createAndShowUrlModal)
      .on('click', '[data-modal-close]',            @hideModalLayer)
      .on('click', '[data-app-list="show"]',        @handleAppListShow)
      .on('click', '[data-app-list="hide"]',        @handleAppListHide)
      .on('click', '[data-app-list="toggle"]',      @handleAppListToggle)
      .on('click', '[data-top-bar="toggle"]',       @handleTopBarToggle)
      .on('click', '[data-account-info="toggle"]',  @handleAccountInfoToggle)
      .on('click', '[data-account-info="toggle"]',  @handleAccountInfoToggle)
      .on('click', '[data-instruction-id]',         @handleInstructionToggle)

    # DANGER: THIS IS PROTOTYPE-LEVEL CODE. DO NOT USE THIS IN PRODUCTION.
    # IT WILL BE ROMOVED WITH LITTLE WARNING
    $(document).on('click', '[data-dropdown-toggle]', @toggleDropdown)

  _attachDocumentActionHandlers: ->
    $(document).on('tab:change', @handleTabChange)

  _attachDocumentActionTriggers: ->
    $(document).on('click', '[data-tab-content-id]', @triggerTabChange)
