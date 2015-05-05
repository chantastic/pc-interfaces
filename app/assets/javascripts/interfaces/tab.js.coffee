window.INTERFACES ?= {}

class INTERFACES.Tab
  constructor: (@id = null) ->
    return if not @id

  open: =>
    new INTERFACES.TabList(@id).unexpand()
    new INTERFACES.TabListItem(@_getTabListItem()).open()
    new INTERFACES.TabContent(@_getTabContent()).open()
    @_updateURL()
    @

  # private

  _getTabListItem: =>
    document.querySelector("[data-tab-content-id=#{@id}]")

  _getTabContent: =>
    document.getElementById(@id)

  _updateURL: =>
    if history?.replaceState
      history.replaceState({}, '', "#tab=#{@id}")
    else
      location.hash = "tab=#{@id}"
