snac2-mm-bootstrap
==================

Middleman project to build static HTML templates for XTF in SNAC

 * Install http://bower.io for web dev package magic
 * ```
   npm install -g bower
   ```
   * requires https://npmjs.org and http://nodejs.org
 * Install http://bundler.io for ruby package magic
 * ```
   gem install bundler
   ```
   * requires http://rubygems.org and https://www.ruby-lang.org/

```
bower install                  # install all web libraries required
bundle                         # install middle man / ruby asset pipline
bundle exec middleman          # test server for middleman
bundle exec middleman build    # build static templates
```
