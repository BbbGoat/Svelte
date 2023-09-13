import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value } from './index-117b125f.js';

function isObject(value) {
  const type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${colWidth}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${colWidth}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
}
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const languages = [{ name: "English" }, { name: "한국어" }];
const tableNumber = "12";
const categories = {
  mockCategory01: {
    description: "Salad and fries",
    id: "mockCategory01",
    name: "Appetizers",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: [
      "appetizer01",
      "appetizer02",
      "appetizer03",
      "appetizer04",
      "appetizer05",
      "appetizer06"
    ]
  },
  mockCategory02: {
    id: "mockCategory02",
    name: "Meat Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: [
      "meatPasta01",
      "meatPasta02",
      "meatPasta03",
      "meatPasta04",
      "meatPasta05",
      "meatPasta06",
      "meatPasta07",
      "meatPasta08"
    ]
  },
  mockCategory03: {
    id: "mockCategory03",
    name: "Wine",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["wine01", "wine02", "wine03", "wine04"]
  },
  mockCategory04: {
    id: "mockCategory04",
    name: "Lunch Menu",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer01", "meatPasta01", "meatPasta06", "wine01"]
  },
  mockCategory05: {
    id: "mockCategory05",
    name: "Vegetarian Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer04", "appetizer05"]
  },
  mockCategory06: {
    id: "mockCategory06",
    name: "Special Menu",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["wine02", "wine03"]
  },
  mockCategory07: {
    id: "mockCategory07",
    name: `Kid's Menu`,
    picture: "https://picsum.photos/300/200.webp",
    productOrder: ["appetizer01", "meatPasta05", "meatPasta06", "meatPasta07", "meatPasta08"]
  },
  mockCategory08: {
    id: "mockCategory08",
    name: "Beverages",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory09: {
    id: "mockCategory09",
    name: "Pizza",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory10: {
    id: "mockCategory10",
    name: "Steak",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory11: {
    id: "mockCategory11",
    name: "Chicken Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory12: {
    id: "mockCategory12",
    name: "Seafood Pasta",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory13: {
    id: "mockCategory13",
    name: "Take Out Only",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory14: {
    id: "mockCategory14",
    name: "Spicy",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory15: {
    id: "mockCategory15",
    name: "Beer",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  },
  mockCategory16: {
    id: "mockCategory16",
    name: "Dessert",
    picture: "https://picsum.photos/300/200.webp",
    productOrder: []
  }
};
const products = {
  appetizer01: {
    description: "Romain lettuce and croutons with caesar dressing.",
    id: "appetizer01",
    name: "Caesar Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1e3
  },
  appetizer02: {
    description: "Green Salad.",
    id: "appetizer02",
    name: "Green Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1e3
  },
  appetizer03: {
    description: "Caprese Salad.",
    id: "appetizer03",
    name: "Caprese Salad",
    picture: "https://picsum.photos/300/200.webp",
    price: 1300
  },
  appetizer04: {
    description: "",
    id: "appetizer04",
    name: "Calamari",
    picture: "https://picsum.photos/300/200.webp",
    price: 1200
  },
  appetizer05: {
    description: "",
    id: "appetizer05",
    name: "French Fries",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  appetizer06: {
    description: "",
    id: "appetizer06",
    name: "Cheese Stick",
    picture: "https://picsum.photos/300/200.webp",
    price: 700
  },
  meatPasta01: {
    description: "Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce. Bacon and egg yolk with spaghetti in a cream sauce.",
    id: "meatPasta01",
    name: "Carbonara",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta02: {
    description: "",
    id: "meatPasta02",
    name: "Bolognese",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta03: {
    description: "",
    id: "meatPasta03",
    name: "Polpettine",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta04: {
    description: "Bacon and egg yolk with spaghetti in a cream sauce.",
    id: "meatPasta04",
    name: "Salscicie",
    picture: "https://picsum.photos/300/200.webp",
    price: 1700
  },
  meatPasta05: {
    description: "",
    id: "meatPasta05",
    name: "Rose Forno",
    picture: "https://picsum.photos/300/200.webp",
    price: 1900
  },
  meatPasta06: {
    description: "",
    id: "meatPasta06",
    name: "Beef Soy Pasta",
    picture: "https://picsum.photos/300/200.webp",
    price: 1750
  },
  meatPasta07: {
    description: "",
    id: "meatPasta07",
    name: "Beef Rose Pasta",
    picture: "https://picsum.photos/300/200.webp",
    price: 1800
  },
  meatPasta08: {
    description: "",
    id: "meatPasta08",
    name: "Meat Lover",
    picture: "https://picsum.photos/300/200.webp",
    price: 1850
  },
  wine01: {
    description: "",
    id: "wine01",
    name: "House Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  wine02: {
    description: "",
    id: "wine02",
    name: "House Wine (White)",
    picture: "https://picsum.photos/300/200.webp",
    price: 800
  },
  wine03: {
    description: "",
    id: "wine03",
    name: "Bottle Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 6200
  },
  wine04: {
    description: "",
    id: "wine04",
    name: "Bottle Wine (Red)",
    picture: "https://picsum.photos/300/200.webp",
    price: 6200
  }
};

export { Container as C, categories as a, classnames as c, getColumnSizeClass as g, isObject as i, languages as l, products as p, tableNumber as t };
//# sourceMappingURL=data-6add363a.js.map
