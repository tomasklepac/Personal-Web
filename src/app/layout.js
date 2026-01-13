import './globals.css';

export const metadata = {
  title: 'Tomáš Klepač - Web Developer',
  description: 'Tomáš Klepač - web developer z Plzně. Tvořím moderní, rychlé a funkční weby pro freelancery a malé firmy.',
  keywords: 'Tomáš Klepač, web developer, tvorba webu, Plzeň, freelance, web design, frontend developer, programátor webů',
  authors: [{ name: 'Tomáš Klepač' }],
  robots: 'index, follow',
  applicationName: 'Tomáš Klepač - Web Developer',
  appleWebApp: {
    title: 'Tomáš Klepač',
  },
  openGraph: {
    title: 'Tomáš Klepač - Web Developer',
    description: 'Tvořím moderní, rychlé a funkční weby pro freelancery a malé firmy.',
    type: 'website',
    url: 'https://tomasklepac.cz/',
    images: [
      {
        url: 'https://tomasklepac.cz/assets/images/profile.jpg',
        alt: 'Profilová fotografie Tomáše Klepače',
      },
    ],
    siteName: 'Tomáš Klepač - Web Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomáš Klepač - Web Developer',
    description: 'Tvořím moderní, rychlé a funkční weby pro freelancery a malé firmy.',
    images: ['https://tomasklepac.cz/assets/images/profile.jpg'],
  },
  themeColor: '#0b0c10',
  alternates: {
    canonical: 'https://tomasklepac.cz/',
  },
  verification: {
    google: 'Fh0smD95mY95X1OpdCeQzRHiJbmsCrCH7vXYE4W8Nrc',
  },
};

export default function RootLayout({ children }) {
  // Adding JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tomáš Klepač",
    "jobTitle": "Web Developer",
    "url": "https://tomasklepac.cz/",
    "sameAs": [
      "https://www.linkedin.com/in/tomasklepac",
      "https://github.com/tomasklepac"
    ],
    "image": "https://tomasklepac.cz/assets/images/profile.jpg"
  };

  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicons */}
        <link rel="icon" href="/assets/icons/logo-32x32.ico" type="image/x-icon" />
        <link rel="icon" sizes="16x16" href="/assets/icons/logo-16x16.ico" />
        <link rel="icon" sizes="24x24" href="/assets/icons/logo-24x24.ico" />
        <link rel="icon" sizes="32x32" href="/assets/icons/logo-32x32.ico" />
        <link rel="icon" sizes="48x48" href="/assets/icons/logo-48x48.ico" />
        <link rel="icon" sizes="64x64" href="/assets/icons/logo-64x64.ico" />
        <link rel="icon" sizes="96x96" href="/assets/icons/logo96x96.ico" />
        <link rel="icon" sizes="128x128" href="/assets/icons/logo-128x128.ico" />
        <link rel="icon" sizes="256x256" href="/assets/icons/logo-256x256.ico" />
        <link rel="icon" sizes="512x512" href="/assets/icons/logo-512x512.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/logo-256x256.ico" />
        <link rel="mask-icon" href="/assets/icons/mask-icon.svg" color="#1f8ef1" />
        <link rel="manifest" href="/assets/icons/manifest.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
