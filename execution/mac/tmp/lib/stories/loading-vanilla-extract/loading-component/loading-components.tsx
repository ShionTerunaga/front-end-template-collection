import loadingStyles from "./loading-component.css";

export function LoadingComponet() {
    return (
        <div className={loadingStyles.container}>
            <div className={loadingStyles.indicator} />
        </div>
    );
}
