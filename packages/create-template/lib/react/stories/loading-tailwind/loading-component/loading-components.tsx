export function LoadingComponent() {
    return (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black/60">
            <div className="w-24 h-24 rounded-full border-8 border-blue-500/20 border-t-blue-500 animate-spin box-border" />
        </div>
    );
}
