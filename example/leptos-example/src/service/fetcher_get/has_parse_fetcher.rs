use serde::de::DeserializeOwned;

use super::fetcher::fetcher;
use super::fetcher_error::FetcherError;

pub async fn has_parse_fetcher<T, S, F>(url: &str, parse: F) -> Result<S, FetcherError>
where
    T: DeserializeOwned,
    F: FnOnce(T) -> Result<S, FetcherError>,
{
    let fetch_result = fetcher::<T>(url).await?;
    parse(fetch_result)
}
