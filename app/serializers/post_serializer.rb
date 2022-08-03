class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :song_id, :caption, :song, :artist, :image, :preview_url
end
