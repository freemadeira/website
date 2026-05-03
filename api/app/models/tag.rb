# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :event_tags, dependent: :destroy
  has_many :events, through: :event_tags

  enum :category,
       { format: 'format', event_type: 'event_type', education_type: 'education_type',
         topic: 'topic', generic: 'generic' }

  validates :name, presence: true, uniqueness: true
end
