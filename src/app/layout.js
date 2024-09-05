import "./globals.css";

export const metadata = {
  title: "Periodic Table of Elements",
  description: "Learn the periodic table of elements while playing games !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
