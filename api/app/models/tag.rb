# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :event_tags, dependent: :destroy
  has_many :events, through: :event_tags

  enum :category,
       { generic: 'generic', format: 'format', topic: 'topic', event_type: 'event_type',
         education_type: 'education_type' }

  validates :name, presence: true, uniqueness: true
end
