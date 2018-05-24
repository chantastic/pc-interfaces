module Interfaces
  def self.favicon_asset_paths(app_name)j
    %W(
      #{app_name}/favicon-16.png
      #{app_name}/favicon-32.png
      #{app_name}/favicon-57.png
      #{app_name}/favicon-76.png
      #{app_name}/favicon-96.png
      #{app_name}/favicon-128.png
      #{app_name}/favicon-144.png
      #{app_name}/favicon-152.png
      #{app_name}/favicon-167.png
      #{app_name}/favicon-180.png
      #{app_name}/favicon-196.png
      #{app_name}/favicon-228.png
      #{app_name}/favicon-svg.svg
    )
  end
end