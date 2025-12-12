"use client";

import {
    ActionDispatch,
    createContext,
    JSX,
    use,
    useContext,
    useReducer
} from "react";
import { Result, resultUtility } from "@/utils/result";
import { ChildrenOnly } from "@/shared/types/react";

interface ReducerParams<S, D> {
    errorMessage: string;
    reducer: (state: S, action: D) => S;
    initialState: S;
}

type Props = ChildrenOnly;

type ReducerType<S, D> = [S, ActionDispatch<[action: D]>];

export function createReducerContext<S, D>({
    errorMessage,
    reducer,
    initialState
}: ReducerParams<S, D>): [
    (props: Props) => JSX.Element,
    () => ReducerType<S, D>
] {
    const { createNg, createOk, isNG } = resultUtility;

    const Context = createContext<Result<ReducerType<S, D>, Error>>(
        createNg(new Error(errorMessage))
    );

    const Provider = ({ children }: ChildrenOnly): JSX.Element => {
        const reducerResult = useReducer<S, [action: D]>(reducer, initialState);

        const result: Result<ReducerType<S, D>, Error> = createOk(
            reducerResult
        );

        return <Context value={result}>{children}</Context>;
    };

    const useReducerContext = (): ReducerType<S, D> => {
        const result = useContext(Context);

        if (isNG(result)) {
            throw result.err;
        }

        return result.value;
    };

    return [Provider, useReducerContext];
}
