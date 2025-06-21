import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">Digital Projects</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Store by @vaibhav. Every project on this platform is
          created by me and which are of the highest qaulity standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={"/products"} className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant={"ghost"}>
            Our quality promise <MoveRight />
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
