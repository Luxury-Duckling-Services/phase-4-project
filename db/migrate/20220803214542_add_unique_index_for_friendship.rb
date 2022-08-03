class AddUniqueIndexForFriendship < ActiveRecord::Migration[6.1]
  def change
    add_index :friendships, [:requester_id, :approver_id], unique: true
  end
end
