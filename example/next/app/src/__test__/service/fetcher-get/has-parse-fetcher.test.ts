import { hasParseFetcher } from "@/service/fetcher-get/has-parse-fetcher";
import { z } from "zod";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { optionUtility } from "@/utils/option";
import { resultUtility } from "@/utils/result";

const mockFetch = vi.fn();

describe("hasParseFetcher", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubGlobal("fetch", mockFetch);
    });

    const { createSome } = optionUtility;
    const { createOk } = resultUtility;

    it("propagates ng from fetcher", async () => {
        mockFetch.mockResolvedValue({
            ok: false,
            status: 500,
            json: async () => ({})
        });

        const schema = z.object({});

        const result = await hasParseFetcher({
            url: createSome("https://example.com"),
            scheme: schema,
            parse: () => createOk("ok")
        });

        expect(result.kind).toBe("ng");
    });

    it("returns parse result when fetcher ok", async () => {
        const payload = { a: 1 };
        mockFetch.mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => payload
        });

        const schema = z.object({ a: z.number() });

        const result = await hasParseFetcher({
            url: createSome("https://example.com"),
            scheme: schema,
            parse: () => createOk("parsed")
        });

        expect(result.kind).toBe("ok");
        if (result.kind === "ok") expect(result.value).toBe("parsed");
    });
});
