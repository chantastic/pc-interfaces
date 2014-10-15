window.INTERFACES ?= {}

class INTERFACES.TabContent
  constructor: (node = null) ->
    if !node
      return

    if !$(node).length
      console.warn "no element with #{id} in this DOM"
      return

    if !$(node).hasClass('tab-content')
      console.warn "no tab with that id #{id}"
      return

    @node = $(node)
    @tabContentGroup = @node.closest('.tab-content-group')
    @tabContentNodes = @tabContentGroup.find('.tab-content')

  activate: =>
    @tabContentNodes.removeClass('is-active')
    @node.addClass('is-active')
