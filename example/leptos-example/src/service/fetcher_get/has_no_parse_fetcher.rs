use serde::de::DeserializeOwned;

use super::fetcher::fetcher;
use super::fetcher_error::FetcherError;

#[allow(dead_code)]
pub async fn has_no_parse_fetcher<T>(url: &str) -> Result<T, FetcherError>
where
    T: DeserializeOwned,
{
    fetcher::<T>(url).await
}
