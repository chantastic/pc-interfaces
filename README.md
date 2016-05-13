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
