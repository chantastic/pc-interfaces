module Interfaces
  module Generators
    class InstallGenerator < ::Rails::Generators::Base
      def require_interfaces_styles
        append_to_file "app/assets/stylesheets/application.css" do
          "/*= require _interfaces */"
        end
        create_file "app/assets/stylesheets/_interfaces.sass", "@import '_variables'\n@import 'interfaces/interfaces'\n"
        create_file "app/assets/stylesheets/_variables.sass",  "// Add interfaces variable overrides here.\n"
      end

      def require_interfaces_javascript
        append_to_file "app/assets/javascripts/application.js" do
          "//= require interfaces/interfaces"
        end
        create_file "app/assets/stylesheets/_interfaces.sass", "@import '_variables'\n@import 'interfaces/interfaces'\n"
        create_file "app/assets/stylesheets/_variables.sass",  "// Add interfaces variable overrides here.\n"
      end
    end
  end
end
