import CartIcon from "./cart-icon";
import Container from "./container";
import FavoriteIcon from "./favorite-icon";
import HeaderMenu from "./header-menu";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";
import SearchBar from "./search-bar";
import SignIn from "./sign-in";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteIcon />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}
