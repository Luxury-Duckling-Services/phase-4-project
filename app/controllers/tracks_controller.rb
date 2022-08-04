require 'rspotify'

class TracksController < ApplicationController

    def search
        RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
        track = RSpotify::Track.search(params[:name]).first
        
        if track.album.images[0]["url"]
            output = JSON.parse( track.to_json(only: ["id","name","preview_url","artists"]) )
            output.store( "image" , track.album.images[0]["url"] )

            render json: output.to_json, status: :ok
        else
            render json: {error: "Track not found"}, status: :not_found
        end
    end
end
