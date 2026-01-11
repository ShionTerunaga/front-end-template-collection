import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link, UNSAFE_withHydrateFallbackProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import "react";
import z from "zod";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "ja",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
var headingFontStyle = { firstSmall: "_2xwh130", firstMiddle: "_2xwh131", firstBig: "_2xwh132" };
var textColor = { textNormal: "dwzodi0", textWhite: "dwzodi1" };
function classMerger(classes) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const cls of classes) {
    if (cls === "") continue;
    if (!seen.has(cls)) {
      seen.add(cls);
      out.push(cls);
    }
  }
  return out.join(" ");
}
function Heading(props) {
  const {
    as = "h1",
    fontStyle = "firstBig",
    color = "textNormal",
    style,
    children
  } = props;
  const cn = classMerger([headingFontStyle[fontStyle], textColor[color]]);
  const As = as;
  return /* @__PURE__ */ jsx(As, { className: cn, style, children });
}
var boxVariants = { boxWidthStyle: { small: "_1q166nx0", middle: "_1q166nx1", big: "_1q166nx2", auto: "_1q166nx3", full: "_1q166nx4" }, boxHeightStyle: { small: "_1q166nx5", middle: "_1q166nx6", big: "_1q166nx7", auto: "_1q166nx8", full: "_1q166nx9" }, boxBorderRadiusStyle: { none: "_1q166nxa", small: "_1q166nxb", middle: "_1q166nxc", big: "_1q166nxd", full: "_1q166nxe" }, border: { none: "_1q166nxf", thin: "_1q166nxg", middle: "_1q166nxh", thick: "_1q166nxi" }, boxShadowStyle: { none: "_1q166nxj", small: "_1q166nxk", middle: "_1q166nxl", big: "_1q166nxm" }, colorStyle: { white: "_1q166nxn", lightGray: "_1q166nxo", gray: "_1q166nxp", darkGray: "_1q166nxq", black: "_1q166nxr", red: "_1q166nxs", blue: "_1q166nxt", green: "_1q166nxu" } };
function Box(props) {
  const {
    as = "div",
    width = "auto",
    height = "auto",
    boxShadow = "none",
    color = "white",
    border = "none",
    borderRadius = "none",
    className = "",
    style,
    children
  } = props;
  const cn = classMerger([
    boxVariants.boxWidthStyle[width],
    boxVariants.boxHeightStyle[height],
    boxVariants.boxShadowStyle[boxShadow],
    boxVariants.colorStyle[color],
    boxVariants.border[border],
    boxVariants.boxBorderRadiusStyle[borderRadius],
    className
  ]);
  const As = as;
  return /* @__PURE__ */ jsx(As, { className: cn, style, children });
}
var __default__$1 = "qvv26x0";
function FontCenter(props) {
  if (typeof props !== "object") {
    throw Error("runtime error");
  }
  const { className, style, children } = props;
  return /* @__PURE__ */ jsx("p", { className: `${__default__$1} ${className}`, style, children });
}
var gridBoxGap = { smallGap: "_5d3yp40", medium: "_5d3yp41", large: "_5d3yp42" };
var gridBoxGridTemplate = { three: "_5d3yp43", four: "_5d3yp44", five: "_5d3yp45" };
var gridBoxBaseStyles = "_5d3yp46";
function GridBox(props) {
  const { children, gap = "large", gridTemplateColumns = "three" } = props;
  const className = classMerger([
    gridBoxGap[gap],
    gridBoxGridTemplate[gridTemplateColumns],
    gridBoxBaseStyles
  ]);
  return /* @__PURE__ */ jsx(Box, { className, children });
}
const ja = {
  app: {
    home: {
      title: "こんにちは、react-router！",
      toServerLoaderPotter: "server-loaderのデータ収集へ移動",
      toClientLoaderPotter: "client-loaderのデータ収集へ移動"
    },
    serverLoaderPotter: {
      title: "server-loaderのデータ収集"
    },
    clientLoaderPotter: {
      title: "client-loaderのデータ収集"
    }
  }
};
function HomeView() {
  return /* @__PURE__ */ jsxs(Box, { as: "main", children: [
    /* @__PURE__ */ jsx(Heading, { children: ja.app.home.title }),
    /* @__PURE__ */ jsx(Link, { to: "/server-loader", children: ja.app.home.toServerLoaderPotter }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Link, { to: "/client-loader", children: ja.app.home.toClientLoaderPotter })
  ] });
}
function meta$2({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomeView, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const APIScheme = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    alternate_names: z.array(z.string()),
    species: z.string(),
    gender: z.enum(["male", "female", ""]),
    house: z.string(),
    dateOfBirth: z.string().nullable(),
    yearOfBirth: z.number().nullable(),
    wizard: z.boolean(),
    ancestry: z.string(),
    eyeColour: z.string(),
    hairColour: z.string(),
    wand: z.object({
      wood: z.string(),
      core: z.string(),
      length: z.number().nullable()
    }),
    patronus: z.string(),
    hogwartsStudent: z.boolean(),
    hogwartsStaff: z.boolean(),
    actor: z.string(),
    alternate_actors: z.array(z.string()),
    alive: z.boolean(),
    image: z.string()
  }).strict()
);
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === void 0;
}
const basic$1 = {
  OPTION_SOME: "some",
  OPTION_NONE: "none"
};
const optionUtility = (function() {
  const { OPTION_SOME, OPTION_NONE } = basic$1;
  const createSome = (value) => {
    return Object.freeze({
      kind: OPTION_SOME,
      isSome: true,
      isNone: false,
      value
    });
  };
  const createNone = () => {
    return Object.freeze({
      kind: OPTION_NONE,
      isSome: false,
      isNone: true
    });
  };
  const optionConversion = (value) => {
    if (isNull(value) || isUndefined(value)) {
      return createNone();
    }
    return createSome(value);
  };
  return Object.freeze({
    createSome,
    createNone,
    optionConversion
  });
})();
function envParse(env) {
  const { optionConversion } = optionUtility;
  return optionConversion(env);
}
const appConfig = {
  apiKey: envParse("https://hp-api.onrender.com/api/characters")
};
const basic = {
  RESULT_OK: "ok",
  RESULT_NG: "ng"
};
const UNIT_SYMBOL = /* @__PURE__ */ Symbol("UNIT_SYMBOL");
const resultUtility = (function() {
  const { RESULT_NG, RESULT_OK } = basic;
  const UNIT = Object.freeze({
    _unit: UNIT_SYMBOL
  });
  const checkPromiseReturn = async ({
    fn,
    err
  }) => {
    try {
      const result = await fn();
      return createOk(result);
    } catch {
      return createNg(err);
    }
  };
  const checkPromiseVoid = async ({
    fn,
    err
  }) => {
    try {
      await fn();
      return createOk(UNIT);
    } catch {
      return createNg(err);
    }
  };
  const checkResultReturn = ({
    fn,
    err
  }) => {
    try {
      const result = fn();
      return createOk(result);
    } catch {
      return createNg(err);
    }
  };
  const checkResultVoid = ({
    fn,
    err
  }) => {
    try {
      fn();
      return createOk(UNIT);
    } catch {
      return createNg(err);
    }
  };
  const createOk = (value) => {
    return Object.freeze({
      kind: RESULT_OK,
      isOk: true,
      isErr: false,
      value
    });
  };
  const createNg = (err) => {
    return Object.freeze({
      kind: RESULT_NG,
      isOk: false,
      isErr: true,
      err
    });
  };
  return Object.freeze({
    UNIT,
    checkResultReturn,
    checkResultVoid,
    checkPromiseReturn,
    checkPromiseVoid,
    createOk,
    createNg
  });
})();
function parseApi(api) {
  const { createOk } = resultUtility;
  const { createNone, createSome } = optionUtility;
  const filterList = api.filter((item) => item.image !== "").map((item) => {
    const {
      alternate_names,
      alternate_actors,
      dateOfBirth,
      yearOfBirth,
      wand,
      ...rest
    } = item;
    const value = {
      ...rest,
      alternateNames: alternate_names,
      alternateActors: alternate_actors,
      dateOfBirth: isNull(dateOfBirth) ? createNone() : createSome(dateOfBirth),
      yearOfBirth: isNull(yearOfBirth) ? createNone() : createSome(yearOfBirth),
      wand: {
        wood: wand.wood,
        core: wand.core,
        length: isNull(wand.length) ? createNone() : createSome(wand.length)
      }
    };
    return value;
  });
  return createOk(createSome(filterList));
}
const createHttpScheme = /* @__PURE__ */ (function() {
  const httpErrorStatusResponse = {
    notFound: 404,
    internalServerError: 500,
    forbidden: 403,
    badRequest: 400
  };
  const httpCustomStatusScheme = {
    returnNotFoundAPIUrl: 4041,
    returnNoPermission: 4031,
    returnBadRequest: 4001,
    returnInternalServerError: 5001
  };
  const httpErrorMessage = {
    returnNotFoundAPIUrl: "APIのURLが見つかりません",
    returnNoPermission: "権限がありません",
    returnBadRequest: "不正なリクエストです",
    returnInternalServerError: "サーバーエラーです"
  };
  return {
    httpErrorStatusResponse,
    httpCustomStatusScheme,
    httpErrorMessage
  };
})();
const createHttpError = (function() {
  const httpErrorScheme = createHttpScheme;
  const createHttpError2 = ({
    status,
    message
  }) => {
    return {
      type: "httpError",
      status,
      message
    };
  };
  const returnNotFoundAPIUrl = (function() {
    return createHttpError2({
      status: httpErrorScheme.httpCustomStatusScheme.returnNotFoundAPIUrl,
      message: httpErrorScheme.httpErrorMessage.returnNotFoundAPIUrl
    });
  })();
  const returnNoPermission = (function() {
    return createHttpError2({
      status: httpErrorScheme.httpCustomStatusScheme.returnNoPermission,
      message: httpErrorScheme.httpErrorMessage.returnNoPermission
    });
  })();
  const returnBadRequest = (function() {
    return createHttpError2({
      status: httpErrorScheme.httpCustomStatusScheme.returnBadRequest,
      message: httpErrorScheme.httpErrorMessage.returnBadRequest
    });
  })();
  const returnInternalServerError = (function() {
    return createHttpError2({
      status: httpErrorScheme.httpCustomStatusScheme.returnInternalServerError,
      message: httpErrorScheme.httpErrorMessage.returnInternalServerError
    });
  })();
  return {
    returnInternalServerError,
    returnNotFoundAPIUrl,
    returnNoPermission,
    returnBadRequest
  };
})();
const fetcherErrorScheme = (function() {
  const {
    httpCustomStatusScheme,
    httpErrorStatusResponse,
    httpErrorMessage
  } = createHttpScheme;
  const fetcherErrorStatusScheme = {
    ...httpCustomStatusScheme,
    returnNotSetAPIUrl: 4040,
    returnSchemeError: 5e3,
    returnParseError: 8e3,
    returnFetchFunctionError: 9e3,
    returnUnknownError: 9999
  };
  const fetchErrorMessage = {
    ...httpErrorMessage,
    returnNotSetAPIUrl: "APIのURLが設定されていません",
    returnSchemeError: "スキームエラーが発生しました",
    returnParseError: "データのパースに失敗しました",
    returnFetchFunctionError: "フェッチ関数でエラーが発生しました",
    returnUnknownError: "不明なエラーが発生しました"
  };
  return {
    httpErrorStatusResponse,
    fetcherErrorStatusScheme,
    fetchErrorMessage
  };
})();
const createFetcherError = (function() {
  const {
    returnBadRequest,
    returnNoPermission,
    returnNotFoundAPIUrl,
    returnInternalServerError
  } = createHttpError;
  const {
    fetchErrorMessage,
    fetcherErrorStatusScheme,
    httpErrorStatusResponse
  } = fetcherErrorScheme;
  const createFetcher = ({
    status,
    errorMessage
  }) => {
    return {
      type: "fetcherError",
      status,
      message: errorMessage
    };
  };
  const returnNotSetApiUrl = (function() {
    return createFetcher({
      status: fetcherErrorStatusScheme.returnNotSetAPIUrl,
      errorMessage: fetchErrorMessage.returnNotSetAPIUrl
    });
  })();
  const returnSchemeError = (function() {
    return createFetcher({
      status: fetcherErrorStatusScheme.returnSchemeError,
      errorMessage: fetchErrorMessage.returnSchemeError
    });
  })();
  const returnParseError = (function() {
    return createFetcher({
      status: fetcherErrorStatusScheme.returnParseError,
      errorMessage: fetchErrorMessage.returnParseError
    });
  })();
  const returnFetchFunctionError = (function() {
    return createFetcher({
      status: fetcherErrorStatusScheme.returnFetchFunctionError,
      errorMessage: fetchErrorMessage.returnFetchFunctionError
    });
  })();
  const returnUnknownError = (function() {
    return createFetcher({
      status: fetcherErrorStatusScheme.returnUnknownError,
      errorMessage: fetchErrorMessage.returnUnknownError
    });
  })();
  return {
    httpErrorStatusResponse,
    returnNoPermission,
    returnNotFoundAPIUrl,
    returnBadRequest,
    returnUnknownError,
    returnNotSetApiUrl,
    returnSchemeError,
    returnParseError,
    returnFetchFunctionError,
    returnInternalServerError
  };
})();
async function fetcher({
  url,
  scheme,
  cache
}) {
  const { notFound, forbidden, badRequest, internalServerError } = createHttpScheme.httpErrorStatusResponse;
  const {
    returnNotSetApiUrl,
    returnNotFoundAPIUrl,
    returnNoPermission,
    returnBadRequest,
    returnSchemeError,
    returnUnknownError,
    returnFetchFunctionError,
    returnInternalServerError
  } = createFetcherError;
  const { createNone, createSome } = optionUtility;
  const { createNg, createOk, checkPromiseReturn } = resultUtility;
  if (url.isNone) {
    return createNg(returnNotSetApiUrl);
  }
  const res = await checkPromiseReturn({
    fn: () => fetch(url.value, { cache }),
    err: returnFetchFunctionError
  });
  if (res.isErr) {
    return res;
  }
  if (!res.value.ok) {
    const status = res.value.status;
    switch (status) {
      case notFound:
        return createNg(returnNotFoundAPIUrl);
      case forbidden:
        return createNg(returnNoPermission);
      case badRequest:
        return createNg(returnBadRequest);
      case internalServerError:
        return createNg(returnInternalServerError);
      default:
        return createNg(returnUnknownError);
    }
  }
  const resValue = await res.value.json();
  const judgeType = scheme.safeParse(resValue);
  if (judgeType.error !== void 0) {
    return createNg(returnSchemeError);
  }
  const okValue = judgeType.data;
  if (okValue === void 0 || okValue === null) {
    return createOk(createNone());
  }
  return createOk(createSome(okValue));
}
async function hasParseFetcher({
  url,
  scheme,
  cache,
  parse
}) {
  const { createOk } = resultUtility;
  const { createNone } = optionUtility;
  const fetcherResult = await fetcher({
    url,
    scheme,
    cache
  });
  if (fetcherResult.isErr) {
    return fetcherResult;
  }
  if (fetcherResult.value.isNone) {
    return createOk(createNone());
  }
  return parse(fetcherResult.value.value);
}
async function getCharacter(cache) {
  return await hasParseFetcher({
    url: appConfig.apiKey,
    scheme: APIScheme,
    cache,
    parse: parseApi
  });
}
var __default__ = { cardContainer: "thzb2g0", image: "thzb2g1", title: "thzb2g2" };
function Card(props) {
  const { title, src, alt, srcWidth, srcHeight, boxHeight } = props;
  const cardStyle = {
    width: srcWidth,
    height: boxHeight
  };
  return /* @__PURE__ */ jsxs("div", { className: __default__.cardContainer, style: cardStyle, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        className: __default__.image,
        width: srcWidth,
        height: srcHeight
      }
    ),
    /* @__PURE__ */ jsx("p", { className: __default__.title, children: title })
  ] });
}
function CardListView(props) {
  const { potters, title } = props;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(Heading, { children: /* @__PURE__ */ jsx(FontCenter, { children: title }) }),
    /* @__PURE__ */ jsx(GridBox, { children: potters.map(({ id, image, name }) => /* @__PURE__ */ jsx(
      Card,
      {
        src: image,
        alt: id,
        title: name,
        srcWidth: 150,
        boxHeight: 300,
        srcHeight: 200
      },
      id
    )) })
  ] });
}
function CardLayout({
  characters,
  title
}) {
  if (characters.isErr) {
    return /* @__PURE__ */ jsxs(Box, { children: [
      "Error: ",
      characters.err.message
    ] });
  }
  if (characters.value.isNone) {
    return /* @__PURE__ */ jsx(Box, { children: "No characters found." });
  }
  return /* @__PURE__ */ jsx(CardListView, { potters: characters.value.value, title });
}
function ServerLoaderView({
  characters
}) {
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      characters,
      title: ja.app.serverLoaderPotter.title
    }
  );
}
function meta$1({}) {
  return [{
    title: "Server Loader"
  }, {
    name: "description",
    content: "This is the server loader route."
  }];
}
async function loader({}) {
  const characters = await getCharacter();
  return characters;
}
const serverLoader = UNSAFE_withComponentProps(function ServerLoaderRoute({
  loaderData
}) {
  const character = loaderData;
  return /* @__PURE__ */ jsx(ServerLoaderView, {
    characters: character
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: serverLoader,
  loader,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function ClientLoaderView({
  characters
}) {
  return /* @__PURE__ */ jsx(
    CardLayout,
    {
      characters,
      title: ja.app.clientLoaderPotter.title
    }
  );
}
function meta({}) {
  return [{
    title: "client Loader"
  }, {
    name: "description",
    content: "This is the client loader route."
  }];
}
async function clientLoader({}) {
  const characters = await getCharacter();
  return characters;
}
const HydrateFallback = UNSAFE_withHydrateFallbackProps(function HydrateFallback2() {
  return /* @__PURE__ */ jsx("div", {
    children: "Loading..."
  });
});
const clientLoader_default = UNSAFE_withComponentProps(function ClientLoaderRoute({
  loaderData
}) {
  const character = loaderData;
  return /* @__PURE__ */ jsx(ClientLoaderView, {
    characters: character
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HydrateFallback,
  clientLoader,
  default: clientLoader_default,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DWf_qkNv.js", "imports": ["/assets/chunk-WWGJGFF6-DYiR-IbF.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-C3PKhbC9.js", "imports": ["/assets/chunk-WWGJGFF6-DYiR-IbF.js"], "css": ["/assets/root-C4SPBCkT.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-WvHp2RPr.js", "imports": ["/assets/chunk-WWGJGFF6-DYiR-IbF.js", "/assets/ja-C0CTg_GC.js"], "css": ["/assets/ja-BgTHGeO3.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/server-loader": { "id": "routes/server-loader", "parentId": "root", "path": "/server-loader", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/server-loader-BzvNwAZ7.js", "imports": ["/assets/chunk-WWGJGFF6-DYiR-IbF.js", "/assets/card-layout-Bvh3wAG5.js", "/assets/ja-C0CTg_GC.js"], "css": ["/assets/card-layout-KmqeSztj.css", "/assets/ja-BgTHGeO3.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/client-loader": { "id": "routes/client-loader", "parentId": "root", "path": "/client-loader", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": true, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/client-loader-fA4t_XsL.js", "imports": ["/assets/chunk-WWGJGFF6-DYiR-IbF.js", "/assets/card-layout-Bvh3wAG5.js", "/assets/ja-C0CTg_GC.js"], "css": ["/assets/card-layout-KmqeSztj.css", "/assets/ja-BgTHGeO3.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-eafb6250.js", "version": "eafb6250", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/server-loader": {
    id: "routes/server-loader",
    parentId: "root",
    path: "/server-loader",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/client-loader": {
    id: "routes/client-loader",
    parentId: "root",
    path: "/client-loader",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
