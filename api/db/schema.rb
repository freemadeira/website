# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_04_29_000003) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "event_tags", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.bigint "event_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id", "tag_id"], name: "index_event_tags_on_event_id_and_tag_id", unique: true
    t.index ["event_id"], name: "index_event_tags_on_event_id"
    t.index ["tag_id"], name: "index_event_tags_on_tag_id"
  end

  create_table "events", force: :cascade do |t|
    t.integer "category", null: false
    t.datetime "created_at", null: false
    t.string "description", null: false
    t.boolean "display_time", default: true, null: false
    t.timestamptz "end_at"
    t.string "image_url"
    t.string "language", default: "both", null: false
    t.timestamptz "start_at", null: false
    t.string "timezone", default: "Atlantic/Madeira", null: false
    t.string "title", null: false
    t.datetime "updated_at", null: false
    t.string "url"
  end

  create_table "tags", force: :cascade do |t|
    t.integer "category"
    t.datetime "created_at", null: false
    t.string "name", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  add_foreign_key "event_tags", "events"
  add_foreign_key "event_tags", "tags"
end
