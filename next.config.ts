import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
assetPrefix: isProd ? '/portfolio/' : '',
basePath: isProd ? '/portfolio' : '',
images: {
    unoptimized: true,
},
};

export default nextConfig;
