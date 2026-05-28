# frozen_string_literal: true

class TagResource < ApplicationResource
  include Alba::Resource

  attributes :name, :category
end
