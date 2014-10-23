window.INTERFACES ?= {}

# TODO: update name PCO -> INTERFACES
class INTERFACES.AppSwitcher
  constructor: ->
    @node = $('.app-switcher-wrap')

  options:
    activeClass:  'alt-state'

  showAppList: =>
    @node.addClass @options.activeClass

  hideAppList: =>
    @node.removeClass @options.activeClass

  toggleAppList: =>
    @node.toggleClass @options.activeClass
