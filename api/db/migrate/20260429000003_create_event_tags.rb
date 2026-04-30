# frozen_string_literal: true

class CreateEventTags < ActiveRecord::Migration[8.1]
  def change
    create_table :event_tags do |t|
      t.references :event, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end

    add_index :event_tags, %i[event_id tag_id], unique: true
  end
end
