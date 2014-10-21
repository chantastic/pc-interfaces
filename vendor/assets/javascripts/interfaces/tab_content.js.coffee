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

  open: =>
    @closeAll()
    @node.addClass('is-open')
    @

  closeAll: =>
    @_getTabContentNodes().removeClass('is-open')

  # private

  _getTabContentNodes: =>
    # .sibling() is not used to preserve markup-independence
    @node.closest('.tab-content-group').find('.tab-content')
