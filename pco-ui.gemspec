# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pco/ui/version'

Gem::Specification.new do |spec|
  spec.name          = 'pco-ui'
  spec.version       = PCO::UI::VERSION
  spec.authors       = ['Kevin Thompson','Michael Chan','Shane Armitage']
  spec.email         = ['web@ministrycentered.com']
  spec.description   = %q{Planning Center User Interface Library}
  spec.summary       = %q{This gem contains commong elements used across all Planning Center applications.}
  spec.homepage      = 'http://get.planningcenteronline.com'
  spec.license       = 'MIT'

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.3'
  spec.add_development_dependency 'rake'
  spec.add_development_dependency 'middleman', '~>3.2.0'
  spec.add_development_dependency 'middleman-livereload'
  spec.add_development_dependency 'middleman-smusher'
  spec.add_development_dependency 'middleman-syntax'
  spec.add_development_dependency 'redcarpet'
  spec.add_development_dependency 'nokogiri'
  spec.add_development_dependency 'slim'
end
