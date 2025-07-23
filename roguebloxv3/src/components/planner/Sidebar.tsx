import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sword, 
  User, 
  BookOpen, 
  Zap, 
  Shield, 
  Crown, 
  Gem,
  LogOut 
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const sidebarItems = [
  { id: "planner", label: "Planner", icon: User },
  { id: "wiki", label: "Wiki", icon: BookOpen },
  { id: "abilities", label: "Abilities", icon: Zap },
  { id: "weapons", label: "Weapons", icon: Sword },
  { id: "classes", label: "Classes", icon: Crown },
  { id: "enchants", label: "Enchants", icon: Shield },
  { id: "relics", label: "Relics", icon: Gem },
];

export const Sidebar = ({ activeSection, onSectionChange, onLogout }: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-gradient-card border-r border-border flex flex-col shadow-card">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Rogueblox
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Character Planner</p>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start h-11 ${
                  activeSection === item.id
                    ? "bg-gradient-primary text-primary-foreground shadow-button"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Bottom section */}
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};