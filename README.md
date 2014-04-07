## Intro

Interfaces is a white-label css framework for Planning Center Online app. Here
you'll find all the common components you'll need to build the next great PCO
app!

## Installation

To start using Intterfaces in you app, include the gem in your Gemfile:

```ruby
gem 'interfaces', git: 'git@github.com:ministrycentered/interfaces.git'
```

Optionally, you may use a local path when developing Interfaces alongside your
app.

**Be careful not to deploy your app with the local gem path**

```ruby
gem 'interfaces', path: '~/code/interfaces'
```

## Usage

Using Interfaces can be quite straight forward.  There are a number of helpers
that get you

### Requiring Assets

Once included in you Gemfile, simply add the following lines to your corresponding manifest files:

```css
/*  application.css
 *= require interfaces/interfaces
```

```javascript
//  application.js
//= require interfaces/interfaces
```

This will provide you with out-of-the-box Interfaces styles, scripts, shims,
libraries, and components.

### For The More Conservative

Requiring everything is a nice way to get started quickly. But it's a pretty heavy operation.

Interfaces is designed to be used as minimally as you like.

You may include any single file stylesheet or script into your file like so:

```css
/*  application.css
 *= require interfaces/modules/tooltips
 *= require interfaces/core/grid
```

For a comprehensive list of the available libraries, checkout the
[vendor/assets](https://github.com/ministrycentered/interfaces/tree/master/vendor/assets/)
directory.

### Adding Layout

As with assets, there are to ways of getting a layout in your application.

At first, you may like to just scaffald out the complete look of a new
application.  For that, you'd open up `layouts/application.html.erb` file and
wrap the `interfaces` block helper around your content `yield`.

```erb
<%= interfaces do %>
  <%= yield %>
<% end %>
```

#### Full Layout Control

Once you need more than just the basic layout, you'll need to be a little more
verbose in your template.

_(We're working on a more elegent solution to this for future versions)_

For this, you'll want to wrap your `<%= yield %>` tag like so:

```erb
<%= interfaces_wrap do %>
  <%= interfaces_header do %>
    <%# navagation list items here %>
  <% end %>

  <%= interfaces_content do %>
    <%= interfaces_sidebar do %>
      <%# sidebar content here %>
    <% end %>

    <%= interfaces_main do %>
      <%= yield %>
    <% end %>

  <% end %>
<% end %>

<%= interfaces_footer do %>
  Designed in CA Copyright 2014
<% end %>
```

## Styleguides

There is a guide available for implementation of all the Interfaces components.
Adding it your app is easy, simyly add this line to your `config/routes.rb` file:

```
mount Interfaces::Engine => '/styleguide' if Rails.env.development?
```

## Application Specific Styles

Interfaces is intended to be extended.  Apps that look the same are not
interesting.

Configuring your application styles takes a little setup.  So, hold on as I walk
you through it.

#### Create an intermediate sass file

First, we need a new sass file.

```$touch app/assets/stylesheets/myapp_interfaces.css.sass```

In it, were going to add an import declaration to get Interfaces:

```sass
@import interfaces/interfaces
```

#### Add override values

Now you have Interfaces, but how do you customize it?  Well, we're going to
do something pretty strange.  We're going to add our Sass override variables
*ABOVE* our interfaces `import`:

```sass
// new overrides
$base-color: #725878

@import interfaces/interfaces
```

Oh snap!  Now things are purple — MUCH ROYAL!

You can grab all the application variables available [
here](https://github.com/ministrycentered/interfaces/blob/master/vendor/assets/stylesheets/interfaces/core/_variables.css.sass).

### Completion

We can leave the style variable there but it's a little sloppy.  Let's throw
them in another file.  The current convention is `{app_name}_variables`.

```$touch app/assets/stylesheets/myapp_variables.css.sass```

Now update your manifest file

```sass
@import my-special-flower
@import interfaces/interfaces
```

Great job!  Bob the Builder would be proud!

## Ummm, I'm having trouble...

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

### Running Rails generators and Rake tasks

To run Rails generators and rake tasks, for the dummy rails app, you'll need to
run them from `./test/dummy`.  Running them from the Interfaces root directory
will result in an error.

### Powder Link

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
