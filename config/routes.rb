Interfaces::Engine.routes.draw do
  get "version" => "static_pages#version"

  get \
    "sample_modal" => "static_pages#sample_modal",
    constraints: ->(_) { Rails.env.development? }

  get \
    "*id" => "pages#show",
    constraints: ->(_) { Rails.env.development? }

  root \
    to: "pages#show",
    id: "css",
    constraints: ->(_) { Rails.env.development? }
end
