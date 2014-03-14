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

    def interfaces_sidebar(&block)
      render layout: '/interfaces/sidebar', &block
    end

    def interfaces_helpdesk
      render partial: '/interfaces/helpdesk'
    end

    def interfaces_footer(options = {}, &block)
      render layout: '/interfaces/footer', &block
    end

    def modal(modal_id, options = {}, &block)
      content_tag :div, capture(&block), id: modal_id, class: "reveal-modal #{options[:class]}", data: { reveal: "" }
    end

    def modal_trigger(modal_id, options = {}, &block)
      tag = options[:tag] || :span

      content_tag tag, capture(&block), class: "#{options[:class]}", data: { "reveal-id" => modal_id }
    end

    def app_name
      Rails.application.class.parent_name.underscore.dasherize
    end

    APP_NAME_TO_HELPDESK = {
      "account-center" => "Accounts",
      "check-ins" => "Check-Ins"
    }
    def helpdesk_name
      APP_NAME_TO_HELPDESK[app_name]
    end
  end
end
