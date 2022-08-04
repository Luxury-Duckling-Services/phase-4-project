class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture_url, :bio
  has_many :approvers
  has_many :requesters
end
