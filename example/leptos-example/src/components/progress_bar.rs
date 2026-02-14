use leptos::prelude::*;

#[component]
pub fn ProgressBar() -> impl IntoView {
    view! {
        <progress
            max="100"
            value="50"
        />
    }
}
