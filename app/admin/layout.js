import Navigation from "@/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Hello Admin Root Layout</h1>
      <Navigation />
      {children}
      </body>
    </html>
  );
};