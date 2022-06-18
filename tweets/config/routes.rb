Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'main#index'
  get 'about-us', to: 'about#index', as: :about

  get 'sign_up', to: 'registrations#new'
  post 'sign_up', to: 'registrations#create'

  get 'dashboard', to: 'dashboard#index'

  delete 'logout', to: 'sessions#destroy'

  get 'sign_in', to: 'sessions#new'
  post 'sign_in', to: 'sessions#create'

  get 'password', to: 'passwords#edit', as: :edit_password
  patch 'password', to: 'passwords#update'

  get 'password/reset', to: 'password_resets#new'
  post 'password/reset', to: 'password_resets#create'

  get 'password/reset/edit', to: 'password_resets#edit'
  patch 'password/reset/edit', to: 'password_resets#update'

  get '/auth/twitter/callback', to: 'omniauth_callbacks#twitter'

  resources :twitter_accounts

  # =
  # get 'twitter_accounts/:id'
  # delete 'twitter_accounts/:id'

  resources :tweets

  # post 'auth/twitter', as: 'connect_twitter_account'

  # get 'tweets/new', to: 'tweets#new'
  post 'tweets/new', to: 'tweets#new'
  post 'auth/twitter', as: 'auth_twitter_account'
end
