module.exports = ({ env }) => ({
  host: env('HOST', '104.43.21.203'),
  port: env.int('PORT', 1337),
});
