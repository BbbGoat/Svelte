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
		client: {"start":"_app/immutable/entry/start.d50bad87.js","app":"_app/immutable/entry/app.acf24be7.js","imports":["_app/immutable/entry/start.d50bad87.js","_app/immutable/chunks/index.8b98168b.js","_app/immutable/chunks/singletons.8064c386.js","_app/immutable/chunks/paths.d2846a96.js","_app/immutable/entry/app.acf24be7.js","_app/immutable/chunks/index.8b98168b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8667d7bf.js')),
			__memo(() => import('./chunks/1-6763fe08.js')),
			__memo(() => import('./chunks/3-71d04536.js')),
			__memo(() => import('./chunks/4-39de2ad6.js'))
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
