# Interfaces

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

### 3.0.0-pre

* [BREAKING CHANGE] remove `modal` helper
* [BREAKING CHANGE] remove `modal_trigger` helper
* [BREAKING CHANGE] remove `modal_footer` helper
* [BREAKING CHANGE] remove `interfaces` helper
* [BREAKING CHANGE] remove `interfaces_wrap` helper
* [BREAKING CHANGE] remove `interfaces_header` helper
* [BREAKING CHANGE] remove `interfaces_head` helper
* [BREAKING CHANGE] remove `interfaces_content` helper
* [BREAKING CHANGE] remove `interfaces_main` helper
* [BREAKING CHANGE] remove `square_avatar` helper
* [BREAKING CHANGE] remove `interfaces_avatar` helper
* [BREAKING CHANGE] remove `interfaces_helpdesk` helper
  * replace with use of `interfaces/_helpdesk` directly
* [BREAKING CHANGE] remove `interfaces_js_environment` helper
  * replace with use of `interfaces/_js_env` directly
* [BREAKING CHANGE] remove `NullPerson` helper
* [BREAKING CHANGE] remove `NullOrganization` helper
* [BREAKING CHANGE] remove `window.interfacesPerson`
* [BREAKING CHANGE] remove `window.interfacesOrganization`

* [BREAKING CHANGE] remove utility classes

  * `hide`
  * `clear`
  * `right`
  * `left`
  * `instructional-caption`
  * `text-left`
  * `text-center`
  * `text-justify`
  * `text-right`
  * `clfx`
  * `clearfix`
  * `dib`
  * `m0a`
  * `mb0`
  * `mr0`
  * `ml0`
  * `mt0`
  * `pb0`
  * `truncate`
  * `mar-btm-baseline`
  * `unstyled`
  * `pointer`

* [BREAKING CHANGE] remove `window._` (lodash)

  * bundle required lodash functions into your project

* [BREAKING CHANGE] remove `window.interfacesURLForEnv`

  * use `@planningcenter/url`

* [BREAKING CHANGE] remove `window.docCookies`

  * use [MDN's Simple cooke framework](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework) or `localStorage` as `@planningcenter/topbar` does now

* [BREAKING CHANGE] remove `device.js`

  * package this into your app where needed: https://github.com/matthewhudson/current-device

* [BREAKING CHANGE] remove `modernizer-custom-touch-only`

  * bundle required lodash functions into your project

* [BREAKING CHANGE] remove `react-rails` from gemspec
* [BREAKING CHANGE] remove `pco-url` from gemspec
* [BREAKING CHANGE] remove `autoprefix-rails` from gemspec
