"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import SettingsItem from "@/app/_components/SettingsItem";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, Bell, Sparkles, Mail } from "lucide-react";

type NotificationSettingsProps = {
  isActivityOn: boolean
  isPromotionOn: boolean
  isEmailOn: boolean
  jwt: string
}

const NotificationSettings = ({
  isActivityOn,
  isPromotionOn,
  isEmailOn,
  jwt
}: NotificationSettingsProps) => {
  const [activityNotifications, setActivityNotifications] = useState(isActivityOn);
  const [promotions, setPromotions] = useState(isPromotionOn);
  const [emailNotifications, setEmailNotifications] = useState(isEmailOn);

  const router = useRouter()

  const toggleActivity = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toggle-push`, { method: "PUT", headers: { "Content-Type": "application/json",  "Authorization": `Bearer ${jwt}`}})
    const data = await res.json()
    if (data.updated) {
      setActivityNotifications((activity) => !activity)
    }
  }

  const togglePromotion = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toggle-promotion`, { method: "PUT", headers: { "Content-Type": "application/json",  "Authorization": `Bearer ${jwt}`}})
    const data = await res.json()
    if (data.updated) {
      setPromotions((promotion) => !promotion)
    }
  }

  const toggleEmail = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toggle-email`, { method: "PUT", headers: { "Content-Type": "application/json",  "Authorization": `Bearer ${jwt}`}})
    const data = await res.json()
    if (data.updated) {
      setEmailNotifications((email) => !email)
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <button
            onClick={() => router.push("/profile")}
            className="flex items-center gap-2 mb-4 text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
          <h1 className="text-2xl font-bold">Notification Settings</h1>
        </header>

        <div className="px-4 py-2">
          <div className="pt-4 pb-2">
            <h2 className="text-sm text-muted-foreground">Notification</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={Bell}
              title="Activity Notifications"
              description={
                <>
                  Enable or disable push notifications for <span className="text-accent">real-time</span> updates about likes, saves and comments on your posts.
                </>
              }
              rightElement={
                <Switch
                  checked={activityNotifications}
                  onCheckedChange={toggleActivity}
                />
              }
            />

            <SettingsItem
              icon={Sparkles}
              title="Promotions & Offers"
              description="Get push notifications whenever there are offers dedicated for your liking."
              rightElement={
                <Switch
                  checked={promotions}
                  onCheckedChange={togglePromotion}
                />
              }
            />

            <SettingsItem
              icon={Mail}
              title="Direct Email Notification"
              description={
                <>
                  Get notified via email for <span className="text-accent">important</span> account activities like password changes, login alerts, and security updates.
                </>
              }
              rightElement={
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={toggleEmail}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;