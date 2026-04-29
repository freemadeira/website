# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :event_tags, dependent: :destroy
  has_many :events, through: :event_tags

  enum :category, { format: 10, event_type: 20, education_type: 30, topic: 40 }

  validates :name, presence: true, uniqueness: true
end
