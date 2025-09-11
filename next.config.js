/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
