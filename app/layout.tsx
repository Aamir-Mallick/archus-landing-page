import "./globals.css";

export const metadata = {
  title: "GetArchus",
  description: "getArchus new app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
