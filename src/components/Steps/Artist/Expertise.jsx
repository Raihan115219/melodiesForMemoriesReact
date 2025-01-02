import { useForm } from "react-hook-form";
import SelectSearch from "react-select"; // For search functionality in dropdown
import { Checkbox } from "../../../components/ui/checkbox"; // Custom Checkbox component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input"; // Custom Input component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"; // Custom Select components

export default function Expertise() {
  const form = useForm({
    defaultValues: {
      musicExpertise: "",
      skillLevel: "",
      availability: {
        mon: { available: false, start: "", end: "" },
      },
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  // Music Expertise options (you can replace these with dynamic options)
  const musicExpertiseOptions = [
    { label: "Classical", value: "classical" },
    { label: "Jazz", value: "jazz" },
    { label: "Rock", value: "rock" },
    { label: "Pop", value: "pop" },
    { label: "Hip Hop", value: "hip_hop" },
    { label: "Electronic", value: "electronic" },
    { label: "Reggae", value: "reggae" },
    { label: "Blues", value: "blues" },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-4xl"
      >
        {/* Row with two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Music Expertise Field */}
          <FormField
            control={form.control}
            name="musicExpertise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Music Expertise</FormLabel>
                <FormControl>
                  <SelectSearch
                    {...field}
                    options={musicExpertiseOptions}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption.value);
                    }}
                    placeholder="Search and select music expertise"
                    isSearchable={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Skill Level Field */}
          <FormField
            control={form.control}
            name="skillLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill Level</FormLabel>
                <FormControl>
                  <Select {...field} placeholder="Select Skill Level">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Levels</SelectLabel>
                        {[1, 2, 3, 4, 5].map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Availability Section */}
        <div className="space-y-4">
          <FormLabel>Availabilities</FormLabel>
          {["mon"].map((day) => (
            <div key={day} className="space-y-2">
              <FormLabel>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </FormLabel>
              <FormField
                control={form.control}
                name={`availability.${day}.available`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      >
                        Available?
                      </Checkbox>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`availability.${day}.start`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`availability.${day}.end`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </Form>
  );
}
