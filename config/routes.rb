Rails.application.routes.draw do
  resources :posts do
    collection do
      get :load_more_button
      get :lazy_load_unveil_images
      get :lazy_load_images
    end
  end
end
