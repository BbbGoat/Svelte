const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.dc52f2bd.js","app":"_app/immutable/entry/app.71bb1e63.js","imports":["_app/immutable/entry/start.dc52f2bd.js","_app/immutable/chunks/index.8b98168b.js","_app/immutable/chunks/singletons.2c5e1441.js","_app/immutable/chunks/paths.2cca491a.js","_app/immutable/entry/app.71bb1e63.js","_app/immutable/chunks/index.8b98168b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-605024da.js')),
			__memo(() => import('./chunks/1-71d1ac4c.js')),
			__memo(() => import('./chunks/3-e2a88721.js')),
			__memo(() => import('./chunks/4-77055315.js'))
		],
		routes: [
			{
				id: "/product",
				pattern: /^\/product\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[...slug]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
