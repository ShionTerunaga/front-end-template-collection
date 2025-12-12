// Tailwind layout container classes replacing vanilla-extract.
// Arbitrary sizing uses JIT (e.g., w-[450px], h-[250px]).
const popupLayoutStyles = {
    container: "bg-white rounded-md w-[450px] h-[250px] p-2 text-center"
} as const;

export default popupLayoutStyles;
