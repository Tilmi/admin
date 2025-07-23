import AppCalender from "@/components/AppCalender";
import { CardCalender } from "@/components/CardCalender";

const CalenderPage = () => {
  return (
    <div className="grid">
      <h1 className="text-xl font-medium mb-2">Calender</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid col-span-2">
          <AppCalender />
        </div>
        <CardCalender />
      </div>
    </div>
  );
};

export default CalenderPage;
