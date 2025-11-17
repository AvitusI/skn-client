import NotificationItem from "@/app/_components/NotificationItem";

const Notifications = () => {
  const newNotifications = [
    {
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriella",
      name: "Gabriella Spencer",
      message: "has posted a new story, check it out lorem ipsum dolor sit amet.",
      time: "2h ago",
      unread: true,
    },
    {
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      name: "System",
      message: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Eos officia quo quas nulla! Error, labore explicabo.",
      time: "5h ago",
      thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
      unread: true,
    },
  ];

  const yesterdayNotifications = [
    {
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriella2",
      name: "Gabriella Spencer",
      message: "has posted a new story, check it out lorem ipsum dolor sit amet lorem ipsum dolor.",
      time: "Yesterday",
    },
    {
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriella3",
      name: "Gabriella Spencer",
      message: "has posted a new story, check it out lorem ipsum dolor sit amet lorem ipsum dolor.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold">Notifications</h1>
        </header>

        <div className="px-4">
          <div className="pt-4">
            <h2 className="text-sm text-muted-foreground mb-2">New</h2>
            <div className="divide-y divide-border">
              {newNotifications.map((notification, index) => (
                <NotificationItem key={index} {...notification} />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-sm text-muted-foreground mb-2">Yesterday</h2>
            <div className="divide-y divide-border">
              {yesterdayNotifications.map((notification, index) => (
                <NotificationItem key={index} {...notification} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;