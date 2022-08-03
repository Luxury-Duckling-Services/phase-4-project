Rails.application.routes.draw do
  
  resources :friendships, only: [:create] 
  resources :posts, only: [:index, :create]
  resources :users, only: [:index, :show, :create]
  resources :tracks, only: [:create]

  get '/search/:name', to: "tracks#search"

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
