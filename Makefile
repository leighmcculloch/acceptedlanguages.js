install:
	npm install
	bower install

build:
	${CURDIR}/node_modules/.bin/webpack

build-release:
	${CURDIR}/node_modules/.bin/webpack --config=webpack.config.min.js

watch:
	${CURDIR}/node_modules/.bin/webpack --watch

tests:
	${CURDIR}/node_modules/karma/bin/karma start
