window.INTERFACES ?= {}

INTERFACES.helpers =
  form:
    focusFirstInput: (scope = 'body') ->
      $(scope)
        .find(':input:enabled:visible:first')
        .not('.date')
        .first()
        .focus()

