# frozen_string_literal: true

class ApplicationResource
  include Alba::Resource

  helper Typelizer::DSL

  transform_keys :lower_camel
end
