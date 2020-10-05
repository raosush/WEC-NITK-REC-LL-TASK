Rails.application.routes.draw do
  root 'posts#index'
  resources :posts do
    collection do
      get :load_more_button
      get :lazy_load_unveil_images
      get :lazy_load_images
      get :lazy_load_images_native
    end
  end
end
