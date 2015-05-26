## Intro

Interfaces is a white-label css framework for Planning Center Online apps.

## Installation

To add Interfaces, add this to your Gemfile:

```ruby
gem 'interfaces', git: 'git@github.com:ministrycentered/interfaces.git'
```

Restart your server.

## Setup

There's a little setup required to have a happy Interfaces setup:

`rails generate interfaces:install`

## Usage

Add this to `application.css` manifest:

```css
*= require interfaces/interfaces
```

Add this to your `application.js` manifest:
```javascript
//= require interfaces/interfaces
```

This will provide you with out-of-the-box Interfaces styles, scripts, shims, libraries, and components.

**It's possible to take only the peaces that you want out of Interfaces but not recommended. Defer complicated setups to @chantastic or @dsecrest**

### Adding Layout

There are to ways to setup layout in your application.

#### Scaffolding

Open up `layouts/application.html.erb` and wrap `yield` in the `interfaces` block helper.

```erb
...
<%= interfaces do %>
  <%= yield %>
<% end %>
...
```

#### Full Layout

It's likely you'll need a more complex layout. This is the current baseline. Wrap your `<%= yield %>` tag like so:

```erb
<%= interfaces_wrap do %>
  <%= interfaces_header do %>
    <%# navagation list items here %>
  <% end %>

  <%= interfaces_content do %>
    <%= interfaces_main do %>
      <%= yield %>
    <% end %>
  <% end %>
<% end %>

<%= interfaces_footer do %>Designed in CA Copyright 2015<% end %>
```

## Styleguide

If you'd like to see all the available components in your application, add this line to `confi/routes.rb`. In development, it will make the route `/interfaces` available.

```
mount Interfaces::Engine => '/interfaces
```
