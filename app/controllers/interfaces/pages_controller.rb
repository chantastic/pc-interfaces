require_dependency "interfaces/application_controller"

module Interfaces
  class PagesController < ActionController::Base
    layout 'interfaces/application'

    def show
      render "interfaces/#{params[:id]}"
    end
  end
end
