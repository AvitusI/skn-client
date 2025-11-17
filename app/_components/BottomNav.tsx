"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3x3, MessageCircle, Bell, ShoppingCart, User } from "lucide-react";

const BottomNav = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    `flex flex-col items-center justify-center gap-1 transition-colors ${
      pathname === path || pathname.startsWith(path)
        ? "text-foreground"
        : "text-muted-foreground"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-6">
        <Link href="/products" className={getLinkClass("/products")}>
          <Grid3x3 className="w-6 h-6" />
        </Link>

        <Link href="/messaging" className={getLinkClass("/messaging")}>
          <MessageCircle
            className="w-6 h-6"
            fill={pathname === "/messaging" ? "currentColor" : "none"}
          />
        </Link>

        <Link href="/notifications" className={getLinkClass("/notifications")}>
          <Bell
            className="w-6 h-6"
            fill={pathname === "/notifications" ? "currentColor" : "none"}
          />
        </Link>

        <Link href="/cart" className={getLinkClass("/cart")}>
          <ShoppingCart className="w-6 h-6" />
        </Link>

        <Link href="/profile" className={getLinkClass("/profile")}>
          <User
            className="w-6 h-6"
            fill={pathname.startsWith("/profile") ? "currentColor" : "none"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
