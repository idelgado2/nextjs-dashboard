import "@/app/ui/global.css";
import type { Metadata } from "next";
import NavBar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import { sans, serif } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Isaac Delgado",
    default: "Isaac Delgado",
  },
  description:
    "Personal site for Isaac Delgado, featuring writing, projects, and media work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} site-shell`}>
        <div className="site-frame">
          <NavBar />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
