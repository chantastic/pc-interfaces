require_dependency "interfaces/application_controller"

module Interfaces
  class StaticPagesController < ApplicationController

    layout false

    def sample_modal
    end

    def version
      render text: `cat Gemfile.lock | grep 'interfaces (' | awk -v FS="[()]" '{print $2}'`
    end
  end
end
