# DO NOT USE THIS.
# IT IS PROTOTYPE LEVEL CODE AND SHOULD NOT BE USE IN PRODUCTION.
# IT WILL ALSO BE DRAMATIALLY CHANGED AT SOME POINT IN THE NEAR FUTURE.
window.INTERFACES ?= {}

class INTERFACES.Dropdown
  constructor: (triggerNode) ->
    @node = $(triggerNode).closest('.dropdown')

  toggle: =>
    @node.toggleClass('is-open')
