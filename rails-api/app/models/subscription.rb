class Subscription
  include Mongoid::Document
  field :name, type: String
  field :month_every, type: Integer
  field :price, type: Integer
end
