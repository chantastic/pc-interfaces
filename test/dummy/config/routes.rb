Rails.application.routes.draw do
  mount Interfaces::Engine => '/styleguide'
end
