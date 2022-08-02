class User < ApplicationRecord
    has_secure_password
    
    has_many :posts

    has_many :requester_friendships, foreign_key: :requester_id, class_name: "Friendship"
    has_many :approvers, through: :requester_friendships

    has_many :approver_friendships, foreign_key: :approver_id, class_name: "Friendship"
    has_many :requesters, through: :approver_friendships

    validates :username, presence: true, uniqueness: true
end
