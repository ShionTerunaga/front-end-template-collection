use crate::service::fetcher_get::{has_parse_fetcher, FetcherError};
use crate::shared::config::harry_potter_api_url;

use super::model_res::CharacterRes;
use super::model_view::CharacterView;
use super::parse_api::parse_api;

pub async fn get_characters() -> Result<Vec<CharacterView>, FetcherError> {
    let api_url = harry_potter_api_url()?;

    has_parse_fetcher::<Vec<CharacterRes>, Vec<CharacterView>, _>(api_url, parse_api).await
}
