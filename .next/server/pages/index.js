(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1240:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Heading_heading__jX9lD"
};


/***/ }),

/***/ 3404:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "Post_post__vaBQ1",
	"post__inner": "Post_post__inner__7lL11",
	"post__cover": "Post_post__cover__nNrK5",
	"post__cover__inner": "Post_post__cover__inner__xePUM",
	"post__cover__media": "Post_post__cover__media__FwaBz",
	"post__cover__media__image": "Post_post__cover__media__image__oBOwM",
	"post__cover__media__video": "Post_post__cover__media__video__yZwlD",
	"post__cover__media__icon": "Post_post__cover__media__icon__f6KWA",
	"post__cover__overlay": "Post_post__cover__overlay__hywfr",
	"post__cover__loading": "Post_post__cover__loading__TT3ZV",
	"post__content": "Post_post__content__XKLJo",
	"post__content__inner": "Post_post__content__inner__EG4Tj",
	"post__content__title": "Post_post__content__title__ME2gH",
	"post__content__excerpt": "Post_post__content__excerpt__vrG3q",
	"afc-button": "Post_afc-button__aCfIj",
	"post__content__metadata": "Post_post__content__metadata__k5t50",
	"post__content__metadata--style-0": "Post_post__content__metadata--style-0__dxRv1",
	"post__content__metadata__date": "Post_post__content__metadata__date__dvBRg",
	"post__content__metadata--style-1": "Post_post__content__metadata--style-1__Se36R",
	"post__content__category": "Post_post__content__category__7c8Hw",
	"text": "Post_text__R_lHb",
	"post__content__category--style-1": "Post_post__content__category--style-1__9lMxk",
	"post__content__category--style-2": "Post_post__content__category--style-2__R16Bl",
	"color": "Post_color__4ul7m",
	"post--masonry": "Post_post--masonry__bes0F",
	"sticky": "Post_sticky__KucHT",
	"post--style-0": "Post_post--style-0__aHGd_",
	"post--style-1": "Post_post--style-1__58OTx",
	"post--style-2": "Post_post--style-2__T3_8e",
	"post--style-3": "Post_post--style-3__q5AJU",
	"post--style-4": "Post_post--style-4__QXpK2",
	"post--widget": "Post_post--widget__Jwwu3",
	"post--light": "Post_post--light__sWAce"
};


/***/ }),

/***/ 3510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1240);
/* harmony import */ var _styles_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Heading = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading)} ${props.className}`,
        style: props.style,
        children: props.children
    });
};
Heading.Title = (props)=>props.children;
Heading.Subtitle = (props)=>props.children;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 4438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3404);
/* harmony import */ var _styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Post = (props)=>{
    const post = props.post;
    const model = `post--style-${props.model}`;
    const color = `post--${props.color}`;
    const hover = props.hover || "zoom-in";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: `${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post)} ${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[model]} ${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[color]}`,
        style: props.style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__inner),
            children: [
                post.coverImage.url && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover)} ${hover}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover__inner),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover__media),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover__media__image),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover__loading),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `afc-spinner afc-spinner--${props.color}`
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: `/posts/${post.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: post.coverImage.url,
                                                    alt: post.title,
                                                    width: props.image_width,
                                                    height: props.image_height
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__cover__overlay)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__content),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__content__inner),
                        children: [
                            post.category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__content__category)} ${(_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["post__content__category--style-1"])}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: post.category
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__content__title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: post.title
                                    })
                                })
                            }),
                            post.excerpt && props.max_words > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default().post__content__excerpt),
                                children: [
                                    post.excerpt.split(" ").splice(0, props.max_words).join(" "),
                                    post.excerpt.split(" ").length > props.max_words && " ..."
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
Post.defaultProps = {
    title: "Title",
    quality: 70,
    max_words: 0,
    image_width: 600
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8549);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4438);
/* harmony import */ var _components_Animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(812);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3510);
/* harmony import */ var _components_Magazine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8767);
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6387);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3877);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_8__, swiper__WEBPACK_IMPORTED_MODULE_9__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_8__, swiper__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











// Import Swiper styles


// Magazine cover image
function Fashion({ preview , allPosts  }) {
    const morePosts = allPosts;
    const AvtorBlogSort = allPosts.filter((word)=>word.author.name === "Gabriela");
    const Avtor = AvtorBlogSort[0].coverImage.url;
    const AvtorTitle = AvtorBlogSort[0].title;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Magazine__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Magazine__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Cover */ .Z.Cover, {
                        image: Avtor,
                        unoptimized: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute left-3 md:left-8 bottom-3 md:bottom-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Animate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    name: "fadeIn",
                                    delay: "1.2s",
                                    duration: "1s",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "alt",
                                        src: "/assets/images/other/barcode-qr.png",
                                        width: 69,
                                        height: 69,
                                        unoptimized: true
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "absolute left-3 md:left-8 top-32 md:top-48 text-white"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "absolute right-3 md:right-8 bottom-3 md:bottom-8 text-white text-right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Title */ .Z.Title, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Animate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            name: "fadeInRightSm",
                                            delay: "1.2s",
                                            duration: "2s",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-3xl text-white uppercase w-10 mr-3 ",
                                                children: AvtorTitle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Subtitle */ .Z.Subtitle, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Animate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            name: "fadeIn",
                                            delay: "1.8s",
                                            duration: "3s",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-white",
                                                children: [
                                                    "Medic specialist",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "\xeen otorinolaringologie",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        className: "text-xs text-white",
                                                        children: "Strada Pantelimon Halipa 14, Iași 700661"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Magazine__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Content */ .Z.Content, {
                        className: "bg-white overflow-x-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Block */ .gO, {
                                className: "py-24 px-4 md:px-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_9__.Pagination
                                    ],
                                    pagination: {
                                        clickable: true
                                    },
                                    className: "swiper--light",
                                    children: morePosts && morePosts.filter((item)=>item.author.name !== "Gabriela").map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                post: item,
                                                model: 2,
                                                max_words: 22,
                                                image_width: 555,
                                                image_height: 555
                                            })
                                        }, item.slug))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Block */ .gO, {
                                className: "px-4 md:px-8 pb-8 mb-16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
                                    className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3",
                                    children: morePosts && morePosts.length > 0 && morePosts.filter((item)=>item.author.name !== "Gabriela").map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                                            className: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Animate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "fadeInUpXs",
                                                delay: `${index + 3}00ms`,
                                                duration: "1.8s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    post: item,
                                                    model: 1,
                                                    image_width: 334,
                                                    image_height: 334,
                                                    image_quality: 100
                                                })
                                            })
                                        }, item.slug))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Block */ .gO, {
                                className: "px-4 md:px-8 pb-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .X2, {
                                    className: "row row-md row--alt",
                                    children: morePosts && morePosts.filter((item)=>item.author.name !== "Gabriela").map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_7__/* .Col */ .JX, {
                                            className: "col-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Animate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "fadeInUpXs",
                                                delay: `${index + 3}00ms`,
                                                duration: "1.8s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    post: item,
                                                    model: 2,
                                                    max_words: 14,
                                                    image_width: 600,
                                                    image_height: 600,
                                                    image_quality: 100,
                                                    hover: "move-in-left"
                                                })
                                            })
                                        }, item.slug))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Magazine__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Footer */ .Z.Footer, {
                                className: "mt-2 mb-8",
                                color: "#333"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getStaticProps({ preview =false  }) {
    const allPosts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__/* .getAllPostsForHome */ .DT)(preview) ?? [];
    return {
        props: {
            preview,
            allPosts
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fashion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,488], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();