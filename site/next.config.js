/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['img.clerk.com', 'randomuser.me'], // Add 'randomuser.me' to the list of allowed domains
    },
  }
  
  module.exports = nextConfig
  