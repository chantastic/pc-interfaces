## Intro

Interfaces is a white-label css framework for Planning Center Online applications.
The goal is to abstract styles and components, used across all PCO apps, into an
easily configurable library.

## Installation

Interfaces is a private gem, which is how it should be used in your app.

Include the gem in your Gemfile:

```ruby
gem 'interfaces', git: 'git@github.com:ministrycentered/interfaces.git'
```

If you're actively developing Interfaces, alongside your app, and you have a local
copy of Interfaces, you should use this instead:

```ruby
gem 'interfaces', path: '~/code/interfaces'
```

**If committed, this will do some nasty things.**  
In development, this allows you to see changes to Interfaces instantly without the commit, push,
re-bundle, powder restart rain-dance.

## Usage

Usage is pretty straight forward.  Once included in you Gemfile, simply add the
following lines to your corresponding manifest files:

```css
/*  application.css
 *= require interfaces/interfaces
```

```javascript
//  application.js
//= require interfaces/interfaces
```

This will make all of the out-of-the-box styles and interaction available in
your app.  Keep in mind that this is the firehose approach.  You're getting
everything.  If you'd like to keep lean, you can identify only the modules you
need and include those.  e.g. require interfaces/core/variables

If that's good enough, you're done!

But... that's probably not good enough.  Chances are, you're going to need to
customize a bit.  To start customizing Interfaces, keep reading...

### Overrides in your application

Interfaces is intended to built for extensibility.  You should be able to easily
customize Interfaces with the colors and styles of your app with a single
file.

Configuring everything is a little tenuous.  So, let's get
started.

#### Create a new sass file

To perform the magic we're about to perform, we need a new sass file.
Personally, I use the name of my app with a '-interfaces' suffix:

```$touch app/assets/stylesheets/my-special-flower-interfaces.css.sass```

In it, were going to add an import declaration to get Interfaces:

```sass
@import interfaces/interfaces
```

#### Add override values

Now you have Interfaces, but how do you customize it?  Well, we're going to
do something pretty strange.  We're going to add our Sass override variables
*ABOVE* Interfaces:

```sass
// overrides
$base-color: #725878

@import interfaces/interfaces
```

Oh snap!  Now things are purple — MUCH ROYAL!

[Look
here](https://github.com/ministrycentered/interfaces/blob/master/vendor/assets/stylesheets/interfaces/core/_variables.css.sass) for all the variables currently available.

### Completion

Now, as Bob the Builder&reg; would remind us, the third step is "COMPLETION."
Our code above isn't very good.  Let's give it a proper home:

```$touch app/assets/stylesheets/my-special-flower.css.sass```

I just name it after my my project.

Now update your manifest file

```sass
// overrides
@import my-special-flower
@import interfaces/interfaces
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
*= require my-special-flower-interfaces
** Remember, 'my-special-flower' is the name of our fictisious app
```

## DEVELOPMENT

Interfaces is built as a [Rails
Engine](http://edgeapi.rubyonrails.org/classes/Rails/Engine.html).  As an
Engine, it must be mounted onto another Application for development.

This Rails Engine has a sample application at `./test/dummy`.  The dummy app
behaves just a normal Rails app would.  However, it's not in the root of your
project file.  Because of that, there are a few extra steps you need to take
when developing for Interfaces.

#### Running Rails generators and Rake tasks

To run Rails generators and rake tasks, for the dummy rails app, you'll need to
run them from `./test/dummy`.  Running them from the Interfaces root directory
will result in an error.

#### Powder Link

You may still use Powder/Pow to link the dummy rails app.

```bash
# navigate to the dummy rails app
cd ./test/dummy

# link app with powder
powder link

# open the Pow url
# /styleguide is the route where the engine is mounted
open http://interfaces.pco.dev/styleguide
```

### Creating new pages

Interfaces uses [High Voltage](https://github.com/thoughtbot/high_voltage) *by Thouhtbot* so creating new pages is pretty
simple.  For normal usage, you shouldn't need to touch a route or controller.
Simply add a new `.html.slim` file into the `./app/views/interfaces` directory.
Once added, you can navigate to it by simply adding that filename to your url
path:

```
./app/views/interfaces/money-in-the-banana-stand.html.sass   # http://interfaces.pco.dev/money-in-the-banana-stand.html.sass

./app/views/interfaces/ive-made-a-huge-mistake.html.sass     # http://interfaces.pco.dev/ive-made-a-huge-mistake.html.sass
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
