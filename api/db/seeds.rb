# frozen_string_literal: true

# Tags are used to classify events by format, type, education type, and topic.
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
