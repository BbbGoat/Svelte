import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, b as add_attribute, d as subscribe, v as validate_component, e as escape, j as each } from './index-117b125f.js';
import { p as page } from './stores-345db82f.js';
import { i as isObject, g as getColumnSizeClass, c as classnames, a as categories, C as Container, p as products } from './data-6add363a.js';

const Col = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "xs", "sm", "md", "lg", "xl", "xxl"]);
  let { class: className = "" } = $$props;
  let { xs = void 0 } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  const colClasses = [];
  const lookup = { xs, sm, md, lg, xl, xxl };
  Object.keys(lookup).forEach((colWidth) => {
    const columnProp = lookup[colWidth];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = colWidth === "xs";
    if (isObject(columnProp)) {
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      if (columnProp.size || columnProp.size === "") {
        colClasses.push(colClass);
      }
      if (columnProp.push) {
        colClasses.push(`push${colSizeInterfix}${columnProp.push}`);
      }
      if (columnProp.pull) {
        colClasses.push(`pull${colSizeInterfix}${columnProp.pull}`);
      }
      if (columnProp.offset) {
        colClasses.push(`offset${colSizeInterfix}${columnProp.offset}`);
      }
      if (columnProp.order) {
        colClasses.push(`order${colSizeInterfix}${columnProp.order}`);
      }
    } else {
      colClasses.push(getColumnSizeClass(isXs, colWidth, columnProp));
    }
  });
  if (!colClasses.length) {
    colClasses.push("col");
  }
  if (className) {
    colClasses.push(className);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.xs === void 0 && $$bindings.xs && xs !== void 0)
    $$bindings.xs(xs);
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
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(colClasses.join(" "))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
function getCols(cols) {
  const colsValue = parseInt(cols);
  if (!isNaN(colsValue)) {
    if (colsValue > 0) {
      return [`row-cols-${colsValue}`];
    }
  } else if (typeof cols === "object") {
    return ["xs", "sm", "md", "lg", "xl"].map((colWidth) => {
      const isXs = colWidth === "xs";
      const colSizeInterfix = isXs ? "-" : `-${colWidth}-`;
      const value = cols[colWidth];
      if (typeof value === "number" && value > 0) {
        return `row-cols${colSizeInterfix}${value}`;
      }
      return null;
    }).filter((value) => !!value);
  }
  return [];
}
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "noGutters", "form", "cols", "inner"]);
  let { class: className = "" } = $$props;
  let { noGutters = false } = $$props;
  let { form = false } = $$props;
  let { cols = 0 } = $$props;
  let { inner = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.noGutters === void 0 && $$bindings.noGutters && noGutters !== void 0)
    $$bindings.noGutters(noGutters);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  classes = classnames(className, noGutters ? "gx-0" : null, form ? "form-row" : "row", ...getCols(cols));
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}${add_attribute("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});

const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listClasses;
  let styles;
  let $$restProps = compute_rest_props($$props, ["class", "children", "divider", "listClassName", "style"]);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { divider = void 0 } = $$props;
  let { listClassName = "" } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.listClassName === void 0 && $$bindings.listClassName && listClassName !== void 0)
    $$bindings.listClassName(listClassName);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  listClasses = classnames("breadcrumb", listClassName);
  styles = divider ? `--bs-breadcrumb-divider: '${divider}'; ${style || ""}` : style;
  return `<nav${spread(
    [
      { style: escape_attribute_value(styles) },
      escape_object($$restProps),
      { class: escape_attribute_value(className) }
    ],
    {}
  )}><ol${add_attribute("class", listClasses, 0)}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</ol></nav>`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active", "children"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { children = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  classes = classnames(className, active ? "active" : false, "breadcrumb-item");
  return `<li${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      {
        "aria-current": escape_attribute_value(active ? "page" : void 0)
      }
    ],
    {}
  )}>${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</li>`;
});
const back_icon = "/_app/immutable/assets/back_btn.d7097c6e.png";
const css = {
  code: "h3.svelte-zu676h{font-size:2rem}h4.svelte-zu676h{display:inline;font-size:1rem}.breadcrumb{margin-top:10px;align-items:center}a.svelte-zu676h{color:#000;text-decoration:none}img.svelte-zu676h{width:100%;height:100%;object-fit:cover;border-radius:10px}.img-box.svelte-zu676h{display:block;margin:0 auto}.txt-box.svelte-zu676h{display:block;width:300px}.wrap.svelte-zu676h{display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px}.desc.svelte-zu676h{display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}small.svelte-zu676h{display:block;text-align:center;margin:10px 0;color:#ccc}button.svelte-zu676h{display:inline-block;height:50px;width:70px;border:1px solid #f1f1f1;border-radius:10px;background-color:#fff;margin-right:30px;margin-left:15px;transition:.3s ease}.back-icon.svelte-zu676h{width:30px;height:30px;object-fit:cover;transform:rotate(180deg)}button.svelte-zu676h:hover{border:1px solid #c7c7c7;background-color:#f1f1f1}",
  map: null
};
function chgCents(price) {
  return price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.params.slug);
  const slugArr = $page.params.slug.split("/");
  console.log(slugArr);
  let param = slugArr[1];
  let prdArr = categories[param].productOrder;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-pmq2c0_START -->${$$result.title = `<title>Foodly | product</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-pmq2c0_END -->`, ""}

${slugArr.length === 1 ? `<h4 class="svelte-zu676h">프로덕트 페이지</h4>` : `${slugArr.length === 2 ? `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { divider: "・" }, {}, {
    default: () => {
      return `<button class="shadow-sm svelte-zu676h"><img${add_attribute("src", back_icon, 0)} alt="back" class="back-icon svelte-zu676h"></button>
        ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `<h3 class="svelte-zu676h"><a href="#home" class="svelte-zu676h">${escape(categories[param].name)}</a></h3>`;
        }
      })}
        ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
        default: () => {
          return `<h4 class="svelte-zu676h"><a href="#library" class="svelte-zu676h">${categories[param].description ? `
                        <h4 class="svelte-zu676h"><a href="#" class="svelte-zu676h">${escape(categories[param].description)}</a></h4>` : `${categories[param].description === void 0 ? `<div class="text-center"></div>` : ``}`}</a></h4>`;
        }
      })}`;
    }
  })}

    ${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { cols: { lg: 3, md: 2, sm: 1, xs: 1 } }, {}, {
        default: () => {
          return `${each(prdArr, (item, i) => {
            return `${validate_component(Col, "Col").$$render($$result, { class: "p-0 mb-3 position-relative" }, {}, {
              default: () => {
                return `
                <a class="wrap svelte-zu676h" href="#"><small class="svelte-zu676h">${escape(i)} - ${escape(item)}</small>
                    <div class="img-box svelte-zu676h"><img${add_attribute("src", products[item].picture, 0)} alt="ct-img" class="svelte-zu676h"></div>
                    <div class="txt-box text-center svelte-zu676h"><h5>${escape(products[item].name)}</h5>
                        <p class="desc svelte-zu676h">${escape(products[item].description)}</p>
                        <span>$${escape(chgCents(products[item].price))}</span>
                    </div></a>
            `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${slugArr.length === 3 ? `<div>잘못된 경로입니다.</div>` : ``}`}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-30e91843.js.map
