$:.push File.expand_path('../lib', __FILE__)
require 'interfaces/version'

Gem::Specification.new do |spec|
  spec.name          = 'interfaces'
  spec.version       = Interfaces::VERSION
  spec.authors       = ['Kevin Thompson','Michael Chan','Shane Armitage']
  spec.email         = ['web@ministrycentered.com']
  spec.description   = %q{Planning Center User Interfaces Library}
  spec.summary       = %q{This gem contains common elements used across all Planning Center applications.}
  spec.homepage      = 'http://get.planningcenteronline.com'
  spec.license       = 'MIT'

  spec.files         = Dir['{app,config,db,lib,vendor}/**/*', 'Rakefile', 'README.md']
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  # dependencies for host application
  spec.add_dependency 'pco-url', '>= 1.2.0'
  spec.add_dependency 'autoprefixer-rails', '~> 6.0'
  spec.add_dependency 'react-rails', '>= 1.3.1'
  spec.add_dependency 'coffee-rails'

  spec.add_development_dependency 'sqlite3'
  spec.add_development_dependency 'rails', '~> 4.0.2'
end
