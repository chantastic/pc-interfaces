require_dependency "interfaces/application_controller"

module Interfaces
  class PagesController < HighVoltage::PagesController
    layout 'interfaces/application'
  end
end
