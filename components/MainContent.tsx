import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  DollarSign,
  MoreHorizontal,
  ExternalLink
} from "lucide-react";

const statsCards = [
  {
    title: "Contacts",
    value: "23k",
    description: "$62 per click",
    trend: "+12%",
    trendUp: true,
  },
  {
    title: "Deals",
    value: "45k",
    description: "$54 per click",
    trend: "+8%",
    trendUp: true,
  },
  {
    title: "Amount Spent",
    value: "$170.73",
    trend: "+19,287%",
    trendUp: true,
  },
];

const campaignData = [
  {
    name: "Facebook - Promoting Bugzilla post on 20-10-21",
    platform: "Facebook",
    account: "Bugzilla Ad Account",
    impressions: "0",
    clicks: "0",
    contacts: "0",
    customers: "0",
    status: "Active",
  },
  {
    name: "Optimize automatic content",
    platform: "Facebook", 
    account: "Bugzilla Ad Account",
    impressions: "62",
    clicks: "0", 
    contacts: "0",
    customers: "0",
    status: "Active",
  },
  {
    name: "Big Data Ebook",
    platform: "LinkedIn",
    account: "Bugzilla Ad Account", 
    impressions: "14,871",
    clicks: "200",
    contacts: "3",
    customers: "0",
    status: "Active",
  },
  {
    name: "Default Campaign Group",
    platform: "LinkedIn",
    account: "Bugzilla",
    impressions: "2,131",
    clicks: "26",
    contacts: "0",
    customers: "0", 
    status: "Active",
  },
];

export function MainContent() {
  return (
    <div className="flex-1 p-6 space-y-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted-foreground">Overview of your campaign performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export report</Button>
          <Button variant="outline">Create audience</Button>
          <Button>Create ad campaign</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              {index === 0 && <Users className="h-4 w-4 text-muted-foreground" />}
              {index === 1 && <Target className="h-4 w-4 text-muted-foreground" />}
              {index === 2 && <DollarSign className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.description && (
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              )}
              <div className="flex items-center mt-2">
                {stat.trendUp ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-xs ml-1 ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaign Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Campaigns</CardTitle>
              <CardDescription>Manage and monitor your advertising campaigns</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Manage columns
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Account Name</th>
                  <th className="text-left py-3 px-4">Impressions</th>
                  <th className="text-left py-3 px-4">Clicks</th>
                  <th className="text-left py-3 px-4">Total Contacts</th>
                  <th className="text-left py-3 px-4">Customers</th>
                  <th className="text-left py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((campaign, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs">f</span>
                        </div>
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          <div className="text-xs text-muted-foreground">{campaign.platform}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{campaign.account}</td>
                    <td className="py-3 px-4">{campaign.impressions}</td>
                    <td className="py-3 px-4">{campaign.clicks}</td>
                    <td className="py-3 px-4">{campaign.contacts}</td>
                    <td className="py-3 px-4">{campaign.customers}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}