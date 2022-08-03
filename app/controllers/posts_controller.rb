class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        render json: Post.all
    end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    private
    
    def post_params
        params.permit(:caption, :song, :song_id, :artist, :image, :preview_url, :user_id)
    end
end
