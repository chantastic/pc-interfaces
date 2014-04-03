window.PCO ?= {}

class PCO.ModalLayer
  show: ->
    $('body')
      .addClass('modal--open')
      .find('.modal-layer')
      .scrollTop(0)

    @_setupHideListeners()
    @_focusFirstInput()

  hide: ->
    $('body').removeClass('modal--open')

    @_removeHideListeners()

  hideModals: ->
    $('.modal').hide()

  showModals: ->
    $('.modal').show()

  # private

  _setupHideListeners: ->
    $(document).on 'keyup', @_hideModalOnEscape
    $(document).on 'click', '.modal-layer', @_hideModalOnOutsideClick

  _removeHideListeners: ->
    $(document).off 'keyup', @_hideModalOnEscape
    $(document).off 'click', '.modal-layer', @_hideModalOnOutsideClick

  _hideModalOnEscape: (e) ->
    eventKeyIsEscape         = e.keyCode is 27
    eventIsNotFromInputField = e.target.nodeName isnt 'INPUT'

    PCO.ModalLayer::hide() if eventKeyIsEscape and eventIsNotFromInputField

  _hideModalOnOutsideClick: (e) ->
    eventFromModalLayer = $(e.target).find('.modal').length

    PCO.ModalLayer::hide() if eventFromModalLayer

  _focusFirstInput: ->
    $('.modal-layer')
      .find(':input:enabled:visible:first')
      .not('.date')
      .first()
      .focus()
