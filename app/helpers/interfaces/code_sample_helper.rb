module Interfaces
  module CodeSampleHelper
    def code_sample(&block)
      capture(&block)
    end

    def samplify(markup)
      lines = markup.split("\n");
      html_escape(lines[0])
    end
  end
end
