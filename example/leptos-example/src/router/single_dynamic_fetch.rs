use crate::features::harry_potter::{get_characters, CharacterView};
use leptos::prelude::*;
use leptos::task::spawn_local;
use leptos_router::components::A;

#[component]
pub fn SingleDynamicFetch() -> impl IntoView {
    let characters = RwSignal::new(Vec::<CharacterView>::new());
    let loading = RwSignal::new(true);
    let error = RwSignal::new(None::<String>);

    spawn_local(async move {
        match get_characters().await {
            Ok(items) => {
                characters.set(items);
                error.set(None);
            }
            Err(err) => {
                characters.set(Vec::new());
                error.set(Some(err.to_string()));
            }
        }
        loading.set(false);
    });

    view! {
        <main class="page">
            <section class="panel">
                <h1 class="title">"動的なデータ収集"</h1>
                <Show
                    when=move || !loading.get()
                    fallback=move || view! { <p>"Loading..."</p> }
                >
                    {move || {
                        if let Some(err) = error.get() {
                            view! { <p>{format!("Error: {err}")}</p> }.into_any()
                        } else {
                            view! {
                                <div class="grid">
                                    {characters
                                        .get()
                                        .into_iter()
                                        .map(|character| {
                                            view! {
                                                <article class="card">
                                                    <img
                                                        class="card-image"
                                                        src=character.image
                                                        alt=character.id
                                                        width="320"
                                                        height="320"
                                                    />
                                                    <p class="card-title">{character.name}</p>
                                                </article>
                                            }
                                        })
                                        .collect_view()}
                                </div>
                            }
                                .into_any()
                        }
                    }}
                </Show>

                <A href="/" attr:class="back-link">
                    "ホームへ戻る"
                </A>
            </section>
        </main>
    }
}
