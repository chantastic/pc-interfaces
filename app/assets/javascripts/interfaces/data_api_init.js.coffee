pageEvent =
  if Turbolinks?.supported
    if Turbolinks?.controller
    then "turbolinks:load"    # Turbolinks 5
    else "page:change"        # Turbolinks classic
  else "ready"

$(document).on pageEvent, ->
  if not INTERFACES
    console.warn """
                 PCO Interfaces Warning:
                   No INTERFACES modulse have been loaded.
                   Be sure to place any INTERFACES initializers below your INTERFACES module definitions.
                 """

  if not INTERFACES?.dataAPI
    console.warn """
                 PCO Interfaces Warning:
                   The INTERFACES.dataAPI module has not been loaded.
                   Be sure to include INTERFACES.dataAPI
                 """

  if not INTERFACES?.hashAPI
    console.warn """
                 PCO Interfaces Warning:
                   The INTERFACES.hashAPI module has not been loaded.
                   Be sure to include INTERFACES.dataAPI
                 """

  INTERFACES.dataAPI.init()
  INTERFACES.hashAPI.init()
