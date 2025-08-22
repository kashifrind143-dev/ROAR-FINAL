import "./globals.css";
export const metadata = { title: "ROAR Mining", description: "Futuristic Roar mining UI" };

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet"/>
      </head>
      <body className="antialiased bg-roarBg text-white">{children}</body>
    </html>
  );
}
