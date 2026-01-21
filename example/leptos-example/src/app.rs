use leptos::prelude::*;

use crate::components::progress_bar::ProgressBar;


#[component]
pub fn App() -> impl IntoView {
    let (count,set_count) = signal(0);


    view! { 
        <button
            on:click=move |_| set_count.set(count.get() + 1)
            style:color="red"
        >
            "Count: " {count}
        </button>
        <br/>
        
        <ProgressBar
            progress=count
        />
    }
}