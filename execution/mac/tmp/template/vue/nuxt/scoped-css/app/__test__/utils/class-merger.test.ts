import classMerger from "@/utils/class-merger";
import { describe, expect, it } from "vitest";

describe("class-merger", () => {
    it("aとbを入れてa bが返ってくる", () => {
        const test: Array<string> = ["a", "b"];

        const result = classMerger(test);

        expect(result).toBe("a b");
    });

    it("重複は削除される", () => {
        const test: Array<string> = ["a", "b", "a"];

        const result = classMerger(test);

        expect(result).toBe("a b");
    });

    it("空文字は削除される", () => {
        const test: Array<string> = ["a", "", "b"];

        const result = classMerger(test);

        expect(result).toBe("a b");
    });
});
