import ScrollToTop from "./components/ScrollToTop"
import "./index.css"
import type React from "react" // Import React


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}

