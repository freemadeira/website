# frozen_string_literal: true

class EventsController < ApplicationController
  def index
    events = Event.includes(:tags).order(start_at: :asc)
    render json: EventResource.new(events)
  end

  def show
    event = Event.includes(:tags).find(params[:id])
    render json: EventResource.new(event)
  end
end
