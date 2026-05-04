# frozen_string_literal: true

class CreateEvents < ActiveRecord::Migration[8.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.datetime :start_at, null: false
      t.datetime :end_at
      t.string :timezone, null: false, default: 'Atlantic/Madeira'
      t.string :url
      t.string :category, null: false
      t.string :language, null: false, default: 'both'
      t.string :image_url
      t.boolean :display_time, null: false, default: true

      t.timestamps
    end
  end
end
