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
      .first()
      .focus()



# class PCO.Modal
#   show: (modalId) ->
#     modalId ?= $(this).data 'modal-id'
# 
#     PCO.ModalLayer::show()
# 
#   hide: (modalId) ->
#     modalId ?= $(this).data 'modal-id'
# 
#     PCO.ModalLayer::hide()

# createModalsNode = ->
#   $('body')
#     .append('<div class="modals">')
#     .addClass('modals--open')

# removeModalsNode = ->
#   $('body')
#     .removeClass('modals--open')
#     .find('.modals')
#     .remove()

# showModal = ->
#   createModalsNode()

#   modalId = $(this).data('modal-id')

#   modal = $("##{modalId}").clone()

#   $('.modals').append(modal)

#   false

# hideModal = ->
#   removeModalsNode()
#   false

# $(document).on 'ready page:loaded', ->
#   $('[data-modal-id]').on 'click', PCO.Modal::show()
#   $(document).on 'click', '[data-modals-close]', hideModal

# $(document).on 'ready page:loaded', ->
  # modals = new PCO.Modals
