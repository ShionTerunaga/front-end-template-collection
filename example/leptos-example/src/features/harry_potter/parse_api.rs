use crate::service::fetcher_get::FetcherError;

use super::model_res::CharacterRes;
use super::model_view::CharacterView;

pub fn parse_api(api: Vec<CharacterRes>) -> Result<Vec<CharacterView>, FetcherError> {
    let filtered = api
        .into_iter()
        .filter(|item| !item.image.is_empty())
        .take(12)
        .map(|item| CharacterView {
            id: item.id,
            name: item.name,
            image: item.image,
        })
        .collect::<Vec<_>>();

    Ok(filtered)
}
