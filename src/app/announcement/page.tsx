import { AnnouncementCard } from "@/components/AnnouncementCard";
import { PengumumanSheet } from "@/components/PengumumanSheet";
import { PinnedCard } from "@/components/PinnedCard";

const AnnouncementPage = () => {
  return (
    <div className="grid">
      <div className="flex flex-row gap-229">
        <h1 className="text-xl font-medium">Announcement</h1>
        <PengumumanSheet />
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="">
          <PinnedCard />
        </div>
        <div className="lg:col-span-1 sm:col-span-1">
          <div className="sticky top-0 max-h-[500px] overflow-y-auto">
            <AnnouncementCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
