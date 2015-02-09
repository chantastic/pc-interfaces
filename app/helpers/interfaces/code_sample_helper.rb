module Interfaces
  module CodeSampleHelper
    def code_sample(&block)
      html = capture(&block)

      capture do
        concat code_sample_node_static(html)
        concat pass_through_node(html)
      end
    end

    def code_sample_static(&block)
      html = capture(&block)

      capture do
        concat code_sample_node_static(html)
      end
    end

    private

    def pass_through_node(markup)
      content_tag :div, markup, class: 'ui-example-wrapper'
    end

    def code_sample_node(markup)
      content_tag :div do
        concat content_tag :p, "code sample", class: "code-sample-button"
        concat content_tag :pre, content_tag(:code, samplify(markup), class: "language-markup"), class: "code-sample"
      end
    end

    def code_sample_node_static(markup)
      content_tag :div do
        concat content_tag :pre, content_tag(:code, samplify(markup), class: "language-markup"), class: "code-sample-static"
      end
    end

    def samplify(markup)
      "#{normalize_whitespace(markup)}"
    end

    def normalize_whitespace(markup)
      markup.strip.gsub(/\/a><a/, "/a>\n<a")
    end
  end
end
