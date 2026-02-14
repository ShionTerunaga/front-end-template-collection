mod app;
mod components;
mod features;
mod router;
mod service;
mod shared;

use leptos::mount::mount_to_body;

fn main() {
    mount_to_body(app::App);
}
