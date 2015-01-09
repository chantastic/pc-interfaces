module Interfaces
  module ApplicationHelper
    def interfaces(&block)
      render layout: '/interfaces/interfaces', &block
    end

    def interfaces_wrap(&block)
      render layout: '/interfaces/wrap', &block
    end

    def interfaces_header(&block)
      render layout: '/interfaces/header', &block
    end

    def interfaces_content(&block)
      render layout: '/interfaces/content', &block
    end

    def interfaces_main(&block)
      render layout: '/interfaces/main', &block
    end

    def interfaces_helpdesk
      render partial: '/interfaces/helpdesk'
    end

    def interfaces_footer(options = {}, &block)
      render layout: '/interfaces/footer', &block
    end

    def modal(modal_id, options = {}, &block)
      content_tag :div, capture(&block), id: modal_id, class: "modal #{options[:class]}"
    end

    def modal_trigger(modal_id, options = {}, &block)
      tag = options[:tag] || :span

      content_tag tag, capture(&block), class: "#{options[:class]}", data: { "modal-id" => modal_id }
    end

    def app_name
      rails_application_name.underscore.dasherize
    end

    APP_NAME_TO_HELPDESK = {
      "account-center" => "Accounts",
      "check-ins"      => "Check-Ins",
      "people"         => "People"
    }

    def helpdesk_name
      APP_NAME_TO_HELPDESK[app_name]
    end

    def available_apps
      [current_app] + (available_apps_for_person - [current_app])
    end

    private

    def current_app
      if 'AccountCenter' == rails_application_name
        'Accounts'
      else
        rails_application_name.split(/(?=[A-Z])/).join('-')
      end
    end

    def available_apps_for_person
      if Person.current.respond_to? :subscribed_apps
        Person.current.subscribed_apps.sort.map { |app| app.respond_to?(:name) ? app.name : app }
      elsif Person.current.respond_to? :visible_apps
        Person.current.visible_apps.sort.map { |app| app.respond_to?(:name) ? app.name : app }
      elsif Person.current.respond_to? :applications
        Person.current.applications.sort.select { |app, values| values["allow_pco_login"] != false }.map(&:first)
      else
        logger.debug "[INTERFACES] INTEGRATION REQUIRED: AccountCenterPersonIntegration is required for the application switcher — https://github.com/ministrycentered/account_center_integration"
        []
      end
    end

    def rails_application_name
      Rails.application.class.parent_name
    end
  end
end
