export class AppError extends Error {
    public statusCode: number;
    public status: string;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(message);
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export const handleError = (error: unknown) => {
    if (error instanceof AppError) {
      return {
        message: error.message,
        statusCode: error.statusCode,
        status: error.status,
      };
    }
  
    console.error('Unexpected error:', error);
    return {
      message: 'An unexpected error occurred',
      statusCode: 500,
      status: 'error',
    };
  };