# frozen_string_literal: true

class Event < ApplicationRecord
  has_many :event_tags, dependent: :destroy
  has_many :tags, through: :event_tags
  has_one_attached :image

  enum :category, { education: 10, community: 20, event: 30 }

  validates :title, presence: true
  validates :description, presence: true
  validates :start_at, presence: true
  validates :category, presence: true
  validates :timezone, presence: true
end
