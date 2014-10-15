window.INTERFACES ?= {}

class INTERFACES.TabListItem
  constructor: (node = null) ->
    if !node
      return

    @node         = $(node)
    @tabList      = @node.closest('.tab-list')
    @tabListItems = @tabList.find('.tab-list-item')

  activate: =>
    @tabListItems.removeClass('is-active')
    @node.addClass('is-active')
