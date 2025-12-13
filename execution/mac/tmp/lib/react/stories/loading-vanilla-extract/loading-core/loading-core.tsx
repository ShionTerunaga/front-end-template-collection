"use client";

import { useLoading } from "@/lib/loading";
import { Activity } from "react";
import { LoadingComponet } from "../loading-component/loading-components";

export function Loading() {
    const loading = useLoading();

    return (
        <Activity mode={loading ? "visible" : "hidden"}>
            <LoadingComponet />
        </Activity>
    );
}
