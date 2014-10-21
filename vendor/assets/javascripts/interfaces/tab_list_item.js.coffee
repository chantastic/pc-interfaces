window.INTERFACES ?= {}

class INTERFACES.TabListItem
  constructor: (node = null) ->
    if !node
      return

    @node = $(node)

  open: =>
    @closeAll()
    @node.addClass('is-open')
    @

  closeAll: =>
    @_getTabListItems().removeClass('is-open')

  # private

  _getTabListItems: =>
    # .sibling() is not used to preserve markup-independence
    @node.closest('.tab-list').find('.tab-list-item')
