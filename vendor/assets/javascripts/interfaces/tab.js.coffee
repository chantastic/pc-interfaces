window.INTERFACES ?= {}

class INTERFACES.Tab
  constructor: (@id = null) ->
    return if not @id

  activate: =>
    new INTERFACES.TabListItem(@_getTabListItem()).activate()
    new INTERFACES.TabContent(@_getTabContent()).activate()
    @_updateURL()
    @

  # private

  _getTabListItem: =>
    document.querySelector("[data-tab-content-id=#{@id}]")

  _getTabContent: =>
    document.getElementById(@id)

  _updateURL: =>
    window.location.hash = "tab=#{@id}"
