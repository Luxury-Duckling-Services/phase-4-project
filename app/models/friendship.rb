class Friendship < ApplicationRecord
    belongs_to :requester, class_name: "User"
    belongs_to :approver, class_name: "User"
    
    # validates :requester_id, uniqueness: { scope: :approver_id, message: "This user is already added as a friend"}

    # validates :approver_id, uniqueness: { scope: :requester_id, message: "This user is already added as a friend"}

    validate :friendship_already_exists?

    def friendship_already_exists?
        Friendship.all.each do |friendship|
            if (friendship.requester_id == approver_id && friendship.approver_id == requester_id) || (friendship.requester_id == requester_id && friendship.approver_id == approver_id)
                errors.add(:requester_id, "You are already friends with this user")
            end
        end
    end
end
