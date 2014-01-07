## Installation

PCO-ui is a private gem, which is how it should be used in your app.

Include the gem in your Gemfile:

```ruby
gem 'pco-ui', git: 'git@github.com:ministrycentered/pco-ui.git'
```

If you're actively developing PCO-ui alongside another app, and have a local
copy of PCO-ui, you should do this instead:

```ruby
gem 'pco-ui', path: '~/code/pco-ui'
```

## Usage

Usage is pretty straight forward.  Once included in you Gemfile, simply add this
your `application.css` manifest:

```css
/*
 ...
 *= require pco-ui
 */
```

At this point, just include the whole thing.  There are wonderful horrors in
store for those that ignore his wording.

**PCO-ui is being actively developed.  So it is best to [checkout the
repo](https://github.com/ministrycentered/pco-ui) for more info.**


## CONVENTIONS

#### Variable naming

Sass Variable should be written as follows:

```sass
$property = value
$multi-word-property = value
```

You should use snake-case to name you sass variables, using `-` (dash) instead
of capitalization or `_` (underscore).

```sass
// bad
$buttonBorderWidth: 1px

// bad
$button_border_width: 1px

// good
$button-border-width: 1px
```
