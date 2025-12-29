import { describe, expect, it } from "vitest";
import { optionUtility } from "@/utils/option";

describe("optionUtility", () => {
    const { createSome, createNone, isSome, isNone } = optionUtility;

    it("createSome で作った値は isSome が true になる", () => {
        const some = createSome("value");

        expect(isSome(some)).toBe(true);
        if (isSome(some)) {
            expect(some.value).toBe("value");
        }
    });

    it("createNone で作った値は isNone が true になる", () => {
        const none = createNone();

        expect(isNone(none)).toBe(true);
    });

    it("isSome は some でない場合 false を返す", () => {
        const none = createNone();
        expect(isSome(none)).toBeFalsy();
    });

    it("isNone は none でない場合 false を返す", () => {
        const some = createNone();
        expect(isNone(some)).toBeTruthy();
    });
});
