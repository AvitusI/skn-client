import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Messaging = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Messaging</h1>
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-accent text-accent-foreground">U</AvatarFallback>
            </Avatar>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search Chats..."
              className="pl-10 bg-secondary border-0 h-12"
            />
          </div>
        </header>

        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-muted-foreground">No messages yet</p>
        </div>
      </div>
    </div>
  );
};

export default Messaging;