# Interfaces

## About

Interfaces is a customizable css framework for Planning Center apps.

## Unmaintained warning

Interfaces is largely unmaintained.  
It's still used to support legacy views in all apps.  
However, all new cross-team efforts are being poured into [planningcenter/design](https://github.com/planningcenter/design).

## Development

This is a Rails Engine and can be worked on as such:

```bash
$ git clone git@github.com:ministrycentered/interfaces.git ~/Code/interfaces
$ cd interfaces/test/dummy
$ bundle
$ bundle exec rails s
```

Visit `http://localhost:3000` in a browser.

### Including helpers

Interfaces has a number of helpers that you will need to include manually in `application_controller`.  
Do so like so:

```
class ApplicationController < BaseController
  helper Interfaces::Engine.helpers

  # ... other controller stuff
end
```

Hit me (@chantastic) up if you're setting up a new project.

## CHANGELOG

### 4.0.0

- [BREAKING CHANGE] remove `font-size: 62.5%` from `html` root
