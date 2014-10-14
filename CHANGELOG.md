INTERFACES CHANGELOG
--------------------

* [FEATURE] Add TabList primitive, includes:
  + .tab-list
  + .tab-list-item
  + .tab-content
  + .tab-content-group
  + [data-tab-content-id]
* [CHANGE] Add padding-top to .alert <ul>
* [BUGFIX] Gemfile: lock sprockets to '< 2.12', lock compass-rails to '< 2'
* [BUGFIX] [alerts, badges, forms, lists, panes] remove syntax errors and arbitrary @extends
* [UPDATE] Change ruby-version to 2.1.2
* [BUGFIX] Modals triggered with data-modal-id work again
* [BUGFIX] Fix `image-2x` mixin. Use `image-url` to digest 2x icons

### 0.0.4 (September 17, 2014)

* [BUGFIX] Helpdesk: Support turbolinks by putting listener on the document
* [BUGFIX] App Switcher: Use `page:change` event to make it Turbolinks-friendly
* [FEATURE] Modal: short-circuit modal creation when `data-modal-url` is empty
* [BUGFIX] Ability to click form elements in a modal. Event listeners for closing modals via click on `modal-layer` no longer stop the event bubble.
* [FEATURE] Add icon for registrations
* [BUGFIX] fix for people logo, resize in navbar
* [BUGFIX] Add width in mobile view to prevent icon-cropping
* [FEATURE] add attendee, admin, and person icons
* [FEATURE] add check-disc and notice-disc icons. clean up styleguide
* [BUGFIX] Fix for app switcher close button not showing in Firefox
* [BUGFIX] fix font weight for code samples (Firefox was rendering poorly)
* [BUGFIX] remove padding from top/bottom of dropdown__menu
* [BUGFIX] add border-radius to first and last-children
* [BUGFIX] clean up old commented CSS

* [BUGFIX] add `tab--full` padding
* [BUGFIX] resolve 'fires twice' bug for modal close events
* [BUGFIX] add spinner gif to precompile list

### 0.0.3 (June 24, 2014)

* [BUGFIX] Fix mobile and tablet breakpoint values. Use px rather than ems (ems split pixels in some cases)
* [DEPRECATION] Single `.select2` class options. Apps should update to multi-selector BEM-style
* [FEATURE] add `.list` style-primitive, for more appropriate cross-device lists.
* [DOC] update form docs for checkboxes
* [FEATURE] add checkbox module
* [BUXFIX] add 'select' prefix to '.select2' selector in `INTERFACES.formInit()`
* [BUGFIX] fix asset:precompile issue with comments in modals.css
* [FEATURE] add alert variant `alert--small`.
* [DOC] update documentation for alerts, adding `alert--small` variant.
* [FEATURE] add badge variant `badge--small`.
* [FEATURE] change badge variant `badge--mini` to `badge--tiny` to match button convention.
* [BUGFIX] `-staging.planningcenteronline.com` added back into App-Switcher
* [BREAKING FIX] Select2 is no longer targets *all* `select` elements.  Use the `.select2` class to Select2-ize a select.
* [BUGFIX] Gemlock select2-rails to pre-3.5.2 version [the bug](https://github.com/ivaynberg/select2/issues/2412)

### 0.0.2 (June 9, 2014)

* First shared release between Accounts and Check-ins

