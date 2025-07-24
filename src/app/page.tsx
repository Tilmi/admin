import { Card1 } from "@/components/Card1";
import { Card2 } from "@/components/Card2";
import { Card3 } from "@/components/Card3";
import { Card4 } from "@/components/Card4";
import { ChartAreaGradient } from "@/components/ChartAreaGradient";
import ChartBarStacked from "@/components/ChartBarStacked";
import { ChartPieDonut } from "@/components/ChartPieDonut";
import ChartRadialLabel from "@/components/ChartRadialLabel";
import { AnnouncementReadersCard } from "@/components/AnnouncementReadersCard";

import Image from "next/image";
import { ActivityCard } from "@/components/ActivityCard";

const Dashboard = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium mb-4">Dashboard</h1>
      {/* <h1 className="flex items-center gap-2 mb-3 text-xl font-medium">
        Good Morning, Admin
        <Image src="/hand.svg" alt="logo" width={28} height={28} />
      </h1> */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="">
          <Card1 />
        </div>
        <div className="">
          <Card2 />
        </div>
        <div className="">
          <Card3 />
        </div>
        <div className="">
          <Card4 />
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <ChartAreaGradient />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <ChartBarStacked />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div>
            <ActivityCard />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="">
            <AnnouncementReadersCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
/* <ChartRadialLabel /> */
