FactoryBot.define do
  factory :subscription do
    trait :a do
      name { 'テストサブスク' }
      monthEvery { 1 }
      price { 980 }
    end

    trait :b do
      name { 'テストサブスク2' }
      monthEvery { 12 }
      price { 1980 }
    end

    trait :c do
      name { 'テストサブスク3' }
      monthEvery { 1 }
      price { 90 }
    end
  end
end
