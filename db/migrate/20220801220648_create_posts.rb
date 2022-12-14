class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :caption
      t.string :song
      t.string :song_id
      t.string :artist
      t.string :image
      t.string :preview_url
      t.string :username
      t.integer :user_id
      t.string :user_profile_picture

      t.timestamps
    end
  end
end
