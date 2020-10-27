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

      title, description = attrs.values_at(:title, :description)

      uid = Digest::SHA1.hexdigest([Time.now, rand].join)[0..3]
      title_id = "title-#{symbol}-#{uid}"
      description_id = "desc-#{symbol}-#{uid}"

      if block.nil?
        message = <<-EOF
  use_svg expects a block for asset path resolution. Common implementation looks like this:
  use_svg(name, attrs) { | path | localize_asset_path(asset_path(path)) }
        EOF

        raise message
      end

      content_tag(
        :svg,
        {
          class: "symbol #{attrs[:class]}".squish,
          role: "img",
          "aria-labelledby": [
            *(title_id if title),
            *(description_id if description),
          ].compact.join(" "),
        }.compact.merge(attrs.except(:class, :title, :description)),
      ) do
        if title
          concat(content_tag("title", title, id: title_id))
        end

        if description
          concat(content_tag("desc", description, id: description_id))
        end

        concat(
          content_tag(
            "use",
            "",
            "xlink:href": block.call("@planningcenter/icons/sprites/#{svg.gsub(/\.svg/, "")}.svg##{symbol}"),
          )
        )
      end
    end

    def relativize_asset_path(path = "")
      path.gsub(/.*?(?=\/assets)/im, "")
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
      return Rails.application.class.parent_name if Rails::VERSION::MAJOR < 6
      Rails.application.class.module_parent_name
    end
  end
end
