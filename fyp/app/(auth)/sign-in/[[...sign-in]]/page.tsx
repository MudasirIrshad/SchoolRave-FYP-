import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}

// "use client";

// import { useState, useTransition } from "react";
// import { useSignIn } from "@clerk/nextjs";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Form } from "@/components/ui/form";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";

// import InputField from "@/components/form/input-field";
// import { signInSchema, SignInType } from "@/app/(auth)/auth-types";
// import LoadingSpinner from "@/components/loading-spinner";
// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";

// export default function SignInPage() {
//   const router = useRouter();
//   const { isLoaded, signIn, setActive } = useSignIn();
//   const [error, setError] = useState<string | null>(null);
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<SignInType>({
//     resolver: zodResolver(signInSchema),
//     defaultValues: {
//       emailAddress: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (values: SignInType) => {
//     if (!isLoaded) return;

//     setError(null);
//     startTransition(async () => {
//       try {
//         const signInAttempt = await signIn.create({
//           identifier: values.emailAddress,
//           password: values.password,
//         });

//         if (signInAttempt.status === "complete") {
//           await setActive({ session: signInAttempt.createdSessionId });

//           router.push("/check");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("An error occurred during sign up. Please try again later");
//       }
//     });
//   };

//   const signInWithGoogle = () => {
//     if (!isLoaded) return;

//     startTransition(async () => {
//       try {
//         await signIn.authenticateWithRedirect({
//           strategy: "oauth_google",
//           redirectUrl: "/sso-callback",
//           redirectUrlComplete: "/",
//         });
//       } catch (err) {
//         console.error(err);
//         setError(
//           "An error occurred during Google sign in. Please try again later"
//         );
//       }
//     });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
//           <CardDescription>
//             Enter your email and password to Sign in
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {error && (
//             <Alert variant="destructive" className="mb-4">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//           <Button
//             variant="outline"
//             className="w-full mb-6"
//             onClick={signInWithGoogle}
//             disabled={isPending}
//           >
//             {isPending ? (
//               <LoadingSpinner />
//             ) : (
//               <Image
//                 src="/google-icon.svg"
//                 alt="Google Icon"
//                 width={24}
//                 height={24}
//               />
//             )}
//             Continue with Google
//           </Button>
//           <div className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <Separator className="w-full" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-background px-2 text-muted-foreground">
//                 Or continue with
//               </span>
//             </div>
//           </div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <InputField
//                 name="emailAddress"
//                 label="Email"
//                 placeholder="your.email@example.com"
//                 disabled={isPending}
//                 type="email"
//               />

//               <InputField
//                 name="password"
//                 label="Password"
//                 placeholder="••••••••"
//                 disabled={isPending}
//                 type="password"
//               />

//               <Button type="submit" className="w-full" disabled={isPending}>
//                 {isPending ? <LoadingSpinner color="white" /> : "Sign In"}
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//         <CardFooter className="flex justify-center border-t p-4">
//           <p className="text-sm text-gray-500">
//             Don&apos;t have an account?
//             <Link href="/sign-up" className="text-primary hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
