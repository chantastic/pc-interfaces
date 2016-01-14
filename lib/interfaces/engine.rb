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
      Rails.application.config.assets.precompile += %w(
        select1-spinner.gif
      )
    end

    # Inject helpers into parent app
    initializer 'Interfaces.action_controller' do |app|
      ActiveSupport.on_load :action_controller do
        helper Interfaces::CodeSampleHelper
        helper Interfaces::ApplicationHelper
      end
    end
  end
end
