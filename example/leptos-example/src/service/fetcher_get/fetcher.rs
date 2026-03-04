use gloo_net::http::Request;
use serde::de::DeserializeOwned;

use super::fetcher_error::FetcherError;

pub async fn fetcher<T>(url: &str) -> Result<T, FetcherError>
where
    T: DeserializeOwned,
{
    let response = Request::get(url)
        .send()
        .await
        .map_err(|err| FetcherError::RequestError(err.to_string()))?;

    response
        .json::<T>()
        .await
        .map_err(|err| FetcherError::ParseError(err.to_string()))
}
