const basic = {
    OPTION_SOME: "some",
    OPTION_NONE: "none"
} as const;

interface Some<T> {
    readonly kind: typeof basic.OPTION_SOME;
    value: T;
}

interface None {
    readonly kind: typeof basic.OPTION_NONE;
}

export type Option<T> = Some<NonNullable<T>> | None;

export const optionUtility = (function () {
    const { OPTION_SOME, OPTION_NONE } = basic;

    const createSome = <T>(value: NonNullable<T>): Option<T> => {
        return {
            kind: OPTION_SOME,
            value
        };
    };

    const createNone = (): Option<never> => {
        return {
            kind: OPTION_NONE
        };
    };

    const isSome = <T extends NonNullable<unknown>>(
        opt: Option<T>
    ): opt is Some<T> => {
        return (
            (opt.kind === OPTION_SOME && opt.value !== undefined) ||
            (opt.kind === OPTION_SOME && opt.value !== null)
        );
    };

    const isNone = <T>(opt: Option<T>): opt is None => {
        return opt.kind === OPTION_NONE;
    };

    return {
        createSome,
        createNone,
        isSome,
        isNone
    };
})();
