import { AnnouncementCard } from "@/components/AnnouncementCard";
import { CardAnnouncement } from "@/components/CardAnnouncement";
import { PinnedCard } from "@/components/PinnedCard";

const AnnouncementPage = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium">Announcement</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
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
