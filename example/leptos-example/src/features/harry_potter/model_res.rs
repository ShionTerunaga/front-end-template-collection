use serde::Deserialize;

#[derive(Clone, Deserialize)]
pub struct CharacterRes {
    pub id: String,
    pub name: String,
    pub image: String,
}
