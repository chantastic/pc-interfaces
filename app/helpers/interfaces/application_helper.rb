# coding: utf-8
module Interfaces
  module ApplicationHelper
    def interfaces(&block)
      render layout: '/interfaces/interfaces', &block
    end

    def interfaces_wrap(&block)
      render layout: '/interfaces/wrap', &block
    end

    def interfaces_header(person:                 Interfaces::NullPerson.new,
                          person_profile_path:    "",
                          settings_path:          "",
                          organization:           Interfaces::NullOrganization.new,
                          application_class_name: app_name,
                          &block)

      render layout: '/interfaces/header',
             locals: {
               person:        person,
               profile_path:  person_profile_path,
               settings_path: settings_path,
               organization:  organization,
               application_class_name: application_class_name
             },
             &block
    end

    def interfaces_head(person: Interfaces::NullPerson.new, organization: Interfaces::NullOrganization.new)
      render partial: '/interfaces/head',
             locals:  { person: person, organization: organization }
    end

    def interfaces_js_environment(person: Interfaces::NullPerson.new, organization: Interfaces::NullOrganization.new)
      render partial: "/interfaces/js_env",
             locals:  { person: person, organization: organization }
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
      current_app.underscore.dasherize
    end

    APP_NAME_TO_HELPDESK = {
      "accounts"       => "Accounts",
      "check-ins"      => "Check-Ins",
      "people"         => "People",
      "registrations"  => "Registrations"
    }

    def helpdesk_name
      APP_NAME_TO_HELPDESK[app_name]
    end

    def square_avatar(avatar_url)
      if avatar_url && avatar_url.index('?')
        avatar_url
      else
        "#{avatar_url}?g=100x100%23"
      end
    end

    def interfaces_avatar(person)
      if person.avatar_url.present?
        square_avatar(person.avatar_url)
      else
        "https://www.planningcenteronline.com/photos/icon/missing.png"
      end
    end

    def planningcenter_svg_use_tag(name, **attrs, &block)
      svg, symbol = name.split("#")

      if block.nil?
        message = <<-EOF
  use_svg expects a block for asset path resolution. Common implementation looks like this:
  use_svg(name, attrs) { | path | localize_asset_path(asset_path(path)) }
        EOF

        raise message
      end

      content_tag(
        "svg",
        content_tag(
          "use",
          "",
          "xlink:href": block.call("@planningcenter/icons/sprites/#{svg.gsub(/\.svg/, "")}.svg##{symbol}"),
        ),
        {
          class: "symbol #{attrs[:class]}".squish,
          role: "img",
          title: "#{symbol} icon",
        }.merge(attrs.except(:class)),
      )
    end

    def relativize_asset_path(path = "")
      path.gsub!(/.*?(?=\/assets)/im, "")
    end

    private

    def current_app
      case rails_application_name
      when 'AccountCenter'
        'Accounts'
      when 'Dummy'
        'Interfaces'
      else
        rails_application_name.split(/(?=[A-Z])/).join('-')
      end
    end

    def available_apps_for_person
      if ::Person.current.respond_to? :visible_apps
        ::Person.current.visible_apps.sort.map { |app| app.respond_to?(:name) ? app.name : app }
      elsif ::Person.current.respond_to? :applications
        ::Person.current.applications.sort.select { |app, values| values["allow_pco_login"] != false }.map(&:first)
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
