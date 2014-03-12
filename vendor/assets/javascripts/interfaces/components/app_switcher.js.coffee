window.PCO ?= class PCO

class PCO.AppSwitcher
  constructor: ->
    @node = $(@options.nodeSelector)
    @_addEventListeners()

  options:
    nodeSelector: '.app-switcher-wrap'
    activeClass: 'alt-state'
    showTriggerSelector: '.toggle-btn'
    hideTriggerSelector: '.menu-wrap'
    mobileToggleSelector: '#logo.bookmark'

  showAppList: (e) =>
    @node.addClass @options.activeClass

  hideAppList: (e) =>
    @node.removeClass @options.activeClass

  toggleAppList: (e) =>
    @node.toggleClass @options.activeClass

  # private

  _addEventListeners: ->
    @node.on 'click', @options.showTriggerSelector, @showAppList
    @node.on 'click', @options.hideTriggerSelector, @hideAppList
    @node.on 'click', @options.mobileToggleSelector, @toggleAppList


$(document).on 'ready page:loaded', ->
  appSwitcher = new PCO.AppSwitcher