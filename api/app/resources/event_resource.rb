# frozen_string_literal: true

class EventResource < ApplicationResource
  include Alba::Resource

  attributes :id, :title, :description, :start_at, :end_at, :timezone,
             :category, :language, :url, :image_url, :display_time

  # TODO: image attachment. If there is an image attached, return the URL of the image. Otherwise,
  # return the value of the `image_url` attribute.

  many :tags, resource: TagResource
end
