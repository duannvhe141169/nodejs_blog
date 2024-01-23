module.exports = function throwError(status,customMessage){
  const error = new Error();
  error.status = 404;
  error.message = `${customMessage}`;
  throw error;
};