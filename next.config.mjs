/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jsfrzeptrrehto2u.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
