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

  showAppList: =>
    @node.addClass @options.activeClass

  hideAppList: =>
    @node.removeClass @options.activeClass

  # private

  _addEventListeners: ->
    @node.on 'click', @options.showTriggerSelector, @showAppList
    @node.on 'click', @options.hideTriggerSelector, @hideAppList


$(document).on 'ready page:loaded', ->
  appSwitcher = new PCO.AppSwitcher
