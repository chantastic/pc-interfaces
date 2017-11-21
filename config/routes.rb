Interfaces::Engine.routes.draw do
  get "version" => "static_pages#version"

  get \
    "sample_modal" => "static_pages#sample_modal",
    constraints: ->(_) { Rails.env.development? || ENV['SHOW_INTERFACES_ROUTES'] }

  get \
    "*id" => "pages#show",
    constraints: ->(_) { Rails.env.development? || ENV['SHOW_INTERFACES_ROUTES'] }

  root \
    to: "pages#show",
    id: "home",
    constraints: ->(_) { Rails.env.development? || ENV['SHOW_INTERFACES_ROUTES'] }
end
