window.INTERFACES ?= {}

class INTERFACES.TabListItem
  constructor: (node = null) ->
    if !node
      return

    @node = $(node)

  activate: =>
    @deactivateAll()
    @node.addClass('is-active')
    @

  deactivateAll: =>
    @_getTabListItems().removeClass('is-active')

  # private

  _getTabListItems: =>
    # .sibling() is not used to preserve markup-independence
    @node.closest('.tab-list').find('.tab-list-item')
