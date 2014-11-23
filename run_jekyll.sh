#! /bin/sh

echo 'Running Jekyll with Bundler...'
bundle exec jekyll serve

echo 'Cleaning up...'
rm -r _site *.lock