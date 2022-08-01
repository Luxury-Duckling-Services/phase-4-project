class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :caption
      t.string :song
      t.string :artist
      t.string :image
      t.string :preview_url
      t.integer :user_id

      t.timestamps
    end
  end
end
