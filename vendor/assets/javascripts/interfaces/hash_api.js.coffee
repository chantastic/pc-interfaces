# WARNING:
#
# THIS MIGHT NOT BE A GOOD IDEA.
# HOLD LOOSELY TO THIS API
#
# UPDATE: Adding Tab support left this with 2 pretty disperaate APIs. Tabs is
# the one to copy moving forward. Modal will eventually be pulled out or
# changed.
window.INTERFACES ?= {}

INTERFACES.hashAPI =
  init: ->
    @activateHashContent()

  activateHashContent: ->
    if @_hashIsTab()
      return @_showTab()

    if @_hashIsModal()
      return @_showModal()

  _showModal: ->
    new INTERFACES.ModalIdView(@_getModalHashSelector()).show()

  _hashIsModal: ->
    $('#' + @_getModalHashSelector()).length

  _hashIsTab: ->
    @_getHashValue().match /^tab\=/

  _getHashValue: ->
    window.location.hash.slice(1)

  _getTabId: ->
    @_getHashValue().split('=')[1]

  _showTab: ->
    new INTERFACES.Tab(@_getTabId()).open()

  _getModalHashSelector: ->
    return if not @_getHashValue()
    @_getHashValue() + '.modal'
