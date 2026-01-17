use leptos::mount::mount_to_body;
use leptos::prelude::*;

fn main() {
    mount_to_body(App);
}

#[component]
fn App() -> impl IntoView {
    let (count,set_count) = signal(0);


    view! { 
        <button
            on:click=move |_| set_count.set(count.get() + 1)
        >
            "Count: " {count}
        </button>
    }
}
