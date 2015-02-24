Interfaces::Engine.routes.draw do
  get 'sample_modal' => 'static_pages#sample_modal'

  get '*id' => 'pages#show'

  root to: 'pages#show', id: 'css'
end
