"use client"

import { useRouter } from "next/navigation";
import SettingsItem from "@/app/_components/SettingsItem";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingCart, CreditCard, MapPin, Bell, Sparkles, Globe, HelpCircle } from "lucide-react";
import { LogoutForm } from "@/app/_components/LogoutForm";

const Profile = () => {

  const router = useRouter()

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search Settings..."
              className="pl-10 bg-secondary border-0 h-12"
            />
          </div>
        </header>

        <div className="px-4 py-2">
          <SettingsItem
            icon={User}
            title="Personal Information"
            description={
              <>
                <span className="text-accent">Update</span> your personal details like name, username, email, and phone number to keep your account information current.
              </>
            }
            onClick={() => {}}
          />

          <div className="pt-6 pb-2">
            <h2 className="text-sm text-muted-foreground">General</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={ShoppingCart}
              title="My Orders"
              description={
                <>
                  View and manage your orders, <span className="text-accent">track shipments</span>, and handle returns, all in one place. Stay updated with real-time notifications on your order status.
                </>
              }
              onClick={() => {}}
            />

            <SettingsItem
              icon={CreditCard}
              title="Wallet & Payment Methods"
              description={
                <>
                  Manage your saved payment methods, add new <span className="text-accent">credit/debit</span> cards, and set your preferred payment option for a seamless checkout experience.
                </>
              }
              onClick={() => {}}
            />

            <SettingsItem
              icon={MapPin}
              title="My Addresses"
              description={
                <>
                  View and manage your saved <span className="text-accent">shipping addresses</span>. Add new locations or edit existing ones to ensure your orders are delivered to the right place.
                </>
              }
              onClick={() => {}}
            />
          </div>

          <div className="pt-6 pb-2">
            <h2 className="text-sm text-muted-foreground">Notification</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={Bell}
              title="Activity Notifications"
              onClick={() => router.push("/profile/notifications")}
            />

            <SettingsItem
              icon={Sparkles}
              title="Promotions & Offers"
              onClick={() => router.push("/profile/notifications")}
            />
          </div>

          <div className="pt-6 pb-2">
            <h2 className="text-sm text-muted-foreground">Appearance & Preferences</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={Sparkles}
              title="Dark Mode"
              onClick={() => router.push("/profile/appearance")}
            />

            <SettingsItem
              icon={Globe}
              title="Language & Region"
              description={
                <>
                  Set your preferred language and region to customize your shopping <span className="text-accent">experience</span> and see relevant content.
                </>
              }
              onClick={() => {}}
            />
          </div>

          <div className="pt-6 pb-2">
            <h2 className="text-sm text-muted-foreground">Account & Support</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={HelpCircle}
              title="Help Center"
              description={
                <>
                  Access FAQs, guides, and <span className="text-accent">support</span> resources to help you navigate and troubleshoot common issues.
                </>
              }
              onClick={() => {}}
            />

            <SettingsItem
              icon={ShoppingCart}
              title="Add Product"
              description={
                <>
                  Add new products to your <span className="text-accent">inventory</span>. Upload images and set details for items you want to sell.
                </>
              }
              onClick={() => router.push("/profile/product")}
            />

            <LogoutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;