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
