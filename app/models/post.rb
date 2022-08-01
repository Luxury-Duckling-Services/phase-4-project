class Post < ApplicationRecord
    belongs_to :user

    validates :user_id, presence: true
    validates :caption, presence: true
    validates :song, presence: true
    validates :artist, presence: true
end