(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 3095:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__h_8de"
};


/***/ }),

/***/ 4067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Meta.js
var Meta = __webpack_require__(8549);
// EXTERNAL MODULE: ./components/Grid.js
var Grid = __webpack_require__(6387);
;// CONCATENATED MODULE: ./components/Form.js


function Form(props) {
    return /*#__PURE__*/ _jsxs("div", {
        className: "comment-form",
        children: [
            props.title && /*#__PURE__*/ _jsx("h4", {
                className: "text-2xl font-bold font-body mb-8",
                children: props.title
            }),
            /*#__PURE__*/ _jsx("form", {
                children: /*#__PURE__*/ _jsxs(Row, {
                    className: "row row-md",
                    children: [
                        /*#__PURE__*/ _jsx(Col, {
                            className: "col-sm-12 col-md-6 col-lg-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "form__item",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        htmlFor: "form-item-name",
                                        children: "Your Name"
                                    }),
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "text",
                                        id: "form-item-name"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            className: "col-sm-12 col-md-6 col-lg-6",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "form__item",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        htmlFor: "form-item-email",
                                        children: "Your Email"
                                    }),
                                    /*#__PURE__*/ _jsx("input", {
                                        type: "email",
                                        id: "form-item-email"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            className: "col-12",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "form__item",
                                children: [
                                    /*#__PURE__*/ _jsx("label", {
                                        htmlFor: "form-item-message",
                                        children: "Your Message"
                                    }),
                                    /*#__PURE__*/ _jsx("textarea", {
                                        id: "form-item-message"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            className: "col-12",
                            children: /*#__PURE__*/ _jsx("button", {
                                className: "button bg-black hover:bg-red-500 px-4 py-2 text-white",
                                children: "Send Message"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__(1007);
// EXTERNAL MODULE: ./components/Magazine.js + 1 modules
var Magazine = __webpack_require__(8767);
;// CONCATENATED MODULE: ./components/PostNavigation.js


function PostNavigation(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `post-navigation border-t border-b border-solid border-gray-100 ${props.className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-between",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-center md:text-left ",
                children: "\xa9 2024 - Toate drepturile rezervate."
            })
        })
    });
}

;// CONCATENATED MODULE: external "@contentful/rich-text-react-renderer"
const rich_text_react_renderer_namespaceObject = require("@contentful/rich-text-react-renderer");
;// CONCATENATED MODULE: external "@contentful/rich-text-types"
const rich_text_types_namespaceObject = require("@contentful/rich-text-types");
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__(3095);
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);
;// CONCATENATED MODULE: ./components/rich-text-asset.js


function RichTextAsset({ id , assets  }) {
    const asset = assets?.find((asset)=>asset.sys.id === id);
    if (asset?.url) {
        return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: asset.url,
            width: 300,
            height: 200,
            alt: asset.description
        });
    }
    return null;
}

;// CONCATENATED MODULE: ./components/post-body.js





const customMarkdownOptions = (content)=>({
        renderNode: {
            [rich_text_types_namespaceObject.BLOCKS.EMBEDDED_ASSET]: (node)=>/*#__PURE__*/ jsx_runtime_.jsx(RichTextAsset, {
                    id: node.data.target.sys.id,
                    assets: content.links.assets.block
                })
        }
    });
function PostBody({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (markdown_styles_module_default()).markdown,
            children: (0,rich_text_react_renderer_namespaceObject.documentToReactComponents)(content?.json, customMarkdownOptions(content))
        })
    });
}

;// CONCATENATED MODULE: ./pages/posts/[slug].js











function Post({ post , morePosts , preview  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
                title: post?.title || "Заголовок по умолчанию"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Magazine/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Magazine/* default.Cover */.Z.Cover, {
                        image: post?.coverImage.url,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Magazine/* default.Footer */.Z.Footer, {
                            className: "absolute bottom-3 w-100"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Magazine/* default.Content */.Z.Content, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Grid/* Block */.gO, {
                            className: "pt-10 md:pt-16 lg:pt-20 xl:pt-24 px-4 md:px-16 xl:px-20 pb-10 md:pb-16",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "single-post",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "single-post__body",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                            content: post?.content
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostNavigation, {
                                    prevLink: "#",
                                    prevTitle: "How much will it Cost to Travel in 2022?",
                                    nextLink: "#",
                                    nextTitle: "Which is correct Travelling or Traveling?",
                                    className: "py-12 my-12"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
async function getStaticProps({ params , preview =false  }) {
    const data = await (0,api/* getPostAndMorePosts */.ds)(params.slug, preview);
    return {
        props: {
            preview,
            post: data?.post ?? null,
            morePosts: data?.morePosts ?? null
        }
    };
}
async function getStaticPaths() {
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
    return {
        paths: allPosts?.map(({ slug  })=>`/posts/${slug}`) ?? [],
        fallback: true
    };
}


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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,488,7], () => (__webpack_exec__(4067)));
module.exports = __webpack_exports__;

})();