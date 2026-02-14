use crate::router::home::Home;
use crate::router::single_dynamic_fetch::SingleDynamicFetch;
use leptos::prelude::*;
use leptos_router::components::*;
use leptos_router::path;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Router>
            <Routes fallback=|| view! { <div>"Not Found"</div> }>
                <Route path=path!("") view=Home />
                <Route path=path!("/single-dynamic-fetch") view=SingleDynamicFetch />
            </Routes>
        </Router>
    }
}
