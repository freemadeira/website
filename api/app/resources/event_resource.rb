# frozen_string_literal: true

class EventResource < ApplicationResource
  include Alba::Resource

  attributes :id, :title, :description, :start_at, :end_at, :timezone,
             :category, :language, :url, :image_url, :display_time

  many :tags, resource: TagResource
end
