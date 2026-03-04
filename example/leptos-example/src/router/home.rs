use leptos::prelude::*;
use leptos_router::components::A;

#[component]
pub fn Home() -> impl IntoView {
    let (show_popup, set_show_popup) = signal(false);

    view! {
        <main class="page">
            <section class="panel">
                <h1 class="title">"こんにちは、Leptos！"</h1>

                <button
                    class="button"
                    type="button"
                    on:click=move |_| set_show_popup.set(true)
                >
                    "説明"
                </button>

                <nav class="nav-links">
                    <A href="/single-dynamic-fetch">"動的データ収集へ"</A>
                </nav>
            </section>
        </main>

        <Show when=move || show_popup.get()>
            <div class="overlay" on:click=move |_| set_show_popup.set(false)>
                <div class="popup" on:click=move |ev| ev.stop_propagation()>
                    <h2 class="popup-title">"このサイトについて"</h2>
                    <p class="popup-body">"このサイトはLeptosのサンプルです。"</p>
                    <button
                        class="button button-close"
                        type="button"
                        on:click=move |_| set_show_popup.set(false)
                    >
                        "閉じる"
                    </button>
                </div>
            </div>
        </Show>
    }
}
