import { useForm } from "react-hook-form";
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
import { Textarea } from "../../../components/ui/textarea";

export default function ArtistInfoForm() {
  const form = useForm({
    defaultValues: {
      school: "",
      grade: "",
      biography: "",
      availableAfter: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-4xl"
      >
        {/* Row with two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Field */}
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School</FormLabel>
                <FormControl>
                  <Select {...field} placeholder="Select School">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a school" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Schools</SelectLabel>
                        <SelectItem value="school1">School 1</SelectItem>
                        <SelectItem value="school2">School 2</SelectItem>
                        <SelectItem value="school3">School 3</SelectItem>
                        <SelectItem value="school4">School 4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Grade Field */}
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade</FormLabel>
                <FormControl>
                  <Select {...field} placeholder="Select Grade">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Grades</SelectLabel>
                        {[...Array(7).keys()].map((i) => (
                          <SelectItem key={i} value={i + 6}>
                            {i + 6}
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

        {/* Available After Field */}
        <FormField
          control={form.control}
          name="availableAfter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available After</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Biography Field */}
        <FormField
          control={form.control}
          name="biography"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biography</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your biography" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
