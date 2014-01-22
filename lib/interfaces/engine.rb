# Bundle required gems into host application
# http://stackoverflow.com/questions/5159607/rails-engine-gems-dependencies-how-to-load-them-into-the-application#answer-5850503
require "jquery-rails"
require "select2-rails"
require "es5-shim-rails"
require "foundation-rails"
require "html5shiv-rails"
require "selectivizr-rails"
require "placeholder-gem"

module Interfaces
  class Engine < ::Rails::Engine
    isolate_namespace Interfaces

    config.generators do |generate|
      generate.helper false
      generate.assets false
      generate.view_specs false
      generate.template_engine :slim
    end

    # Ingect helpers into parent app
    initializer 'Interfaces.action_controller' do |app|
      ActiveSupport.on_load :action_controller do
        helper Interfaces::CodeSampleHelper
        helper Interfaces::ApplicationHelper
      end
    end
  end
end
