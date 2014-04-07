window.INTERFACES ?= {}

INTERFACES.modalLayer =
  show: ->
    @_domCreate()
    @_domShow()
    @_setupHideListeners()
    @_focusFirstInput()

  hide: ->
    @_domHide()
    @_removeHideListeners()

  hideModals: ->
    $('.modal').hide()

  showModals: ->
    $('.modal').show()

  emptyAndPushModal: (modal) ->
    @show()

    $('.modal-layer')
      .empty()
      .append(modal)

  # private

  _domCreate: ->
    noModalLayerNode     = not $('.modal-layer').length
    createModalLayerNode = -> $('body').append $('<div class="modal-layer">')

    createModalLayerNode() if noModalLayerNode

  _domShow: ->
    $('body')
      .addClass('modal--open')
      .find('.modal-layer')
      .scrollTop(0)

  _domHide: ->
    $('body').removeClass('modal--open')

  _setupHideListeners: ->
    $(document).on 'keyup', @_hideModalOnEscape
    $(document).on 'click', '.modal-layer', @_hideModalOnOutsideClick

  _removeHideListeners: ->
    $(document).off 'keyup', @_hideModalOnEscape
    $(document).off 'click', '.modal-layer', @_hideModalOnOutsideClick

  _hideModalOnEscape: (e) ->
    eventKeyIsEscape         = e.keyCode is 27
    eventIsNotFromInputField = e.target.nodeName isnt 'INPUT'

    INTERFACES.modalLayer.hide() if eventKeyIsEscape and eventIsNotFromInputField

  _hideModalOnOutsideClick: (e) ->
    eventFromModalLayer = $(e.target).find('.modal').length

    INTERFACES.modalLayer.hide() if eventFromModalLayer

  _focusFirstInput: ->
    $('.modal-layer')
      .find(':input:enabled:visible:first')
      .not('.date')
      .first()
      .focus()
