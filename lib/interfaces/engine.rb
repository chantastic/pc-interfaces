# Bundle required gems into host application
# http://stackoverflow.com/questions/5159607/rails-engine-gems-dependencies-how-to-load-them-into-the-application#answer-5850503
require "autoprefixer-rails"
require "react-rails"

module Interfaces
  class Engine < ::Rails::Engine
    isolate_namespace Interfaces

    config.generators do |generate|
      generate.helper false
      generate.assets false
      generate.view_specs false
    end

    initializer :assets do |config|
      Rails.application.config.assets.precompile += %w(select1-spinner.gif)
    end
  end

  def favicon_asset_paths(app_name)
    %W(
      #{app_name}/favicon-16.png
      #{app_name}/favicon-32.png
      #{app_name}/favicon-57.png
      #{app_name}/favicon-76.png
      #{app_name}/favicon-96.png
      #{app_name}/favicon-120.png
      #{app_name}/favicon-128.png
      #{app_name}/favicon-144.png
      #{app_name}/favicon-152.png
      #{app_name}/favicon-180.png
      #{app_name}/favicon-196.png
      #{app_name}/favicon-228.png
      #{app_name}/favicon-svg.svg
    )
  end
end
