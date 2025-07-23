import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="Authentication" />
      <p className="text-sm text-muted-foreground">
        Enable or disable two factor authentication
      </p>
    </div>
  );
}
