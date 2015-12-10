Rails.application.routes.draw do
  mount InterfacesIcons::Engine => '/interfaces_icons'
  mount Interfaces::Engine => '/interfaces'
end
