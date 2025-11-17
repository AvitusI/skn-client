import { ChevronRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SettingsItemProps {
  icon: LucideIcon;
  title: string;
  description?: string | ReactNode;
  onClick?: () => void;
  rightElement?: ReactNode;
}

const SettingsItem = ({ icon: Icon, title, description, onClick, rightElement }: SettingsItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 py-4 ${onClick ? "cursor-pointer active:bg-muted/50" : ""}`}
    >
      <Icon className="w-6 h-6 shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {rightElement ? (
        rightElement
      ) : onClick ? (
        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
      ) : null}
    </div>
  );
};

export default SettingsItem;