import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { optionUtility } from "@/utils/option";
import { appConfig } from "@/shared/config/config";
import { APIRes, getCharacter } from "@/features/harry-potter";
import { resultUtility } from "@/utils/result";

const mockAPIData: APIRes = [
    {
        id: "1",
        name: "Harry Potter",
        alternate_names: [],
        species: "human",
        gender: "male",
        house: "Gryffindor",
        dateOfBirth: "31-07-1980",
        yearOfBirth: 1980,
        wizard: true,
        ancestry: "half-blood",
        eyeColour: "green",
        hairColour: "black",
        wand: {
            wood: "holly",
            core: "phoenix feather",
            length: 11
        },
        patronus: "stag",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alternate_actors: [],
        alive: true,
        image: "https://hp-api/image.jpg"
    }
];

global.fetch = vi.fn();

const mockFetch = fetch as Mock;

describe("getCharacter", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    const { createNone, createSome } = optionUtility;
    const { isNG, isOK } = resultUtility;

    it("APIのURLを設定していない場合", async () => {
        vi.spyOn(appConfig, "apiKey", "get").mockReturnValue(createNone());

        const result = await getCharacter();

        expect(result.kind).toBe("ng");

        if (isOK(result)) return;

        expect(result.err.status).toBe(4040);
        expect(result.err.message).toBe("APIのURLが設定されていません");
    });

    it("レスポンスがerrorの場合", async () => {
        vi.spyOn(appConfig, "apiKey", "get").mockReturnValue(
            createSome("https://mock-api.com/characters")
        );

        mockFetch.mockResolvedValue({
            ok: false,
            status: 500, //statusコードは存在するものを定義する
            json: async () => ({
                message: "mock error"
            })
        });

        const result = await getCharacter();

        expect(result.kind).toBe("ng");

        if (isOK(result)) return;

        expect(result.err.status).toBe(5001);
        expect(result.err.message).toBe("サーバーエラーです");
    });

    it("レスポンスがerrorでstatusコードが設定していないものが来た場合", async () => {
        vi.spyOn(appConfig, "apiKey", "get").mockReturnValue(
            createSome("https://mock-api.com/characters")
        );

        mockFetch.mockResolvedValue({
            ok: false,
            status: 300, //statusコードは存在しないものを定義する
            json: async () => ({
                message: "mock error"
            })
        });

        const result = await getCharacter();

        expect(result.kind).toBe("ng");

        if (isOK(result)) return;

        expect(result.err.status).toBe(9999);
        expect(result.err.message).toBe("unknown error");
    });

    it("スキームが合わない場合", async () => {
        vi.spyOn(appConfig, "apiKey", "get").mockReturnValue(
            createSome("https://mock-api.com/characters")
        );

        mockFetch.mockResolvedValue({
            ok: true,
            json: async () => [{ ...mockAPIData[0], wand: null }]
        });

        const result = await getCharacter();

        expect(result.kind).toBe("ng");

        if (isOK(result)) return;

        expect(result.err.status).toBe(5000);
        expect(result.err.message).toContain("スキームが間違っています");
    });

    it("should return parsed characters when valid data is provided", async () => {
        vi.spyOn(appConfig, "apiKey", "get").mockReturnValue(
            createSome("https://mock-api.com/characters")
        );

        mockFetch.mockResolvedValue({
            ok: true,
            json: async () => mockAPIData
        });

        const result = await getCharacter();

        expect(result.kind).toBe("ok");

        if (isNG(result)) return;

        expect(result.value.length).toBe(1);

        expect(result.value[0].name).toBe("Harry Potter");
    });
});
