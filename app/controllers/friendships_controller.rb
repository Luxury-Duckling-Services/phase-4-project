class FriendshipsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        new_friendship = Friendship.create!(friendship_params)
        render json: new_friendship, status: :created
    end

    def destroy
        friendship = Friendship.find(params[:id])
        friendship.destroy
        render json: friendship
        head :no_content
    end

    private 

    def friendship_params
        params.permit(:requester_id, :approver_id)
    end
end
