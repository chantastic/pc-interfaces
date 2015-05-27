window.INTERFACES ?= {}
window.INTERFACES.errors ?= {}

class INTERFACES.ModalView
  constructor: (@content = '') ->
    @_catchAndLogContentErrors()

  show: =>
    INTERFACES.modalLayer.emptyAndPushModal @content
    @_publishModalLoad()

  _catchAndLogContentErrors: =>
    $content = $(@content)

    if $content.length > 1
      console.error(INTERFACES.errors.modal.leakyRoot)

  # It is less good that this event is called `modal:load`
  # now that it is triggered on all modals. What shold be?
  _publishModalLoad: =>
    $(document).trigger 'modal:load'

class INTERFACES.ModalPushView extends INTERFACES.ModalView
  show: =>
    INTERFACES.modalLayer.pushAndEmptyModal @content
    @_publishModalLoad()

class INTERFACES.ModalIdView extends INTERFACES.ModalView
  constructor: (@id) ->
    content = $('#' + @id).clone()
    super(content)

class INTERFACES.ModalUrlView extends INTERFACES.ModalView

INTERFACES.errors.modal =
  leakyRoot: """

             INTERFACES:ModalView
             ====================
             Your modal template has multiple root elements.
             Be sure to nest your entire template within a single element:

             <!-- bad -->
             <div class="modal">
               <p> some of your template </p>
             </div>
             <div>
               <p> more of your template </p>
             </div>


             <!-- good -->
             <div class="modal">
               <p> all of your template </p>
             </div>

             For more details: '/interfaces/modals#expectations'

             """
