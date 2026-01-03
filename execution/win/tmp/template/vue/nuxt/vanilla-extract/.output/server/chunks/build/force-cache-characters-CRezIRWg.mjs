import { defineComponent, withAsyncContext, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import z from 'zod';
import { b as useRuntimeConfig } from './server.mjs';
import { j as ja } from './ja-Bj0G-_zt.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const basic$1 = {
  RESULT_OK: "ok",
  RESULT_NG: "ng"
};
const UNIT_SYMBOL = /* @__PURE__ */ Symbol("UNIT_SYMBOL");
const resultUtility = (function() {
  const { RESULT_NG, RESULT_OK } = basic$1;
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
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === void 0;
}
const basic = {
  OPTION_SOME: "some",
  OPTION_NONE: "none"
};
const optionUtility = (function() {
  const { OPTION_SOME, OPTION_NONE } = basic;
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
var __default__$1 = { cardContainer: "fk0it80", image: "fk0it81", title: "fk0it82" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    title: {},
    src: {},
    alt: {},
    boxHeight: {},
    srcWidth: {},
    srcHeight: {}
  },
  setup(__props) {
    const boxStyle = {
      height: `${__props.boxHeight}px`,
      width: `${__props.srcWidth}px`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(__default__$1).cardContainer,
        style: boxStyle
      }, _attrs))}><img class="${ssrRenderClass(unref(__default__$1).image)}"${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt)}${ssrRenderAttr("width", __props.srcWidth)}${ssrRenderAttr("height", __props.srcHeight)}><p class="${ssrRenderClass(unref(__default__$1).title)}">${ssrInterpolate(__props.title)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/card/card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    errorMessage: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(_attrs)}>Error:${ssrInterpolate(props.errorMessage)}</p>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/error/error.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var __default__ = { gridBoxBaseStyles: "i2mzpj0", titleStyles: "i2mzpj1" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "character-list",
  __ssrInlineRender: true,
  props: {
    characterList: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}><h1 class="${ssrRenderClass(unref(__default__).titleStyles)}">${ssrInterpolate(props.title)}</h1>`);
      if (props.characterList.isErr) {
        _push(ssrRenderComponent(unref(_sfc_main$3), {
          errorMessage: props.characterList.err.message
        }, null, _parent));
      } else if (props.characterList.value.isNone) {
        _push(ssrRenderComponent(unref(_sfc_main$3), { "error-message": "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093" }, null, _parent));
      } else {
        _push(`<div class="${ssrRenderClass(unref(__default__).gridBoxBaseStyles)}"><!--[-->`);
        ssrRenderList(props.characterList.value.value, (character) => {
          _push(ssrRenderComponent(unref(_sfc_main$5), {
            key: character.id,
            title: character.name,
            src: character.image,
            alt: character.name,
            boxHeight: 300,
            srcWidth: 150,
            srcHeight: 200
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/view/character-list/character-list.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
function envParse(env) {
  const { optionConversion } = optionUtility;
  return optionConversion(env);
}
const appConfig = function() {
  const config = useRuntimeConfig();
  return {
    apiKey: envParse(config.public.NUXT_PUBLIC_API_KEY)
  };
};
function parseApi(api) {
  const { createOk } = resultUtility;
  const { optionConversion, createSome } = optionUtility;
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
      dateOfBirth: optionConversion(dateOfBirth),
      yearOfBirth: optionConversion(yearOfBirth),
      wand: {
        wood: wand.wood,
        core: wand.core,
        length: optionConversion(wand.length)
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
    returnNotFoundAPIUrl: "API\u306EURL\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
    returnNoPermission: "\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093",
    returnBadRequest: "\u4E0D\u6B63\u306A\u30EA\u30AF\u30A8\u30B9\u30C8\u3067\u3059",
    returnInternalServerError: "\u30B5\u30FC\u30D0\u30FC\u30A8\u30E9\u30FC\u3067\u3059"
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
    returnNotSetAPIUrl: "API\u306EURL\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
    returnSchemeError: "\u30B9\u30AD\u30FC\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
    returnParseError: "\u30C7\u30FC\u30BF\u306E\u30D1\u30FC\u30B9\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
    returnFetchFunctionError: "\u30D5\u30A7\u30C3\u30C1\u95A2\u6570\u3067\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
    returnUnknownError: "\u4E0D\u660E\u306A\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"
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
    url: appConfig().apiKey,
    scheme: APIScheme,
    cache,
    parse: parseApi
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "force-cache-characters",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const characterList = ([__temp, __restore] = withAsyncContext(() => getCharacter("force-cache")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$2), mergeProps({
        title: unref(ja).app.noStoreCharacter.title,
        characterList: unref(characterList)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("screen/force-cache-character/force-cache-characters.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "force-cache-characters",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/force-cache-characters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=force-cache-characters-CRezIRWg.mjs.map
