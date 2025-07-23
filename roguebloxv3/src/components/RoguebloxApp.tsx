import { useState } from "react";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { Sidebar } from "./planner/Sidebar";
import { CharacterPlanner } from "./planner/CharacterPlanner";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export const RoguebloxApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [activeSection, setActiveSection] = useState("planner");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveSection("planner");
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "planner":
        return <CharacterPlanner />;
      case "wiki":
        return (
          <div className="max-w-4xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Rogueblox Wiki
            </h1>
            <p className="text-muted-foreground mb-8">
              Access the official Rogueblox Wiki for detailed game information
            </p>
            <Button 
              onClick={() => window.open("https://rogueblox.fandom.com/wiki/Rogueblox_Wiki", "_blank")}
              className="bg-gradient-primary text-primary-foreground font-semibold shadow-button hover:opacity-90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Wiki
            </Button>
          </div>
        );
      case "abilities":
      case "weapons":
      case "classes":
      case "enchants":
      case "relics":
        return (
          <div className="max-w-4xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
            <p className="text-muted-foreground">
              This section is coming soon! Use the Character Planner to build your character.
            </p>
          </div>
        );
      default:
        return <CharacterPlanner />;
    }
  };

  // Authentication screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Discord server link */}
          <div className="text-center mb-6">
            <Button
              variant="outline"
              onClick={() => window.open("https://discord.gg/roguebloxinfo", "_blank")}
              className="bg-gaming-blue/10 border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-primary-foreground"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Join Discord Server
            </Button>
          </div>

          {authMode === "login" ? (
            <LoginForm 
              onLogin={handleLogin}
              onSwitchToRegister={() => setAuthMode("register")}
            />
          ) : (
            <RegisterForm 
              onRegister={handleRegister}
              onSwitchToLogin={() => setAuthMode("login")}
            />
          )}
        </div>
      </div>
    );
  }

  // Main application
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-auto">
        {renderSectionContent()}
        
        {/* Fixed footer */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-gradient-card border border-border rounded-lg px-4 py-2 shadow-card">
            <p className="text-sm text-muted-foreground">
              made with <span className="text-gaming-red">❤️</span> by <span className="text-primary font-semibold">hatsumi</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};