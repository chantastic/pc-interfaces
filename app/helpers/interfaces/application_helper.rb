module Interfaces
  module ApplicationHelper
    def interfaces_footer(&block)
      content_node = content_tag :div, capture(&block), class: "content"

      content_tag :footer, content_node, class: "site-footer", role: "contentinfo"
    end
  end
end
