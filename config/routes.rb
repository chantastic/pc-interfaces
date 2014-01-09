Interfaces::Engine.routes.draw do
  get '*id' => 'pages#show'
  root to: 'pages#show', id: 'index'
end
