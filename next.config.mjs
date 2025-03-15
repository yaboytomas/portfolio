/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove output: 'export' to enable server-side features
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;