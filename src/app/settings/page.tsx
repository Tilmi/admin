import { CardSettings } from "@/components/CardSettings";

const Settings = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium mb-2">Settings</h1>
      <div className="grid lg:grid-cols-1 sm:grid-cols-1">
        <CardSettings />
      </div>
    </div>
  );
};

export default Settings;
