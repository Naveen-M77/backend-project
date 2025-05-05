class ApiError extends Error {
    constructor(
        statusCode,
        message= "Someting went wrong",
        errors = [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null      // read about this.data in documentation
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }