'use strict';

/**
 * Replaces legacy url.parse() with WHATWG URL (avoids Node DEP0169).
 * Provides .href, .host, .path fields used by scripts in this folder.
 */
function parseUrlCompat(input) {
	const u = new URL(input);
	return {
		href: u.href,
		host: u.host,
		path: u.pathname + u.search,
	};
}

module.exports = { parseUrlCompat };
