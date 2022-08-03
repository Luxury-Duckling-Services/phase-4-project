require 'rspotify'

User.destroy_all
Friendship.destroy_all
Post.destroy_all

user1 = User.create(username: "aa" , password_digest: "123")
user2 = User.create(username: "bb", password_digest: "456")

puts user1.id

Friendship.create(requester_id: user1.id, approver_id: user2.id)

RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
url = RSpotify::Track.search("Hips don't lie").first.preview_url

20.times do 
    post = Post.create(caption: "Boring", song: "Don't give me love", artist: "Nobody", image: "https://www.biography.com/musician/lady-gaga", preview_url: url, user_id: user1.id)

    puts post.id
end

