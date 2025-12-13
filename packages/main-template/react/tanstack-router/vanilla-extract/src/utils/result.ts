const basic = {
    RESULT_OK: "ok",
    RESULT_NG: "ng"
} as const;

interface OK<T> {
    readonly kind: typeof basic.RESULT_OK;
    readonly value: T;
}

interface NG<E> {
    readonly kind: typeof basic.RESULT_NG;
    readonly err: E;
}

interface CheckResultReturn<T, E> {
    fn: () => NonNullable<T>;
    err: NonNullable<E>;
}

interface CheckResultVoid<E> {
    fn: () => void;
    err: NonNullable<E>;
}

interface CheckPromiseReturn<T, E> {
    fn: () => Promise<NonNullable<T>>;
    err: NonNullable<E>;
}

interface CheckPromiseVoid<E> {
    fn: () => Promise<void>;
    err: NonNullable<E>;
}

const UNIT_SYMBOL = Symbol("UNIT_SYMBOL");

interface Unit {
    readonly _unit: typeof UNIT_SYMBOL;
}

export type Result<T, E> = OK<NonNullable<T>> | NG<NonNullable<E>>;

export const resultUtility = (function () {
    const { RESULT_NG, RESULT_OK } = basic;

    const UNIT: Unit = Object.freeze({
        _unit: UNIT_SYMBOL
    });

    const checkPromiseReturn = async <T, E>({
        fn,
        err
    }: CheckPromiseReturn<T, E>): Promise<Result<T, E>> => {
        try {
            const result = await fn();

            return createOk(result);
        } catch {
            return createNg(err);
        }
    };

    const checkPromiseVoid = async <E>({
        fn,
        err
    }: CheckPromiseVoid<E>): Promise<Result<Unit, E>> => {
        try {
            await fn();

            return createOk(UNIT);
        } catch {
            return createNg(err);
        }
    };

    const checkResultReturn = <T, E>({
        fn,
        err
    }: CheckResultReturn<T, E>): Result<T, E> => {
        try {
            const result = fn();

            return createOk(result);
        } catch {
            return createNg(err);
        }
    };

    const checkResultVoid = <E>({
        fn,
        err
    }: CheckResultVoid<E>): Result<Unit, E> => {
        try {
            fn();

            return createOk(UNIT);
        } catch {
            return createNg(err);
        }
    };

    const isOK = <T extends NonNullable<unknown>, E>(
        res: Result<T, E>
    ): res is OK<T> => {
        return res.kind === RESULT_OK;
    };

    const isNG = <T, E extends NonNullable<unknown>>(
        res: Result<T, E>
    ): res is NG<E> => {
        return res.kind === RESULT_NG;
    };

    const createOk = <T>(value: NonNullable<T>): Result<T, never> => {
        return Object.freeze({
            kind: RESULT_OK,
            value
        });
    };

    const createNg = <E>(err: NonNullable<E>): Result<never, E> => {
        return Object.freeze({
            kind: RESULT_NG,
            err
        });
    };

    return Object.freeze({
        UNIT,
        checkResultReturn,
        checkResultVoid,
        checkPromiseReturn,
        checkPromiseVoid,
        isOK,
        isNG,
        createOk,
        createNg
    });
})();
