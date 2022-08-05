class FriendshipsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        new_friendship = Friendship.create!(friendship_params)
        render json: new_friendship, status: :created
    end

    def destroy
        friendship_one = Friendship.find_by(requester_id: params[:id_one] , approver_id: params[:id_two])
        friendship_two = Friendship.find_by(requester_id: params[:id_two] , approver_id: params[:id_one])
        if friendship_one
            friendship_one.destroy
        end
        if friendship_two
            friendship_two.destroy
        end
        head :no_content
    end

    private 

    def friendship_params
        params.permit(:requester_id, :approver_id)
    end
end
