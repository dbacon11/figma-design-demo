import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { 
  BarChart3, 
  Users, 
  Target, 
  Calendar, 
  FileText, 
  Settings,
  PlusCircle,
  ChevronRight
} from "lucide-react";
import { cn } from "./ui/utils";
import { useState } from "react";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  badge?: string;
  active?: boolean;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    icon: BarChart3,
    label: "Dashboard",
    active: true,
  },
  {
    icon: Users,
    label: "Audience",
    badge: "12",
    children: [
      { icon: Target, label: "Segments" },
      { icon: FileText, label: "Contacts" },
    ]
  },
  {
    icon: Target,
    label: "Campaigns",
    badge: "3",
    children: [
      { icon: FileText, label: "Email" },
      { icon: FileText, label: "Social" },
      { icon: FileText, label: "Ads" },
    ]
  },
  {
    icon: Calendar,
    label: "Events",
  },
  {
    icon: FileText,
    label: "Reports",
    children: [
      { icon: BarChart3, label: "Analytics" },
      { icon: Target, label: "Performance" },
    ]
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

export function ProjectSidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Audience']);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.label);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.label}>
        <Button
          variant={item.active ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start gap-3 h-10",
            level > 0 && "ml-6 w-[calc(100%-24px)]"
          )}
          onClick={() => hasChildren && toggleExpanded(item.label)}
        >
          <item.icon className="h-4 w-4" />
          <span className="flex-1 text-left">{item.label}</span>
          {item.badge && (
            <Badge variant="secondary" className="h-5 px-2 text-xs">
              {item.badge}
            </Badge>
          )}
          {hasChildren && (
            <ChevronRight 
              className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-90")} 
            />
          )}
        </Button>
        
        {hasChildren && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 border-r bg-sidebar flex flex-col h-full">
      <div className="p-4 border-b">
        <Button className="w-full gap-2">
          <PlusCircle className="h-4 w-4" />
          New Campaign
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-2">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>
      </ScrollArea>
    </div>
  );
}