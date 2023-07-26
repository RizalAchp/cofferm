// lib.rs
use tauri::{App, Wry};

#[cfg(mobile)]
mod mobile;
#[cfg(mobile)]
pub use mobile::*;

pub type SetupHook =
    Box<dyn FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send + 'static>;

pub type BuildHook = Box<dyn FnOnce(tauri::Builder<Wry>) -> tauri::Builder<Wry>>;

#[derive(Default)]
pub struct AppBuilder {
    setup: Option<SetupHook>,
    build: Option<BuildHook>,
}

impl AppBuilder {
    pub fn new() -> Self {
        Self {
            setup: None,
            build: None,
        }
    }

    pub fn setup(
        mut self,
        setup: impl FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + std::marker::Send + 'static,
    ) -> Self {
        self.setup = Some(Box::new(setup));
        self
    }

    pub fn build(mut self, build: impl FnOnce(tauri::Builder<Wry>) -> tauri::Builder<Wry> + 'static) -> Self {
        self.build = Some(Box::new(build));
        self
    }

    pub fn run(self) {
        let mut tauri_builder = tauri::Builder::default();
        if let Some(setup) = self.setup {
            tauri_builder = tauri_builder.setup(setup);
        }
        if let Some(build_hook) = self.build {
            tauri_builder = build_hook(tauri_builder);
        }
        tauri_builder
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }
}
