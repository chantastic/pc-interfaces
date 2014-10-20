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

  activate: =>
    @deactivateAll()
    @node.addClass('is-active')
    @

  deactivateAll: =>
    @_getTabContentNodes().removeClass('is-active')

  # private

  _getTabContentNodes: =>
    # .sibling() is not used to preserve markup-independence
    @node.closest('.tab-content-group').find('.tab-content')
