"use client";

import { useLoading } from "@/lib/loading";
import { Activity } from "react";
import { LoadingComponent } from "../loading-component/loading-components";

export function Loading() {
    const loading = useLoading();

    return (
        <Activity mode={loading ? "visible" : "hidden"}>
            <LoadingComponent />
        </Activity>
    );
}
