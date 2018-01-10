Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resource :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses do
      resources :reviews, except: [:show, :destroy]
    end
    get "/search", to: "businesses#search"
    resources :reviews, only: [:show, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
end
