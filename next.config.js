/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  output: 'standalone',

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.google-analytics.com https://*.googletagmanager.com https://hcaptcha.com https://*.hcaptcha.com https://cdn.jsdelivr.net blob:",
              // Styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://hcaptcha.com https://*.hcaptcha.com",
              // Images
              "img-src 'self' blob: data: https: https://*.google-analytics.com https://*.googletagmanager.com https://*.cloudinary.com https://*.githubusercontent.com https://images.unsplash.com",
              // Fonts
              "font-src 'self' https://fonts.gstatic.com data:",
              // Frames
              "frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com https://www.youtube.com https://player.vimeo.com",
              // Connect (APIs)
              "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://api.openai.com https://api.anthropic.com https://api.replicate.com https://api.cloudinary.com https://api.github.com wss:",
              // Media
              "media-src 'self' https: data: blob:",
              // Object/Plugins
              "object-src 'none'",
              // Base URI
              "base-uri 'self'",
              // Form Actions
              "form-action 'self'",
              // Frame Ancestors
              "frame-ancestors 'none'",
              // Upgrades
              "upgrade-insecure-requests",
              "block-all-mixed-content"
            ].join('; ')
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: [
              'accelerometer=()',
              'ambient-light-sensor=()',
              'autoplay=()',
              'battery=()',
              'camera=()',
              'cross-origin-isolated=()',
              'display-capture=()',
              'document-domain=()',
              'encrypted-media=()',
              'execution-while-not-rendered=()',
              'execution-while-out-of-viewport=()',
              'fullscreen=(self)',
              'geolocation=()',
              'gyroscope=()',
              'keyboard-map=()',
              'magnetometer=()',
              'microphone=()',
              'midi=()',
              'navigation-override=()',
              'payment=()',
              'picture-in-picture=()',
              'publickey-credentials-get=()',
              'screen-wake-lock=()',
              'sync-xhr=()',
              'usb=()',
              'web-share=()',
              'xr-spatial-tracking=()',
              'clipboard-read=()',
              'clipboard-write=()',
              'gamepad=()',
              'speaker-selection=()',
              'interest-cohort=()'
            ].join(', ')
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          }
        ]
      }
    ];
  },

  // Images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com'
      },
      // Add other domains you need following the same pattern
    ],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Additional Security Configurations
  async rewrites() {
    return [
      {
        source: "/api/openai/:path*",
        destination: "https://api.openai.com/:path*",
      },
    ];
  },

  // Security for redirects
  async redirects() {
    return [
      // Force HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          }
        ],
        permanent: true,
        destination: 'https://:path*'
      }
    ];
  },

  // Webpack configuration for additional security
  webpack: (config, { dev, isServer }) => {
    // Enable SRI (Subresource Integrity)
    config.output.crossOriginLoading = 'anonymous';

    // Add security headers to assets
    config.output.hashFunction = 'sha512';

    if (!dev && !isServer) {
      // Enable production optimizations
      config.optimization.minimize = true;
    }

    return config;
  },

  // Environment configuration
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // Build configuration
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features
  experimental: {
    scrollRestoration: true,
  }
};

module.exports = nextConfig;
