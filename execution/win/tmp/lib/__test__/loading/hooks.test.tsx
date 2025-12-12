import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useLoading } from "@/lib/loading/loading.hooks";
import { loadingStore } from "@/lib/loading/store";

function TestComponent() {
    const isLoading = useLoading();
    return <div data-testid="state">{isLoading ? "loading" : "idle"}</div>;
}

describe("useLoading hook", () => {
    it("reflects store changes in a component", async () => {
        render(<TestComponent />);

        expect(screen.getByTestId("state").textContent).toBe("idle");

        loadingStore.startLoading();
        await waitFor(() =>
            expect(screen.getByTestId("state").textContent).toBe("loading")
        );

        loadingStore.finishLoading();
        await waitFor(() =>
            expect(screen.getByTestId("state").textContent).toBe("idle")
        );
    });
});
