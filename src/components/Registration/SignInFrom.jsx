/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignInForm = ({ isDialogOpen, setIsDialogOpen }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className="w-96">
      <DialogContent>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p> Enter your email and password to sign in.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          {/* Forgot Password */}
          <div className="text-right mb-2">
            <a href="#" className="text-sm text-blue-500">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignInForm;
