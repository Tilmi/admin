import TeamTable from "@/components/TeamTable";

const GroupPage = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium">Members</h1>
      <div className="grid gap-4">
        <TeamTable />
      </div>
    </div>
  );
};

export default GroupPage;
