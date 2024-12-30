import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SignInFrom = ({ isDialogOpen, setIsDialogOpen }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className="w-96">
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First Name */}
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Enter your last name"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          {/* <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Controller
              control={control}
              name="dateOfBirth"
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onSelect={field.onChange}
                  placeholder="Select your date of birth"
                />
              )}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div> */}

          {/* User Role */}
          <div>
            <Label>User Role</Label>
            <Controller
              control={control}
              name="userRole"
              rules={{ required: "User Role is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue="">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Client</SelectItem>
                    <SelectItem value="artist">Artist</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.userRole && (
              <p className="text-red-500 text-sm">{errors.userRole.message}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2 my-2">
            <Controller
              control={control}
              name="termsAccepted"
              rules={{ required: "You must accept the terms and conditions" }}
              render={({ field }) => (
                <Checkbox
                  id="termsAccepted"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <p htmlFor="termsAccepted">I accept the terms and conditions</p>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">
              {errors.termsAccepted.message}
            </p>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInFrom;
