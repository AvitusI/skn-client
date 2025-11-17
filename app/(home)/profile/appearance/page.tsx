"use client"

//import { useNavigate } from "react-router-dom";
import SettingsItem from "@/app/_components/SettingsItem";
import { Switch } from "@/components/ui/switch";
import { ChevronLeft, Moon, Globe } from "lucide-react";
import { useState } from "react";

const AppearanceSettings = () => {
  //const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));

  // Initialized darkMode from the DOM class to avoid setting state synchronously inside an effect

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 p-4">
          <button
            //onClick={() => navigate("/profile")}
            className="flex items-center gap-2 mb-4 text-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </button>
          <h1 className="text-2xl font-bold">Appearance Settings</h1>
        </header>

        <div className="px-4 py-2">
          <div className="pt-4 pb-2">
            <h2 className="text-sm text-muted-foreground">Appearance & Preferences</h2>
          </div>

          <div className="divide-y divide-border">
            <SettingsItem
              icon={Moon}
              title="Dark Mode"
              description={
                <>
                  Reduce eye strain and improve readability in <span className="text-accent">low-light</span> environments by switching to dark mode.
                </>
              }
              rightElement={
                <Switch
                  checked={darkMode}
                  onCheckedChange={toggleDarkMode}
                />
              }
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
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettings;