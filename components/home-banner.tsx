import { banner_1 } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { Title } from "./ui/text";

export default function HomeBanner() {
  return (
    <div className="md:rounded-r-full md:rounded-l-4xl py-16 md:py-0 bg-shop_light_pink rounded-2xl pl-10 pr-3 md:pr-0 lg:pl-24 flex items-center justify-between shadow-md">
      <div className="space-y-5">
        <Title className="font-semibold leading-snug">
          Grad Industry-grade projects <br />
          for your{" "}
          <span className="font-bold tracking-tight underline decoration-[2px] underline-offset-4">
            Resume
          </span>
          .
        </Title>

        <Link
          href="/shop"
          className="inline-block bg-shop_dark_green/90 text-white/90 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-shop_dark_green hover:text-white shadow hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>

      <div className="p-3 flex-1 md:flex hidden justify-end items-end self-stretch">
        <Image
          src={banner_1}
          alt="Banner"
          className="p-0 border border-shop_dark_green/20 inset-2 shadow-md rounded-full md:w-96 object-contain"
          priority
        />
      </div>
    </div>
  );
}
