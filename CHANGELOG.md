INTERFACES CHANGELOG
--------------------

* [BUGFIX] top bar: add markup and css around utility links

### 0.6.0.beta.7 (June 9 2015)

* [BUGFIX] help helpdesk to be honor environment

### 0.6.0.beta.5 (June 2 2015)

* [Fix] update app-icon styles to reflect addition of new giving icon

### 0.6.0.beta.4 (June 1 2015)

* [FIX] ConnectedPersonListItem now expects json-api v1 attributes
* [BREAKING CHANGE] update `interfaces_header` to not have assumptions about routes-nav.
  + applications are now required to bring their own opnion about the route-nav.
    - the new `topbar_routes-group` API may be used
    - applications may continue to use the same api by adding a `<ul>` wrapper to the call-site of `interfaces_header`

### 0.6.0.beta.3 (May 29 2015)

* [FEATURE] app switcher icon addition for Developer API
* [FEATURE] add ".topbar_route" for styling styling major-routes across devices
  * upgrade path:
    + in `interfaces_header` update links to links to conform to the new API
      - see new syntax in `app/views/layouts/interfaces/application.html.erb`

### 0.6.0.beta.2 (May 28 2015)

* [BREAKING CHANGE] app_icons path moved to /images/interfaces/icons
* [BREAKING CHANGE] change media queries from ems to hard  px values. Should only affect ~980 and ~1024 breakpoint changes

### 0.6.0.beta.1 (May 27 2015)

* [FEATURE] add AccountSwitcher with PCO-API backend
  + update `interfaces_header` with injection of Person and Organization
    - require current Person as `person`
    - require current Organization as `organization`
    - require a person's profile path as `person_profile_path`
* [DEPENDENCY] add react-rails
  + inject harmony config
* [BREAKING CHANGE] apps must supply Underscore/Lodash implementation
  + add lodash to Dummy app
  + to update simply include Underscore/Lodash, required before interfaces
* [BREAKING CHANGE] update hard-coded links from /styleguide/* -> /interfaces/*
* [FEATURE] add /engine/version route for `pco interfaces` CLI
  * Interfaces now constrains the routes based on environment.
  * Update apps to mount the engine without constraint.
  * All apps should now mount `/interfaces` instead of `/styleguide`
* [BUGFIX] remove all sub-pixel rem definitions: .55rem -> .6rem
* [BUGFIX] fix minor code errors in modals.sass
* [FEATURE] add autoprefixer-rails gem
* [BUGFIX] rename .css.sass files to .sass
* [BUGFIX] move interfaces assets from /vendor to /assets
* [BUGFIX] fix remaining 'border-bottom/top-radius' shorthand

### 0.5.1 (February 25 2015)

* [BUGFIX] add initialization flags to data and hash APIs to prevent re-initialization

### 0.5.0 (February 23 2015)

* [BUGFIX] add padding to right of selects for auto-width
* [BREAKING CHANGE] update `helpers.form.focusFirstInput` to target first non-date, not fail if first is date
  + You will now need to call this helper after `modal:load` in your application
* [CHORE] remove `INTERFACES.formInit()` calls
* [BREAKING CHANGE] remove `INTERFACES.modalLayer._focusFirstInput()`
  + automatic calling of this function is also removed from the modal APIs
  + transition by calling `INTERFACES.helpers.form.focusFirstInput('.modal-layer')` in modal initialization for identical functionality
* [FEATURE] Add `INTERFACES.helpers.form.focusFirstInput()`
* [DOC] update CONTRIBUTING.md to be more flexible
* [FEATURE] change app icons for app switcher
* [FEATURE] Add custom radio buttons
* [FEATURE] modal-path url hash api
* [CHORE] Move Helpdesk embed.js into Interfaces JS bundle

### 0.4.1 (February 12 2015)

* [CHORE] Remove support for Person#subscribed_apps
* [FEATURE] add barebones .hound.yml for dev style checking

### 0.4.0 (February 9 2015)

* [BUGFIX] Ensure that the current user's avatar in the navbar maintains it's aspect ratio
* [BUGFIX] Remove jQuery Mobile touch events to support new iOS 8 'slow-tap' heuristics
  + https://pco.slack.com/files/chantastic/F03C89CTT/What_to_do_about__tap_
  + discussion: https://pco.slack.com/archives/web-dev/p1421337260000181
* [BUGFIX] Use `::Person` in Engine helpers to fix ActiveSupport::Dependencies exception in Rails 4.2
* [BREAKING CHANGE] Update Docs, remove related Gems
  + Add gems `slim-rails`, `mustache`, `kramdown`, `htmlentities` if your application requires them
* [BREAKING CHANGE] Remove compass-rails gem and remove usage across application
  + Apps will require an update. Adding `compass-rails` to the application is not an option.
  + See [Transition guide for 0.3.0 -> 0.4.0](https://github.com/ministrycentered/interfaces/wiki/Transition:-0.3.0-to-0.4.0)
* [BUGFIX] Use `replaceState()` for tab changes if available.

### HOTFIX (January 20, 2015)

* [UPDATE] Add Registrations to Helpdesk list

### HOTFIX (January 18, 2015)

* [UPDATE] Use pco-url for Helpdesk

### HOTFIX (January 15, 2015)

* [BUGFIX] Lock `sass-rails` gem to `< 5` version

### HOTFIX (January 15, 2015)

* [BUGFIX] Change helpdesk url "//mct-helpdesk.herokuapp.com/embed.js" -> "//helpdesk.planningcenteronline.com/embed.js"

### HOTFIX (January 15, 2015)

* [BUGFIX] Change date 2014 -> 2015

### HOTFIX (January 12, 2015)

* [BUGFIX] fix breakpoint mixin value `bp_1` so that it doesn't conflict with `lte_palm`

### 0.3.0 (December 16, 2014)

* [BUGFIX] Remove `demo-scripts` from interfaces.js manifest
* [BREAKING CHANGE] add .select class and remove select2
  * Don't need select2?
    * Convert all '.select2' references to '.select'
    * Remove calls to `INTERFACES.formInit()`
  * Need select2?
    * Bundle [select2-rails](http://rubygems.org/gems/select2-rails) into your
      application.
    * Replace calls to `INTERFACES.formInit` with an application-level function.
      For reference, this is how Interfaces used to handle form initialization.
https://github.com/ministrycentered/interfaces/blob/f7540256d65b3e4d7f7bf94954ea1eb4be75a579/vendor/assets/javascripts/interfaces/select2_init.js.coffee
* [BUGFIX] Change padding values from em to rem, in `.tab-content`.

### 0.2.0 (December 10, 2014)

* [FEATURE] Apps with allow_pco_login as false do not get shown
* [BUGFIX] First input on ModalUrlViews now gets focused too
* [BUGFIX] add select2 to form stylesheet
* [BUGFIX] substitute .data wtih .getAttribute('data-') to sidestep caching
* [BUGFIX] Remove select2 sass file (in favor of gem)

### 0.1.0 (November 18, 2014)

* [FEATURE] Use Person#staff? for determining MCT people
* [BUGFIX] changed sub-pixel values in buttons. x.x5rem = half pixel value. No more.
* [BUGFIX] changed sub-pixel values in modals. x.x5rem = half pixel value. No more.
* [BUGFIX] add AppSwitcher triggers to mobile breakpoint
* [BUGFIX] Removed inline sass comments (they were causing probs)
* [Feature] add trash icon
* [CHANGE] config, add gem dependcies to test/dummy Gemfile
* [FEATURE] add 'modal:error' event when modal ajax request fails
* [CHANGE] change media queries to pixel values, rather than ems.
* [BREAKING BUGFIX] remove `position: relative` from major modal elements. Add new mixin for clearfix (`+cf`), without `position: relative`, to incrementally replace in our apps.
* [BREAKING CHANGE] new dropdown API. affects *ALL* dropdowns.
* [BREAKING CHANGE] pub-sub AppSwitcher events.
* [BREAKING CHANGE] PCO.AppSwitcher -> INTERFACES.AppSwitcher
* [BREAKING BUFGIX] bind `vclick` for all document-level click events.
  + check modals in desktop and mobile devices
  + check tab-list in desktop and mobile devices
* [BUGFIX] remove +highlighted-state mixin to make `utilities` dependency-free
* [BREAKING FEATURE] added .media object. this could affect applications with
  an existing .media class
* [BUGFIX] App Switcher: fix app switcher on first page load with Turbolinks
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
