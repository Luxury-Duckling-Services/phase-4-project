class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :song, :artist, :image, :preview_url
end
