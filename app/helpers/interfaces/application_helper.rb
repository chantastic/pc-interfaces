# coding: utf-8
module Interfaces
  module ApplicationHelper
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

    def rails_application_name
      Rails.application.class.parent_name
    end
  end
end
