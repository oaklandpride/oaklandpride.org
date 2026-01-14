source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
# gem "bootstrap" # Using CDN link in layout instead

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

gem "jekyll-redirect-from"

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]


gem "logger", "~> 1.7"
