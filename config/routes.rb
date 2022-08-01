Rails.application.routes.draw do
  
  resources :tracks, only: [:create]

  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
