import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from './index-117b125f.js';
import { C as Container, l as languages, t as tableNumber } from './data-6add363a.js';

const arrow_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB4SURBVHgB7Y7RDYAgDERvFEZgFDdyFEZ0hIoRozEEKUhNzL2kn9f3AEIIIQ+IyIRGerbHgyA7M5Rsm7QNaCEOXbxFTqojLnJJPxxaiEOvjcjIPXrQRLwu10QMk9dEDJeXIszkhQg7eSHCTp6JsJffIr6RE0LIb1gBa4tEJh6rWp0AAAAASUVORK5CYII=";
const call_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFlSURBVHgB7ZbdccMgDIDlTOAR6ATNBmWEjpAN2hGyQdIJPEKygdsJfJ2AbIA3UMUZJyoFDMTn9MHfHYejfxNOFsDKg6mgEEQUtL3Znx9VVV1gTkwCWi0tRWvr0Xd4ow34a+svIAdyqK3jyM5j8wuP/p2pTawaUiHjhjl33JmepaMfMTLpvAQ/pVNq8p2vchvwhNM0jo9iuteUAriDCLzNFNdTo33L5Crn7RsmP2A+B+Z/ZHIZK4AfsbAygeUIzymcYwVoa9QFqs9lz+K0VqZ5zg0zELSNt/2L2TxDOS/s+dvuNYb6Ag6XR3MDvJ1KCZrFMX+DQqdpTbZiEwXugFp0NMcGHsxawFrA/y4APYNILsUxbOO4pwldm1GsiCqQ3LRk8+lMn2Li9LSeqCf1rmKpO9D7khuCbRKH74GEeThnFxADh6FCOOILJfmEJaAC9p7LdoSlwL/DpsLc2X+mQiTGZryVBH4Aqx9ORqQI8cIAAAAASUVORK5CYII=";
const bill_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgB7ZcxDoJAEEU/hlhppZUNVnYegM4DYGVlZ+WhvAOVHsDOA9jRSGVpg402+IkbYoyyywABEl4ymQyZsH93hgGAjpqxvi/EcbyiO6jQU7602LIsHxoBW7qI9qSN1OXSYgrYfa5n4zfDiuOUHmqmE2Ab5AS0K2RMlckFsGuPEMInKqTbZOVoS8CbzCFnpkswKYFLES4qohVNmEywEPnp08a0AQoK8NmIEQSwdMkEXGfltKIEHndyo38gP44uwUTAEBkvk6K0ogQnNuEZAtQQy5whJicQQIiJcJMTWHAnF8iY6BJMBDgw6GYp3QdJYwUkk+9eYZxi/1l8T4tpS7z/HcqMO5rFCwgzWCSTbED4AAAAAElFTkSuQmCC";
const cart_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGbSURBVHgB7ZevVsMwFMa/7uyAmkINs6kpUFND8QA8JA7HY6yqihmqimEGMKthptzL7s6ykOT2X4aA3zk5XZMm+fLdNL0D/jrJ/kdVVTOjfp0kyQYnIJHJ53SZG/VbKg8k4hORGXjqz6hc4QSYIZjKxDdyZRcK9EtBrhZOAYYQOxx9siUB92aFKwRP2K0+Bmu74ocAUrgVETFYQhMgxHAhd73aTgGRXMhclYNAhz5dyHwHm1eAuPCM7pRUcl9jyAFmhe5koWM9KEA65mhPSWMEXdQcYAq0J9MeqCNggXastNUzw1CjfKJHclugvhts/WudB4dKu/lNSGPkCN4Q0OovcVh9HitB0RzYM7Mypiaw8EdfchM6iDiGJbrDLo59jUmoJ62aO19jl6C0ZUOLUV/HX0Nz4IIut1T4+kJlqW1GcY37sO38bGqnYSYDZaA7mZyZyMAaCxxi/i2GxjpHUwEysd1xDJ2pdc/7Z4IWAsqadTbvjroPNBVAcXvD8ceE84MUOimOE5lMxmoHb0Q+hEJxdPQZ8f8M2cT/BPkC8Lh/lNJR48gAAAAASUVORK5CYII=";
const table_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD1SURBVHgB5ZXhDYIwEIWvxv8yQt3AEXQDnQBGYAPdQJmAsAEb6AY6Ak5gN6jvoMRqLIpAY/RLXlvgei9p7oqgJ2itI0wSmkABfUYihDi9jILZWvfDBZr5MrNNQ19mNuGjWaqHpzQVWMwx72l4ChTRdET+kDywYWE0NDkPggccq8R0pFvPJXVAB7ZQ3RYZFONI1bh0FaKAqd3g3PApVee+oDdBjqUxOkDK+sR5yudxw35J7QnMPukK8Fk032WoyLPhmarKSqgduVHmCnAVjUJVRdQSU4krXmvHpf2/RfObhndXEXWnOR9f4OZHHFMPmHw7aGO/vwKriq8bj1T3vgAAAABJRU5ErkJggg==";
const css$1 = {
  code: "a.svelte-vvwgi8.svelte-vvwgi8{color:rgba(255, 255, 255, 0.4);text-decoration:none}.col.svelte-vvwgi8:last-child a.svelte-vvwgi8{color:white}a.svelte-vvwgi8.svelte-vvwgi8:hover{color:white}img.svelte-vvwgi8.svelte-vvwgi8{height:100%;object-fit:cover}div.svelte-vvwgi8.svelte-vvwgi8{box-sizing:border-box;padding:10px;border-right:1px solid #ccc;border-bottom:1px solid #ccc}.navbar.svelte-vvwgi8.svelte-vvwgi8{background-color:#271919;padding:0}.col.svelte-vvwgi8:nth-child(1) a.svelte-vvwgi8{position:relative}.sel-lang.open.svelte-vvwgi8.svelte-vvwgi8{display:block}.sel-lang.svelte-vvwgi8.svelte-vvwgi8{display:none;position:absolute;top:100%;left:100%;margin-left:1rem;transform:translateX(-100%);background-color:#271919;width:150px;border:1px solid #ccc;z-index:10;padding:0}.sel-lang.svelte-vvwgi8 a.svelte-vvwgi8{display:block;width:100%;height:100%;line-height:42px}.sel-lang.svelte-vvwgi8 a.svelte-vvwgi8:nth-child(2){border-top:1px solid #ccc}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lang = languages[0].name;
  $$result.css.add(css$1);
  return `


<header><nav class="navbar svelte-vvwgi8">${validate_component(Container, "Container").$$render($$result, { fluid: true, class: "text-center g-0" }, {}, {
    default: () => {
      return `<div class="col svelte-vvwgi8">
				<a class="navbar-brand m-0 svelte-vvwgi8" href="#">${escape(lang)}
					<img${add_attribute("src", arrow_icon, 0)} alt="arrow" width="30" height="24" class="d-inline-block align-text-top svelte-vvwgi8">
					<div class="${["sel-lang svelte-vvwgi8", ""].join(" ").trim()}">
						<a href="#" class="svelte-vvwgi8">${escape(languages[0].name)}</a>
						
						<a href="#" class="svelte-vvwgi8">${escape(languages[1].name)}</a></div></a></div>
			<div class="col svelte-vvwgi8">
				<a class="navbar-brand m-0 svelte-vvwgi8" href="#"><img${add_attribute("src", call_icon, 0)} alt="waiter" width="30" height="24" class="d-inline-block align-text-top svelte-vvwgi8">
					Call Waiter
				</a></div>
			
			<div class="col svelte-vvwgi8"><a class="navbar-brand m-0 svelte-vvwgi8" href="#"><img${add_attribute("src", bill_icon, 0)} alt="bill" width="30" height="24" class="d-inline-block align-text-top svelte-vvwgi8">
					View Bill
				</a></div>
			<div class="col svelte-vvwgi8">
				<a class="navbar-brand m-0 svelte-vvwgi8" href="#"><img${add_attribute("src", cart_icon, 0)} alt="cart" width="30" height="24" class="d-inline-block align-text-top svelte-vvwgi8">
					My Cart
				</a></div>
			<div class="col svelte-vvwgi8">
				<a class="navbar-brand m-0 svelte-vvwgi8" href="#"><img${add_attribute("src", table_icon, 0)} alt="table" width="30" height="24" class="d-inline-block align-text-top svelte-vvwgi8">
					${escape(tableNumber)}</a></div>`;
    }
  })}</nav>

</header>`;
});
const css = {
  code: ".app.svelte-qvbity{display:flex;flex-direction:column;min-height:100vh}main.svelte-qvbity{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-qvbity">
	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	
	<main class="svelte-qvbity">${slots.default ? slots.default({}) : ``}</main>

	
	
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-2b03f36f.js.map
