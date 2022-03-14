/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
   },
   env: {
    host: process.env.host,
    database: process.env.database,
    dbusername: process.env.dbusername,
    password: process.env.password
   }
}

module.exports = nextConfig