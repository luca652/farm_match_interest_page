Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "pages#welcome"
  get "gdpr", to: "pages#gdpr"
  get "register-your-interest", to: "potential_users#register"
  resources :potential_users, only: [:new, :create, :index]
end
