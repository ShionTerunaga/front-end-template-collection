const basic = {
    RESULT_OK: "ok",
    RESULT_NG: "ng"
} as const;

interface OK<T> {
    readonly kind: typeof basic.RESULT_OK;
    value: T;
}

interface NG<E> {
    readonly kind: typeof basic.RESULT_NG;
    err: E;
}

export type Result<T, E> = OK<NonNullable<T>> | NG<NonNullable<E>>;

export const resultUtility = (function () {
    const { RESULT_NG, RESULT_OK } = basic;

    const isOK = <T extends NonNullable<unknown>, E>(
        res: Result<T, E>
    ): res is OK<T> => {
        return res.kind === RESULT_OK && res.value !== undefined;
    };

    const isNG = <T, E extends NonNullable<unknown>>(
        res: Result<T, E>
    ): res is NG<E> => {
        return res.kind === RESULT_NG && res.err !== undefined;
    };

    const createOk = <T>(value: NonNullable<T>): Result<T, never> => {
        return {
            kind: RESULT_OK,
            value
        };
    };

    const createNg = <E>(err: NonNullable<E>): Result<never, E> => {
        return {
            kind: RESULT_NG,
            err
        };
    };

    return {
        isOK,
        isNG,
        createOk,
        createNg
    };
})();
