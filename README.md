snac2-mm-bootstrap
==================

Middleman project to build static HTML templates for XTF in SNAC

 * Install http://bower.io for web dev package magic
   * requires https://npmjs.org and http://nodejs.org
   * ```
     npm install -g bower
     ```

 * Install http://bundler.io for ruby package magic
   * requires http://rubygems.org and https://www.ruby-lang.org/
   * ```
     gem install bundler
     ```

```
bower install                  # install all web libraries required
bundle                         # install middle man / ruby asset pipline
bundle exec middleman          # test server for middleman
bundle exec middleman build    # build static templates
```
