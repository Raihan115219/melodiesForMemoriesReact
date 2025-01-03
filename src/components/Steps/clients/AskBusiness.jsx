import { Checkbox } from "@/components/ui/checkbox";

const AskBusiness = () => {
  return (
    <div className="p-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Is this business?</p>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <Checkbox id="yes" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox id="no" />
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AskBusiness;
