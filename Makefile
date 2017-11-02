#Makefile
install:
	npm install
start:
		npm run babel-node -- src/bin/brain-games.js
build:
		npm run build
work:
		npm run work
publish:
		npm publish
lint:
		npm run eslint -- src