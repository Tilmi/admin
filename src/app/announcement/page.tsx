import { AnnouncementCard } from "@/components/AnnouncementCard";
import { CardAnnouncement } from "@/components/CardAnnouncement";
import { PengumumanSheet } from "@/components/PengumumanSheet";
import { PinnedCard } from "@/components/PinnedCard";

const AnnouncementPage = () => {
  return (
    <div className="grid">
      <div className="flex flex-row gap-229">
        <h1 className="text-xl font-medium">Announcement</h1>
        <PengumumanSheet />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        <div className="">
          <PinnedCard />
        </div>
        <div className="col-span-2">
          <div className="">
            <AnnouncementCard />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
