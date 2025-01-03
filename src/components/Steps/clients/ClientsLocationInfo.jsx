import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const ClientLocationInfo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Street */}
        <div>
          <label htmlFor="street" className="block text-sm font-medium">
            Street
          </label>
          <Input
            id="street"
            placeholder="Enter street"
            {...register("street", { required: "Street is required" })}
          />
          {errors.street && (
            <p className="text-red-500 text-sm">{errors.street.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <Input
            id="city"
            placeholder="Enter city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium">
            State
          </label>
          <Input
            id="state"
            placeholder="Enter state"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        {/* Zip */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium">
            Zip
          </label>
          <Input
            id="zip"
            placeholder="Enter zip code"
            {...register("zip", { required: "Zip is required" })}
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>
        {/* Max Performers Capacity */}
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium">
            Max Performers Capacity
          </label>
          <Input
            id="capacity"
            placeholder="Enter max performers capacity"
            type="number"
            {...register("capacity", { required: "Capacity is required" })}
          />
          {errors.capacity && (
            <p className="text-red-500 text-sm">{errors.capacity.message}</p>
          )}
        </div>
        {/* Noise Tolerance Level */}
        <div>
          <label
            htmlFor="noise-tolerance"
            className="block text-sm font-medium"
          >
            Noise Tolerance Level
          </label>
          <Select onValueChange={(value) => setValue("noiseTolerance", value)}>
            <SelectTrigger>
              <span>Select noise tolerance level</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
          {errors.noiseTolerance && (
            <p className="text-red-500 text-sm">
              {errors.noiseTolerance.message}
            </p>
          )}
        </div>

        {/* Parking Instructions */}
        <div className="md:col-span-2">
          <label htmlFor="parking" className="block text-sm font-medium">
            Parking Instructions
          </label>
          <Textarea
            id="parking"
            placeholder="Enter parking instructions"
            {...register("parking")}
          />
        </div>

        {/* Safety Precautions */}
        <div>
          <label htmlFor="safety" className="block text-sm font-medium">
            Safety Precautions
          </label>
          <Textarea
            id="safety"
            placeholder="Enter safety precautions"
            {...register("safety")}
          />
        </div>

        {/* Is Piano Available Onsite */}
        <div>
          <p className="text-sm font-medium">Is Piano Available Onsite?</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <Checkbox
                id="piano-yes"
                onCheckedChange={(checked) =>
                  setValue("isPianoAvailable", checked)
                }
              />
              <span>Yes</span>
            </label>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="md:col-span-3">
          <label htmlFor="notes" className="block text-sm font-medium">
            Additional Notes
          </label>
          <Textarea
            id="notes"
            placeholder="Enter additional notes"
            {...register("notes")}
          />
        </div>
      </div>

      {/* Submit Button */}
      {/* <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit
      </button> */}
    </form>
  );
};

export default ClientLocationInfo;
