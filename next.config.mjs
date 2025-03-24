/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
        minimumCacheTTL: 31536000, // 1 year
    },
    experimental: {
        // Disable CSS optimization due to critters module issues
        // optimizeCss: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;