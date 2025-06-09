export interface School {
  id: string;
  name: string;
  logo: string;
  branches: Branch[];
  schoolType: SchoolType;
}

export interface Branch {
  id: string;
  schoolId: string;
  location: string;
  admissionPeriod: {
    startDate: string;
    endDate: string;
  };
  programs: Program[];
  requirements: string[];
  status: AdmissionStatus;
}

export interface Program {
  id: string;
  name: string;
  type: ProgramType;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favoriteSchools: string[];
  applications: Application[];
  preferences: UserPreferences;
}

export interface Application {
  approval: any;
  createdAt: string | number | Date;
  updatedAt: string | number | Date;
  dateOfBirth: string | number | Date;
  id: string;
  schoolId: string;
  branchId: string;
  programId: string;
  status: ApplicationStatus;
  submittedDate: string;
  lastUpdated: string;
}

export interface UserPreferences {
  emailNotifications: boolean;
  applicationUpdates: boolean;
  newAdmissionAlerts: boolean;
  language: string;
}

export enum SchoolType {
  PUBLIC = "Public",
  PRIVATE = "Private",
  CHARTER = "Charter",
  INTERNATIONAL = "International",
}

export enum ProgramType {
  UNDERGRADUATE = "Undergraduate",
  GRADUATE = "Graduate",
  DIPLOMA = "Diploma",
  CERTIFICATE = "Certificate",
  VOCATIONAL = "Vocational",
}

export enum AdmissionStatus {
  ACCEPTING = "Accepting Applications",
  CLOSING_SOON = "Closing Soon",
  CLOSED = "Applications Closed",
}

export enum ApplicationStatus {
  DRAFT = "Draft",
  SUBMITTED = "Submitted",
  UNDER_REVIEW = "Under Review",
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
  WAITLISTED = "Waitlisted",
}

export interface FilterOptions {
  locations: string[];
  programTypes: ProgramType[];
  schoolTypes: SchoolType[];
  deadline?: string;
}
