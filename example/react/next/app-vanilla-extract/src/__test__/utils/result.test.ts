import { describe, expect, it } from "vitest";
import { resultUtility } from "@/utils/result";

describe("resultUtility", () => {
    const { isOK, isNG, createOk, createNg } = resultUtility;

    it("createOk で作った値は isOK が true になる", () => {
        const ok = createOk("value");

        expect(isOK(ok)).toBeTruthy();
        if (isOK(ok)) {
            expect(ok.value).toBe("value");
        }
    });

    it("createNg で作った値は isNG が true になる", () => {
        const ng = createNg("err");

        expect(isNG(ng)).toBe(true);
        if (isNG(ng)) {
            expect(ng.err).toBe("err");
        }
    });

    it("isOK は ok でない場合 false を返す", () => {
        const ng = createNg("err");
        expect(isOK(ng)).toBeFalsy();
    });

    it("isNG は ng でない場合 false を返す", () => {
        const ok = createOk("value");
        expect(isNG(ok)).toBeFalsy();
    });
});
