User.destroy_all
Friendship.destroy_all

user1 = User.create(username: "a" , password_digest: "123")
user2 = User.create(username: "b", password_digest: "456")

Friendship.create(requester_id: user1.id, approver_id: user2.id)
Friendship.create(requester_id: user2.id, approver_id: user1.id)