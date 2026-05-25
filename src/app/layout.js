import "../App.css"

export const metadata = {
  title: "artiklo.de – Artikel lernen",
  description: "Lerne die deutschen Artikel der, die, das mit 117.000 Wörtern und smarten Quizzen.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}