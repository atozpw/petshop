/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

 export default nextConfig

// export default {
//   // output: 'export',
//   images: {
//     unoptimized: true
//   },
//   trailingSlash: true
// }