use crate::service::fetcher_get::FetcherError;

const HARRY_POTTER_API_URL: Option<&str> = option_env!("LEPTOS_HP_API_URL");

pub fn harry_potter_api_url() -> Result<&'static str, FetcherError> {
    HARRY_POTTER_API_URL.ok_or(FetcherError::NotSetApiUrl)
}
