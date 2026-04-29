# frozen_string_literal: true

Typelizer.listen = Rails.env.local?

Typelizer.configure do |config|
  config.null_strategy = :optional
  config.output_dir = Rails.root.join('../frontend/packages/types/resources')
  config.properties_sort_order = :id_first_alphabetical
  config.verbatim_module_syntax = true
  config.comments = true
  config.inheritance_strategy = :inheritance
  config.types_import_path = '@free/types/resources'
end
