require 'rails_helper'

RSpec.describe SubscriptionsController, type: :controller do
  before do
    FactoryBot.create(:subscription, :a)
    FactoryBot.create(:subscription, :b)
    FactoryBot.create(:subscription, :c)
  end

  describe 'GET #index' do
    before { get :index }
    it 'has a 200 status code' do
      expect(response.status).to eq(200)
    end
    it '0 name' do
      expect(JSON.parse(response.body)[0]['name']).to eq('テストサブスク')
    end
    it '1 monthEvery' do
      expect(JSON.parse(response.body)[1]['monthEvery']).to eq(12)
    end
    it '2 price' do
      expect(JSON.parse(response.body)[2]['price']).to eq(90)
    end
  end

  # describe 'GET #show' do
  #   before { get :show }
  # end

  describe 'POST #create' do
    it 'has a 201 status code' do
      post :create, params: { name: 'てすと', monthEvery: 6, price: 2480 }
      expect(response.status).to eq(201)
    end
  end
end
