## Intro

Interfaces is a white-label css framework for Planning Center Online app. Here
you'll find all the common components you'll need to build the next great PCO
app!

## Installation

To start using Interfaces in you app, include the gem in your Gemfile:

```ruby
gem 'interfaces', git: 'git@github.com:ministrycentered/interfaces.git'
```

Optionally, you may use a local path when developing Interfaces alongside your
app.

**Be careful not to deploy your app with the local gem path**

```ruby
gem 'interfaces', path: '~/code/interfaces'
```

If you have a server running (pow or otherwise), you'll need to restart it.

## Setup using the generator

Interfaces comes with a handy generator for setting up **new** apps.

`rails generate interfaces:install`

### If you're already working on an app, and want to manually setup Interfaces...

## Usage

### Requiring Assets

Once the Interfaces gem is in your Gemfile, you have a couple of options for requiring the Interfaces assets:

#### Get Everything

In your `application.css` file: 
```css
*= require interfaces/interfaces
```

In your `application.js` file:
```javascript
//= require interfaces/interfaces
```

This will provide you with out-of-the-box Interfaces styles, scripts, shims, libraries, and components.

#### Get only what you want

Interfaces is designed to be used as minimally as you like. Requiring everything is a nice way to get started quickly, but you may not need all of Interfaces.

To get only what you need, you'll need to require a base file, and then the modules you want. In your `application.css` file:

```css
*= require interfaces/base
*= require interfaces/modules/grid   /* pick your modules */
```

##### Available Modules
Here's a list of available modules:

*  Buttons:   `*= require interfaces/modules/buttons`
*  Panes:     `*= require interfaces/modules/panes`
*  Tooltips:  `*= require interfaces/modules/tooltips`
*  Modals:    `*= require interfaces/modules/modals`
*  Grid:      `*= require interfaces/modules/grid`
*  Forms:     `*= require interfaces/modules/forms` _forms also need `grid` for layout_
*  Tables:    `*= require interfaces/modules/tables`


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
===============================

## Application-Specific Styles

Interfaces is intended to be extended.  Apps that look the same are not interesting.

To customize Interfaces, additional setup is required.

#### Create your own files

In the `app/assets/stylesheets` directory, create 2 files:

`_variables.css.sass` and `_interfaces.css.sass`.

In `_interfaces.css.sass` you must to import your local `_variables.css.sass` file, *first*. After that, you can import the Interfaces files you want to use*.

```
@import "_variables"

@import "interfaces/base"
@import "interfaces/modules/grid"
@import "interfaces/modules/tooltips"
```

<small>*If you are only using parts of Interfaces, you will always import `base` before other Interfaces modules.</small>  

In `_variables.css.sass`, you'll override the default variables with your own values. Here's an example*:

```
$base-color:              red
$bg-color:                #e5e5e5
$sidebar-bg-color:        blue
$accent-color1:           #dfdfdf
```
<small>*These would be terrible color choices...</small>

You can grab all the application variables available [
here](https://github.com/ministrycentered/interfaces/blob/master/vendor/assets/stylesheets/interfaces/core/_variables.css.sass).

#### Bring it all together

Now you can update your `application.css` file by requiring your new file:

```
/*
*= require _interfaces
*/
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
