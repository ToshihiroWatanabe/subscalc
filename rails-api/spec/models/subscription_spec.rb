require 'rails_helper'

RSpec.describe Subscription, type: :model do
  it 'is valid' do
    subscription = Subscription.new()
    expect(subscription).to be_valid
  end

  it 'wrong name' do
    subscription = Subscription.new(name: 'テストサブスク')
    expect('test').to_not match(subscription.name)
  end

  it 'name' do
    subscription = Subscription.new(name: 'テストサブスク')
    expect('テストサブスク').to match(subscription.name)
  end

  it 'wrong monthEvery' do
    subscription = Subscription.new(monthEvery: 1)
    expect(0).to_not match(subscription.monthEvery)
  end

  it 'monthEvery' do
    subscription = Subscription.new(monthEvery: 1)
    expect(1).to match(subscription.monthEvery)
  end

  it 'wrong price' do
    subscription = Subscription.new(price: 980)
    expect(999).to_not match(subscription.price)
  end

  it 'price' do
    subscription = Subscription.new(price: 980)
    expect(980).to match(subscription.price)
  end
end
