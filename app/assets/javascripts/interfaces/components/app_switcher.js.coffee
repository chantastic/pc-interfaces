window.INTERFACES ?= {}

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

# Why are there two classes is this file?
# Excellent question. This patches existing functionality for Turbolinks apps.
# The topbar will soon be completely re-written and it seems non-sensicle to
# update every app with a temporary requirement.

class INTERFACES.TopBar
  constructor: ->
    @node = $('.top-bar')

  toggleMenu: =>
    @node.toggleClass('active-state')

class INTERFACES.AccountInfo
  constructor: ->
    @node = $('.account-info')

  toggleMenu: =>
    @node.toggleClass('active-state')
