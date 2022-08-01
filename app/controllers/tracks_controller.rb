require 'rspotify'

class TracksController < ApplicationController
 
    def search
        puts "hi"

        # RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
        # tracks = RSpotify::Track.search(params[:name])
        # if tracks
        #     render json: tracks.first, status: :ok
        # else
        #     render json: {error: "Tracks not found"}, status: :not_found
        # end
    end
end
