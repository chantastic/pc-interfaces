require_dependency "interfaces/application_controller"

module Interfaces
  class PagesController < HighVoltage::PagesController
    skip_filter *_process_action_callbacks.map(&:filter)
    layout 'interfaces/application'
  end
end
