import { getSession } from "@/actions";
import { getUserPreferences } from "@/actions";
import NotificationSettings from "./page";

export default async function NotificationSettingsLayout() {

    const userPreference = await getUserPreferences()

    const session = await getSession()
    
    return (
        <NotificationSettings
            isActivityOn={userPreference?.receive_activity}
            isPromotionOn={userPreference?.receive_promotion}
            isEmailOn={userPreference?.receive_email}
            jwt={session.jwt!}
        />
    )
}