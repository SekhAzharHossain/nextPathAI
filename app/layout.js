import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "nextPathAI",
  description: "nextPathAI is an all-in-one AI-powered career guidance platform designed to help individuals unlock their full professional potential. Whether you're a job seeker, student, or someone looking to pivot your career, our smart tools offer personalized support every step of the way.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:{dark}
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen">{children}</main>
            <footer className=" bg-muted/50 py-12">
              <div className=" container:mx-auto px-4 text-center text-gray-200">
                <p>BY: Sekh Azhar Hossain</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
