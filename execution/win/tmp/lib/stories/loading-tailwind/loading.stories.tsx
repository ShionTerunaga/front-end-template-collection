import { loadingAction } from "@/lib/loading";
import { Loading } from "./loading-core/loading-core";
import "./style.css";

export default {
    title: "loading/tailwind",
    component: Loading
};

export const Default = () => (
    <>
        <button
            onClick={() => {
                loadingAction.startLoading();

                setTimeout(() => loadingAction.finishLoading(), 5000);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
        >
            start loading
        </button>
        <Loading />
    </>
);
