exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 5674:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__LjnpS",
	"button--menu": "Button_button--menu___akLi",
	"active": "Button_active__yeuZZ"
};


/***/ }),

/***/ 7151:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__ubBbX",
	"header__nav": "Header_header__nav__YDoR6",
	"header__nav__logo": "Header_header__nav__logo__U5pbG",
	"header__nav__menu": "Header_header__nav__menu__4aFQT",
	"overlay": "Header_overlay__FjQav",
	"overlay__menu": "Header_overlay__menu__qkB7S",
	"has-children": "Header_has-children__4Su_w",
	"overlay--active": "Header_overlay--active__rwSyC"
};


/***/ }),

/***/ 1007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Button.module.scss
var Button_module = __webpack_require__(5674);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Button.js


function Button(props) {
    let type = "default";
    if ("menu" === props.type) {
        type = (Button_module_default())["button--menu"];
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `${(Button_module_default()).button} ${props.className} ${props.active && (Button_module_default()).active} ${type}`,
        onClick: props.onClick,
        children: props.children
    });
}

// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(7151);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header.js






function Header(props) {
    const router = (0,router_.useRouter)();
    const { 0: overlay , 1: setOverlay  } = (0,external_react_.useState)(false);
    const { 0: dropdown , 1: setDropdown  } = (0,external_react_.useState)();
    function OverlayMenu() {
        function handleClick(index, link) {
            if (index === dropdown) {
                setDropdown(null);
            } else {
                setDropdown(index);
            }
            if (link.items && link.items.length > 0) {
                return 0;
            }
            setOverlay(!overlay);
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "text-white",
            children: links.map((link, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: `mb-6 text-left ${link.items && link.items.length > 0 && dropdown === index && "active"} ${link.items && link.items.length > 0 && "has-children"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: `text-xl md:text-4xl font-heading ${dropdown === index && "active"} ${link.path === router.pathname && "text-white"}`,
                                onClick: (e)=>handleClick(index, link),
                                children: link.title
                            })
                        }),
                        link.items && link.items.length > 0 && dropdown === index && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "children pt-4 pl-4",
                            children: link.items.map((child, j)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: child.path,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `text-sm md:text-xl font-heading ${child.path === router.pathname && "text-white"}`,
                                            onClick: (e)=>handleClick(index, child, e),
                                            children: child.title
                                        })
                                    })
                                }, j))
                        })
                    ]
                }, index))
        });
    }
    const color = `post--${props.color}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `off-canvas ${overlay && "active"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "off-canvas__overlay",
                        onClick: ()=>setOverlay(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "off-canvas__menu",
                        children: OverlayMenu()
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `header ${(Header_module_default()).header} ${props.className}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(Header_module_default()).header__nav} absolute top-4 left-4 md:top-8 md:left-8 md:fixed`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).header__nav__menu,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                type: "menu",
                                active: overlay,
                                className: "w-full h-full bg-blue-500 text-white",
                                onClick: ()=>{
                                    setOverlay(!overlay);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${(Header_module_default()).header__nav__logo} bg-white font-extrabold font-heading text-black`,
                            style: {
                                fontSize: 33
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "M"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const links = [
    {
        title: "Home",
        path: "/",
        items: []
    },
    {
        title: "Socials",
        path: "#",
        items: [
            {
                title: "instagram",
                path: "https://www.instagram.com/dr.guma_constantin_orl"
            }, 
        ]
    }, 
];


/***/ })

};
;