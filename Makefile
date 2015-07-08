install:
	npm install
	bower install

build:
	${CURDIR}/node_modules/.bin/webpack
	${CURDIR}/node_modules/.bin/webpack --optimize-minimize --output-file=acceptedlanguages.min.js

watch:
	${CURDIR}/node_modules/.bin/webpack --watch

tests:
	${CURDIR}/node_modules/karma/bin/karma start
