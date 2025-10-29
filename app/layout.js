import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "JummanSk-A website about me",
  description: "A personal website to showcase my projects and blog posts.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-black">
          <Navbar />
          <div className="absolute inset-0 pointer-events-none">
            {/* Optional: keep grid overlay or remove for cleaner look */}
          </div>
          {children}
          <Footer/>
        </body>
    </html>
  );
}
