const withPWA = require("next-pwa");

module.exports = withPWA({
 reactStrictMode: true,
  swcMinify: true,
    pwa: {
        dest: "public"
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Permissions-Policy",
                        value: "interest-cohort=()"
                    }
                ]
            }
        ]
    }
});
