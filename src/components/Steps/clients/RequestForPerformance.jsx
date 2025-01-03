import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";

const RequestForPerformance = () => {
  const [performanceRequests, setPerformanceRequests] = useState([
    { specialMoment: "", specialDate: "", frequency: "" },
  ]);

  const handleAddRequest = () => {
    setPerformanceRequests([
      ...performanceRequests,
      { specialMoment: "", specialDate: "", frequency: "" },
    ]);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedRequests = [...performanceRequests];
    updatedRequests[index][field] = value;
    setPerformanceRequests(updatedRequests);
  };

  const handleRemoveRequest = (index) => {
    const updatedRequests = performanceRequests.filter((_, i) => i !== index);
    setPerformanceRequests(updatedRequests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Performance Requests:", performanceRequests);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        {performanceRequests.map((request, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          >
            {/* Special Moment */}
            <div>
              <label
                htmlFor={`specialMoment-${index}`}
                className="block text-sm font-medium"
              >
                Special Moment
              </label>
              <Select
                onValueChange={(value) =>
                  handleFieldChange(index, "specialMoment", value)
                }
                value={request.specialMoment}
              >
                <SelectTrigger>
                  <span>Select a special moment</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Special Date */}
            <div>
              <label
                htmlFor={`specialDate-${index}`}
                className="block text-sm font-medium"
              >
                Special Date
              </label>
              <Input
                id={`specialDate-${index}`}
                type="date"
                value={request.specialDate}
                onChange={(e) =>
                  handleFieldChange(index, "specialDate", e.target.value)
                }
              />
            </div>

            {/* Performance Frequency */}
            <div>
              <label
                htmlFor={`frequency-${index}`}
                className="block text-sm font-medium"
              >
                Performance Frequency
              </label>
              <Select
                onValueChange={(value) =>
                  handleFieldChange(index, "frequency", value)
                }
                value={request.frequency}
              >
                <SelectTrigger>
                  <span>Select frequency</span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-time">One-Time</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Remove Button */}
            {performanceRequests.length > 1 && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => handleRemoveRequest(index)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        ))}

        {/* Add Request Button */}
        <div>
          <Button variant="solid" onClick={handleAddRequest}>
            Add Request
          </Button>
        </div>

        {/* Submit Button */}
        {/* <div>
          <Button type="submit" variant="solid" color="blue">
            Submit Requests
          </Button>
        </div> */}
      </div>
    </form>
  );
};

export default RequestForPerformance;
