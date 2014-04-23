# TODO: move this out of initializers
class InterfacesMustache < Mustache
  self.template_path = Interfaces::Engine.paths["app/views"].first + '/interfaces/templates'
end

module MustacheTemplateHandler
  def self.call(template)
    if template.locals.include? "mustache"
      "InterfacesMustache.render(#{template.source.inspect}, mustache).html_safe"
    else
      "#{template.source.inspect}.html_safe"
    end
  end
end

ActionView::Template.register_template_handler(:mustache, MustacheTemplateHandler)
