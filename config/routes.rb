Rails.application.routes.draw do
  resources :messages do
    member do
      post :edit
    end
    collection do
      post :search
    end
  end
end
