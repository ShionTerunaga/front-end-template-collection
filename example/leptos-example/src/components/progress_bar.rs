use leptos::prelude::*;

#[component]
pub fn ProgressBar(
    progress:ReadSignal<u32>,
) -> impl IntoView {
    view! {
        <progress
            max="100"
            value=progress
        />
    }
}