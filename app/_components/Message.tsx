import type { NotificationPayload } from "firebase/messaging";

interface Notification  {
    notification?: NotificationPayload
}

export const Message = ({ notification }: Notification) => {
  return (
    <>
      <div id="notificationHeader">
        <span>{notification?.title}</span>
      </div>
      <div id="notificationBody">{notification?.body}</div>
    </>
  );
};