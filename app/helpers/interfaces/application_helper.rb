module Interfaces
  module ApplicationHelper
    def interfaces_footer(&block)
      content_node = content_tag :div, capture(&block), class: "content"

      content_tag :footer, content_node, class: "site-footer", role: "contentinfo"
    end

    def modal(modal_id, options = {}, &block)
      content_tag :div, capture(&block), id: modal_id, class: "reveal-modal #{options[:class]}", data: { reveal: "" }
    end

    def modal_trigger(modal_id, options = {}, &block)
      tag = options[:tag] || :span

      content_tag tag, capture(&block), class: "#{options[:class]}", data: { "reveal-id" => modal_id }
    end
  end
end
