import { Space_Grotesk, Source_Serif_4, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-space-grotesk" });
const serif   = Source_Serif_4({ subsets: ["latin"], weight: ["600"], variable: "--font-source-serif" });
const sans    = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const mono    = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: 'Lucas\' portfolio',
  description: 'All about me and my projects :D'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[display.variable, serif.variable, sans.variable, mono.variable, "h-full"].join(" ")}>
      <body className="bg-page text-text font-sans antialiased min-h-full flex flex-col">
        <main className="flex-1 w-full mx-auto max-w-page px-5 md:px-12">{children}</main>
      </body>
    </html>
  );
}