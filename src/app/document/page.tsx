import { CardInbox } from "@/components/CardInbox";

const InboxPage = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium">Documents</h1>
      <div className="grid grid-cols-1">
        <CardInbox />
      </div>
    </div>
  );
};

export default InboxPage;
