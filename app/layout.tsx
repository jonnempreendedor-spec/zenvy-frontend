import "./globals.css";

export const metadata = {
  title: "Zenvy AI",
  description: "CRM IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );

}