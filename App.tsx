import { TopNavigation } from "./components/TopNavigation";
import { ProjectSidebar } from "./components/ProjectSidebar";
import { MainContent } from "./components/MainContent";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-background">
      <TopNavigation />
      <div className="flex flex-1 overflow-hidden">
        <ProjectSidebar />
        <MainContent />
      </div>
    </div>
  );
}