# frozen_string_literal: true

class CreateEvents < ActiveRecord::Migration[8.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.column :start_at, :timestamptz, null: false
      t.column :end_at, :timestamptz
      t.string :timezone, null: false, default: 'Atlantic/Madeira'
      t.string :image_url
      t.integer :category, null: false
      t.string :language, null: false, default: 'both'
      t.string :url
      t.boolean :display_time, null: false, default: true

      t.timestamps
    end
  end
end
