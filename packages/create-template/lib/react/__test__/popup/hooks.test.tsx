import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { usePopup } from "@/lib/popup/popup.hooks";
import { popupStore } from "@/lib/popup/store";

function TestComponent() {
    const popup = usePopup();

    return <div data-testid="state">{popup.isOpen ? "open" : "closed"}</div>;
}

describe("usePopup hook", () => {
    it("reflects store changes in a component", async () => {
        render(<TestComponent />);

        expect(screen.getByTestId("state").textContent).toBe("closed");

        popupStore.open("child");

        await waitFor(() =>
            expect(screen.getByTestId("state").textContent).toBe("open")
        );

        popupStore.close();
        await waitFor(() =>
            expect(screen.getByTestId("state").textContent).toBe("closed")
        );
    });
});
