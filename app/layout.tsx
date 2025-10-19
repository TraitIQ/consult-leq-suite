import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Consult LEQ – The Leadership Equation",
  description: "Behavioural intelligence for leadership and culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}


