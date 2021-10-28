require 'rails_helper'

RSpec.describe SubscriptionsController, type: :controller do
  before do
    FactoryBot.create(:subscription, :a)
    FactoryBot.create(:subscription, :b)
    FactoryBot.create(:subscription, :c)
  end
  it 'get index' do
    get :index
    expect(response.status).to eq(200)
    puts response.body
    expect(JSON.parse(response.body)[0]['name']).to eq('テストサブスク')
    expect(JSON.parse(response.body)[1]['monthEvery']).to eq(12)
    expect(JSON.parse(response.body)[2]['price']).to eq(90)
  end
end
