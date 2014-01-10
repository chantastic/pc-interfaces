$:.push File.expand_path('../lib', __FILE__)
require 'interfaces/version'

Gem::Specification.new do |spec|
  spec.name          = 'interfaces'
  spec.version       = Interfaces::VERSION
  spec.authors       = ['Kevin Thompson','Michael Chan','Shane Armitage']
  spec.email         = ['web@ministrycentered.com']
  spec.description   = %q{Planning Center User Interfaces Library}
  spec.summary       = %q{This gem contains commong elements used across all Planning Center applications.}
  spec.homepage      = 'http://get.planningcenteronline.com'
  spec.license       = 'MIT'

  spec.files         = Dir['{app,config,db,lib,vendor}/**/*', 'Rakefile', 'README.md']
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_dependency 'coffee-rails'
  spec.add_dependency 'compass-rails'
  spec.add_dependency 'haml-rails'
  spec.add_dependency 'high_voltage'
  spec.add_dependency 'sass-rails'
  spec.add_dependency 'slim-rails'

  spec.add_development_dependency 'sqlite3'
  spec.add_development_dependency 'rails', '~> 4.0.2'
end