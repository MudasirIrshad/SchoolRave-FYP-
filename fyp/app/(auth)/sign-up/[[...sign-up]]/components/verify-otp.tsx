"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Import Shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
export default function VerificationForm({ signUp, setActive }) {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  // Define the verification form schema
  const verificationFormSchema = z.object({
    code: z
      .string()
      .min(6, { message: "Verification code must be at least 6 characters" }),
  });

  // Initialize the verification form
  const form = useForm<z.infer<typeof verificationFormSchema>>({
    resolver: zodResolver(verificationFormSchema),
    defaultValues: {
      code: "",
    },
  });

  // Handle the submission of the verification form
  const onSubmit = async (values: z.infer<typeof verificationFormSchema>) => {
    setIsLoading(true);
    setError(null);

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: values.code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });

        // 👇 Access role from user metadata
        // const role = signUpAttempt.user?.unsafeMetadata?.role || "user";

        router.push("/dashboard");

        // // 👇 Route based on role
        // if (role === "SCHOOL") {
        //   router.push("/school");
        // } else {
        //   router.push("/dashboard");
        // }
        setIsLoading(false);
      } else {
        // If the status is not complete, check why
        console.error(JSON.stringify(signUpAttempt, null, 2));
        setIsLoading(false);

        setError("Verification not complete. Please try again.");
      }
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error:", JSON.stringify(err, null, 2));
      setError(
        err.errors?.[0]?.message || "An error occurred during verification"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Verify your email
          </CardTitle>
          <CardDescription>
            Enter the verification code sent to your email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verification Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter code"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormDescription>
                      Please check your email for the verification code
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                Verify Email
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
