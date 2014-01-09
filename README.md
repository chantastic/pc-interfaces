## Intro

PCO-ui is a white-label css framework for Planning Center Online applications.
The goal is to abstract styles and components, used across all PCO apps, into an
easily configurable library.

## Installation

PCO-ui is a private gem, which is how it should be used in your app.

Include the gem in your Gemfile:

```ruby
gem 'pco-ui', git: 'git@github.com:ministrycentered/pco-ui.git'
```

If you're actively developing PCO-ui, alongside your app, and have a local
copy of PCO-ui, you should use this instead:

```ruby
gem 'pco-ui', path: '~/code/pco-ui'
```

**If committed, this will do some nasty things.**  
In development, this allows you to see changes to PCO-ui instantly without the commit, push,
re-bundle, powder restart rain-dance.

## Usage

Usage is pretty straight forward.  Once included in you Gemfile, simply add this
your `application.css` manifest:

```css
*= require pco-ui
```

This will make all of the out-of-the-box styles available in your app.  If
that's good enough, you're done!

But... that's probably not all you need to do.  To start customizing pco-ui,
you'll need to do this:

### Overrides in your application

PCO-ui is intended to built for extensibility.  You should be able to easily
customize PCO-ui with the colors and styles of your app with a single
file.

Configuring everything is a little tenuous.  So, let's get
started.

#### Create a new sass file

To perform the magic we're about to perform, we need a new sass file.
Personally, I use the name of my app with a '-ui' suffix:

```$touch app/assets/stylesheets/my-special-flower-ui.css.sass```

In it, were going to add an import declaration to get pco-ui:

```sass
@import pco-ui
```

#### Add override values

Now you have pco-ui, but how do you customize it?  Well, we're going to
do something pretty strange.  We're going to add our Sass override variables
*ABOVE* pco-ui:

```sass
// overrides
$base-color: #725878

@import pco-ui
```

Oh snap!  Now things are purple — MUCH ROYAL!

[Look here](https://github.com/ministrycentered/pco-ui/blob/master/vendor/assets/stylesheets/core/_variables.css.sass) for all the variables currently available.

### Completion

Now, as Bob the Builder&reg; would remind us, the third step is "COMPLETION."
Our code above isn't very good.  Let's give it a proper home:

```$touch app/assets/stylesheets/my-special-flower.css.sass```

I just name it after my my project.

Now update your manifest file

```sass
// overrides
@import my-special-flower
@import pco-ui
```

Great job!  Bob would be proud!

#### Ummm, I'm having trouble...

This setup assumes that your App is using Sprockets and your `application.css`
has something like this:

```css
*= require_tree .
```

If not, you'll require your newly created stylesheet by adding this line:

```css
*= require my-special-flower-ui
** Remember, 'my-special-flower' is the name of our fictisious app
```

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
