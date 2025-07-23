import { CardSettings } from "@/components/CardSettings";

const Settings = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium mb-2">Settings</h1>
      <div className="grid grid-cols-2">
        <CardSettings />
      </div>
    </div>
  );
};

export default Settings;
