Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root "sample#show"
  resources :sample, only: [:index, :new, :show, :sample]
  resources :sign_in, only:[:index, :new]
  resources :signup do
    collection do
      get 'step1'
      get 'step2'
      get 'done' # 登録完了後のページ
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
