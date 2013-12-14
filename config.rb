# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates
helpers do
  def code_sample(&block)
    '' + yield +
    '<div>' +
      '<p class="code-sample-button">Show sample code</p>' +
      '<pre class="code-sample">' +
        '<code>' +
          samplify(yield) +
        '</code>' +
      '</pre>' +
    '</div>'
  end

  def samplify(markup)
    lines = markup.split("\n");
    html_escape(lines[0])
  end
end

#Framework
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :relative_links, true
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true
