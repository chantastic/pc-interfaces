window.INTERFACES ?= {}

class INTERFACES.TabList
  constructor: (childTabId = null) ->
    return if not childTabId

    @node = $("[data-tab-content-id=#{childTabId}]").closest('.tab-list')

  expand: =>
    @node.addClass('is-expanded')

  unexpand: =>
    @node.removeClass('is-expanded')

  toggle: =>
    @node.toggleClass('is-expanded')
