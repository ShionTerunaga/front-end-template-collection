use crate::router::home::Home;
use leptos::prelude::*;
use leptos_router::components::*;
use leptos_router::path;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Router>
            <Routes fallback=|| view! { <div>"Not Found"</div> }>
                <Route path=path!("") view=Home />
            </Routes>
        </Router>
    }
}
