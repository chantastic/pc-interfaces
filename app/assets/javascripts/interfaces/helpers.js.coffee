window.INTERFACES ?= {}

INTERFACES.helpers =
  form:
    focusFirstInput: (scope = 'body') ->
      $(scope)
        .find(':input:enabled:visible:not([type=date]):first')
        .focus()

