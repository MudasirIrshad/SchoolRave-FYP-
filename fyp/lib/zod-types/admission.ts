import * as z from "zod";

export const formSchema = z.object({
  studentName: z.string().min(2, {
    message: "Student name must be at least 2 characters.",
  }),
  studentAge: z.number().int().positive().min(1, {
    message: "Student age must be at least 1.",
  }),
  dateOfBirth: z.date(),
  requestedClass: z.string().min(1, {
    message: "Please select a class.",
  }),
  guardianName: z.string().min(2, {
    message: "Guardian name must be at least 2 characters.",
  }),
  nicNumber: z.string().min(10, {
    message: "NIC number must be at least 10 characters.",
  }),
  guardianQualification: z.string().min(2, {
    message: "Qualification must be at least 2 characters.",
  }),
  guardianOccupation: z.string().min(2, {
    message: "Occupation must be at least 2 characters.",
  }),
  monthlyIncome: z.string().min(1, {
    message: "Please enter monthly income.",
  }),
  religion: z.string().min(2, {
    message: "Religion must be at least 2 characters.",
  }),
  nationality: z.string().min(2, {
    message: "Nationality must be at least 2 characters.",
  }),
  postalAddress: z.string().min(5, {
    message: "Postal address must be at least 5 characters.",
  }),
  presentAddress: z.string().min(5, {
    message: "Present address must be at least 5 characters.",
  }),
  telephoneNumber: z.string().min(6, {
    message: "Telephone number must be at least 6 characters.",
  }),
  mobileNumber: z.string().min(10, {
    message: "Mobile number must be at least 10 characters.",
  }),
  disabilityNature: z.string().optional(),
  disabilityOnsetDate: z.date().optional(),
  disabilityCause: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;
