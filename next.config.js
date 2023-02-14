/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true
	},
	env: {
		API_URL: 'http:localhost:8000'
	}
};

module.exports = nextConfig;
