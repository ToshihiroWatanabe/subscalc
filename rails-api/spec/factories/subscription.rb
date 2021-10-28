FactoryBot.define do
  factory :subscription do
    name { 'テストサブスク' }
    monthEvery { 1 }
    price { 980 }
  end
end
