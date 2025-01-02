import { useForm } from "react-hook-form";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

export default function ProfileForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      email: "",
      password: "",
      receiveEmail: false,
      receiveSMS: false,
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl mb-4 font-bold underline">Profile</h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 4 (Checkboxes) */}
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="receiveEmail"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormControl>
                    <Checkbox {...field} className="mr-2" />
                  </FormControl>
                  <FormLabel>Receive Email?</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="receiveSMS"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox {...field} className="mr-2" />
                  </FormControl>
                  <FormLabel>Receive SMS?</FormLabel>
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </div>
  );
}
