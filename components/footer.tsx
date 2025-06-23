import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import Container from "./container";
import FooterTop from "./footer-top";
import Logo from "./logo";
import SocialMedia from "./social-media";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SubText, SubTitle } from "./ui/text";

const Footer = () => {
  return (
    <footer className="bg-white border-t pb-10 lg:pb-40">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-5">
            <Logo />
            <SubText className="mt-3 text-gray-600">
              Discover curated projects at Dev Bazaar, blending style and
              comfort to elevate your projects.
            </SubText>
            <SocialMedia
              className="text-gray-600"
              iconClassName="border-gray-600 hover:border-shop_dark_green hover:text-shop_dark_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-shop_dark_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="text-gray-600 hover:text-shop_dark_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText className="text-gray-600">
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full bg-shop_dark_green text-white hover:bg-shop_dark_green/95 transition-all duration-200">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-md text-gray-600">
          <div className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} <span className="font-bold text-shop_dark_green">Dev Bazaar.</span> All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
