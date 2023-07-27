#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn check() -> String {
    "Check OK".to_owned()
}

pub fn main() {
    cofferm::AppBuilder::new()
        .build(|builder| builder.invoke_handler(tauri::generate_handler![check]))
        .run();
}
