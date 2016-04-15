require_dependency "interfaces/application_controller"

module Interfaces
  class PagesController < ActionController::Base
    layout 'interfaces/application'

    helper InterfacesIcons::Engine.helpers

    def show
      render "interfaces/#{params[:id]}"
    end
  end
end
