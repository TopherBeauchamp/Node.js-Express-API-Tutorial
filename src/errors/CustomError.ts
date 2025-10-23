class CustomError<C extends string> extends Error {
  message: string; // string describing error
  statusCode: number; // HTTP code for describing error 
  code?: C; // allows for custom errors codes 

  constructor({
    message,
    statusCode,
    code,
  }: {
    message: string;
    statusCode: number;
    code?: C;
  }) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}

export default CustomError;