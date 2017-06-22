## About

Interfaces is a customizable css framework for Planning Center Online apps.

## New here?

Read [planningcenter/frontend-guide](https://github.com/planningcenter/frontend-guide). It's a high-level overview of frontend libraries used across PCO apps.

## The styleguide

Visit [Interfaces Docs](http://interfaces-docs.herokuapp.com)

## Development

This is a conventional Rails Engine and can be worked on as such:
```bash
$ cd ~/Code
$ git clone git@github.com:ministrycentered/interfaces.git
$ cd interfaces/test/dummy
$ bundle
$ bundle exec rails s
```

Visit `http://localhost:3000` in a browser.

## Features and PRs

Interfaces no longer uses [git-flow](https://github.com/nvie/gitflow). All features should be written against `master` and PR'd into `master`. Hit me up if you need to cut a version for use in production.

## Installation and usage

Installation were removed. Apps have been setup at this point. This document gets more out of date.

### Including helpers

Interfaces has a number of helpers that you will need to include manually in `application_controller`. Do so like so:

```
class ApplicationController < BaseController
  helper Interfaces::Engine.helpers

  # ... other controller stuff
end
```

Hit me (@chantastic) up if you're setting up a new project.

## CHANGELOG

### 1.3.0
* [fix] add `coffee-rails` dependency to gemspec
* [BREAKING CHANGE] Remove IE hacks from `vendor/select.css`.

### 1.2.0

* [FIX] add Turbolinks 5 opt-out on logout
* [UPDATE] change "Logout" to "Log out"

### 1.1.0

* [FIX] Add PropTypes global for support of React v15.5

### 1.0.5

* [FIX] Fix breaking global dependency on missing icon
  - this caused the ConnectedPeople menu no to render in mobile.
* [CHORE] Use prettier now that it's in dependencies [React, Babel, etc.]

### 1.0.4

* [FIX] AppSwitcher max-width error for IE11

### 1.0.3

* [FIX] AppSwitcher width error IE11

### 1.0.2

* [FIX] fix transparent non-hover state in `dropdown-menu-item`
* [FIX] Fix `CurrentPersonListItemSettingsLink`
  - Fix Services switch case in `CurrentPersonListItemSettingsLink`
  - CogIcon and hover styles in `CurrentPersonListItemSettingsLink`

### 1.0.1

* [FIX] add missing `ChainBrokenIcon` to `ConnectedPersonMenu` component
* [FIX] change app-icon switch from "services" to "planning-center"

### 1.0.0

LOL.

### 0.14.0

* [BREAKING CHANGE] remove `*` and `:` special characters from filenames for Resources compat.
* [BREAKING CHANGE] remove `class/account-switcher-organization-item.css`
* [BREAKING CHANGE] update MobileTopbar menu selectors
  - example route:
    ```html
    <a class="topbar_route is-active" href="/interfaces">
      Any other stuff
      <span class="topbar_route_text">CSS</span>
    </a>
    ```
* [BREAKING CHANGE] remove `InterfacesIcons` dependency
  - inline all SVGs icon components
* [BREAKING CHANGE] interfaces-icons from css files
  - removed file `class/modal--person-details*has-icon-right*icon*ii-x.css`
  - removed file `class/modal--person-details*has-icon-right*icon*ii-x.theme.scss`
  - ii- classes only `class/account-switcher-organization-item.css`
  - ii- classes only `legacy/top_bar.sass`
  - ii- classes only `class/btn-group-vertical.css`
* [BREAKING CHANGE] remove `_interfaces` partial.
* [BREAKING CHANGE] remove `InterfacesIcon` component.
* [FIX] add "interfaces/class/modal--open*modal-layer*modal" to "interfaces/interfaces" manifest
  - NOTE: add this to your manifest, if you have a localized version of the main "interfaces" manifest.
* [FIX] remove ".css" suffix from some sass imports

### 0.13.0

This is a transitionary branch.
It assumes (now) that the icons being used in the topbar have the class 'icon'.
This was the simplest way to solve my problem in People.
I'll readdress it as other apps upgrade to this point.

* [BREAKING CHANGE] update Topbar for InterfacesIcons
  * Add `.bookmark-svg` style to override `.symbol`.
    + "class/bookmark-svg" needs to be added to app-side manifests.
  * Rewrite route-name logic in `MobileTopbar::routes`. (only proven to work for People)
  * Remove "planning center" `AppiListItem`.

### 0.12.1

* [FIX] removes "class/pane" from manifest, which does not exist.

### 0.12.0

* [REFACTOR] move monolithic "modules" into "one-file-per-class".
  * No opinions were inserted into this change.
  * If you use the public API of `interfaces/interfaces`, you shouldn't be effected.
  * If you dive into Interfaces internals, you're hosed. Sorry.
* [BREAKING CHANGE] remove `=grid` mixin. it didn't look like it was being used in apps
* [BREAKING CHANGE] clearfix modernized
  + `.clearfix` removed in favor of modern `.cf`, breaking support for IE6/7
    - migrate: places where `clearfix` was used will need to add `position: relative` for compatability.
  + `=clearfix` removed in favor of modern `=cf`
    - this clearfix used `position: relative`, which is non-standard for clearfixes.
    - migrate: these will blow up. at every callsite, you will need to add `position: relative` to your class.
* [BREAKING CHANGE] removed `.row-gutter` and `.column-gutter` minions classes
* [BREAKING CHANGE] removed `.-text-center` class
* [BREAKING CHANGE] `stylesheet/interfaces/modules` -> `stylesheets/interfaces/presets`
  * migrating: if your apps uses the `modules` path, change it to `presets`

### 0.11.2 (August 30 2016)

* [FIX] Update autoprefixer-rails dependency to `~> 6.0`. This relaxes the version dependency, allowing dependent applications to use versions >= 6.4 which resolves a deprecation warning.

### 0.11.1 (June 7 2016)

* [FIX] MobileTopbar uses correct InterfacesIcon component for apps with abnormal `railsAppName` (Check-Ins, Resources, and Services)

### 0.11.0 (June 6 2016)

* [BREAKING CHANGE] Update autoprefixer-rails dependency to `~> 5.3.6`. This drops Rails 3 and Ruby 1.9 support and updates the Can I Use database that autoprefixer uses for vendor prefixes.
* [FIX] Add `interfaces_icons` as gemspec dependency
* [FIX] Remove extraneous `!importants` from inline-styles
* [BREAKING CHANGE] MobileTopbar uses InterfacesIcons React component icon for application button.
  + The Application React component InterfacesIcon must be loaded in the global namespace.
* [FEATURE] AppSwitcher urls direct to `accounts/apps/{app-name}`
* [BREAKING CHANGE] Helpers are no longer injected into tho host application.
```ruby
# upgrade path: add helpers manually to application_controller

class ApplicationController < BaseController
  helper Interfaces::Engine.helpers

  # ... other controller stuff
end
```
* [FEATURE] Add Groups icon to colored app-icons
* [FEATURE] Support Turbolinks 5 event names

### 0.10.0 (April 18 2016)

* [BREAKING CHANGE] Separate `.nav` & `.nav-tabs` from modals (this will only potentially break in apps that pick and choose parts of Interfaces to import)
  + Note: This only affects apps that use a custom interfaces manifest. This does not affect apps importing `interfaces/interfaces` If your app uses a custom manifest, simply add `interfaces/modules/nav-tabs`.
* [BUGFIX] update `no-touch` to `no-touchevents` (Modernizr 3)
* [BUGFIX] inline `checkbox` check mark now that interfaces-icon unicode characters are unstable
* [FEAT] add new minions
  + `cursor`
  + `border-radius`
  + `border-radius (direct children)`

### 0.9.0 (January 26 2016)

* [BREAKING CHANGE] Remove modernizr-rails gem for custom build in /vendor
  * v3.3 removes the `.no-touch` class in favor of `.no-touchevents`
* [BREAKING CHANGE] Remove browser polyfill libs
  + es5-shim
  + html5shiv
  + placeholder
  + console
+ [BUGFIX] add `interfaces_icons` to engine Gemfile to fix tests
+ [BUGFIX] move media-object into /vendor
* [BUGFIX] react_ujs order in dummy app
* [BUGFIX] Update `.flex-stack`
  + Make flex rules more verbose for children (thanks @jessejanderson)
  + Don't need to spread margin for flex(thanks @souporserious)
+ [FEAT] add tip.css to /vendor
* [DOCS]
  + move pages into better categories
  + add generative docs for button, alert, badge, and tip
  + add "deprecated" section for APIs being phased out.

### 0.8.3 (January 12 2016)

* [BUGFIX] add `cache: false` option to PCO API requests to circumvent Windows Edge caching issues

### 0.8.2 (January 8 2016)

* [BUGFIX] APP_NAME_TO_HELPDESK, change "account-center" to "accounts"

### 0.8.1 (January 7 2016)

* [BUGFIX] Remove user-badge_user-name media-queries. they broke firefox

### 0.8.0 (December 10 2015)

* [BREAKING] Update pages and layouts with new icons
* [BREAKING] remove `icons` page
* [BREAKING] remove Interfaces icons into separate project InterfacesIcons

### 0.7.1 (November 17 2015)

* [FIX] update variable path in item-sidebar-list

### 0.7.0 (October 21 2015)

* [CHORE] remove runtime dependencies in Dummy app
* [FEATURE] add `instruction` lib (aka: helper-shelves)
* [FEATURE] add `flex-stack` construct
* [FEATURE] add `view` construct for creating views
  + `view`
  + `view_body`
  + `view_content`
  + `item-sidebar-list`
* [FEATURE] add minions.css utilities for:
  + `align-items`
  + `align-self`
  + `background-color`
  + `background-color_lightness`
  + `border-color_lightness`
  + `border-width`
  + `color_lightness`
  + `display`
  + `flex`
  + `float`
  + `justify-content`
  + `margin`
  + `opacity`
  + `order`
  + `overflow`
  + `padding`
  + `position`
  + `text-align`
  + `visibility`
* [FEATURE] add "Settings" cog to Topbar
* [BUGFIX] remove conflicting media query values from the `+breakpoint` mixin.
  + change `lte_tablet-wide` max-width value so that it no longer conflicts with `bp_3`.
  + Note: the `max-width` of one media query should not be the same value as another media query's `min-width`.

* [STYLE] remove dark backdrop from app-badge
* [BUGFIX] fix app icon in engine dummy app

### pre 0.7.0 ( because I'm a failure and 6.0 is not a thing )

* [FEATURE] add [minions.css](https://github.com/chantastic/minions.css) library.
* [CHORE] Move body styles into `/legacy/body` file.
* [BUGFIX] Fix test/dummy app to work with react-rails component helpers
  + Remove `high_voltage` gem
  + Update `PagesController` to display existing pages without required high_voltage
  + Add `better_errors` gem (and related)
  + Add `id` to `NullOrganization`
  + Update bin-stubs
* [BUGFIX] MobileTopbar, return default `menu` where no `is-active` route is found
* [BUGFIX] remove `leakyRoot` error reporting in support of Services
* [BUGFIX] add ENV var for presentation of Interfaces routson Heroku
* [FEATURE] add eslint for code quality and lint existing JS files
* [BUGFIX] move railsEnv assignment to head from footer

### 0.6.0.beta.9 (June 23 2015)

* [BUGFIX] add circle.yml for CircleCI builds, with appropriate ruby version

### 0.6.0.beta.8 (June 18 2015)

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
