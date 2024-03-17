module.exports = (request, response, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:3002'];

  const origin = request.header('origin');
  const isAllowedOrigin = allowedOrigins.includes(origin);

  if (isAllowedOrigin) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Max-Age', '10');
  }

  next();
};
