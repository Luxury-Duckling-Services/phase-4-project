class CreateFriendships < ActiveRecord::Migration[6.1]
  def change
    create_table :friendships do |t|
      t.integer :requester_id, foreign_key: true
      t.integer :approver_id, foreign_key: true
      t.timestamps
    end
  end
end
