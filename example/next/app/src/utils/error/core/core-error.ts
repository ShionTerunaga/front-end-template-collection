export type ErrorType = "httpError" | "objectError" | "customError";

export interface CustomError {
    type: ErrorType;
    message: string;
}
