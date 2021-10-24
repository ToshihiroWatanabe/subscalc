class Subscription
  include Mongoid::Document
  field :name, type: String
  field :monthEvery, type: Integer
  field :price, type: Integer
end
