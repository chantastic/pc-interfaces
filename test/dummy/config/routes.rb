Rails.application.routes.draw do
  mount Interfaces::Engine => '/interfaces'
end
