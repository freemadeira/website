# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Tags are used to classify events by format, type, education type, and topic. They are created here to ensure that
[
  { name: 'In-person',  category: :format },
  { name: 'Online',     category: :format },
  { name: 'Meetup',     category: :event_type },
  { name: 'Conference', category: :event_type },
  { name: 'Summit',     category: :event_type },
  { name: 'Course',     category: :education_type },
  { name: 'Diploma',    category: :education_type },
  { name: 'Bitcoin',    category: :topic },
  { name: 'Energy',     category: :topic }
].each do |attrs|
  Tag.find_or_create_by!(name: attrs[:name]) do |tag|
    tag.category = attrs[:category]
  end
end
