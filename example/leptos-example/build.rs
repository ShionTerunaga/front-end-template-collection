use std::fs;
use std::path::Path;

fn main() {
    println!("cargo:rerun-if-changed=.env");
    println!("cargo:rerun-if-env-changed=LEPTOS_HP_API_URL");

    if let Ok(value) = std::env::var("LEPTOS_HP_API_URL") {
        println!("cargo:rustc-env=LEPTOS_HP_API_URL={value}");
        return;
    }

    let env_path = Path::new(".env");
    if !env_path.exists() {
        return;
    }

    let Ok(contents) = fs::read_to_string(env_path) else {
        return;
    };

    for raw_line in contents.lines() {
        let line = raw_line.trim();
        if line.is_empty() || line.starts_with('#') {
            continue;
        }

        if let Some((key, value)) = line.split_once('=') {
            if key.trim() == "LEPTOS_HP_API_URL" {
                println!("cargo:rustc-env=LEPTOS_HP_API_URL={}", value.trim());
                break;
            }
        }
    }
}
