import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="outline">Go back home</Button>
        </Link>
      </div>
    )
}