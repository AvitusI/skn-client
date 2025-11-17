import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NotificationItemProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  unread?: boolean;
  thumbnail?: string;
}

const NotificationItem = ({ avatar, name, message, time, unread, thumbnail }: NotificationItemProps) => {
  return (
    <div className="flex items-start gap-3 py-4">
      <div className="relative shrink-0">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-background" />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{name}</span> {message}
        </p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
      
      {thumbnail && (
        <img src={thumbnail} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
      )}
      
      {unread && (
        <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-2" />
      )}
    </div>
  );
};

export default NotificationItem;