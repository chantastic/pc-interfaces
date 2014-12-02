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
    @_publishModalHide()

  hideModals: ->
    $('.modal-layer .modal').hide()

  showModals: ->
    $('.modal-layer .modal').show()

  emptyAndPushModal: (modal) ->
    @show()

    $('.modal-layer').empty().append(modal)

    @_focusFirstInput()

  # use for flickr-free transitions from modal to modal
  pushAndEmptyModal: (modal) ->
    @show()

    $('.modal-layer').append(modal)

    # IE9+ selector warning
    $('.modal:not(:last-child)').remove()

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
    $(document).on 'keyup', @_dispatchKeyupActions
    $(document).on 'click', '.modal-layer', @_hideModalOnOutsideClick

  _removeHideListeners: ->
    $(document).off 'keyup', @_dispatchKeyupActions
    $(document).off 'click', '.modal-layer', @_hideModalOnOutsideClick

  _hideModalOnEscape: (e) ->
    escapedFromInput = 'INPUT' is e.target.nodeName

    if escapedFromInput
      INTERFACES.modalLayer._blurNode(e.target)
    else
      INTERFACES.modalLayer.hide()

    false

  _hideModalOnOutsideClick: (e) ->
    eventFromModalLayer = $(e.target).hasClass "modal-layer"

    if eventFromModalLayer
      INTERFACES.modalLayer.hide()

  _dispatchKeyupActions: (e) ->
    escape = e.keyCode is 27

    INTERFACES.modalLayer._hideModalOnEscape(e) if escape

    false

  _focusFirstInput: ->
    $('.modal-layer')
      .find(':input:enabled:visible:first')
      .not('.date')
      .first()
      .focus()

  _blurNode: (target) ->
    $(target).blur()

  _publishModalHide: ->
    $(document).trigger("modal:hide")
