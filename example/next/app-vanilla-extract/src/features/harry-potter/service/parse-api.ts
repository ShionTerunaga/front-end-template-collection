import { resultUtility, Result } from "@/utils/result";
import { APIRes } from "../model/model-res";
import { APIView } from "../model/model-view";
import { optionUtility } from "@/utils/option";
import { HttpError } from "@/utils/error/http/http";

export function parseApi(api: APIRes): Result<Array<APIView>, HttpError> {
    const { createOk } = resultUtility;
    const { optionConversion } = optionUtility;

    const filterList: Array<APIView> = api
        .filter((item) => item.image !== "")
        .map((item) => {
            const {
                alternate_names,
                alternate_actors,
                dateOfBirth,
                yearOfBirth,
                wand,
                ...rest
            } = item;

            const value: APIView = {
                ...rest,
                alternateNames: alternate_names,
                alternateActors: alternate_actors,
                dateOfBirth: optionConversion(dateOfBirth),
                yearOfBirth: optionConversion(yearOfBirth),
                wand: {
                    wood: wand.wood,
                    core: wand.core,
                    length: optionConversion(wand.length)
                }
            };

            return value;
        });

    return createOk(filterList);
}
