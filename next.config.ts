import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com'
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: "https",
        hostname: "jones.com",   // បន្ថែមសម្រាប់ដោះស្រាយ Error នេះ
      },
      {
        protocol: "https",
        hostname: "**",   // ជម្រើសពិសេស៖ អនុញ្ញាតគ្រប់ Hostname ទាំងអស់សម្រាប់រូបភាពពី API តេស្ត
      },
      {
        protocol: "https",
        hostname: "cook-lewis.com"
      },
    ]
  }
};

export default nextConfig;
