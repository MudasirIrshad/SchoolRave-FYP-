// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { CalendarIcon, CheckCircle2 } from "lucide-react";
// import { format } from "date-fns";

// interface Branch {
//   id: string;
//   name: string;
//   location: string;
//   openForAdmission?: boolean;
//   applicationDeadline?: string;
//   tuitionFee?: string;
// }

// interface ApplicationFormProps {
//   schoolId: string;
//   schoolName: string;
//   branches?: Branch[];
//   branchId?: string | null;
//   branchName?: string | null;
// }

// export function ApplicationForm({
//   schoolId,
//   schoolName,
//   branches,
//   branchId,
//   branchName,
// }: ApplicationFormProps) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [selectedBranchId, setSelectedBranchId] = useState(branchId || "");
//   const [step, setStep] = useState(1);
//   const [date, setDate] = useState<Date>();
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const hasBranches = branches && branches.length > 0;
//   const currentBranch = hasBranches
//     ? branches?.find((b) => b.id === (selectedBranchId || branchId))
//     : null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, this would send the application to your API
//     setFormSubmitted(true);
//   };

//   const resetForm = () => {
//     setStep(1);
//     setFormSubmitted(false);
//     setIsDialogOpen(false);
//   };

//   return (
//     <div>
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogTrigger asChild>
//           <Button className="w-full bg-gray-900 hover:bg-gray-800">
//             Apply Online
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[600px]">
//           {!formSubmitted ? (
//             <>
//               <DialogHeader>
//                 <DialogTitle>
//                   Application for {branchName || schoolName}
//                   {selectedBranchId &&
//                     !branchId &&
//                     branches?.find((b) => b.id === selectedBranchId)?.name}
//                 </DialogTitle>
//                 <DialogDescription>
//                   Please complete all required fields to submit your
//                   application.
//                 </DialogDescription>
//               </DialogHeader>

//               <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                 {step === 1 && (
//                   <div className="space-y-4">
//                     {hasBranches && !branchId && (
//                       <div>
//                         <Label htmlFor="branch">Select Branch</Label>
//                         <Select
//                           value={selectedBranchId}
//                           onValueChange={setSelectedBranchId}
//                           required
//                         >
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select a branch" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {branches?.map((branch) => (
//                               <SelectItem
//                                 key={branch.id}
//                                 value={branch.id}
//                                 disabled={branch.openForAdmission === false}
//                               >
//                                 {branch.name}{" "}
//                                 {branch.openForAdmission === false &&
//                                   "(Closed)"}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         {currentBranch && (
//                           <div className="mt-2 text-sm">
//                             <p className="text-gray-500">
//                               Location: {currentBranch.location}
//                             </p>
//                             {currentBranch.applicationDeadline && (
//                               <p className="text-gray-500">
//                                 Application Deadline:{" "}
//                                 {currentBranch.applicationDeadline}
//                               </p>
//                             )}
//                             {currentBranch.tuitionFee && (
//                               <p className="text-gray-500">
//                                 Tuition Fee: {currentBranch.tuitionFee}
//                               </p>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     <div>
//                       <Label htmlFor="student-name">Student Full Name</Label>
//                       <Input
//                         id="student-name"
//                         placeholder="Enter student's full name"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="dob">Date of Birth</Label>
//                       <Popover>
//                         <PopoverTrigger asChild>
//                           <Button
//                             variant="outline"
//                             className="w-full justify-start text-left font-normal"
//                           >
//                             <CalendarIcon className="mr-2 h-4 w-4" />
//                             {date ? (
//                               format(date, "PPP")
//                             ) : (
//                               <span>Pick a date</span>
//                             )}
//                           </Button>
//                         </PopoverTrigger>
//                         <PopoverContent className="w-auto p-0">
//                           <Calendar
//                             mode="single"
//                             selected={date}
//                             onSelect={setDate}
//                             initialFocus
//                           />
//                         </PopoverContent>
//                       </Popover>
//                     </div>

//                     <div>
//                       <Label>Gender</Label>
//                       <RadioGroup
//                         defaultValue="male"
//                         className="flex gap-4 mt-2"
//                       >
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value="male" id="male" />
//                           <Label htmlFor="male">Male</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value="female" id="female" />
//                           <Label htmlFor="female">Female</Label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <RadioGroupItem value="other" id="other-gender" />
//                           <Label htmlFor="other-gender">Other</Label>
//                         </div>
//                       </RadioGroup>
//                     </div>

//                     <div>
//                       <Label htmlFor="grade-applying">Grade Applying For</Label>
//                       <Select required>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select grade" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="k">Kindergarten</SelectItem>
//                           <SelectItem value="1">Grade 1</SelectItem>
//                           <SelectItem value="2">Grade 2</SelectItem>
//                           <SelectItem value="3">Grade 3</SelectItem>
//                           <SelectItem value="4">Grade 4</SelectItem>
//                           <SelectItem value="5">Grade 5</SelectItem>
//                           <SelectItem value="6">Grade 6</SelectItem>
//                           <SelectItem value="7">Grade 7</SelectItem>
//                           <SelectItem value="8">Grade 8</SelectItem>
//                           <SelectItem value="9">Grade 9</SelectItem>
//                           <SelectItem value="10">Grade 10</SelectItem>
//                           <SelectItem value="11">Grade 11</SelectItem>
//                           <SelectItem value="12">Grade 12</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div className="pt-4 flex justify-end">
//                       <Button type="button" onClick={() => setStep(2)}>
//                         Next
//                       </Button>
//                     </div>
//                   </div>
//                 )}

//                 {step === 2 && (
//                   <div className="space-y-4">
//                     <div>
//                       <Label htmlFor="parent-name">Parent/Guardian Name</Label>
//                       <Input
//                         id="parent-name"
//                         placeholder="Enter parent/guardian name"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="relationship">
//                         Relationship to Student
//                       </Label>
//                       <Select required>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select relationship" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="mother">Mother</SelectItem>
//                           <SelectItem value="father">Father</SelectItem>
//                           <SelectItem value="guardian">
//                             Legal Guardian
//                           </SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div>
//                       <Label htmlFor="email">Email Address</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="Enter email address"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="phone">Phone Number</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter phone number"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="address">Home Address</Label>
//                       <Textarea
//                         id="address"
//                         placeholder="Enter home address"
//                         required
//                       />
//                     </div>

//                     <div className="pt-4 flex justify-between">
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={() => setStep(1)}
//                       >
//                         Previous
//                       </Button>
//                       <Button type="button" onClick={() => setStep(3)}>
//                         Next
//                       </Button>
//                     </div>
//                   </div>
//                 )}

//                 {step === 3 && (
//                   <div className="space-y-4">
//                     <div>
//                       <Label htmlFor="current-school">
//                         Current School (if any)
//                       </Label>
//                       <Input
//                         id="current-school"
//                         placeholder="Enter current school name"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="reason">Reason for Application</Label>
//                       <Textarea
//                         id="reason"
//                         placeholder="Why are you interested in this school?"
//                         className="h-24"
//                         required
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label>Required Documents</Label>
//                       <div className="space-y-2">
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="birth-certificate" />
//                           <label
//                             htmlFor="birth-certificate"
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             Birth Certificate
//                           </label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="academic-records" />
//                           <label
//                             htmlFor="academic-records"
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             Academic Records
//                           </label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Checkbox id="recommendation" />
//                           <label
//                             htmlFor="recommendation"
//                             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                           >
//                             Letter of Recommendation
//                           </label>
//                         </div>
//                       </div>
//                       <p className="text-xs text-gray-500">
//                         You will be asked to upload these documents after
//                         submitting this form.
//                       </p>
//                     </div>

//                     <div className="flex items-center space-x-2 pt-2">
//                       <Checkbox id="terms" required />
//                       <label
//                         htmlFor="terms"
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                       >
//                         I agree to the terms and conditions
//                       </label>
//                     </div>

//                     <div className="pt-4 flex justify-between">
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={() => setStep(2)}
//                       >
//                         Previous
//                       </Button>
//                       <Button type="submit">Submit Application</Button>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </>
//           ) : (
//             <div className="py-8 text-center">
//               <div className="flex justify-center mb-4">
//                 <CheckCircle2 className="h-16 w-16 text-green-500" />
//               </div>
//               <h2 className="text-2xl font-bold mb-2">
//                 Application Submitted!
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Thank you for applying to {branchName || schoolName}
//                 {selectedBranchId &&
//                   !branchId &&
//                   branches?.find((b) => b.id === selectedBranchId)?.name}
//                 . We will contact you shortly.
//               </p>
//               <p className="text-sm text-gray-500 mb-6">
//                 Application Reference: APP-{Math.floor(Math.random() * 1000000)}
//               </p>
//               <Button onClick={resetForm}>Close</Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
