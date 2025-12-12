import { resultUtility, Result } from "@/utils/result";
import { APIRes } from "../model/model-res";
import { APIView } from "../model/model-view";
import { optionUtility } from "@/utils/option";
import { HttpError } from "@/utils/error/http/http";

export function parseApi(api: APIRes): Result<Array<APIView>, HttpError> {
    const { createOk } = resultUtility;
    const { createNone, createSome } = optionUtility;
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
                dateOfBirth:
                    dateOfBirth === null
                        ? createNone()
                        : createSome(dateOfBirth),
                yearOfBirth:
                    yearOfBirth === null
                        ? createNone()
                        : createSome(yearOfBirth),
                wand: {
                    wood: wand.wood,
                    core: wand.core,
                    length:
                        wand.length == null
                            ? createNone()
                            : createSome(wand.length)
                }
            };

            return value;
        });

    return createOk(filterList);
}
