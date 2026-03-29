class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = "Bad request") {
    return new ApiError(400, message);
  }

  static unauttorized(message = "Unauthorized") {
    return new ApiError(401, message);
  }

  static conflict(message = "conflict") {
    return new ApiError(409, message);
  }

  static forbidden(message = "Forbidden") {
    return new ApiError(403, message);
  }

  static notFound(message = "Not found") {
    return new ApiError(404, message);
  }

  static tooManyRequest(message = "Too many request") {
    return new ApiError(429, message);
  }

  static serverError(message = "Internal server error") {
    return new ApiError(500, message);
  }
}
