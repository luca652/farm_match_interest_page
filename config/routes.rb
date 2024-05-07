Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#welcome"
  get "register-your-interest", to: "pages#register"
  resources :potential_users, only: [:new, :create]
end
