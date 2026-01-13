/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: pokud máš web v podsložce (např. tomasklepac.cz/novy-web), odkomentuj toto:
  // basePath: '/novy-web',
  images: {
    unoptimized: true, // Nutné pro statický export, protože Next.js Image optimization potřebuje server
  },
};

export default nextConfig;
