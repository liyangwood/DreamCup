const path = require('path');

function resolve(relativePath) {
	return path.resolve(__dirname, '..', relativePath);
}

module.exports = {
	resolve
};