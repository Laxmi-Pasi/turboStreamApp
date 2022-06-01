Rails.application.routes.draw do
  resources :comments
  get 'home/index'
  resources :posts do
    member do
      post :edit
    end
  end
  
  resources :messages do
    member do
      post :edit
    end
    collection do
      post :search
    end
  end
end
