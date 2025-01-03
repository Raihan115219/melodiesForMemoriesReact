import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const preview = URL.createObjectURL(file);
    setImage(preview);
    setImageFile(file); // Save the file for submission
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
    multiple: false,
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });

  const onSubmit = (data) => {
    const formData = {
      ...data,
      profileImage: imageFile || "No image uploaded",
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-4 bg-gray-100 container mx-auto m-10 rounded-lg shadow-lg">
      {/* Profile Picture Upload */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-40 h-40 rounded-full border">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
          </div>
          <div
            {...getRootProps()}
            className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
          >
            <input {...getInputProps()} />
            Upload
          </div>
        </div>
      </div>

      {/* Email Notifications */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div>
            <h3 className="mb-4 text-lg font-medium">SMS and Email</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Received email</FormLabel>
                      <FormDescription>
                        Receive emails about your update from melodies for
                        memories.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="security_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Received SMS</FormLabel>
                      <FormDescription>
                        Receive SMS about your update from melodies for
                        memories.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Update</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfilePage;
