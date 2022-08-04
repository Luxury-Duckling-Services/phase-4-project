require 'rspotify'

User.destroy_all
Friendship.destroy_all
Post.destroy_all

user1 = User.create(username: "aa" , password_digest: "123")
user2 = User.create(username: "bb", password_digest: "456")
user3 = User.create(username: "hi", password_digest: "789")

Friendship.create(requester_id: user1.id, approver_id: user2.id)

RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
track = RSpotify::Track.search("Hips don't lie").first
url = track.preview_url
song_id = track.id

2.times do 
    post = Post.create(username: user1.username, caption: "Boring", user_profile_picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg", song: "Don't give me love", song_id: song_id, artist: "Nobody", image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg", preview_url: url, user_id: user1.id)
end

2.times do 
    post = Post.create(username: user2.username, caption: "Boring", user_profile_picture: "not valid", song: "Don't give me love", song_id: song_id, artist: "Nobody", image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg", preview_url: url, user_id: user2.id)
end

3.times do 
    post = Post.create(username: user3.username, caption: "Boring", user_profile_picture: "not valid", song: "Don't give me love", song_id: song_id, artist: "Nobody", image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgxMDg1MDI3MTkzMzMzMDk2/gettyimages-1127409044.jpg", preview_url: url, user_id: user3.id)
end

