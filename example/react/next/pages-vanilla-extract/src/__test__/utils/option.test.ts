import { optionUtility, Option } from "@/utils/option";
import { describe, expect, it } from "vitest";

describe("optionUtility", () => {
    const { createSome, createNone, isNone, isSome } = optionUtility;

    it("someに値を代入したらvalueに値が入っている", () => {
        const someOption: Option<string> = createSome("value");

        if (someOption.kind === "none") {
            throw new Error("none");
        }

        expect(someOption.value).toEqual("value");
    });

    it("noneに値を代入したらkindがnoneになる", () => {
        const noneOption: Option<string> = createNone();

        expect(noneOption.kind).toEqual("none");
    });

    it("isSomeでsomeかどうか判定できる", () => {
        const someOption: Option<string> = createSome("value");
        const noneOption: Option<string> = createNone();

        expect(isSome(someOption)).toBeTruthy();
        expect(isSome(noneOption)).toBeFalsy();
    });

    it("isNoneでnoneかどうか判定できる", () => {
        const someOption: Option<string> = createSome("value");
        const noneOption: Option<string> = createNone();

        expect(isNone(someOption)).toBeFalsy();
        expect(isNone(noneOption)).toBeTruthy();
    });
});
