class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :song_id, :caption, :song, :artist, :image, :preview_url, :created_at, :user_profile_picture

  def created_at
    object.created_at.in_time_zone("America/Los_Angeles").strftime("%B %d %Y at %I:%M %p %Z")
  end

end
