import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "sk Tech | Learn Web Development",
    template: "%s | Sk Tech",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sk Tech.",
  keywords: ["React", "Next.js", "Web Development", "Sk Tech"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://sktech.com"),
  openGraph: {
    title: "Sk Tech",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sk Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sk Tech Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Tech",
    description: "Learn Web Dev from scratch with Sk Tech!",
    creator: "@sk_tech",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}
