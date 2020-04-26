Rails.application.routes.draw do
  root "sample#sample"
  resources :sample, only: [:index, :new, :show, :sample]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
