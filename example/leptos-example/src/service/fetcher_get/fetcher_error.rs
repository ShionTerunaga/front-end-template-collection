#[derive(Clone, Debug)]
pub enum FetcherError {
    NotSetApiUrl,
    RequestError(String),
    ParseError(String),
}

impl std::fmt::Display for FetcherError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::NotSetApiUrl => {
                write!(f, "LEPTOS_HP_API_URL is not set.")
            }
            Self::RequestError(msg) => {
                write!(f, "request error: {msg}")
            }
            Self::ParseError(msg) => {
                write!(f, "parse error: {msg}")
            }
        }
    }
}

impl std::error::Error for FetcherError {}
