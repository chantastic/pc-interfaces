module PCO
  module UI
    module Rails
      class Engine < ::Rails::Engine; end if const_defined? "Rails"
    end
  end
end
