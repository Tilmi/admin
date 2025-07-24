import { Card5 } from "@/components/Card5";
import { Card6 } from "@/components/Card6";
import { Card7 } from "@/components/Card7";
import { Card8 } from "@/components/Card8";
import DocumentTable from "@/components/DocumentTable";

const DocumentPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-medium mb-2">Documents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mt-4">
          <Card5 />
        </div>
        <div className="mt-4">
          <Card6 />
        </div>
        <div className="mt-4">
          <Card7 />
        </div>
        <div className="mt-4">
          <Card8 />
        </div>
        <div className="lg:col-span-4 mt-4">
          <DocumentTable />
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
