import { PopupBase } from "@/components/layout";
import { PopupProvider } from "@/utils/lib/popup";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PopupProvider layoutPopup={<PopupBase />}>
            <Component {...pageProps} />
        </PopupProvider>
    );
}
