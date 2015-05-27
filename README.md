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

#### Adding Layout

It's likely you'll need a more complex layout. This is the current baseline. Wrap your `<%= yield %>` tag like so:

```erb
<%= interfaces_wrap do %>
  <%= interfaces_header person: current_person, organization: current_organizationdo, person_profile_path: '/path/to/profile/:id/edit' %>
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

#### AccountSwitcher

To use the AccountSwitcher, you'll need to provide `interfaces_header` with both
the current Person and Organization, however they are implemented in your app.
This is commonly `current_person` and `current_organization`.

## /interfaces route

Add this line to your your `routes.rb` file.

```
mount Interfaces::Engine => '/interfaces
```

This provides all of the `pco` command-line tools with data about Interfaces,
and allow you to see available Interfaces APIs in production.
