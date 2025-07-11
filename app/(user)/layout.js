import Navigation from "@/components/Navigation";
import Marquee from "react-fast-marquee";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Hello Root Layout</h1>
        <Marquee>
  I can be a React Marquee Component, Use in Next.js.
</Marquee>
      <Navigation />
      {children}
      </body>
    </html>
  );
};