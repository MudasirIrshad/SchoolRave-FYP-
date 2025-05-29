
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SchoolScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  address: 'address',
  medium_of_instruction: 'medium_of_instruction',
  imageUrl: 'imageUrl',
  description: 'description',
  gradeRange: 'gradeRange',
  studentCount: 'studentCount',
  userId: 'userId',
  facilities: 'facilities',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subscriptionType: 'subscriptionType',
  stripeCustomerId: 'stripeCustomerId',
  schoolCategory: 'schoolCategory',
  school_type: 'school_type',
  curriculum_type: 'curriculum_type',
  admissionFormUrl: 'admissionFormUrl'
};

exports.Prisma.SchoolBranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  city: 'city',
  email: 'email',
  phone: 'phone',
  description: 'description',
  imageUrl: 'imageUrl',
  admissionFormUrl: 'admissionFormUrl',
  admission_status: 'admission_status',
  schoolBranchCategory: 'schoolBranchCategory',
  gender_policy: 'gender_policy',
  facilities: 'facilities',
  schoolId: 'schoolId'
};

exports.Prisma.Class_base_feeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  admission_fee: 'admission_fee',
  monthly_fee: 'monthly_fee',
  schoolBranchId: 'schoolBranchId',
  schoolId: 'schoolId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  imageUrl: 'imageUrl',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role'
};

exports.Prisma.FavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  schoolId: 'schoolId',
  createdAt: 'createdAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  rating: 'rating',
  comment: 'comment',
  schoolId: 'schoolId',
  schoolBranchId: 'schoolBranchId',
  reviewerId: 'reviewerId',
  createdAt: 'createdAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  status: 'status',
  type: 'type',
  createdAt: 'createdAt',
  startDate: 'startDate',
  endDate: 'endDate',
  schoolId: 'schoolId'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subscriptionId: 'subscriptionId',
  schoolId: 'schoolId',
  userId: 'userId'
};

exports.Prisma.AdmissionScalarFieldEnum = {
  id: 'id',
  student_name: 'student_name',
  student_age: 'student_age',
  date_of_birth: 'date_of_birth',
  image_url: 'image_url',
  approval: 'approval',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  schoolId: 'schoolId',
  submitterId: 'submitterId'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  admissionId: 'admissionId'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  schoolId: 'schoolId',
  content: 'content',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.SubscriptionType = exports.$Enums.SubscriptionType = {
  FREE: 'FREE',
  PAID: 'PAID'
};

exports.SchoolCategory = exports.$Enums.SchoolCategory = {
  PRIMARY: 'PRIMARY',
  MIDDLE: 'MIDDLE',
  HIGH: 'HIGH'
};

exports.SchoolType = exports.$Enums.SchoolType = {
  GOVERNMENT: 'GOVERNMENT',
  PRIVATE: 'PRIVATE',
  SEMI_GOVERNMENT: 'SEMI_GOVERNMENT'
};

exports.CurriculumType = exports.$Enums.CurriculumType = {
  FEDERAL: 'FEDERAL',
  BALUCHISTAN: 'BALUCHISTAN'
};

exports.AdmissionStatus = exports.$Enums.AdmissionStatus = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

exports.GenderPolicy = exports.$Enums.GenderPolicy = {
  CO_EDUCATION: 'CO_EDUCATION',
  BOYS_ONLY: 'BOYS_ONLY',
  GIRLS_ONLY: 'GIRLS_ONLY'
};

exports.UserRole = exports.$Enums.UserRole = {
  SCHOOL: 'SCHOOL',
  GENERAL: 'GENERAL',
  ADMIN: 'ADMIN'
};

exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

exports.AdmissionApproval = exports.$Enums.AdmissionApproval = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  School: 'School',
  SchoolBranch: 'SchoolBranch',
  Class_base_fee: 'Class_base_fee',
  User: 'User',
  Favorite: 'Favorite',
  Review: 'Review',
  Subscription: 'Subscription',
  Payment: 'Payment',
  Admission: 'Admission',
  Document: 'Document',
  Post: 'Post'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
