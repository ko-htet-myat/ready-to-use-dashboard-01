import { DataTableDemo } from "@/components/table/data-table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  DollarSign,
  Activity,
  CheckCircle,
  Clock,
} from "lucide-react";

const statusCards = [
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$84,250",
    change: "+12.5%",
    trend: "up",
    description: "Compared to last month",
    icon: DollarSign,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    id: "total-users",
    title: "Total Users",
    value: "12,480",
    change: "+8.2%",
    trend: "up",
    description: "Active accounts this month",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: "total-orders",
    title: "Total Orders",
    value: "3,920",
    change: "-3.1%",
    trend: "down",
    description: "Orders placed this month",
    icon: ShoppingCart,
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    id: "active-sessions",
    title: "Active Sessions",
    value: "1,245",
    change: "+5.7%",
    trend: "up",
    description: "Currently online users",
    icon: Activity,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    id: "completed-tasks",
    title: "Completed Tasks",
    value: "847",
    change: "+21.3%",
    trend: "up",
    description: "Tasks resolved this week",
    icon: CheckCircle,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    id: "pending-tasks",
    title: "Pending Tasks",
    value: "134",
    change: "-9.4%",
    trend: "down",
    description: "Awaiting action",
    icon: Clock,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Status Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statusCards.map((card) => {
          const Icon = card.icon;
          const isUp = card.trend === "up";
          const TrendIcon = isUp ? TrendingUp : TrendingDown;
          return (
            <Card
              key={card.id}
              className="relative overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${card.bg}`}>
                  <Icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight">
                  {card.value}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <TrendIcon
                    className={`w-3.5 h-3.5 ${
                      isUp ? "text-emerald-500" : "text-rose-500"
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      isUp ? "text-emerald-500" : "text-rose-500"
                    }`}
                  >
                    {card.change}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {card.description}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Data Table */}
      <div>
        <DataTableDemo />
      </div>
    </div>
  );
}
