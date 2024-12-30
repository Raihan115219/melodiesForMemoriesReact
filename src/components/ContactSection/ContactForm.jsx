import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <div className=" p-6  rounded-lg bg-gray-50 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="mt-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="mt-2"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full rounded-sm">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
