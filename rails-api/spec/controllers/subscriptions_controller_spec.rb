require 'rails_helper'

RSpec.describe SubscriptionsController, type: :controller do
  before do
    @subscription = FactoryBot.create(:subscription)
  end
  it 'get index' do
    get :index
    expect(response.status).to eq(200)
    puts response.body
  end
end
