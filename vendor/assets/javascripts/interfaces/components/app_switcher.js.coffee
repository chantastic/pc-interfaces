window.INTERFACES ?= {}

# TODO: update name PCO -> INTERFACES
class INTERFACES.AppSwitcher
  constructor: ->
    @node = $('.app-switcher-wrap')

  options:
    activeClass:  'alt-state'

  hideAppList: =>
    @node.removeClass @options.activeClass

  showAppList: =>
    @node.addClass @options.activeClass

  toggleAppList: =>
    @node.toggleClass @options.activeClass
