
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model SchoolBranch
 * 
 */
export type SchoolBranch = $Result.DefaultSelection<Prisma.$SchoolBranchPayload>
/**
 * Model Class_base_fee
 * 
 */
export type Class_base_fee = $Result.DefaultSelection<Prisma.$Class_base_feePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Admission
 * 
 */
export type Admission = $Result.DefaultSelection<Prisma.$AdmissionPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SchoolType: {
  GOVERNMENT: 'GOVERNMENT',
  PRIVATE: 'PRIVATE',
  SEMI_GOVERNMENT: 'SEMI_GOVERNMENT'
};

export type SchoolType = (typeof SchoolType)[keyof typeof SchoolType]


export const CurriculumType: {
  FEDERAL: 'FEDERAL',
  BALUCHISTAN: 'BALUCHISTAN'
};

export type CurriculumType = (typeof CurriculumType)[keyof typeof CurriculumType]


export const AdmissionStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

export type AdmissionStatus = (typeof AdmissionStatus)[keyof typeof AdmissionStatus]


export const GenderPolicy: {
  COEDUCATION: 'COEDUCATION',
  BOYS_ONLY: 'BOYS_ONLY',
  GIRLS_ONLY: 'GIRLS_ONLY'
};

export type GenderPolicy = (typeof GenderPolicy)[keyof typeof GenderPolicy]


export const UserRole: {
  SCHOOL: 'SCHOOL',
  GENERAL: 'GENERAL',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SubscriptionPlan: {
  THREE_MONTH: 'THREE_MONTH',
  SIX_MONTH: 'SIX_MONTH',
  ONE_YEAR: 'ONE_YEAR'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SubscriptionType: {
  FREE: 'FREE',
  PAID: 'PAID'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const AdmissionApproval: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type AdmissionApproval = (typeof AdmissionApproval)[keyof typeof AdmissionApproval]

}

export type SchoolType = $Enums.SchoolType

export const SchoolType: typeof $Enums.SchoolType

export type CurriculumType = $Enums.CurriculumType

export const CurriculumType: typeof $Enums.CurriculumType

export type AdmissionStatus = $Enums.AdmissionStatus

export const AdmissionStatus: typeof $Enums.AdmissionStatus

export type GenderPolicy = $Enums.GenderPolicy

export const GenderPolicy: typeof $Enums.GenderPolicy

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type AdmissionApproval = $Enums.AdmissionApproval

export const AdmissionApproval: typeof $Enums.AdmissionApproval

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolBranch`: Exposes CRUD operations for the **SchoolBranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolBranches
    * const schoolBranches = await prisma.schoolBranch.findMany()
    * ```
    */
  get schoolBranch(): Prisma.SchoolBranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class_base_fee`: Exposes CRUD operations for the **Class_base_fee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Class_base_fees
    * const class_base_fees = await prisma.class_base_fee.findMany()
    * ```
    */
  get class_base_fee(): Prisma.Class_base_feeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admission`: Exposes CRUD operations for the **Admission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admissions
    * const admissions = await prisma.admission.findMany()
    * ```
    */
  get admission(): Prisma.AdmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    School: 'School',
    SchoolBranch: 'SchoolBranch',
    Class_base_fee: 'Class_base_fee',
    User: 'User',
    Review: 'Review',
    Subscription: 'Subscription',
    Payment: 'Payment',
    Admission: 'Admission',
    Document: 'Document'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "school" | "schoolBranch" | "class_base_fee" | "user" | "review" | "subscription" | "payment" | "admission" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      SchoolBranch: {
        payload: Prisma.$SchoolBranchPayload<ExtArgs>
        fields: Prisma.SchoolBranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolBranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolBranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          findFirst: {
            args: Prisma.SchoolBranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolBranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          findMany: {
            args: Prisma.SchoolBranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>[]
          }
          create: {
            args: Prisma.SchoolBranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          createMany: {
            args: Prisma.SchoolBranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolBranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>[]
          }
          delete: {
            args: Prisma.SchoolBranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          update: {
            args: Prisma.SchoolBranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          deleteMany: {
            args: Prisma.SchoolBranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolBranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolBranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>[]
          }
          upsert: {
            args: Prisma.SchoolBranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolBranchPayload>
          }
          aggregate: {
            args: Prisma.SchoolBranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolBranch>
          }
          groupBy: {
            args: Prisma.SchoolBranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolBranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolBranchCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolBranchCountAggregateOutputType> | number
          }
        }
      }
      Class_base_fee: {
        payload: Prisma.$Class_base_feePayload<ExtArgs>
        fields: Prisma.Class_base_feeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Class_base_feeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Class_base_feeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          findFirst: {
            args: Prisma.Class_base_feeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Class_base_feeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          findMany: {
            args: Prisma.Class_base_feeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>[]
          }
          create: {
            args: Prisma.Class_base_feeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          createMany: {
            args: Prisma.Class_base_feeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Class_base_feeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>[]
          }
          delete: {
            args: Prisma.Class_base_feeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          update: {
            args: Prisma.Class_base_feeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          deleteMany: {
            args: Prisma.Class_base_feeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Class_base_feeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Class_base_feeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>[]
          }
          upsert: {
            args: Prisma.Class_base_feeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Class_base_feePayload>
          }
          aggregate: {
            args: Prisma.Class_base_feeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass_base_fee>
          }
          groupBy: {
            args: Prisma.Class_base_feeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Class_base_feeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Class_base_feeCountArgs<ExtArgs>
            result: $Utils.Optional<Class_base_feeCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Admission: {
        payload: Prisma.$AdmissionPayload<ExtArgs>
        fields: Prisma.AdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findFirst: {
            args: Prisma.AdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findMany: {
            args: Prisma.AdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          create: {
            args: Prisma.AdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          createMany: {
            args: Prisma.AdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          delete: {
            args: Prisma.AdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          update: {
            args: Prisma.AdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          upsert: {
            args: Prisma.AdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          aggregate: {
            args: Prisma.AdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmission>
          }
          groupBy: {
            args: Prisma.AdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    school?: SchoolOmit
    schoolBranch?: SchoolBranchOmit
    class_base_fee?: Class_base_feeOmit
    user?: UserOmit
    review?: ReviewOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    admission?: AdmissionOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    schoolBranch: number
    class_base_fee: number
    reviews: number
    subscription: number
    Payment: number
    Admission: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolBranch?: boolean | SchoolCountOutputTypeCountSchoolBranchArgs
    class_base_fee?: boolean | SchoolCountOutputTypeCountClass_base_feeArgs
    reviews?: boolean | SchoolCountOutputTypeCountReviewsArgs
    subscription?: boolean | SchoolCountOutputTypeCountSubscriptionArgs
    Payment?: boolean | SchoolCountOutputTypeCountPaymentArgs
    Admission?: boolean | SchoolCountOutputTypeCountAdmissionArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSchoolBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolBranchWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountClass_base_feeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Class_base_feeWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }


  /**
   * Count Type SchoolBranchCountOutputType
   */

  export type SchoolBranchCountOutputType = {
    class_base_fee: number
    reviews: number
  }

  export type SchoolBranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class_base_fee?: boolean | SchoolBranchCountOutputTypeCountClass_base_feeArgs
    reviews?: boolean | SchoolBranchCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * SchoolBranchCountOutputType without action
   */
  export type SchoolBranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranchCountOutputType
     */
    select?: SchoolBranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolBranchCountOutputType without action
   */
  export type SchoolBranchCountOutputTypeCountClass_base_feeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Class_base_feeWhereInput
  }

  /**
   * SchoolBranchCountOutputType without action
   */
  export type SchoolBranchCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    payment: number
    Admission: number
    School: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
    Admission?: boolean | UserCountOutputTypeCountAdmissionArgs
    School?: boolean | UserCountOutputTypeCountSchoolArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payment: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | SubscriptionCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type AdmissionCountOutputType
   */

  export type AdmissionCountOutputType = {
    documents: number
  }

  export type AdmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | AdmissionCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * AdmissionCountOutputType without action
   */
  export type AdmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionCountOutputType
     */
    select?: AdmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdmissionCountOutputType without action
   */
  export type AdmissionCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    affiliation: string | null
    medium_of_instruction: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    school_type: $Enums.SchoolType | null
    curriculum_type: $Enums.CurriculumType | null
    userId: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    affiliation: string | null
    medium_of_instruction: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    school_type: $Enums.SchoolType | null
    curriculum_type: $Enums.CurriculumType | null
    userId: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    affiliation: number
    medium_of_instruction: number
    description: number
    createdAt: number
    updatedAt: number
    school_type: number
    curriculum_type: number
    userId: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    affiliation?: true
    medium_of_instruction?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    school_type?: true
    curriculum_type?: true
    userId?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    affiliation?: true
    medium_of_instruction?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    school_type?: true
    curriculum_type?: true
    userId?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    affiliation?: true
    medium_of_instruction?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    school_type?: true
    curriculum_type?: true
    userId?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt: Date
    updatedAt: Date
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    affiliation?: boolean
    medium_of_instruction?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school_type?: boolean
    curriculum_type?: boolean
    userId?: boolean
    schoolBranch?: boolean | School$schoolBranchArgs<ExtArgs>
    class_base_fee?: boolean | School$class_base_feeArgs<ExtArgs>
    reviews?: boolean | School$reviewsArgs<ExtArgs>
    subscription?: boolean | School$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Payment?: boolean | School$PaymentArgs<ExtArgs>
    Admission?: boolean | School$AdmissionArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    affiliation?: boolean
    medium_of_instruction?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school_type?: boolean
    curriculum_type?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    affiliation?: boolean
    medium_of_instruction?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school_type?: boolean
    curriculum_type?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    affiliation?: boolean
    medium_of_instruction?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school_type?: boolean
    curriculum_type?: boolean
    userId?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "affiliation" | "medium_of_instruction" | "description" | "createdAt" | "updatedAt" | "school_type" | "curriculum_type" | "userId", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolBranch?: boolean | School$schoolBranchArgs<ExtArgs>
    class_base_fee?: boolean | School$class_base_feeArgs<ExtArgs>
    reviews?: boolean | School$reviewsArgs<ExtArgs>
    subscription?: boolean | School$subscriptionArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Payment?: boolean | School$PaymentArgs<ExtArgs>
    Admission?: boolean | School$AdmissionArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      schoolBranch: Prisma.$SchoolBranchPayload<ExtArgs>[]
      class_base_fee: Prisma.$Class_base_feePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      Admission: Prisma.$AdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      address: string
      affiliation: string
      medium_of_instruction: string
      description: string
      createdAt: Date
      updatedAt: Date
      school_type: $Enums.SchoolType
      curriculum_type: $Enums.CurriculumType
      userId: string
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schoolBranch<T extends School$schoolBranchArgs<ExtArgs> = {}>(args?: Subset<T, School$schoolBranchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    class_base_fee<T extends School$class_base_feeArgs<ExtArgs> = {}>(args?: Subset<T, School$class_base_feeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends School$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, School$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends School$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, School$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payment<T extends School$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, School$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admission<T extends School$AdmissionArgs<ExtArgs> = {}>(args?: Subset<T, School$AdmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */ 
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly email: FieldRef<"School", 'String'>
    readonly phone: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
    readonly affiliation: FieldRef<"School", 'String'>
    readonly medium_of_instruction: FieldRef<"School", 'String'>
    readonly description: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
    readonly school_type: FieldRef<"School", 'SchoolType'>
    readonly curriculum_type: FieldRef<"School", 'CurriculumType'>
    readonly userId: FieldRef<"School", 'String'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.schoolBranch
   */
  export type School$schoolBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    where?: SchoolBranchWhereInput
    orderBy?: SchoolBranchOrderByWithRelationInput | SchoolBranchOrderByWithRelationInput[]
    cursor?: SchoolBranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolBranchScalarFieldEnum | SchoolBranchScalarFieldEnum[]
  }

  /**
   * School.class_base_fee
   */
  export type School$class_base_feeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    where?: Class_base_feeWhereInput
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    cursor?: Class_base_feeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_base_feeScalarFieldEnum | Class_base_feeScalarFieldEnum[]
  }

  /**
   * School.reviews
   */
  export type School$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * School.subscription
   */
  export type School$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * School.Payment
   */
  export type School$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * School.Admission
   */
  export type School$AdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model SchoolBranch
   */

  export type AggregateSchoolBranch = {
    _count: SchoolBranchCountAggregateOutputType | null
    _min: SchoolBranchMinAggregateOutputType | null
    _max: SchoolBranchMaxAggregateOutputType | null
  }

  export type SchoolBranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    email: string | null
    phone: string | null
    description: string | null
    admission_status: $Enums.AdmissionStatus | null
    gender_policy: $Enums.GenderPolicy | null
    facilities: string | null
    schoolId: string | null
  }

  export type SchoolBranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    city: string | null
    email: string | null
    phone: string | null
    description: string | null
    admission_status: $Enums.AdmissionStatus | null
    gender_policy: $Enums.GenderPolicy | null
    facilities: string | null
    schoolId: string | null
  }

  export type SchoolBranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city: number
    email: number
    phone: number
    description: number
    admission_status: number
    gender_policy: number
    facilities: number
    schoolId: number
    _all: number
  }


  export type SchoolBranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    email?: true
    phone?: true
    description?: true
    admission_status?: true
    gender_policy?: true
    facilities?: true
    schoolId?: true
  }

  export type SchoolBranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    email?: true
    phone?: true
    description?: true
    admission_status?: true
    gender_policy?: true
    facilities?: true
    schoolId?: true
  }

  export type SchoolBranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city?: true
    email?: true
    phone?: true
    description?: true
    admission_status?: true
    gender_policy?: true
    facilities?: true
    schoolId?: true
    _all?: true
  }

  export type SchoolBranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolBranch to aggregate.
     */
    where?: SchoolBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolBranches to fetch.
     */
    orderBy?: SchoolBranchOrderByWithRelationInput | SchoolBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolBranches
    **/
    _count?: true | SchoolBranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolBranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolBranchMaxAggregateInputType
  }

  export type GetSchoolBranchAggregateType<T extends SchoolBranchAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolBranch[P]>
      : GetScalarType<T[P], AggregateSchoolBranch[P]>
  }




  export type SchoolBranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolBranchWhereInput
    orderBy?: SchoolBranchOrderByWithAggregationInput | SchoolBranchOrderByWithAggregationInput[]
    by: SchoolBranchScalarFieldEnum[] | SchoolBranchScalarFieldEnum
    having?: SchoolBranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolBranchCountAggregateInputType | true
    _min?: SchoolBranchMinAggregateInputType
    _max?: SchoolBranchMaxAggregateInputType
  }

  export type SchoolBranchGroupByOutputType = {
    id: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    schoolId: string
    _count: SchoolBranchCountAggregateOutputType | null
    _min: SchoolBranchMinAggregateOutputType | null
    _max: SchoolBranchMaxAggregateOutputType | null
  }

  type GetSchoolBranchGroupByPayload<T extends SchoolBranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolBranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolBranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolBranchGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolBranchGroupByOutputType[P]>
        }
      >
    >


  export type SchoolBranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    description?: boolean
    admission_status?: boolean
    gender_policy?: boolean
    facilities?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    class_base_fee?: boolean | SchoolBranch$class_base_feeArgs<ExtArgs>
    reviews?: boolean | SchoolBranch$reviewsArgs<ExtArgs>
    _count?: boolean | SchoolBranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolBranch"]>

  export type SchoolBranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    description?: boolean
    admission_status?: boolean
    gender_policy?: boolean
    facilities?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolBranch"]>

  export type SchoolBranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    description?: boolean
    admission_status?: boolean
    gender_policy?: boolean
    facilities?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolBranch"]>

  export type SchoolBranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    email?: boolean
    phone?: boolean
    description?: boolean
    admission_status?: boolean
    gender_policy?: boolean
    facilities?: boolean
    schoolId?: boolean
  }

  export type SchoolBranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "city" | "email" | "phone" | "description" | "admission_status" | "gender_policy" | "facilities" | "schoolId", ExtArgs["result"]["schoolBranch"]>
  export type SchoolBranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    class_base_fee?: boolean | SchoolBranch$class_base_feeArgs<ExtArgs>
    reviews?: boolean | SchoolBranch$reviewsArgs<ExtArgs>
    _count?: boolean | SchoolBranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolBranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SchoolBranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SchoolBranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolBranch"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      class_base_fee: Prisma.$Class_base_feePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      city: string
      email: string
      phone: string
      description: string
      admission_status: $Enums.AdmissionStatus
      gender_policy: $Enums.GenderPolicy
      facilities: string
      schoolId: string
    }, ExtArgs["result"]["schoolBranch"]>
    composites: {}
  }

  type SchoolBranchGetPayload<S extends boolean | null | undefined | SchoolBranchDefaultArgs> = $Result.GetResult<Prisma.$SchoolBranchPayload, S>

  type SchoolBranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolBranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolBranchCountAggregateInputType | true
    }

  export interface SchoolBranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolBranch'], meta: { name: 'SchoolBranch' } }
    /**
     * Find zero or one SchoolBranch that matches the filter.
     * @param {SchoolBranchFindUniqueArgs} args - Arguments to find a SchoolBranch
     * @example
     * // Get one SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolBranchFindUniqueArgs>(args: SelectSubset<T, SchoolBranchFindUniqueArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolBranch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolBranchFindUniqueOrThrowArgs} args - Arguments to find a SchoolBranch
     * @example
     * // Get one SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolBranchFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolBranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolBranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchFindFirstArgs} args - Arguments to find a SchoolBranch
     * @example
     * // Get one SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolBranchFindFirstArgs>(args?: SelectSubset<T, SchoolBranchFindFirstArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolBranch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchFindFirstOrThrowArgs} args - Arguments to find a SchoolBranch
     * @example
     * // Get one SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolBranchFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolBranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolBranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolBranches
     * const schoolBranches = await prisma.schoolBranch.findMany()
     * 
     * // Get first 10 SchoolBranches
     * const schoolBranches = await prisma.schoolBranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolBranchWithIdOnly = await prisma.schoolBranch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolBranchFindManyArgs>(args?: SelectSubset<T, SchoolBranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolBranch.
     * @param {SchoolBranchCreateArgs} args - Arguments to create a SchoolBranch.
     * @example
     * // Create one SchoolBranch
     * const SchoolBranch = await prisma.schoolBranch.create({
     *   data: {
     *     // ... data to create a SchoolBranch
     *   }
     * })
     * 
     */
    create<T extends SchoolBranchCreateArgs>(args: SelectSubset<T, SchoolBranchCreateArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolBranches.
     * @param {SchoolBranchCreateManyArgs} args - Arguments to create many SchoolBranches.
     * @example
     * // Create many SchoolBranches
     * const schoolBranch = await prisma.schoolBranch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolBranchCreateManyArgs>(args?: SelectSubset<T, SchoolBranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolBranches and returns the data saved in the database.
     * @param {SchoolBranchCreateManyAndReturnArgs} args - Arguments to create many SchoolBranches.
     * @example
     * // Create many SchoolBranches
     * const schoolBranch = await prisma.schoolBranch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolBranches and only return the `id`
     * const schoolBranchWithIdOnly = await prisma.schoolBranch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolBranchCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolBranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolBranch.
     * @param {SchoolBranchDeleteArgs} args - Arguments to delete one SchoolBranch.
     * @example
     * // Delete one SchoolBranch
     * const SchoolBranch = await prisma.schoolBranch.delete({
     *   where: {
     *     // ... filter to delete one SchoolBranch
     *   }
     * })
     * 
     */
    delete<T extends SchoolBranchDeleteArgs>(args: SelectSubset<T, SchoolBranchDeleteArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolBranch.
     * @param {SchoolBranchUpdateArgs} args - Arguments to update one SchoolBranch.
     * @example
     * // Update one SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolBranchUpdateArgs>(args: SelectSubset<T, SchoolBranchUpdateArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolBranches.
     * @param {SchoolBranchDeleteManyArgs} args - Arguments to filter SchoolBranches to delete.
     * @example
     * // Delete a few SchoolBranches
     * const { count } = await prisma.schoolBranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolBranchDeleteManyArgs>(args?: SelectSubset<T, SchoolBranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolBranches
     * const schoolBranch = await prisma.schoolBranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolBranchUpdateManyArgs>(args: SelectSubset<T, SchoolBranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolBranches and returns the data updated in the database.
     * @param {SchoolBranchUpdateManyAndReturnArgs} args - Arguments to update many SchoolBranches.
     * @example
     * // Update many SchoolBranches
     * const schoolBranch = await prisma.schoolBranch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolBranches and only return the `id`
     * const schoolBranchWithIdOnly = await prisma.schoolBranch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolBranchUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolBranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolBranch.
     * @param {SchoolBranchUpsertArgs} args - Arguments to update or create a SchoolBranch.
     * @example
     * // Update or create a SchoolBranch
     * const schoolBranch = await prisma.schoolBranch.upsert({
     *   create: {
     *     // ... data to create a SchoolBranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolBranch we want to update
     *   }
     * })
     */
    upsert<T extends SchoolBranchUpsertArgs>(args: SelectSubset<T, SchoolBranchUpsertArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchCountArgs} args - Arguments to filter SchoolBranches to count.
     * @example
     * // Count the number of SchoolBranches
     * const count = await prisma.schoolBranch.count({
     *   where: {
     *     // ... the filter for the SchoolBranches we want to count
     *   }
     * })
    **/
    count<T extends SchoolBranchCountArgs>(
      args?: Subset<T, SchoolBranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolBranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolBranchAggregateArgs>(args: Subset<T, SchoolBranchAggregateArgs>): Prisma.PrismaPromise<GetSchoolBranchAggregateType<T>>

    /**
     * Group by SchoolBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolBranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolBranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolBranchGroupByArgs['orderBy'] }
        : { orderBy?: SchoolBranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolBranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolBranch model
   */
  readonly fields: SchoolBranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolBranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolBranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class_base_fee<T extends SchoolBranch$class_base_feeArgs<ExtArgs> = {}>(args?: Subset<T, SchoolBranch$class_base_feeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends SchoolBranch$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, SchoolBranch$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SchoolBranch model
   */ 
  interface SchoolBranchFieldRefs {
    readonly id: FieldRef<"SchoolBranch", 'String'>
    readonly name: FieldRef<"SchoolBranch", 'String'>
    readonly address: FieldRef<"SchoolBranch", 'String'>
    readonly city: FieldRef<"SchoolBranch", 'String'>
    readonly email: FieldRef<"SchoolBranch", 'String'>
    readonly phone: FieldRef<"SchoolBranch", 'String'>
    readonly description: FieldRef<"SchoolBranch", 'String'>
    readonly admission_status: FieldRef<"SchoolBranch", 'AdmissionStatus'>
    readonly gender_policy: FieldRef<"SchoolBranch", 'GenderPolicy'>
    readonly facilities: FieldRef<"SchoolBranch", 'String'>
    readonly schoolId: FieldRef<"SchoolBranch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SchoolBranch findUnique
   */
  export type SchoolBranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter, which SchoolBranch to fetch.
     */
    where: SchoolBranchWhereUniqueInput
  }

  /**
   * SchoolBranch findUniqueOrThrow
   */
  export type SchoolBranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter, which SchoolBranch to fetch.
     */
    where: SchoolBranchWhereUniqueInput
  }

  /**
   * SchoolBranch findFirst
   */
  export type SchoolBranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter, which SchoolBranch to fetch.
     */
    where?: SchoolBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolBranches to fetch.
     */
    orderBy?: SchoolBranchOrderByWithRelationInput | SchoolBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolBranches.
     */
    cursor?: SchoolBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolBranches.
     */
    distinct?: SchoolBranchScalarFieldEnum | SchoolBranchScalarFieldEnum[]
  }

  /**
   * SchoolBranch findFirstOrThrow
   */
  export type SchoolBranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter, which SchoolBranch to fetch.
     */
    where?: SchoolBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolBranches to fetch.
     */
    orderBy?: SchoolBranchOrderByWithRelationInput | SchoolBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolBranches.
     */
    cursor?: SchoolBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolBranches.
     */
    distinct?: SchoolBranchScalarFieldEnum | SchoolBranchScalarFieldEnum[]
  }

  /**
   * SchoolBranch findMany
   */
  export type SchoolBranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter, which SchoolBranches to fetch.
     */
    where?: SchoolBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolBranches to fetch.
     */
    orderBy?: SchoolBranchOrderByWithRelationInput | SchoolBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolBranches.
     */
    cursor?: SchoolBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolBranches.
     */
    skip?: number
    distinct?: SchoolBranchScalarFieldEnum | SchoolBranchScalarFieldEnum[]
  }

  /**
   * SchoolBranch create
   */
  export type SchoolBranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolBranch.
     */
    data: XOR<SchoolBranchCreateInput, SchoolBranchUncheckedCreateInput>
  }

  /**
   * SchoolBranch createMany
   */
  export type SchoolBranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolBranches.
     */
    data: SchoolBranchCreateManyInput | SchoolBranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolBranch createManyAndReturn
   */
  export type SchoolBranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolBranches.
     */
    data: SchoolBranchCreateManyInput | SchoolBranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolBranch update
   */
  export type SchoolBranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolBranch.
     */
    data: XOR<SchoolBranchUpdateInput, SchoolBranchUncheckedUpdateInput>
    /**
     * Choose, which SchoolBranch to update.
     */
    where: SchoolBranchWhereUniqueInput
  }

  /**
   * SchoolBranch updateMany
   */
  export type SchoolBranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolBranches.
     */
    data: XOR<SchoolBranchUpdateManyMutationInput, SchoolBranchUncheckedUpdateManyInput>
    /**
     * Filter which SchoolBranches to update
     */
    where?: SchoolBranchWhereInput
    /**
     * Limit how many SchoolBranches to update.
     */
    limit?: number
  }

  /**
   * SchoolBranch updateManyAndReturn
   */
  export type SchoolBranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * The data used to update SchoolBranches.
     */
    data: XOR<SchoolBranchUpdateManyMutationInput, SchoolBranchUncheckedUpdateManyInput>
    /**
     * Filter which SchoolBranches to update
     */
    where?: SchoolBranchWhereInput
    /**
     * Limit how many SchoolBranches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolBranch upsert
   */
  export type SchoolBranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolBranch to update in case it exists.
     */
    where: SchoolBranchWhereUniqueInput
    /**
     * In case the SchoolBranch found by the `where` argument doesn't exist, create a new SchoolBranch with this data.
     */
    create: XOR<SchoolBranchCreateInput, SchoolBranchUncheckedCreateInput>
    /**
     * In case the SchoolBranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolBranchUpdateInput, SchoolBranchUncheckedUpdateInput>
  }

  /**
   * SchoolBranch delete
   */
  export type SchoolBranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    /**
     * Filter which SchoolBranch to delete.
     */
    where: SchoolBranchWhereUniqueInput
  }

  /**
   * SchoolBranch deleteMany
   */
  export type SchoolBranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolBranches to delete
     */
    where?: SchoolBranchWhereInput
    /**
     * Limit how many SchoolBranches to delete.
     */
    limit?: number
  }

  /**
   * SchoolBranch.class_base_fee
   */
  export type SchoolBranch$class_base_feeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    where?: Class_base_feeWhereInput
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    cursor?: Class_base_feeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Class_base_feeScalarFieldEnum | Class_base_feeScalarFieldEnum[]
  }

  /**
   * SchoolBranch.reviews
   */
  export type SchoolBranch$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * SchoolBranch without action
   */
  export type SchoolBranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
  }


  /**
   * Model Class_base_fee
   */

  export type AggregateClass_base_fee = {
    _count: Class_base_feeCountAggregateOutputType | null
    _avg: Class_base_feeAvgAggregateOutputType | null
    _sum: Class_base_feeSumAggregateOutputType | null
    _min: Class_base_feeMinAggregateOutputType | null
    _max: Class_base_feeMaxAggregateOutputType | null
  }

  export type Class_base_feeAvgAggregateOutputType = {
    admission_fee: number | null
    monthly_fee: number | null
  }

  export type Class_base_feeSumAggregateOutputType = {
    admission_fee: number | null
    monthly_fee: number | null
  }

  export type Class_base_feeMinAggregateOutputType = {
    id: string | null
    name: string | null
    admission_fee: number | null
    monthly_fee: number | null
    schoolBranchId: string | null
    schoolId: string | null
  }

  export type Class_base_feeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    admission_fee: number | null
    monthly_fee: number | null
    schoolBranchId: string | null
    schoolId: string | null
  }

  export type Class_base_feeCountAggregateOutputType = {
    id: number
    name: number
    admission_fee: number
    monthly_fee: number
    schoolBranchId: number
    schoolId: number
    _all: number
  }


  export type Class_base_feeAvgAggregateInputType = {
    admission_fee?: true
    monthly_fee?: true
  }

  export type Class_base_feeSumAggregateInputType = {
    admission_fee?: true
    monthly_fee?: true
  }

  export type Class_base_feeMinAggregateInputType = {
    id?: true
    name?: true
    admission_fee?: true
    monthly_fee?: true
    schoolBranchId?: true
    schoolId?: true
  }

  export type Class_base_feeMaxAggregateInputType = {
    id?: true
    name?: true
    admission_fee?: true
    monthly_fee?: true
    schoolBranchId?: true
    schoolId?: true
  }

  export type Class_base_feeCountAggregateInputType = {
    id?: true
    name?: true
    admission_fee?: true
    monthly_fee?: true
    schoolBranchId?: true
    schoolId?: true
    _all?: true
  }

  export type Class_base_feeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class_base_fee to aggregate.
     */
    where?: Class_base_feeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_base_fees to fetch.
     */
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Class_base_feeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_base_fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_base_fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Class_base_fees
    **/
    _count?: true | Class_base_feeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Class_base_feeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Class_base_feeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Class_base_feeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Class_base_feeMaxAggregateInputType
  }

  export type GetClass_base_feeAggregateType<T extends Class_base_feeAggregateArgs> = {
        [P in keyof T & keyof AggregateClass_base_fee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass_base_fee[P]>
      : GetScalarType<T[P], AggregateClass_base_fee[P]>
  }




  export type Class_base_feeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Class_base_feeWhereInput
    orderBy?: Class_base_feeOrderByWithAggregationInput | Class_base_feeOrderByWithAggregationInput[]
    by: Class_base_feeScalarFieldEnum[] | Class_base_feeScalarFieldEnum
    having?: Class_base_feeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Class_base_feeCountAggregateInputType | true
    _avg?: Class_base_feeAvgAggregateInputType
    _sum?: Class_base_feeSumAggregateInputType
    _min?: Class_base_feeMinAggregateInputType
    _max?: Class_base_feeMaxAggregateInputType
  }

  export type Class_base_feeGroupByOutputType = {
    id: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranchId: string | null
    schoolId: string | null
    _count: Class_base_feeCountAggregateOutputType | null
    _avg: Class_base_feeAvgAggregateOutputType | null
    _sum: Class_base_feeSumAggregateOutputType | null
    _min: Class_base_feeMinAggregateOutputType | null
    _max: Class_base_feeMaxAggregateOutputType | null
  }

  type GetClass_base_feeGroupByPayload<T extends Class_base_feeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Class_base_feeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Class_base_feeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Class_base_feeGroupByOutputType[P]>
            : GetScalarType<T[P], Class_base_feeGroupByOutputType[P]>
        }
      >
    >


  export type Class_base_feeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    admission_fee?: boolean
    monthly_fee?: boolean
    schoolBranchId?: boolean
    schoolId?: boolean
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["class_base_fee"]>

  export type Class_base_feeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    admission_fee?: boolean
    monthly_fee?: boolean
    schoolBranchId?: boolean
    schoolId?: boolean
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["class_base_fee"]>

  export type Class_base_feeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    admission_fee?: boolean
    monthly_fee?: boolean
    schoolBranchId?: boolean
    schoolId?: boolean
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }, ExtArgs["result"]["class_base_fee"]>

  export type Class_base_feeSelectScalar = {
    id?: boolean
    name?: boolean
    admission_fee?: boolean
    monthly_fee?: boolean
    schoolBranchId?: boolean
    schoolId?: boolean
  }

  export type Class_base_feeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "admission_fee" | "monthly_fee" | "schoolBranchId" | "schoolId", ExtArgs["result"]["class_base_fee"]>
  export type Class_base_feeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }
  export type Class_base_feeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }
  export type Class_base_feeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolBranch?: boolean | Class_base_fee$schoolBranchArgs<ExtArgs>
    school?: boolean | Class_base_fee$schoolArgs<ExtArgs>
  }

  export type $Class_base_feePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class_base_fee"
    objects: {
      schoolBranch: Prisma.$SchoolBranchPayload<ExtArgs> | null
      school: Prisma.$SchoolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      admission_fee: number
      monthly_fee: number
      schoolBranchId: string | null
      schoolId: string | null
    }, ExtArgs["result"]["class_base_fee"]>
    composites: {}
  }

  type Class_base_feeGetPayload<S extends boolean | null | undefined | Class_base_feeDefaultArgs> = $Result.GetResult<Prisma.$Class_base_feePayload, S>

  type Class_base_feeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Class_base_feeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Class_base_feeCountAggregateInputType | true
    }

  export interface Class_base_feeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class_base_fee'], meta: { name: 'Class_base_fee' } }
    /**
     * Find zero or one Class_base_fee that matches the filter.
     * @param {Class_base_feeFindUniqueArgs} args - Arguments to find a Class_base_fee
     * @example
     * // Get one Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Class_base_feeFindUniqueArgs>(args: SelectSubset<T, Class_base_feeFindUniqueArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class_base_fee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Class_base_feeFindUniqueOrThrowArgs} args - Arguments to find a Class_base_fee
     * @example
     * // Get one Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Class_base_feeFindUniqueOrThrowArgs>(args: SelectSubset<T, Class_base_feeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_base_fee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeFindFirstArgs} args - Arguments to find a Class_base_fee
     * @example
     * // Get one Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Class_base_feeFindFirstArgs>(args?: SelectSubset<T, Class_base_feeFindFirstArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class_base_fee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeFindFirstOrThrowArgs} args - Arguments to find a Class_base_fee
     * @example
     * // Get one Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Class_base_feeFindFirstOrThrowArgs>(args?: SelectSubset<T, Class_base_feeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Class_base_fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Class_base_fees
     * const class_base_fees = await prisma.class_base_fee.findMany()
     * 
     * // Get first 10 Class_base_fees
     * const class_base_fees = await prisma.class_base_fee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const class_base_feeWithIdOnly = await prisma.class_base_fee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Class_base_feeFindManyArgs>(args?: SelectSubset<T, Class_base_feeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class_base_fee.
     * @param {Class_base_feeCreateArgs} args - Arguments to create a Class_base_fee.
     * @example
     * // Create one Class_base_fee
     * const Class_base_fee = await prisma.class_base_fee.create({
     *   data: {
     *     // ... data to create a Class_base_fee
     *   }
     * })
     * 
     */
    create<T extends Class_base_feeCreateArgs>(args: SelectSubset<T, Class_base_feeCreateArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Class_base_fees.
     * @param {Class_base_feeCreateManyArgs} args - Arguments to create many Class_base_fees.
     * @example
     * // Create many Class_base_fees
     * const class_base_fee = await prisma.class_base_fee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Class_base_feeCreateManyArgs>(args?: SelectSubset<T, Class_base_feeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Class_base_fees and returns the data saved in the database.
     * @param {Class_base_feeCreateManyAndReturnArgs} args - Arguments to create many Class_base_fees.
     * @example
     * // Create many Class_base_fees
     * const class_base_fee = await prisma.class_base_fee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Class_base_fees and only return the `id`
     * const class_base_feeWithIdOnly = await prisma.class_base_fee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Class_base_feeCreateManyAndReturnArgs>(args?: SelectSubset<T, Class_base_feeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class_base_fee.
     * @param {Class_base_feeDeleteArgs} args - Arguments to delete one Class_base_fee.
     * @example
     * // Delete one Class_base_fee
     * const Class_base_fee = await prisma.class_base_fee.delete({
     *   where: {
     *     // ... filter to delete one Class_base_fee
     *   }
     * })
     * 
     */
    delete<T extends Class_base_feeDeleteArgs>(args: SelectSubset<T, Class_base_feeDeleteArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class_base_fee.
     * @param {Class_base_feeUpdateArgs} args - Arguments to update one Class_base_fee.
     * @example
     * // Update one Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Class_base_feeUpdateArgs>(args: SelectSubset<T, Class_base_feeUpdateArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Class_base_fees.
     * @param {Class_base_feeDeleteManyArgs} args - Arguments to filter Class_base_fees to delete.
     * @example
     * // Delete a few Class_base_fees
     * const { count } = await prisma.class_base_fee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Class_base_feeDeleteManyArgs>(args?: SelectSubset<T, Class_base_feeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_base_fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Class_base_fees
     * const class_base_fee = await prisma.class_base_fee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Class_base_feeUpdateManyArgs>(args: SelectSubset<T, Class_base_feeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Class_base_fees and returns the data updated in the database.
     * @param {Class_base_feeUpdateManyAndReturnArgs} args - Arguments to update many Class_base_fees.
     * @example
     * // Update many Class_base_fees
     * const class_base_fee = await prisma.class_base_fee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Class_base_fees and only return the `id`
     * const class_base_feeWithIdOnly = await prisma.class_base_fee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Class_base_feeUpdateManyAndReturnArgs>(args: SelectSubset<T, Class_base_feeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class_base_fee.
     * @param {Class_base_feeUpsertArgs} args - Arguments to update or create a Class_base_fee.
     * @example
     * // Update or create a Class_base_fee
     * const class_base_fee = await prisma.class_base_fee.upsert({
     *   create: {
     *     // ... data to create a Class_base_fee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class_base_fee we want to update
     *   }
     * })
     */
    upsert<T extends Class_base_feeUpsertArgs>(args: SelectSubset<T, Class_base_feeUpsertArgs<ExtArgs>>): Prisma__Class_base_feeClient<$Result.GetResult<Prisma.$Class_base_feePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Class_base_fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeCountArgs} args - Arguments to filter Class_base_fees to count.
     * @example
     * // Count the number of Class_base_fees
     * const count = await prisma.class_base_fee.count({
     *   where: {
     *     // ... the filter for the Class_base_fees we want to count
     *   }
     * })
    **/
    count<T extends Class_base_feeCountArgs>(
      args?: Subset<T, Class_base_feeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Class_base_feeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class_base_fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Class_base_feeAggregateArgs>(args: Subset<T, Class_base_feeAggregateArgs>): Prisma.PrismaPromise<GetClass_base_feeAggregateType<T>>

    /**
     * Group by Class_base_fee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Class_base_feeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Class_base_feeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Class_base_feeGroupByArgs['orderBy'] }
        : { orderBy?: Class_base_feeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Class_base_feeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_base_feeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class_base_fee model
   */
  readonly fields: Class_base_feeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class_base_fee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Class_base_feeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schoolBranch<T extends Class_base_fee$schoolBranchArgs<ExtArgs> = {}>(args?: Subset<T, Class_base_fee$schoolBranchArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    school<T extends Class_base_fee$schoolArgs<ExtArgs> = {}>(args?: Subset<T, Class_base_fee$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class_base_fee model
   */ 
  interface Class_base_feeFieldRefs {
    readonly id: FieldRef<"Class_base_fee", 'String'>
    readonly name: FieldRef<"Class_base_fee", 'String'>
    readonly admission_fee: FieldRef<"Class_base_fee", 'Int'>
    readonly monthly_fee: FieldRef<"Class_base_fee", 'Int'>
    readonly schoolBranchId: FieldRef<"Class_base_fee", 'String'>
    readonly schoolId: FieldRef<"Class_base_fee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class_base_fee findUnique
   */
  export type Class_base_feeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter, which Class_base_fee to fetch.
     */
    where: Class_base_feeWhereUniqueInput
  }

  /**
   * Class_base_fee findUniqueOrThrow
   */
  export type Class_base_feeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter, which Class_base_fee to fetch.
     */
    where: Class_base_feeWhereUniqueInput
  }

  /**
   * Class_base_fee findFirst
   */
  export type Class_base_feeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter, which Class_base_fee to fetch.
     */
    where?: Class_base_feeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_base_fees to fetch.
     */
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Class_base_fees.
     */
    cursor?: Class_base_feeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_base_fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_base_fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Class_base_fees.
     */
    distinct?: Class_base_feeScalarFieldEnum | Class_base_feeScalarFieldEnum[]
  }

  /**
   * Class_base_fee findFirstOrThrow
   */
  export type Class_base_feeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter, which Class_base_fee to fetch.
     */
    where?: Class_base_feeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_base_fees to fetch.
     */
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Class_base_fees.
     */
    cursor?: Class_base_feeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_base_fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_base_fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Class_base_fees.
     */
    distinct?: Class_base_feeScalarFieldEnum | Class_base_feeScalarFieldEnum[]
  }

  /**
   * Class_base_fee findMany
   */
  export type Class_base_feeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter, which Class_base_fees to fetch.
     */
    where?: Class_base_feeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Class_base_fees to fetch.
     */
    orderBy?: Class_base_feeOrderByWithRelationInput | Class_base_feeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Class_base_fees.
     */
    cursor?: Class_base_feeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Class_base_fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Class_base_fees.
     */
    skip?: number
    distinct?: Class_base_feeScalarFieldEnum | Class_base_feeScalarFieldEnum[]
  }

  /**
   * Class_base_fee create
   */
  export type Class_base_feeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * The data needed to create a Class_base_fee.
     */
    data: XOR<Class_base_feeCreateInput, Class_base_feeUncheckedCreateInput>
  }

  /**
   * Class_base_fee createMany
   */
  export type Class_base_feeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Class_base_fees.
     */
    data: Class_base_feeCreateManyInput | Class_base_feeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class_base_fee createManyAndReturn
   */
  export type Class_base_feeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * The data used to create many Class_base_fees.
     */
    data: Class_base_feeCreateManyInput | Class_base_feeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class_base_fee update
   */
  export type Class_base_feeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * The data needed to update a Class_base_fee.
     */
    data: XOR<Class_base_feeUpdateInput, Class_base_feeUncheckedUpdateInput>
    /**
     * Choose, which Class_base_fee to update.
     */
    where: Class_base_feeWhereUniqueInput
  }

  /**
   * Class_base_fee updateMany
   */
  export type Class_base_feeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Class_base_fees.
     */
    data: XOR<Class_base_feeUpdateManyMutationInput, Class_base_feeUncheckedUpdateManyInput>
    /**
     * Filter which Class_base_fees to update
     */
    where?: Class_base_feeWhereInput
    /**
     * Limit how many Class_base_fees to update.
     */
    limit?: number
  }

  /**
   * Class_base_fee updateManyAndReturn
   */
  export type Class_base_feeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * The data used to update Class_base_fees.
     */
    data: XOR<Class_base_feeUpdateManyMutationInput, Class_base_feeUncheckedUpdateManyInput>
    /**
     * Filter which Class_base_fees to update
     */
    where?: Class_base_feeWhereInput
    /**
     * Limit how many Class_base_fees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class_base_fee upsert
   */
  export type Class_base_feeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * The filter to search for the Class_base_fee to update in case it exists.
     */
    where: Class_base_feeWhereUniqueInput
    /**
     * In case the Class_base_fee found by the `where` argument doesn't exist, create a new Class_base_fee with this data.
     */
    create: XOR<Class_base_feeCreateInput, Class_base_feeUncheckedCreateInput>
    /**
     * In case the Class_base_fee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Class_base_feeUpdateInput, Class_base_feeUncheckedUpdateInput>
  }

  /**
   * Class_base_fee delete
   */
  export type Class_base_feeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
    /**
     * Filter which Class_base_fee to delete.
     */
    where: Class_base_feeWhereUniqueInput
  }

  /**
   * Class_base_fee deleteMany
   */
  export type Class_base_feeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class_base_fees to delete
     */
    where?: Class_base_feeWhereInput
    /**
     * Limit how many Class_base_fees to delete.
     */
    limit?: number
  }

  /**
   * Class_base_fee.schoolBranch
   */
  export type Class_base_fee$schoolBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    where?: SchoolBranchWhereInput
  }

  /**
   * Class_base_fee.school
   */
  export type Class_base_fee$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * Class_base_fee without action
   */
  export type Class_base_feeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class_base_fee
     */
    select?: Class_base_feeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class_base_fee
     */
    omit?: Class_base_feeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Class_base_feeInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    Admission?: boolean | User$AdmissionArgs<ExtArgs>
    School?: boolean | User$SchoolArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    Admission?: boolean | User$AdmissionArgs<ExtArgs>
    School?: boolean | User$SchoolArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      Admission: Prisma.$AdmissionPayload<ExtArgs>[]
      School: Prisma.$SchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admission<T extends User$AdmissionArgs<ExtArgs> = {}>(args?: Subset<T, User$AdmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    School<T extends User$SchoolArgs<ExtArgs> = {}>(args?: Subset<T, User$SchoolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.Admission
   */
  export type User$AdmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * User.School
   */
  export type User$SchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    cursor?: SchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    schoolId: string | null
    schoolBranchId: string | null
    reviewerId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    schoolId: string | null
    schoolBranchId: string | null
    reviewerId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    createdAt: number
    schoolId: number
    schoolBranchId: number
    reviewerId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    schoolId?: true
    schoolBranchId?: true
    reviewerId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    schoolId?: true
    schoolBranchId?: true
    reviewerId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    schoolId?: true
    schoolBranchId?: true
    reviewerId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    createdAt: Date
    schoolId: string | null
    schoolBranchId: string | null
    reviewerId: string | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    schoolId?: boolean
    schoolBranchId?: boolean
    reviewerId?: boolean
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    schoolId?: boolean
    schoolBranchId?: boolean
    reviewerId?: boolean
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    schoolId?: boolean
    schoolBranchId?: boolean
    reviewerId?: boolean
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    schoolId?: boolean
    schoolBranchId?: boolean
    reviewerId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "createdAt" | "schoolId" | "schoolBranchId" | "reviewerId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Review$schoolArgs<ExtArgs>
    schoolBranch?: boolean | Review$schoolBranchArgs<ExtArgs>
    reviewer?: boolean | Review$reviewerArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs> | null
      schoolBranch: Prisma.$SchoolBranchPayload<ExtArgs> | null
      reviewer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      createdAt: Date
      schoolId: string | null
      schoolBranchId: string | null
      reviewerId: string | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends Review$schoolArgs<ExtArgs> = {}>(args?: Subset<T, Review$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schoolBranch<T extends Review$schoolBranchArgs<ExtArgs> = {}>(args?: Subset<T, Review$schoolBranchArgs<ExtArgs>>): Prisma__SchoolBranchClient<$Result.GetResult<Prisma.$SchoolBranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Review$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly schoolId: FieldRef<"Review", 'String'>
    readonly schoolBranchId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.school
   */
  export type Review$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * Review.schoolBranch
   */
  export type Review$schoolBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolBranch
     */
    select?: SchoolBranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolBranch
     */
    omit?: SchoolBranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolBranchInclude<ExtArgs> | null
    where?: SchoolBranchWhereInput
  }

  /**
   * Review.reviewer
   */
  export type Review$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    type: $Enums.SubscriptionType | null
    createdAt: Date | null
    startDate: Date | null
    endDate: Date | null
    schoolId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    plan: $Enums.SubscriptionPlan | null
    status: $Enums.SubscriptionStatus | null
    type: $Enums.SubscriptionType | null
    createdAt: Date | null
    startDate: Date | null
    endDate: Date | null
    schoolId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    plan: number
    status: number
    type: number
    createdAt: number
    startDate: number
    endDate: number
    schoolId: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    plan?: true
    status?: true
    type?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    schoolId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    plan?: true
    status?: true
    type?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    schoolId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    plan?: true
    status?: true
    type?: true
    createdAt?: true
    startDate?: true
    endDate?: true
    schoolId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt: Date
    startDate: Date
    endDate: Date
    schoolId: string
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    payment?: boolean | Subscription$paymentArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    plan?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    startDate?: boolean
    endDate?: boolean
    schoolId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "status" | "type" | "createdAt" | "startDate" | "endDate" | "schoolId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    payment?: boolean | Subscription$paymentArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: $Enums.SubscriptionPlan
      status: $Enums.SubscriptionStatus
      type: $Enums.SubscriptionType
      createdAt: Date
      startDate: Date
      endDate: Date
      schoolId: string
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Subscription$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'SubscriptionPlan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly type: FieldRef<"Subscription", 'SubscriptionType'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly schoolId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payment
   */
  export type Subscription$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionId: string | null
    schoolId: string | null
    userId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    subscriptionId: string | null
    schoolId: string | null
    userId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    updatedAt: number
    subscriptionId: number
    schoolId: number
    userId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    schoolId?: true
    userId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    schoolId?: true
    userId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    subscriptionId?: true
    schoolId?: true
    userId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    updatedAt: Date
    subscriptionId: string
    schoolId: string
    userId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    schoolId?: boolean
    userId?: boolean
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    schoolId?: boolean
    userId?: boolean
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    schoolId?: boolean
    userId?: boolean
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptionId?: boolean
    schoolId?: boolean
    userId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "updatedAt" | "subscriptionId" | "schoolId" | "userId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      school: Prisma.$SchoolPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      createdAt: Date
      updatedAt: Date
      subscriptionId: string
      schoolId: string
      userId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends Payment$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly schoolId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.subscription
   */
  export type Payment$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Admission
   */

  export type AggregateAdmission = {
    _count: AdmissionCountAggregateOutputType | null
    _avg: AdmissionAvgAggregateOutputType | null
    _sum: AdmissionSumAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  export type AdmissionAvgAggregateOutputType = {
    student_age: number | null
  }

  export type AdmissionSumAggregateOutputType = {
    student_age: number | null
  }

  export type AdmissionMinAggregateOutputType = {
    id: string | null
    student_name: string | null
    student_age: number | null
    date_of_birth: Date | null
    image_url: string | null
    approval: $Enums.AdmissionApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
    submitterId: string | null
  }

  export type AdmissionMaxAggregateOutputType = {
    id: string | null
    student_name: string | null
    student_age: number | null
    date_of_birth: Date | null
    image_url: string | null
    approval: $Enums.AdmissionApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    schoolId: string | null
    submitterId: string | null
  }

  export type AdmissionCountAggregateOutputType = {
    id: number
    student_name: number
    student_age: number
    date_of_birth: number
    image_url: number
    approval: number
    createdAt: number
    updatedAt: number
    schoolId: number
    submitterId: number
    _all: number
  }


  export type AdmissionAvgAggregateInputType = {
    student_age?: true
  }

  export type AdmissionSumAggregateInputType = {
    student_age?: true
  }

  export type AdmissionMinAggregateInputType = {
    id?: true
    student_name?: true
    student_age?: true
    date_of_birth?: true
    image_url?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    submitterId?: true
  }

  export type AdmissionMaxAggregateInputType = {
    id?: true
    student_name?: true
    student_age?: true
    date_of_birth?: true
    image_url?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    submitterId?: true
  }

  export type AdmissionCountAggregateInputType = {
    id?: true
    student_name?: true
    student_age?: true
    date_of_birth?: true
    image_url?: true
    approval?: true
    createdAt?: true
    updatedAt?: true
    schoolId?: true
    submitterId?: true
    _all?: true
  }

  export type AdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admission to aggregate.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admissions
    **/
    _count?: true | AdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionMaxAggregateInputType
  }

  export type GetAdmissionAggregateType<T extends AdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmission[P]>
      : GetScalarType<T[P], AggregateAdmission[P]>
  }




  export type AdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithAggregationInput | AdmissionOrderByWithAggregationInput[]
    by: AdmissionScalarFieldEnum[] | AdmissionScalarFieldEnum
    having?: AdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionCountAggregateInputType | true
    _avg?: AdmissionAvgAggregateInputType
    _sum?: AdmissionSumAggregateInputType
    _min?: AdmissionMinAggregateInputType
    _max?: AdmissionMaxAggregateInputType
  }

  export type AdmissionGroupByOutputType = {
    id: string
    student_name: string
    student_age: number
    date_of_birth: Date
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt: Date
    updatedAt: Date
    schoolId: string
    submitterId: string
    _count: AdmissionCountAggregateOutputType | null
    _avg: AdmissionAvgAggregateOutputType | null
    _sum: AdmissionSumAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  type GetAdmissionGroupByPayload<T extends AdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_name?: boolean
    student_age?: boolean
    date_of_birth?: boolean
    image_url?: boolean
    approval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    submitterId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Admission$documentsArgs<ExtArgs>
    _count?: boolean | AdmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_name?: boolean
    student_age?: boolean
    date_of_birth?: boolean
    image_url?: boolean
    approval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    submitterId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_name?: boolean
    student_age?: boolean
    date_of_birth?: boolean
    image_url?: boolean
    approval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    submitterId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>

  export type AdmissionSelectScalar = {
    id?: boolean
    student_name?: boolean
    student_age?: boolean
    date_of_birth?: boolean
    image_url?: boolean
    approval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolId?: boolean
    submitterId?: boolean
  }

  export type AdmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_name" | "student_age" | "date_of_birth" | "image_url" | "approval" | "createdAt" | "updatedAt" | "schoolId" | "submitterId", ExtArgs["result"]["admission"]>
  export type AdmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | Admission$documentsArgs<ExtArgs>
    _count?: boolean | AdmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    submitter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admission"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      submitter: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_name: string
      student_age: number
      date_of_birth: Date
      image_url: string
      approval: $Enums.AdmissionApproval
      createdAt: Date
      updatedAt: Date
      schoolId: string
      submitterId: string
    }, ExtArgs["result"]["admission"]>
    composites: {}
  }

  type AdmissionGetPayload<S extends boolean | null | undefined | AdmissionDefaultArgs> = $Result.GetResult<Prisma.$AdmissionPayload, S>

  type AdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionCountAggregateInputType | true
    }

  export interface AdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admission'], meta: { name: 'Admission' } }
    /**
     * Find zero or one Admission that matches the filter.
     * @param {AdmissionFindUniqueArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionFindUniqueArgs>(args: SelectSubset<T, AdmissionFindUniqueArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionFindUniqueOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionFindFirstArgs>(args?: SelectSubset<T, AdmissionFindFirstArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admissions
     * const admissions = await prisma.admission.findMany()
     * 
     * // Get first 10 Admissions
     * const admissions = await prisma.admission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionWithIdOnly = await prisma.admission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionFindManyArgs>(args?: SelectSubset<T, AdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admission.
     * @param {AdmissionCreateArgs} args - Arguments to create a Admission.
     * @example
     * // Create one Admission
     * const Admission = await prisma.admission.create({
     *   data: {
     *     // ... data to create a Admission
     *   }
     * })
     * 
     */
    create<T extends AdmissionCreateArgs>(args: SelectSubset<T, AdmissionCreateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admissions.
     * @param {AdmissionCreateManyArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionCreateManyArgs>(args?: SelectSubset<T, AdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admissions and returns the data saved in the database.
     * @param {AdmissionCreateManyAndReturnArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admissions and only return the `id`
     * const admissionWithIdOnly = await prisma.admission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admission.
     * @param {AdmissionDeleteArgs} args - Arguments to delete one Admission.
     * @example
     * // Delete one Admission
     * const Admission = await prisma.admission.delete({
     *   where: {
     *     // ... filter to delete one Admission
     *   }
     * })
     * 
     */
    delete<T extends AdmissionDeleteArgs>(args: SelectSubset<T, AdmissionDeleteArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admission.
     * @param {AdmissionUpdateArgs} args - Arguments to update one Admission.
     * @example
     * // Update one Admission
     * const admission = await prisma.admission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionUpdateArgs>(args: SelectSubset<T, AdmissionUpdateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admissions.
     * @param {AdmissionDeleteManyArgs} args - Arguments to filter Admissions to delete.
     * @example
     * // Delete a few Admissions
     * const { count } = await prisma.admission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionDeleteManyArgs>(args?: SelectSubset<T, AdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionUpdateManyArgs>(args: SelectSubset<T, AdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions and returns the data updated in the database.
     * @param {AdmissionUpdateManyAndReturnArgs} args - Arguments to update many Admissions.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admissions and only return the `id`
     * const admissionWithIdOnly = await prisma.admission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, AdmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admission.
     * @param {AdmissionUpsertArgs} args - Arguments to update or create a Admission.
     * @example
     * // Update or create a Admission
     * const admission = await prisma.admission.upsert({
     *   create: {
     *     // ... data to create a Admission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admission we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionUpsertArgs>(args: SelectSubset<T, AdmissionUpsertArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCountArgs} args - Arguments to filter Admissions to count.
     * @example
     * // Count the number of Admissions
     * const count = await prisma.admission.count({
     *   where: {
     *     // ... the filter for the Admissions we want to count
     *   }
     * })
    **/
    count<T extends AdmissionCountArgs>(
      args?: Subset<T, AdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionAggregateArgs>(args: Subset<T, AdmissionAggregateArgs>): Prisma.PrismaPromise<GetAdmissionAggregateType<T>>

    /**
     * Group by Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admission model
   */
  readonly fields: AdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submitter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Admission$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Admission$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admission model
   */ 
  interface AdmissionFieldRefs {
    readonly id: FieldRef<"Admission", 'String'>
    readonly student_name: FieldRef<"Admission", 'String'>
    readonly student_age: FieldRef<"Admission", 'Int'>
    readonly date_of_birth: FieldRef<"Admission", 'DateTime'>
    readonly image_url: FieldRef<"Admission", 'String'>
    readonly approval: FieldRef<"Admission", 'AdmissionApproval'>
    readonly createdAt: FieldRef<"Admission", 'DateTime'>
    readonly updatedAt: FieldRef<"Admission", 'DateTime'>
    readonly schoolId: FieldRef<"Admission", 'String'>
    readonly submitterId: FieldRef<"Admission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admission findUnique
   */
  export type AdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findUniqueOrThrow
   */
  export type AdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findFirst
   */
  export type AdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findFirstOrThrow
   */
  export type AdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findMany
   */
  export type AdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission create
   */
  export type AdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Admission.
     */
    data: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
  }

  /**
   * Admission createMany
   */
  export type AdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admission createManyAndReturn
   */
  export type AdmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admission update
   */
  export type AdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Admission.
     */
    data: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
    /**
     * Choose, which Admission to update.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission updateMany
   */
  export type AdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
  }

  /**
   * Admission updateManyAndReturn
   */
  export type AdmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admission upsert
   */
  export type AdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Admission to update in case it exists.
     */
    where: AdmissionWhereUniqueInput
    /**
     * In case the Admission found by the `where` argument doesn't exist, create a new Admission with this data.
     */
    create: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
    /**
     * In case the Admission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
  }

  /**
   * Admission delete
   */
  export type AdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter which Admission to delete.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission deleteMany
   */
  export type AdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to delete
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to delete.
     */
    limit?: number
  }

  /**
   * Admission.documents
   */
  export type Admission$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Admission without action
   */
  export type AdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    admissionId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    admissionId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    admissionId: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    admissionId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    admissionId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    admissionId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    updatedAt: Date
    admissionId: string
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissionId?: boolean
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissionId?: boolean
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissionId?: boolean
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admissionId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt" | "updatedAt" | "admissionId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admission?: boolean | AdmissionDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      admission: Prisma.$AdmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
      updatedAt: Date
      admissionId: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admission<T extends AdmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdmissionDefaultArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
    readonly admissionId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    affiliation: 'affiliation',
    medium_of_instruction: 'medium_of_instruction',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    school_type: 'school_type',
    curriculum_type: 'curriculum_type',
    userId: 'userId'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SchoolBranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city: 'city',
    email: 'email',
    phone: 'phone',
    description: 'description',
    admission_status: 'admission_status',
    gender_policy: 'gender_policy',
    facilities: 'facilities',
    schoolId: 'schoolId'
  };

  export type SchoolBranchScalarFieldEnum = (typeof SchoolBranchScalarFieldEnum)[keyof typeof SchoolBranchScalarFieldEnum]


  export const Class_base_feeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    admission_fee: 'admission_fee',
    monthly_fee: 'monthly_fee',
    schoolBranchId: 'schoolBranchId',
    schoolId: 'schoolId'
  };

  export type Class_base_feeScalarFieldEnum = (typeof Class_base_feeScalarFieldEnum)[keyof typeof Class_base_feeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    schoolId: 'schoolId',
    schoolBranchId: 'schoolBranchId',
    reviewerId: 'reviewerId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    startDate: 'startDate',
    endDate: 'endDate',
    schoolId: 'schoolId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subscriptionId: 'subscriptionId',
    schoolId: 'schoolId',
    userId: 'userId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AdmissionScalarFieldEnum: {
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

  export type AdmissionScalarFieldEnum = (typeof AdmissionScalarFieldEnum)[keyof typeof AdmissionScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    admissionId: 'admissionId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SchoolType'
   */
  export type EnumSchoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolType'>
    


  /**
   * Reference to a field of type 'SchoolType[]'
   */
  export type ListEnumSchoolTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SchoolType[]'>
    


  /**
   * Reference to a field of type 'CurriculumType'
   */
  export type EnumCurriculumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurriculumType'>
    


  /**
   * Reference to a field of type 'CurriculumType[]'
   */
  export type ListEnumCurriculumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurriculumType[]'>
    


  /**
   * Reference to a field of type 'AdmissionStatus'
   */
  export type EnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus'>
    


  /**
   * Reference to a field of type 'AdmissionStatus[]'
   */
  export type ListEnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus[]'>
    


  /**
   * Reference to a field of type 'GenderPolicy'
   */
  export type EnumGenderPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderPolicy'>
    


  /**
   * Reference to a field of type 'GenderPolicy[]'
   */
  export type ListEnumGenderPolicyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderPolicy[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'AdmissionApproval'
   */
  export type EnumAdmissionApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionApproval'>
    


  /**
   * Reference to a field of type 'AdmissionApproval[]'
   */
  export type ListEnumAdmissionApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionApproval[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    email?: StringFilter<"School"> | string
    phone?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    affiliation?: StringFilter<"School"> | string
    medium_of_instruction?: StringFilter<"School"> | string
    description?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    school_type?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFilter<"School"> | $Enums.CurriculumType
    userId?: StringFilter<"School"> | string
    schoolBranch?: SchoolBranchListRelationFilter
    class_base_fee?: Class_base_feeListRelationFilter
    reviews?: ReviewListRelationFilter
    subscription?: SubscriptionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Payment?: PaymentListRelationFilter
    Admission?: AdmissionListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    affiliation?: SortOrder
    medium_of_instruction?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school_type?: SortOrder
    curriculum_type?: SortOrder
    userId?: SortOrder
    schoolBranch?: SchoolBranchOrderByRelationAggregateInput
    class_base_fee?: Class_base_feeOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    Payment?: PaymentOrderByRelationAggregateInput
    Admission?: AdmissionOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    userId?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    affiliation?: StringFilter<"School"> | string
    medium_of_instruction?: StringFilter<"School"> | string
    description?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    school_type?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFilter<"School"> | $Enums.CurriculumType
    schoolBranch?: SchoolBranchListRelationFilter
    class_base_fee?: Class_base_feeListRelationFilter
    reviews?: ReviewListRelationFilter
    subscription?: SubscriptionListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Payment?: PaymentListRelationFilter
    Admission?: AdmissionListRelationFilter
  }, "id" | "email" | "phone" | "userId">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    affiliation?: SortOrder
    medium_of_instruction?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school_type?: SortOrder
    curriculum_type?: SortOrder
    userId?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    email?: StringWithAggregatesFilter<"School"> | string
    phone?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
    affiliation?: StringWithAggregatesFilter<"School"> | string
    medium_of_instruction?: StringWithAggregatesFilter<"School"> | string
    description?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    school_type?: EnumSchoolTypeWithAggregatesFilter<"School"> | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeWithAggregatesFilter<"School"> | $Enums.CurriculumType
    userId?: StringWithAggregatesFilter<"School"> | string
  }

  export type SchoolBranchWhereInput = {
    AND?: SchoolBranchWhereInput | SchoolBranchWhereInput[]
    OR?: SchoolBranchWhereInput[]
    NOT?: SchoolBranchWhereInput | SchoolBranchWhereInput[]
    id?: StringFilter<"SchoolBranch"> | string
    name?: StringFilter<"SchoolBranch"> | string
    address?: StringFilter<"SchoolBranch"> | string
    city?: StringFilter<"SchoolBranch"> | string
    email?: StringFilter<"SchoolBranch"> | string
    phone?: StringFilter<"SchoolBranch"> | string
    description?: StringFilter<"SchoolBranch"> | string
    admission_status?: EnumAdmissionStatusFilter<"SchoolBranch"> | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFilter<"SchoolBranch"> | $Enums.GenderPolicy
    facilities?: StringFilter<"SchoolBranch"> | string
    schoolId?: StringFilter<"SchoolBranch"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    class_base_fee?: Class_base_feeListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type SchoolBranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    admission_status?: SortOrder
    gender_policy?: SortOrder
    facilities?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    class_base_fee?: Class_base_feeOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type SchoolBranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: SchoolBranchWhereInput | SchoolBranchWhereInput[]
    OR?: SchoolBranchWhereInput[]
    NOT?: SchoolBranchWhereInput | SchoolBranchWhereInput[]
    name?: StringFilter<"SchoolBranch"> | string
    address?: StringFilter<"SchoolBranch"> | string
    city?: StringFilter<"SchoolBranch"> | string
    description?: StringFilter<"SchoolBranch"> | string
    admission_status?: EnumAdmissionStatusFilter<"SchoolBranch"> | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFilter<"SchoolBranch"> | $Enums.GenderPolicy
    facilities?: StringFilter<"SchoolBranch"> | string
    schoolId?: StringFilter<"SchoolBranch"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    class_base_fee?: Class_base_feeListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email" | "phone">

  export type SchoolBranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    admission_status?: SortOrder
    gender_policy?: SortOrder
    facilities?: SortOrder
    schoolId?: SortOrder
    _count?: SchoolBranchCountOrderByAggregateInput
    _max?: SchoolBranchMaxOrderByAggregateInput
    _min?: SchoolBranchMinOrderByAggregateInput
  }

  export type SchoolBranchScalarWhereWithAggregatesInput = {
    AND?: SchoolBranchScalarWhereWithAggregatesInput | SchoolBranchScalarWhereWithAggregatesInput[]
    OR?: SchoolBranchScalarWhereWithAggregatesInput[]
    NOT?: SchoolBranchScalarWhereWithAggregatesInput | SchoolBranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolBranch"> | string
    name?: StringWithAggregatesFilter<"SchoolBranch"> | string
    address?: StringWithAggregatesFilter<"SchoolBranch"> | string
    city?: StringWithAggregatesFilter<"SchoolBranch"> | string
    email?: StringWithAggregatesFilter<"SchoolBranch"> | string
    phone?: StringWithAggregatesFilter<"SchoolBranch"> | string
    description?: StringWithAggregatesFilter<"SchoolBranch"> | string
    admission_status?: EnumAdmissionStatusWithAggregatesFilter<"SchoolBranch"> | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyWithAggregatesFilter<"SchoolBranch"> | $Enums.GenderPolicy
    facilities?: StringWithAggregatesFilter<"SchoolBranch"> | string
    schoolId?: StringWithAggregatesFilter<"SchoolBranch"> | string
  }

  export type Class_base_feeWhereInput = {
    AND?: Class_base_feeWhereInput | Class_base_feeWhereInput[]
    OR?: Class_base_feeWhereInput[]
    NOT?: Class_base_feeWhereInput | Class_base_feeWhereInput[]
    id?: StringFilter<"Class_base_fee"> | string
    name?: StringFilter<"Class_base_fee"> | string
    admission_fee?: IntFilter<"Class_base_fee"> | number
    monthly_fee?: IntFilter<"Class_base_fee"> | number
    schoolBranchId?: StringNullableFilter<"Class_base_fee"> | string | null
    schoolId?: StringNullableFilter<"Class_base_fee"> | string | null
    schoolBranch?: XOR<SchoolBranchNullableScalarRelationFilter, SchoolBranchWhereInput> | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }

  export type Class_base_feeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
    schoolBranchId?: SortOrderInput | SortOrder
    schoolId?: SortOrderInput | SortOrder
    schoolBranch?: SchoolBranchOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
  }

  export type Class_base_feeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_schoolId?: Class_base_feeNameSchoolIdCompoundUniqueInput
    AND?: Class_base_feeWhereInput | Class_base_feeWhereInput[]
    OR?: Class_base_feeWhereInput[]
    NOT?: Class_base_feeWhereInput | Class_base_feeWhereInput[]
    name?: StringFilter<"Class_base_fee"> | string
    admission_fee?: IntFilter<"Class_base_fee"> | number
    monthly_fee?: IntFilter<"Class_base_fee"> | number
    schoolBranchId?: StringNullableFilter<"Class_base_fee"> | string | null
    schoolId?: StringNullableFilter<"Class_base_fee"> | string | null
    schoolBranch?: XOR<SchoolBranchNullableScalarRelationFilter, SchoolBranchWhereInput> | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }, "id" | "name_schoolId">

  export type Class_base_feeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
    schoolBranchId?: SortOrderInput | SortOrder
    schoolId?: SortOrderInput | SortOrder
    _count?: Class_base_feeCountOrderByAggregateInput
    _avg?: Class_base_feeAvgOrderByAggregateInput
    _max?: Class_base_feeMaxOrderByAggregateInput
    _min?: Class_base_feeMinOrderByAggregateInput
    _sum?: Class_base_feeSumOrderByAggregateInput
  }

  export type Class_base_feeScalarWhereWithAggregatesInput = {
    AND?: Class_base_feeScalarWhereWithAggregatesInput | Class_base_feeScalarWhereWithAggregatesInput[]
    OR?: Class_base_feeScalarWhereWithAggregatesInput[]
    NOT?: Class_base_feeScalarWhereWithAggregatesInput | Class_base_feeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class_base_fee"> | string
    name?: StringWithAggregatesFilter<"Class_base_fee"> | string
    admission_fee?: IntWithAggregatesFilter<"Class_base_fee"> | number
    monthly_fee?: IntWithAggregatesFilter<"Class_base_fee"> | number
    schoolBranchId?: StringNullableWithAggregatesFilter<"Class_base_fee"> | string | null
    schoolId?: StringNullableWithAggregatesFilter<"Class_base_fee"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    reviews?: ReviewListRelationFilter
    payment?: PaymentListRelationFilter
    Admission?: AdmissionListRelationFilter
    School?: SchoolListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    Admission?: AdmissionOrderByRelationAggregateInput
    School?: SchoolOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    reviews?: ReviewListRelationFilter
    payment?: PaymentListRelationFilter
    Admission?: AdmissionListRelationFilter
    School?: SchoolListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    schoolId?: StringNullableFilter<"Review"> | string | null
    schoolBranchId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringNullableFilter<"Review"> | string | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    schoolBranch?: XOR<SchoolBranchNullableScalarRelationFilter, SchoolBranchWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    schoolBranchId?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    schoolBranch?: SchoolBranchOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewerId_schoolId?: ReviewReviewerIdSchoolIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    schoolId?: StringNullableFilter<"Review"> | string | null
    schoolBranchId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringNullableFilter<"Review"> | string | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    schoolBranch?: XOR<SchoolBranchNullableScalarRelationFilter, SchoolBranchWhereInput> | null
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "reviewerId_schoolId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    schoolBranchId?: SortOrderInput | SortOrder
    reviewerId?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    schoolId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    schoolBranchId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    reviewerId?: StringNullableWithAggregatesFilter<"Review"> | string | null
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFilter<"Subscription"> | $Enums.SubscriptionType
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    schoolId?: StringFilter<"Subscription"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    payment?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    payment?: PaymentOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId_status?: SubscriptionSchoolIdStatusCompoundUniqueInput
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFilter<"Subscription"> | $Enums.SubscriptionType
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    schoolId?: StringFilter<"Subscription"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    payment?: PaymentListRelationFilter
  }, "id" | "schoolId_status">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    schoolId?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionType
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Subscription"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscriptionId?: StringFilter<"Payment"> | string
    schoolId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    school?: SchoolOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subscriptionId_schoolId_userId?: PaymentSubscriptionIdSchoolIdUserIdCompoundUniqueInput
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscriptionId?: StringFilter<"Payment"> | string
    schoolId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "subscriptionId_schoolId_userId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    subscriptionId?: StringWithAggregatesFilter<"Payment"> | string
    schoolId?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type AdmissionWhereInput = {
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    id?: StringFilter<"Admission"> | string
    student_name?: StringFilter<"Admission"> | string
    student_age?: IntFilter<"Admission"> | number
    date_of_birth?: DateTimeFilter<"Admission"> | Date | string
    image_url?: StringFilter<"Admission"> | string
    approval?: EnumAdmissionApprovalFilter<"Admission"> | $Enums.AdmissionApproval
    createdAt?: DateTimeFilter<"Admission"> | Date | string
    updatedAt?: DateTimeFilter<"Admission"> | Date | string
    schoolId?: StringFilter<"Admission"> | string
    submitterId?: StringFilter<"Admission"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    submitter?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }

  export type AdmissionOrderByWithRelationInput = {
    id?: SortOrder
    student_name?: SortOrder
    student_age?: SortOrder
    date_of_birth?: SortOrder
    image_url?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    submitterId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    submitter?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type AdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submitterId_schoolId?: AdmissionSubmitterIdSchoolIdCompoundUniqueInput
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    student_name?: StringFilter<"Admission"> | string
    student_age?: IntFilter<"Admission"> | number
    date_of_birth?: DateTimeFilter<"Admission"> | Date | string
    image_url?: StringFilter<"Admission"> | string
    approval?: EnumAdmissionApprovalFilter<"Admission"> | $Enums.AdmissionApproval
    createdAt?: DateTimeFilter<"Admission"> | Date | string
    updatedAt?: DateTimeFilter<"Admission"> | Date | string
    schoolId?: StringFilter<"Admission"> | string
    submitterId?: StringFilter<"Admission"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    submitter?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }, "id" | "submitterId_schoolId">

  export type AdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    student_name?: SortOrder
    student_age?: SortOrder
    date_of_birth?: SortOrder
    image_url?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    submitterId?: SortOrder
    _count?: AdmissionCountOrderByAggregateInput
    _avg?: AdmissionAvgOrderByAggregateInput
    _max?: AdmissionMaxOrderByAggregateInput
    _min?: AdmissionMinOrderByAggregateInput
    _sum?: AdmissionSumOrderByAggregateInput
  }

  export type AdmissionScalarWhereWithAggregatesInput = {
    AND?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    OR?: AdmissionScalarWhereWithAggregatesInput[]
    NOT?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admission"> | string
    student_name?: StringWithAggregatesFilter<"Admission"> | string
    student_age?: IntWithAggregatesFilter<"Admission"> | number
    date_of_birth?: DateTimeWithAggregatesFilter<"Admission"> | Date | string
    image_url?: StringWithAggregatesFilter<"Admission"> | string
    approval?: EnumAdmissionApprovalWithAggregatesFilter<"Admission"> | $Enums.AdmissionApproval
    createdAt?: DateTimeWithAggregatesFilter<"Admission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admission"> | Date | string
    schoolId?: StringWithAggregatesFilter<"Admission"> | string
    submitterId?: StringWithAggregatesFilter<"Admission"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    admissionId?: StringFilter<"Document"> | string
    admission?: XOR<AdmissionScalarRelationFilter, AdmissionWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionId?: SortOrder
    admission?: AdmissionOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    admissionId?: StringFilter<"Document"> | string
    admission?: XOR<AdmissionScalarRelationFilter, AdmissionWhereInput>
  }, "id" | "url">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    admissionId?: StringWithAggregatesFilter<"Document"> | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolBranchCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    school: SchoolCreateNestedOneWithoutSchoolBranchInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolBranchInput
    reviews?: ReviewCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    schoolId: string
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutSchoolBranchNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolBranchNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchCreateManyInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    schoolId: string
  }

  export type SchoolBranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolBranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type Class_base_feeCreateInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranch?: SchoolBranchCreateNestedOneWithoutClass_base_feeInput
    school?: SchoolCreateNestedOneWithoutClass_base_feeInput
  }

  export type Class_base_feeUncheckedCreateInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranchId?: string | null
    schoolId?: string | null
  }

  export type Class_base_feeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranch?: SchoolBranchUpdateOneWithoutClass_base_feeNestedInput
    school?: SchoolUpdateOneWithoutClass_base_feeNestedInput
  }

  export type Class_base_feeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Class_base_feeCreateManyInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranchId?: string | null
    schoolId?: string | null
  }

  export type Class_base_feeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
  }

  export type Class_base_feeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    payment?: PaymentCreateNestedManyWithoutUserInput
    Admission?: AdmissionCreateNestedManyWithoutSubmitterInput
    School?: SchoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSubmitterInput
    School?: SchoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    school?: SchoolCreateNestedOneWithoutReviewsInput
    schoolBranch?: SchoolBranchCreateNestedOneWithoutReviewsInput
    reviewer?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    schoolBranchId?: string | null
    reviewerId?: string | null
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutReviewsNestedInput
    schoolBranch?: SchoolBranchUpdateOneWithoutReviewsNestedInput
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    schoolBranchId?: string | null
    reviewerId?: string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    school: SchoolCreateNestedOneWithoutSubscriptionInput
    payment?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    schoolId: string
    payment?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSubscriptionNestedInput
    payment?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    schoolId: string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutPaymentInput
    school: SchoolCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    schoolId: string
    userId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutPaymentNestedInput
    school?: SchoolUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    schoolId: string
    userId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionCreateInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutAdmissionInput
    submitter: UserCreateNestedOneWithoutAdmissionInput
    documents?: DocumentCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    submitterId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutAdmissionNestedInput
    submitter?: UserUpdateOneRequiredWithoutAdmissionNestedInput
    documents?: DocumentUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    submitterId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionCreateManyInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    submitterId: string
  }

  export type AdmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    submitterId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admission: AdmissionCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionId: string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admissionId: string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admissionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeFilter<$PrismaModel> | $Enums.SchoolType
  }

  export type EnumCurriculumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeFilter<$PrismaModel> | $Enums.CurriculumType
  }

  export type SchoolBranchListRelationFilter = {
    every?: SchoolBranchWhereInput
    some?: SchoolBranchWhereInput
    none?: SchoolBranchWhereInput
  }

  export type Class_base_feeListRelationFilter = {
    every?: Class_base_feeWhereInput
    some?: Class_base_feeWhereInput
    none?: Class_base_feeWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type AdmissionListRelationFilter = {
    every?: AdmissionWhereInput
    some?: AdmissionWhereInput
    none?: AdmissionWhereInput
  }

  export type SchoolBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Class_base_feeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    affiliation?: SortOrder
    medium_of_instruction?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school_type?: SortOrder
    curriculum_type?: SortOrder
    userId?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    affiliation?: SortOrder
    medium_of_instruction?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school_type?: SortOrder
    curriculum_type?: SortOrder
    userId?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    affiliation?: SortOrder
    medium_of_instruction?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school_type?: SortOrder
    curriculum_type?: SortOrder
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolTypeFilter<$PrismaModel>
  }

  export type EnumCurriculumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurriculumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurriculumTypeFilter<$PrismaModel>
    _max?: NestedEnumCurriculumTypeFilter<$PrismaModel>
  }

  export type EnumAdmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionStatusFilter<$PrismaModel> | $Enums.AdmissionStatus
  }

  export type EnumGenderPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderPolicy | EnumGenderPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderPolicyFilter<$PrismaModel> | $Enums.GenderPolicy
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SchoolBranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    admission_status?: SortOrder
    gender_policy?: SortOrder
    facilities?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    admission_status?: SortOrder
    gender_policy?: SortOrder
    facilities?: SortOrder
    schoolId?: SortOrder
  }

  export type SchoolBranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    admission_status?: SortOrder
    gender_policy?: SortOrder
    facilities?: SortOrder
    schoolId?: SortOrder
  }

  export type EnumAdmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusFilter<$PrismaModel>
  }

  export type EnumGenderPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderPolicy | EnumGenderPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderPolicyWithAggregatesFilter<$PrismaModel> | $Enums.GenderPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderPolicyFilter<$PrismaModel>
    _max?: NestedEnumGenderPolicyFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SchoolBranchNullableScalarRelationFilter = {
    is?: SchoolBranchWhereInput | null
    isNot?: SchoolBranchWhereInput | null
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Class_base_feeNameSchoolIdCompoundUniqueInput = {
    name: string
    schoolId: string
  }

  export type Class_base_feeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
    schoolBranchId?: SortOrder
    schoolId?: SortOrder
  }

  export type Class_base_feeAvgOrderByAggregateInput = {
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
  }

  export type Class_base_feeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
    schoolBranchId?: SortOrder
    schoolId?: SortOrder
  }

  export type Class_base_feeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
    schoolBranchId?: SortOrder
    schoolId?: SortOrder
  }

  export type Class_base_feeSumOrderByAggregateInput = {
    admission_fee?: SortOrder
    monthly_fee?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput
    some?: SchoolWhereInput
    none?: SchoolWhereInput
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReviewReviewerIdSchoolIdCompoundUniqueInput = {
    reviewerId: string
    schoolId: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    schoolId?: SortOrder
    schoolBranchId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    schoolId?: SortOrder
    schoolBranchId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    schoolId?: SortOrder
    schoolBranchId?: SortOrder
    reviewerId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type SubscriptionSchoolIdStatusCompoundUniqueInput = {
    schoolId: string
    status: $Enums.SubscriptionStatus
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    schoolId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    schoolId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    schoolId?: SortOrder
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type PaymentSubscriptionIdSchoolIdUserIdCompoundUniqueInput = {
    subscriptionId: string
    schoolId: string
    userId: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptionId?: SortOrder
    schoolId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumAdmissionApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionApproval | EnumAdmissionApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionApprovalFilter<$PrismaModel> | $Enums.AdmissionApproval
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdmissionSubmitterIdSchoolIdCompoundUniqueInput = {
    submitterId: string
    schoolId: string
  }

  export type AdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    student_name?: SortOrder
    student_age?: SortOrder
    date_of_birth?: SortOrder
    image_url?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    submitterId?: SortOrder
  }

  export type AdmissionAvgOrderByAggregateInput = {
    student_age?: SortOrder
  }

  export type AdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    student_name?: SortOrder
    student_age?: SortOrder
    date_of_birth?: SortOrder
    image_url?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    submitterId?: SortOrder
  }

  export type AdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    student_name?: SortOrder
    student_age?: SortOrder
    date_of_birth?: SortOrder
    image_url?: SortOrder
    approval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolId?: SortOrder
    submitterId?: SortOrder
  }

  export type AdmissionSumOrderByAggregateInput = {
    student_age?: SortOrder
  }

  export type EnumAdmissionApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionApproval | EnumAdmissionApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionApprovalWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionApprovalFilter<$PrismaModel>
    _max?: NestedEnumAdmissionApprovalFilter<$PrismaModel>
  }

  export type AdmissionScalarRelationFilter = {
    is?: AdmissionWhereInput
    isNot?: AdmissionWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admissionId?: SortOrder
  }

  export type SchoolBranchCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput> | SchoolBranchCreateWithoutSchoolInput[] | SchoolBranchUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutSchoolInput | SchoolBranchCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolBranchCreateManySchoolInputEnvelope
    connect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
  }

  export type Class_base_feeCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput> | Class_base_feeCreateWithoutSchoolInput[] | Class_base_feeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolInput | Class_base_feeCreateOrConnectWithoutSchoolInput[]
    createMany?: Class_base_feeCreateManySchoolInputEnvelope
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput> | ReviewCreateWithoutSchoolInput[] | ReviewUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolInput | ReviewCreateOrConnectWithoutSchoolInput[]
    createMany?: ReviewCreateManySchoolInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput> | SubscriptionCreateWithoutSchoolInput[] | SubscriptionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSchoolInput | SubscriptionCreateOrConnectWithoutSchoolInput[]
    createMany?: SubscriptionCreateManySchoolInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput> | PaymentCreateWithoutSchoolInput[] | PaymentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSchoolInput | PaymentCreateOrConnectWithoutSchoolInput[]
    createMany?: PaymentCreateManySchoolInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AdmissionCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput> | AdmissionCreateWithoutSchoolInput[] | AdmissionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSchoolInput | AdmissionCreateOrConnectWithoutSchoolInput[]
    createMany?: AdmissionCreateManySchoolInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput> | SchoolBranchCreateWithoutSchoolInput[] | SchoolBranchUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutSchoolInput | SchoolBranchCreateOrConnectWithoutSchoolInput[]
    createMany?: SchoolBranchCreateManySchoolInputEnvelope
    connect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
  }

  export type Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput> | Class_base_feeCreateWithoutSchoolInput[] | Class_base_feeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolInput | Class_base_feeCreateOrConnectWithoutSchoolInput[]
    createMany?: Class_base_feeCreateManySchoolInputEnvelope
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput> | ReviewCreateWithoutSchoolInput[] | ReviewUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolInput | ReviewCreateOrConnectWithoutSchoolInput[]
    createMany?: ReviewCreateManySchoolInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput> | SubscriptionCreateWithoutSchoolInput[] | SubscriptionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSchoolInput | SubscriptionCreateOrConnectWithoutSchoolInput[]
    createMany?: SubscriptionCreateManySchoolInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput> | PaymentCreateWithoutSchoolInput[] | PaymentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSchoolInput | PaymentCreateOrConnectWithoutSchoolInput[]
    createMany?: PaymentCreateManySchoolInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput> | AdmissionCreateWithoutSchoolInput[] | AdmissionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSchoolInput | AdmissionCreateOrConnectWithoutSchoolInput[]
    createMany?: AdmissionCreateManySchoolInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSchoolTypeFieldUpdateOperationsInput = {
    set?: $Enums.SchoolType
  }

  export type EnumCurriculumTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurriculumType
  }

  export type SchoolBranchUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput> | SchoolBranchCreateWithoutSchoolInput[] | SchoolBranchUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutSchoolInput | SchoolBranchCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolBranchUpsertWithWhereUniqueWithoutSchoolInput | SchoolBranchUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolBranchCreateManySchoolInputEnvelope
    set?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    disconnect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    delete?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    connect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    update?: SchoolBranchUpdateWithWhereUniqueWithoutSchoolInput | SchoolBranchUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolBranchUpdateManyWithWhereWithoutSchoolInput | SchoolBranchUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolBranchScalarWhereInput | SchoolBranchScalarWhereInput[]
  }

  export type Class_base_feeUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput> | Class_base_feeCreateWithoutSchoolInput[] | Class_base_feeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolInput | Class_base_feeCreateOrConnectWithoutSchoolInput[]
    upsert?: Class_base_feeUpsertWithWhereUniqueWithoutSchoolInput | Class_base_feeUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: Class_base_feeCreateManySchoolInputEnvelope
    set?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    disconnect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    delete?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    update?: Class_base_feeUpdateWithWhereUniqueWithoutSchoolInput | Class_base_feeUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: Class_base_feeUpdateManyWithWhereWithoutSchoolInput | Class_base_feeUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput> | ReviewCreateWithoutSchoolInput[] | ReviewUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolInput | ReviewCreateOrConnectWithoutSchoolInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSchoolInput | ReviewUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ReviewCreateManySchoolInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSchoolInput | ReviewUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSchoolInput | ReviewUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput> | SubscriptionCreateWithoutSchoolInput[] | SubscriptionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSchoolInput | SubscriptionCreateOrConnectWithoutSchoolInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSchoolInput | SubscriptionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SubscriptionCreateManySchoolInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSchoolInput | SubscriptionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSchoolInput | SubscriptionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput
    upsert?: UserUpsertWithoutSchoolInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchoolInput, UserUpdateWithoutSchoolInput>, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type PaymentUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput> | PaymentCreateWithoutSchoolInput[] | PaymentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSchoolInput | PaymentCreateOrConnectWithoutSchoolInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSchoolInput | PaymentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: PaymentCreateManySchoolInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSchoolInput | PaymentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSchoolInput | PaymentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AdmissionUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput> | AdmissionCreateWithoutSchoolInput[] | AdmissionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSchoolInput | AdmissionCreateOrConnectWithoutSchoolInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutSchoolInput | AdmissionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AdmissionCreateManySchoolInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutSchoolInput | AdmissionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutSchoolInput | AdmissionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput> | SchoolBranchCreateWithoutSchoolInput[] | SchoolBranchUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutSchoolInput | SchoolBranchCreateOrConnectWithoutSchoolInput[]
    upsert?: SchoolBranchUpsertWithWhereUniqueWithoutSchoolInput | SchoolBranchUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SchoolBranchCreateManySchoolInputEnvelope
    set?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    disconnect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    delete?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    connect?: SchoolBranchWhereUniqueInput | SchoolBranchWhereUniqueInput[]
    update?: SchoolBranchUpdateWithWhereUniqueWithoutSchoolInput | SchoolBranchUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SchoolBranchUpdateManyWithWhereWithoutSchoolInput | SchoolBranchUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SchoolBranchScalarWhereInput | SchoolBranchScalarWhereInput[]
  }

  export type Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput> | Class_base_feeCreateWithoutSchoolInput[] | Class_base_feeUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolInput | Class_base_feeCreateOrConnectWithoutSchoolInput[]
    upsert?: Class_base_feeUpsertWithWhereUniqueWithoutSchoolInput | Class_base_feeUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: Class_base_feeCreateManySchoolInputEnvelope
    set?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    disconnect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    delete?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    update?: Class_base_feeUpdateWithWhereUniqueWithoutSchoolInput | Class_base_feeUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: Class_base_feeUpdateManyWithWhereWithoutSchoolInput | Class_base_feeUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput> | ReviewCreateWithoutSchoolInput[] | ReviewUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolInput | ReviewCreateOrConnectWithoutSchoolInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSchoolInput | ReviewUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ReviewCreateManySchoolInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSchoolInput | ReviewUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSchoolInput | ReviewUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput> | SubscriptionCreateWithoutSchoolInput[] | SubscriptionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutSchoolInput | SubscriptionCreateOrConnectWithoutSchoolInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutSchoolInput | SubscriptionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: SubscriptionCreateManySchoolInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutSchoolInput | SubscriptionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutSchoolInput | SubscriptionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput> | PaymentCreateWithoutSchoolInput[] | PaymentUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSchoolInput | PaymentCreateOrConnectWithoutSchoolInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSchoolInput | PaymentUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: PaymentCreateManySchoolInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSchoolInput | PaymentUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSchoolInput | PaymentUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput> | AdmissionCreateWithoutSchoolInput[] | AdmissionUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSchoolInput | AdmissionCreateOrConnectWithoutSchoolInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutSchoolInput | AdmissionUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AdmissionCreateManySchoolInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutSchoolInput | AdmissionUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutSchoolInput | AdmissionUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutSchoolBranchInput = {
    create?: XOR<SchoolCreateWithoutSchoolBranchInput, SchoolUncheckedCreateWithoutSchoolBranchInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolBranchInput
    connect?: SchoolWhereUniqueInput
  }

  export type Class_base_feeCreateNestedManyWithoutSchoolBranchInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput> | Class_base_feeCreateWithoutSchoolBranchInput[] | Class_base_feeUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolBranchInput | Class_base_feeCreateOrConnectWithoutSchoolBranchInput[]
    createMany?: Class_base_feeCreateManySchoolBranchInputEnvelope
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutSchoolBranchInput = {
    create?: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput> | ReviewCreateWithoutSchoolBranchInput[] | ReviewUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolBranchInput | ReviewCreateOrConnectWithoutSchoolBranchInput[]
    createMany?: ReviewCreateManySchoolBranchInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type Class_base_feeUncheckedCreateNestedManyWithoutSchoolBranchInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput> | Class_base_feeCreateWithoutSchoolBranchInput[] | Class_base_feeUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolBranchInput | Class_base_feeCreateOrConnectWithoutSchoolBranchInput[]
    createMany?: Class_base_feeCreateManySchoolBranchInputEnvelope
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutSchoolBranchInput = {
    create?: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput> | ReviewCreateWithoutSchoolBranchInput[] | ReviewUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolBranchInput | ReviewCreateOrConnectWithoutSchoolBranchInput[]
    createMany?: ReviewCreateManySchoolBranchInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumAdmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionStatus
  }

  export type EnumGenderPolicyFieldUpdateOperationsInput = {
    set?: $Enums.GenderPolicy
  }

  export type SchoolUpdateOneRequiredWithoutSchoolBranchNestedInput = {
    create?: XOR<SchoolCreateWithoutSchoolBranchInput, SchoolUncheckedCreateWithoutSchoolBranchInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolBranchInput
    upsert?: SchoolUpsertWithoutSchoolBranchInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSchoolBranchInput, SchoolUpdateWithoutSchoolBranchInput>, SchoolUncheckedUpdateWithoutSchoolBranchInput>
  }

  export type Class_base_feeUpdateManyWithoutSchoolBranchNestedInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput> | Class_base_feeCreateWithoutSchoolBranchInput[] | Class_base_feeUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolBranchInput | Class_base_feeCreateOrConnectWithoutSchoolBranchInput[]
    upsert?: Class_base_feeUpsertWithWhereUniqueWithoutSchoolBranchInput | Class_base_feeUpsertWithWhereUniqueWithoutSchoolBranchInput[]
    createMany?: Class_base_feeCreateManySchoolBranchInputEnvelope
    set?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    disconnect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    delete?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    update?: Class_base_feeUpdateWithWhereUniqueWithoutSchoolBranchInput | Class_base_feeUpdateWithWhereUniqueWithoutSchoolBranchInput[]
    updateMany?: Class_base_feeUpdateManyWithWhereWithoutSchoolBranchInput | Class_base_feeUpdateManyWithWhereWithoutSchoolBranchInput[]
    deleteMany?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutSchoolBranchNestedInput = {
    create?: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput> | ReviewCreateWithoutSchoolBranchInput[] | ReviewUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolBranchInput | ReviewCreateOrConnectWithoutSchoolBranchInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSchoolBranchInput | ReviewUpsertWithWhereUniqueWithoutSchoolBranchInput[]
    createMany?: ReviewCreateManySchoolBranchInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSchoolBranchInput | ReviewUpdateWithWhereUniqueWithoutSchoolBranchInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSchoolBranchInput | ReviewUpdateManyWithWhereWithoutSchoolBranchInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type Class_base_feeUncheckedUpdateManyWithoutSchoolBranchNestedInput = {
    create?: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput> | Class_base_feeCreateWithoutSchoolBranchInput[] | Class_base_feeUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: Class_base_feeCreateOrConnectWithoutSchoolBranchInput | Class_base_feeCreateOrConnectWithoutSchoolBranchInput[]
    upsert?: Class_base_feeUpsertWithWhereUniqueWithoutSchoolBranchInput | Class_base_feeUpsertWithWhereUniqueWithoutSchoolBranchInput[]
    createMany?: Class_base_feeCreateManySchoolBranchInputEnvelope
    set?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    disconnect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    delete?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    connect?: Class_base_feeWhereUniqueInput | Class_base_feeWhereUniqueInput[]
    update?: Class_base_feeUpdateWithWhereUniqueWithoutSchoolBranchInput | Class_base_feeUpdateWithWhereUniqueWithoutSchoolBranchInput[]
    updateMany?: Class_base_feeUpdateManyWithWhereWithoutSchoolBranchInput | Class_base_feeUpdateManyWithWhereWithoutSchoolBranchInput[]
    deleteMany?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutSchoolBranchNestedInput = {
    create?: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput> | ReviewCreateWithoutSchoolBranchInput[] | ReviewUncheckedCreateWithoutSchoolBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutSchoolBranchInput | ReviewCreateOrConnectWithoutSchoolBranchInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutSchoolBranchInput | ReviewUpsertWithWhereUniqueWithoutSchoolBranchInput[]
    createMany?: ReviewCreateManySchoolBranchInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutSchoolBranchInput | ReviewUpdateWithWhereUniqueWithoutSchoolBranchInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutSchoolBranchInput | ReviewUpdateManyWithWhereWithoutSchoolBranchInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SchoolBranchCreateNestedOneWithoutClass_base_feeInput = {
    create?: XOR<SchoolBranchCreateWithoutClass_base_feeInput, SchoolBranchUncheckedCreateWithoutClass_base_feeInput>
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutClass_base_feeInput
    connect?: SchoolBranchWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutClass_base_feeInput = {
    create?: XOR<SchoolCreateWithoutClass_base_feeInput, SchoolUncheckedCreateWithoutClass_base_feeInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClass_base_feeInput
    connect?: SchoolWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolBranchUpdateOneWithoutClass_base_feeNestedInput = {
    create?: XOR<SchoolBranchCreateWithoutClass_base_feeInput, SchoolBranchUncheckedCreateWithoutClass_base_feeInput>
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutClass_base_feeInput
    upsert?: SchoolBranchUpsertWithoutClass_base_feeInput
    disconnect?: SchoolBranchWhereInput | boolean
    delete?: SchoolBranchWhereInput | boolean
    connect?: SchoolBranchWhereUniqueInput
    update?: XOR<XOR<SchoolBranchUpdateToOneWithWhereWithoutClass_base_feeInput, SchoolBranchUpdateWithoutClass_base_feeInput>, SchoolBranchUncheckedUpdateWithoutClass_base_feeInput>
  }

  export type SchoolUpdateOneWithoutClass_base_feeNestedInput = {
    create?: XOR<SchoolCreateWithoutClass_base_feeInput, SchoolUncheckedCreateWithoutClass_base_feeInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClass_base_feeInput
    upsert?: SchoolUpsertWithoutClass_base_feeInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutClass_base_feeInput, SchoolUpdateWithoutClass_base_feeInput>, SchoolUncheckedUpdateWithoutClass_base_feeInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AdmissionCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput> | AdmissionCreateWithoutSubmitterInput[] | AdmissionUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSubmitterInput | AdmissionCreateOrConnectWithoutSubmitterInput[]
    createMany?: AdmissionCreateManySubmitterInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type SchoolCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[]
    createMany?: SchoolCreateManyUserInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput> | AdmissionCreateWithoutSubmitterInput[] | AdmissionUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSubmitterInput | AdmissionCreateOrConnectWithoutSubmitterInput[]
    createMany?: AdmissionCreateManySubmitterInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type SchoolUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[]
    createMany?: SchoolCreateManyUserInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AdmissionUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput> | AdmissionCreateWithoutSubmitterInput[] | AdmissionUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSubmitterInput | AdmissionCreateOrConnectWithoutSubmitterInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutSubmitterInput | AdmissionUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: AdmissionCreateManySubmitterInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutSubmitterInput | AdmissionUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutSubmitterInput | AdmissionUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type SchoolUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutUserInput | SchoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolCreateManyUserInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutUserInput | SchoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutUserInput | SchoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput> | AdmissionCreateWithoutSubmitterInput[] | AdmissionUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutSubmitterInput | AdmissionCreateOrConnectWithoutSubmitterInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutSubmitterInput | AdmissionUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: AdmissionCreateManySubmitterInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutSubmitterInput | AdmissionUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutSubmitterInput | AdmissionUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type SchoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput> | SchoolCreateWithoutUserInput[] | SchoolUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput | SchoolCreateOrConnectWithoutUserInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutUserInput | SchoolUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SchoolCreateManyUserInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutUserInput | SchoolUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutUserInput | SchoolUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutReviewsInput = {
    create?: XOR<SchoolCreateWithoutReviewsInput, SchoolUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutReviewsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolBranchCreateNestedOneWithoutReviewsInput = {
    create?: XOR<SchoolBranchCreateWithoutReviewsInput, SchoolBranchUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutReviewsInput
    connect?: SchoolBranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type SchoolUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<SchoolCreateWithoutReviewsInput, SchoolUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutReviewsInput
    upsert?: SchoolUpsertWithoutReviewsInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutReviewsInput, SchoolUpdateWithoutReviewsInput>, SchoolUncheckedUpdateWithoutReviewsInput>
  }

  export type SchoolBranchUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<SchoolBranchCreateWithoutReviewsInput, SchoolBranchUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: SchoolBranchCreateOrConnectWithoutReviewsInput
    upsert?: SchoolBranchUpsertWithoutReviewsInput
    disconnect?: SchoolBranchWhereInput | boolean
    delete?: SchoolBranchWhereInput | boolean
    connect?: SchoolBranchWhereUniqueInput
    update?: XOR<XOR<SchoolBranchUpdateToOneWithWhereWithoutReviewsInput, SchoolBranchUpdateWithoutReviewsInput>, SchoolBranchUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type SchoolCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<SchoolCreateWithoutSubscriptionInput, SchoolUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSubscriptionInput
    connect?: SchoolWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type SchoolUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<SchoolCreateWithoutSubscriptionInput, SchoolUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSubscriptionInput
    upsert?: SchoolUpsertWithoutSubscriptionInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutSubscriptionInput, SchoolUpdateWithoutSubscriptionInput>, SchoolUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentInput, SubscriptionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutPaymentInput = {
    create?: XOR<SchoolCreateWithoutPaymentInput, SchoolUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutPaymentInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentInput, SubscriptionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentInput
    upsert?: SubscriptionUpsertWithoutPaymentInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentInput, SubscriptionUpdateWithoutPaymentInput>, SubscriptionUncheckedUpdateWithoutPaymentInput>
  }

  export type SchoolUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<SchoolCreateWithoutPaymentInput, SchoolUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutPaymentInput
    upsert?: SchoolUpsertWithoutPaymentInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutPaymentInput, SchoolUpdateWithoutPaymentInput>, SchoolUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type SchoolCreateNestedOneWithoutAdmissionInput = {
    create?: XOR<SchoolCreateWithoutAdmissionInput, SchoolUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdmissionInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdmissionInput = {
    create?: XOR<UserCreateWithoutAdmissionInput, UserUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdmissionInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutAdmissionInput = {
    create?: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput> | DocumentCreateWithoutAdmissionInput[] | DocumentUncheckedCreateWithoutAdmissionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAdmissionInput | DocumentCreateOrConnectWithoutAdmissionInput[]
    createMany?: DocumentCreateManyAdmissionInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutAdmissionInput = {
    create?: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput> | DocumentCreateWithoutAdmissionInput[] | DocumentUncheckedCreateWithoutAdmissionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAdmissionInput | DocumentCreateOrConnectWithoutAdmissionInput[]
    createMany?: DocumentCreateManyAdmissionInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumAdmissionApprovalFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionApproval
  }

  export type SchoolUpdateOneRequiredWithoutAdmissionNestedInput = {
    create?: XOR<SchoolCreateWithoutAdmissionInput, SchoolUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdmissionInput
    upsert?: SchoolUpsertWithoutAdmissionInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAdmissionInput, SchoolUpdateWithoutAdmissionInput>, SchoolUncheckedUpdateWithoutAdmissionInput>
  }

  export type UserUpdateOneRequiredWithoutAdmissionNestedInput = {
    create?: XOR<UserCreateWithoutAdmissionInput, UserUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdmissionInput
    upsert?: UserUpsertWithoutAdmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdmissionInput, UserUpdateWithoutAdmissionInput>, UserUncheckedUpdateWithoutAdmissionInput>
  }

  export type DocumentUpdateManyWithoutAdmissionNestedInput = {
    create?: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput> | DocumentCreateWithoutAdmissionInput[] | DocumentUncheckedCreateWithoutAdmissionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAdmissionInput | DocumentCreateOrConnectWithoutAdmissionInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAdmissionInput | DocumentUpsertWithWhereUniqueWithoutAdmissionInput[]
    createMany?: DocumentCreateManyAdmissionInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAdmissionInput | DocumentUpdateWithWhereUniqueWithoutAdmissionInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAdmissionInput | DocumentUpdateManyWithWhereWithoutAdmissionInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutAdmissionNestedInput = {
    create?: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput> | DocumentCreateWithoutAdmissionInput[] | DocumentUncheckedCreateWithoutAdmissionInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutAdmissionInput | DocumentCreateOrConnectWithoutAdmissionInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutAdmissionInput | DocumentUpsertWithWhereUniqueWithoutAdmissionInput[]
    createMany?: DocumentCreateManyAdmissionInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutAdmissionInput | DocumentUpdateWithWhereUniqueWithoutAdmissionInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutAdmissionInput | DocumentUpdateManyWithWhereWithoutAdmissionInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AdmissionCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<AdmissionCreateWithoutDocumentsInput, AdmissionUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutDocumentsInput
    connect?: AdmissionWhereUniqueInput
  }

  export type AdmissionUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<AdmissionCreateWithoutDocumentsInput, AdmissionUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutDocumentsInput
    upsert?: AdmissionUpsertWithoutDocumentsInput
    connect?: AdmissionWhereUniqueInput
    update?: XOR<XOR<AdmissionUpdateToOneWithWhereWithoutDocumentsInput, AdmissionUpdateWithoutDocumentsInput>, AdmissionUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSchoolTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeFilter<$PrismaModel> | $Enums.SchoolType
  }

  export type NestedEnumCurriculumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeFilter<$PrismaModel> | $Enums.CurriculumType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolType | EnumSchoolTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SchoolType[] | ListEnumSchoolTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSchoolTypeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSchoolTypeFilter<$PrismaModel>
    _max?: NestedEnumSchoolTypeFilter<$PrismaModel>
  }

  export type NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurriculumType | EnumCurriculumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurriculumType[] | ListEnumCurriculumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurriculumTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurriculumType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurriculumTypeFilter<$PrismaModel>
    _max?: NestedEnumCurriculumTypeFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionStatusFilter<$PrismaModel> | $Enums.AdmissionStatus
  }

  export type NestedEnumGenderPolicyFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderPolicy | EnumGenderPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderPolicyFilter<$PrismaModel> | $Enums.GenderPolicy
  }

  export type NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionStatus[] | ListEnumAdmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderPolicyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderPolicy | EnumGenderPolicyFieldRefInput<$PrismaModel>
    in?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    notIn?: $Enums.GenderPolicy[] | ListEnumGenderPolicyFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderPolicyWithAggregatesFilter<$PrismaModel> | $Enums.GenderPolicy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderPolicyFilter<$PrismaModel>
    _max?: NestedEnumGenderPolicyFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionApproval | EnumAdmissionApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionApprovalFilter<$PrismaModel> | $Enums.AdmissionApproval
  }

  export type NestedEnumAdmissionApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionApproval | EnumAdmissionApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdmissionApproval[] | ListEnumAdmissionApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumAdmissionApprovalWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionApprovalFilter<$PrismaModel>
    _max?: NestedEnumAdmissionApprovalFilter<$PrismaModel>
  }

  export type SchoolBranchCreateWithoutSchoolInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolBranchInput
    reviews?: ReviewCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchCreateOrConnectWithoutSchoolInput = {
    where: SchoolBranchWhereUniqueInput
    create: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolBranchCreateManySchoolInputEnvelope = {
    data: SchoolBranchCreateManySchoolInput | SchoolBranchCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type Class_base_feeCreateWithoutSchoolInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranch?: SchoolBranchCreateNestedOneWithoutClass_base_feeInput
  }

  export type Class_base_feeUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranchId?: string | null
  }

  export type Class_base_feeCreateOrConnectWithoutSchoolInput = {
    where: Class_base_feeWhereUniqueInput
    create: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput>
  }

  export type Class_base_feeCreateManySchoolInputEnvelope = {
    data: Class_base_feeCreateManySchoolInput | Class_base_feeCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutSchoolInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolBranch?: SchoolBranchCreateNestedOneWithoutReviewsInput
    reviewer?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutSchoolInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolBranchId?: string | null
    reviewerId?: string | null
  }

  export type ReviewCreateOrConnectWithoutSchoolInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput>
  }

  export type ReviewCreateManySchoolInputEnvelope = {
    data: ReviewCreateManySchoolInput | ReviewCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutSchoolInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    payment?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutSchoolInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    payment?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutSchoolInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput>
  }

  export type SubscriptionCreateManySchoolInputEnvelope = {
    data: SubscriptionCreateManySchoolInput | SubscriptionCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    payment?: PaymentCreateNestedManyWithoutUserInput
    Admission?: AdmissionCreateNestedManyWithoutSubmitterInput
  }

  export type UserUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSubmitterInput
  }

  export type UserCreateOrConnectWithoutSchoolInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type PaymentCreateWithoutSchoolInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSchoolInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    userId: string
  }

  export type PaymentCreateOrConnectWithoutSchoolInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput>
  }

  export type PaymentCreateManySchoolInputEnvelope = {
    data: PaymentCreateManySchoolInput | PaymentCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutSchoolInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    submitter: UserCreateNestedOneWithoutAdmissionInput
    documents?: DocumentCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateWithoutSchoolInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    submitterId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionCreateOrConnectWithoutSchoolInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput>
  }

  export type AdmissionCreateManySchoolInputEnvelope = {
    data: AdmissionCreateManySchoolInput | AdmissionCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type SchoolBranchUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SchoolBranchWhereUniqueInput
    update: XOR<SchoolBranchUpdateWithoutSchoolInput, SchoolBranchUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolBranchCreateWithoutSchoolInput, SchoolBranchUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolBranchUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SchoolBranchWhereUniqueInput
    data: XOR<SchoolBranchUpdateWithoutSchoolInput, SchoolBranchUncheckedUpdateWithoutSchoolInput>
  }

  export type SchoolBranchUpdateManyWithWhereWithoutSchoolInput = {
    where: SchoolBranchScalarWhereInput
    data: XOR<SchoolBranchUpdateManyMutationInput, SchoolBranchUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolBranchScalarWhereInput = {
    AND?: SchoolBranchScalarWhereInput | SchoolBranchScalarWhereInput[]
    OR?: SchoolBranchScalarWhereInput[]
    NOT?: SchoolBranchScalarWhereInput | SchoolBranchScalarWhereInput[]
    id?: StringFilter<"SchoolBranch"> | string
    name?: StringFilter<"SchoolBranch"> | string
    address?: StringFilter<"SchoolBranch"> | string
    city?: StringFilter<"SchoolBranch"> | string
    email?: StringFilter<"SchoolBranch"> | string
    phone?: StringFilter<"SchoolBranch"> | string
    description?: StringFilter<"SchoolBranch"> | string
    admission_status?: EnumAdmissionStatusFilter<"SchoolBranch"> | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFilter<"SchoolBranch"> | $Enums.GenderPolicy
    facilities?: StringFilter<"SchoolBranch"> | string
    schoolId?: StringFilter<"SchoolBranch"> | string
  }

  export type Class_base_feeUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Class_base_feeWhereUniqueInput
    update: XOR<Class_base_feeUpdateWithoutSchoolInput, Class_base_feeUncheckedUpdateWithoutSchoolInput>
    create: XOR<Class_base_feeCreateWithoutSchoolInput, Class_base_feeUncheckedCreateWithoutSchoolInput>
  }

  export type Class_base_feeUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Class_base_feeWhereUniqueInput
    data: XOR<Class_base_feeUpdateWithoutSchoolInput, Class_base_feeUncheckedUpdateWithoutSchoolInput>
  }

  export type Class_base_feeUpdateManyWithWhereWithoutSchoolInput = {
    where: Class_base_feeScalarWhereInput
    data: XOR<Class_base_feeUpdateManyMutationInput, Class_base_feeUncheckedUpdateManyWithoutSchoolInput>
  }

  export type Class_base_feeScalarWhereInput = {
    AND?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
    OR?: Class_base_feeScalarWhereInput[]
    NOT?: Class_base_feeScalarWhereInput | Class_base_feeScalarWhereInput[]
    id?: StringFilter<"Class_base_fee"> | string
    name?: StringFilter<"Class_base_fee"> | string
    admission_fee?: IntFilter<"Class_base_fee"> | number
    monthly_fee?: IntFilter<"Class_base_fee"> | number
    schoolBranchId?: StringNullableFilter<"Class_base_fee"> | string | null
    schoolId?: StringNullableFilter<"Class_base_fee"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutSchoolInput, ReviewUncheckedUpdateWithoutSchoolInput>
    create: XOR<ReviewCreateWithoutSchoolInput, ReviewUncheckedCreateWithoutSchoolInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutSchoolInput, ReviewUncheckedUpdateWithoutSchoolInput>
  }

  export type ReviewUpdateManyWithWhereWithoutSchoolInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    schoolId?: StringNullableFilter<"Review"> | string | null
    schoolBranchId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringNullableFilter<"Review"> | string | null
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutSchoolInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutSchoolInput, SubscriptionUncheckedUpdateWithoutSchoolInput>
    create: XOR<SubscriptionCreateWithoutSchoolInput, SubscriptionUncheckedCreateWithoutSchoolInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutSchoolInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutSchoolInput, SubscriptionUncheckedUpdateWithoutSchoolInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutSchoolInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    plan?: EnumSubscriptionPlanFilter<"Subscription"> | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFilter<"Subscription"> | $Enums.SubscriptionType
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    schoolId?: StringFilter<"Subscription"> | string
  }

  export type UserUpsertWithoutSchoolInput = {
    update: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchoolInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUpdateManyWithoutSubmitterNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSubmitterNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSchoolInput, PaymentUncheckedUpdateWithoutSchoolInput>
    create: XOR<PaymentCreateWithoutSchoolInput, PaymentUncheckedCreateWithoutSchoolInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSchoolInput, PaymentUncheckedUpdateWithoutSchoolInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSchoolInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSchoolInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscriptionId?: StringFilter<"Payment"> | string
    schoolId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
  }

  export type AdmissionUpsertWithWhereUniqueWithoutSchoolInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutSchoolInput, AdmissionUncheckedUpdateWithoutSchoolInput>
    create: XOR<AdmissionCreateWithoutSchoolInput, AdmissionUncheckedCreateWithoutSchoolInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutSchoolInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutSchoolInput, AdmissionUncheckedUpdateWithoutSchoolInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutSchoolInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutSchoolInput>
  }

  export type AdmissionScalarWhereInput = {
    AND?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    OR?: AdmissionScalarWhereInput[]
    NOT?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    id?: StringFilter<"Admission"> | string
    student_name?: StringFilter<"Admission"> | string
    student_age?: IntFilter<"Admission"> | number
    date_of_birth?: DateTimeFilter<"Admission"> | Date | string
    image_url?: StringFilter<"Admission"> | string
    approval?: EnumAdmissionApprovalFilter<"Admission"> | $Enums.AdmissionApproval
    createdAt?: DateTimeFilter<"Admission"> | Date | string
    updatedAt?: DateTimeFilter<"Admission"> | Date | string
    schoolId?: StringFilter<"Admission"> | string
    submitterId?: StringFilter<"Admission"> | string
  }

  export type SchoolCreateWithoutSchoolBranchInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSchoolBranchInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSchoolBranchInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSchoolBranchInput, SchoolUncheckedCreateWithoutSchoolBranchInput>
  }

  export type Class_base_feeCreateWithoutSchoolBranchInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    school?: SchoolCreateNestedOneWithoutClass_base_feeInput
  }

  export type Class_base_feeUncheckedCreateWithoutSchoolBranchInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolId?: string | null
  }

  export type Class_base_feeCreateOrConnectWithoutSchoolBranchInput = {
    where: Class_base_feeWhereUniqueInput
    create: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput>
  }

  export type Class_base_feeCreateManySchoolBranchInputEnvelope = {
    data: Class_base_feeCreateManySchoolBranchInput | Class_base_feeCreateManySchoolBranchInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutSchoolBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    school?: SchoolCreateNestedOneWithoutReviewsInput
    reviewer?: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutSchoolBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    reviewerId?: string | null
  }

  export type ReviewCreateOrConnectWithoutSchoolBranchInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput>
  }

  export type ReviewCreateManySchoolBranchInputEnvelope = {
    data: ReviewCreateManySchoolBranchInput | ReviewCreateManySchoolBranchInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutSchoolBranchInput = {
    update: XOR<SchoolUpdateWithoutSchoolBranchInput, SchoolUncheckedUpdateWithoutSchoolBranchInput>
    create: XOR<SchoolCreateWithoutSchoolBranchInput, SchoolUncheckedCreateWithoutSchoolBranchInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSchoolBranchInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSchoolBranchInput, SchoolUncheckedUpdateWithoutSchoolBranchInput>
  }

  export type SchoolUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type Class_base_feeUpsertWithWhereUniqueWithoutSchoolBranchInput = {
    where: Class_base_feeWhereUniqueInput
    update: XOR<Class_base_feeUpdateWithoutSchoolBranchInput, Class_base_feeUncheckedUpdateWithoutSchoolBranchInput>
    create: XOR<Class_base_feeCreateWithoutSchoolBranchInput, Class_base_feeUncheckedCreateWithoutSchoolBranchInput>
  }

  export type Class_base_feeUpdateWithWhereUniqueWithoutSchoolBranchInput = {
    where: Class_base_feeWhereUniqueInput
    data: XOR<Class_base_feeUpdateWithoutSchoolBranchInput, Class_base_feeUncheckedUpdateWithoutSchoolBranchInput>
  }

  export type Class_base_feeUpdateManyWithWhereWithoutSchoolBranchInput = {
    where: Class_base_feeScalarWhereInput
    data: XOR<Class_base_feeUpdateManyMutationInput, Class_base_feeUncheckedUpdateManyWithoutSchoolBranchInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutSchoolBranchInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutSchoolBranchInput, ReviewUncheckedUpdateWithoutSchoolBranchInput>
    create: XOR<ReviewCreateWithoutSchoolBranchInput, ReviewUncheckedCreateWithoutSchoolBranchInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutSchoolBranchInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutSchoolBranchInput, ReviewUncheckedUpdateWithoutSchoolBranchInput>
  }

  export type ReviewUpdateManyWithWhereWithoutSchoolBranchInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutSchoolBranchInput>
  }

  export type SchoolBranchCreateWithoutClass_base_feeInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    school: SchoolCreateNestedOneWithoutSchoolBranchInput
    reviews?: ReviewCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchUncheckedCreateWithoutClass_base_feeInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    schoolId: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchCreateOrConnectWithoutClass_base_feeInput = {
    where: SchoolBranchWhereUniqueInput
    create: XOR<SchoolBranchCreateWithoutClass_base_feeInput, SchoolBranchUncheckedCreateWithoutClass_base_feeInput>
  }

  export type SchoolCreateWithoutClass_base_feeInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutClass_base_feeInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutClass_base_feeInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutClass_base_feeInput, SchoolUncheckedCreateWithoutClass_base_feeInput>
  }

  export type SchoolBranchUpsertWithoutClass_base_feeInput = {
    update: XOR<SchoolBranchUpdateWithoutClass_base_feeInput, SchoolBranchUncheckedUpdateWithoutClass_base_feeInput>
    create: XOR<SchoolBranchCreateWithoutClass_base_feeInput, SchoolBranchUncheckedCreateWithoutClass_base_feeInput>
    where?: SchoolBranchWhereInput
  }

  export type SchoolBranchUpdateToOneWithWhereWithoutClass_base_feeInput = {
    where?: SchoolBranchWhereInput
    data: XOR<SchoolBranchUpdateWithoutClass_base_feeInput, SchoolBranchUncheckedUpdateWithoutClass_base_feeInput>
  }

  export type SchoolBranchUpdateWithoutClass_base_feeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutSchoolBranchNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchUncheckedUpdateWithoutClass_base_feeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolUpsertWithoutClass_base_feeInput = {
    update: XOR<SchoolUpdateWithoutClass_base_feeInput, SchoolUncheckedUpdateWithoutClass_base_feeInput>
    create: XOR<SchoolCreateWithoutClass_base_feeInput, SchoolUncheckedCreateWithoutClass_base_feeInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutClass_base_feeInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutClass_base_feeInput, SchoolUncheckedUpdateWithoutClass_base_feeInput>
  }

  export type SchoolUpdateWithoutClass_base_feeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutClass_base_feeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    school?: SchoolCreateNestedOneWithoutReviewsInput
    schoolBranch?: SchoolBranchCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    schoolBranchId?: string | null
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutPaymentInput
    school: SchoolCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    schoolId: string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionCreateWithoutSubmitterInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutAdmissionInput
    documents?: DocumentCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateWithoutSubmitterInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutAdmissionInput
  }

  export type AdmissionCreateOrConnectWithoutSubmitterInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput>
  }

  export type AdmissionCreateManySubmitterInputEnvelope = {
    data: AdmissionCreateManySubmitterInput | AdmissionCreateManySubmitterInput[]
    skipDuplicates?: boolean
  }

  export type SchoolCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUserInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type SchoolCreateManyUserInputEnvelope = {
    data: SchoolCreateManyUserInput | SchoolCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type AdmissionUpsertWithWhereUniqueWithoutSubmitterInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutSubmitterInput, AdmissionUncheckedUpdateWithoutSubmitterInput>
    create: XOR<AdmissionCreateWithoutSubmitterInput, AdmissionUncheckedCreateWithoutSubmitterInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutSubmitterInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutSubmitterInput, AdmissionUncheckedUpdateWithoutSubmitterInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutSubmitterInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutSubmitterInput>
  }

  export type SchoolUpsertWithWhereUniqueWithoutUserInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutUserInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUpdateManyWithWhereWithoutUserInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutUserInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    OR?: SchoolScalarWhereInput[]
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    email?: StringFilter<"School"> | string
    phone?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    affiliation?: StringFilter<"School"> | string
    medium_of_instruction?: StringFilter<"School"> | string
    description?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    school_type?: EnumSchoolTypeFilter<"School"> | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFilter<"School"> | $Enums.CurriculumType
    userId?: StringFilter<"School"> | string
  }

  export type SchoolCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutReviewsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutReviewsInput, SchoolUncheckedCreateWithoutReviewsInput>
  }

  export type SchoolBranchCreateWithoutReviewsInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    school: SchoolCreateNestedOneWithoutSchoolBranchInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
    schoolId: string
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolBranchInput
  }

  export type SchoolBranchCreateOrConnectWithoutReviewsInput = {
    where: SchoolBranchWhereUniqueInput
    create: XOR<SchoolBranchCreateWithoutReviewsInput, SchoolBranchUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    payment?: PaymentCreateNestedManyWithoutUserInput
    Admission?: AdmissionCreateNestedManyWithoutSubmitterInput
    School?: SchoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSubmitterInput
    School?: SchoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type SchoolUpsertWithoutReviewsInput = {
    update: XOR<SchoolUpdateWithoutReviewsInput, SchoolUncheckedUpdateWithoutReviewsInput>
    create: XOR<SchoolCreateWithoutReviewsInput, SchoolUncheckedCreateWithoutReviewsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutReviewsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutReviewsInput, SchoolUncheckedUpdateWithoutReviewsInput>
  }

  export type SchoolUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolBranchUpsertWithoutReviewsInput = {
    update: XOR<SchoolBranchUpdateWithoutReviewsInput, SchoolBranchUncheckedUpdateWithoutReviewsInput>
    create: XOR<SchoolBranchCreateWithoutReviewsInput, SchoolBranchUncheckedCreateWithoutReviewsInput>
    where?: SchoolBranchWhereInput
  }

  export type SchoolBranchUpdateToOneWithWhereWithoutReviewsInput = {
    where?: SchoolBranchWhereInput
    data: XOR<SchoolBranchUpdateWithoutReviewsInput, SchoolBranchUncheckedUpdateWithoutReviewsInput>
  }

  export type SchoolBranchUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutSchoolBranchNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolBranchNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    payment?: PaymentUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchoolCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSubscriptionInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSubscriptionInput, SchoolUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    userId: string
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutSubscriptionInput = {
    update: XOR<SchoolUpdateWithoutSubscriptionInput, SchoolUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<SchoolCreateWithoutSubscriptionInput, SchoolUncheckedCreateWithoutSubscriptionInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutSubscriptionInput, SchoolUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SchoolUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionCreateWithoutPaymentInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    school: SchoolCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
    schoolId: string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentInput, SubscriptionUncheckedCreateWithoutPaymentInput>
  }

  export type SchoolCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Admission?: AdmissionCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutPaymentInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutPaymentInput, SchoolUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    Admission?: AdmissionCreateNestedManyWithoutSubmitterInput
    School?: SchoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    Admission?: AdmissionUncheckedCreateNestedManyWithoutSubmitterInput
    School?: SchoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type SubscriptionUpsertWithoutPaymentInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentInput, SubscriptionUncheckedUpdateWithoutPaymentInput>
    create: XOR<SubscriptionCreateWithoutPaymentInput, SubscriptionUncheckedCreateWithoutPaymentInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentInput, SubscriptionUncheckedUpdateWithoutPaymentInput>
  }

  export type SubscriptionUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUpsertWithoutPaymentInput = {
    update: XOR<SchoolUpdateWithoutPaymentInput, SchoolUncheckedUpdateWithoutPaymentInput>
    create: XOR<SchoolCreateWithoutPaymentInput, SchoolUncheckedCreateWithoutPaymentInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutPaymentInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutPaymentInput, SchoolUncheckedUpdateWithoutPaymentInput>
  }

  export type SchoolUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    Admission?: AdmissionUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSubmitterNestedInput
    School?: SchoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SchoolCreateWithoutAdmissionInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    schoolBranch?: SchoolBranchCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeCreateNestedManyWithoutSchoolInput
    reviews?: ReviewCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionCreateNestedManyWithoutSchoolInput
    user: UserCreateNestedOneWithoutSchoolInput
    Payment?: PaymentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutAdmissionInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
    userId: string
    schoolBranch?: SchoolBranchUncheckedCreateNestedManyWithoutSchoolInput
    class_base_fee?: Class_base_feeUncheckedCreateNestedManyWithoutSchoolInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutSchoolInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutSchoolInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutAdmissionInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAdmissionInput, SchoolUncheckedCreateWithoutAdmissionInput>
  }

  export type UserCreateWithoutAdmissionInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    payment?: PaymentCreateNestedManyWithoutUserInput
    School?: SchoolCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdmissionInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role: $Enums.UserRole
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    School?: SchoolUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdmissionInput, UserUncheckedCreateWithoutAdmissionInput>
  }

  export type DocumentCreateWithoutAdmissionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutAdmissionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutAdmissionInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput>
  }

  export type DocumentCreateManyAdmissionInputEnvelope = {
    data: DocumentCreateManyAdmissionInput | DocumentCreateManyAdmissionInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutAdmissionInput = {
    update: XOR<SchoolUpdateWithoutAdmissionInput, SchoolUncheckedUpdateWithoutAdmissionInput>
    create: XOR<SchoolCreateWithoutAdmissionInput, SchoolUncheckedCreateWithoutAdmissionInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAdmissionInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAdmissionInput, SchoolUncheckedUpdateWithoutAdmissionInput>
  }

  export type SchoolUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    user?: UserUpdateOneRequiredWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    userId?: StringFieldUpdateOperationsInput | string
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutAdmissionInput = {
    update: XOR<UserUpdateWithoutAdmissionInput, UserUncheckedUpdateWithoutAdmissionInput>
    create: XOR<UserCreateWithoutAdmissionInput, UserUncheckedCreateWithoutAdmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdmissionInput, UserUncheckedUpdateWithoutAdmissionInput>
  }

  export type UserUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
    School?: SchoolUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    School?: SchoolUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutAdmissionInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutAdmissionInput, DocumentUncheckedUpdateWithoutAdmissionInput>
    create: XOR<DocumentCreateWithoutAdmissionInput, DocumentUncheckedCreateWithoutAdmissionInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutAdmissionInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutAdmissionInput, DocumentUncheckedUpdateWithoutAdmissionInput>
  }

  export type DocumentUpdateManyWithWhereWithoutAdmissionInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutAdmissionInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    admissionId?: StringFilter<"Document"> | string
  }

  export type AdmissionCreateWithoutDocumentsInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutAdmissionInput
    submitter: UserCreateNestedOneWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateWithoutDocumentsInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    submitterId: string
  }

  export type AdmissionCreateOrConnectWithoutDocumentsInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutDocumentsInput, AdmissionUncheckedCreateWithoutDocumentsInput>
  }

  export type AdmissionUpsertWithoutDocumentsInput = {
    update: XOR<AdmissionUpdateWithoutDocumentsInput, AdmissionUncheckedUpdateWithoutDocumentsInput>
    create: XOR<AdmissionCreateWithoutDocumentsInput, AdmissionUncheckedCreateWithoutDocumentsInput>
    where?: AdmissionWhereInput
  }

  export type AdmissionUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: AdmissionWhereInput
    data: XOR<AdmissionUpdateWithoutDocumentsInput, AdmissionUncheckedUpdateWithoutDocumentsInput>
  }

  export type AdmissionUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutAdmissionNestedInput
    submitter?: UserUpdateOneRequiredWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    submitterId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolBranchCreateManySchoolInput = {
    id?: string
    name: string
    address: string
    city: string
    email: string
    phone: string
    description: string
    admission_status: $Enums.AdmissionStatus
    gender_policy: $Enums.GenderPolicy
    facilities: string
  }

  export type Class_base_feeCreateManySchoolInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolBranchId?: string | null
  }

  export type ReviewCreateManySchoolInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolBranchId?: string | null
    reviewerId?: string | null
  }

  export type SubscriptionCreateManySchoolInput = {
    id?: string
    plan: $Enums.SubscriptionPlan
    status: $Enums.SubscriptionStatus
    type: $Enums.SubscriptionType
    createdAt?: Date | string
    startDate?: Date | string
    endDate: Date | string
  }

  export type PaymentCreateManySchoolInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    userId: string
  }

  export type AdmissionCreateManySchoolInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    submitterId: string
  }

  export type SchoolBranchUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolBranchNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolBranchNestedInput
  }

  export type SchoolBranchUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    admission_status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    gender_policy?: EnumGenderPolicyFieldUpdateOperationsInput | $Enums.GenderPolicy
    facilities?: StringFieldUpdateOperationsInput | string
  }

  export type Class_base_feeUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranch?: SchoolBranchUpdateOneWithoutClass_base_feeNestedInput
  }

  export type Class_base_feeUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Class_base_feeUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolBranch?: SchoolBranchUpdateOneWithoutReviewsNestedInput
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submitter?: UserUpdateOneRequiredWithoutAdmissionNestedInput
    documents?: DocumentUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submitterId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submitterId?: StringFieldUpdateOperationsInput | string
  }

  export type Class_base_feeCreateManySchoolBranchInput = {
    id?: string
    name: string
    admission_fee: number
    monthly_fee: number
    schoolId?: string | null
  }

  export type ReviewCreateManySchoolBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    reviewerId?: string | null
  }

  export type Class_base_feeUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    school?: SchoolUpdateOneWithoutClass_base_feeNestedInput
  }

  export type Class_base_feeUncheckedUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Class_base_feeUncheckedUpdateManyWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    admission_fee?: IntFieldUpdateOperationsInput | number
    monthly_fee?: IntFieldUpdateOperationsInput | number
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutReviewsNestedInput
    reviewer?: UserUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutSchoolBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    schoolId?: string | null
    schoolBranchId?: string | null
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptionId: string
    schoolId: string
  }

  export type AdmissionCreateManySubmitterInput = {
    id?: string
    student_name: string
    student_age: number
    date_of_birth: Date | string
    image_url: string
    approval: $Enums.AdmissionApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
  }

  export type SchoolCreateManyUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    affiliation: string
    medium_of_instruction: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school_type: $Enums.SchoolType
    curriculum_type: $Enums.CurriculumType
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneWithoutReviewsNestedInput
    schoolBranch?: SchoolBranchUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolBranchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutPaymentNestedInput
    school?: SchoolUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AdmissionUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutAdmissionNestedInput
    documents?: DocumentUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateManyWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_name?: StringFieldUpdateOperationsInput | string
    student_age?: IntFieldUpdateOperationsInput | number
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: StringFieldUpdateOperationsInput | string
    approval?: EnumAdmissionApprovalFieldUpdateOperationsInput | $Enums.AdmissionApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
    schoolBranch?: SchoolBranchUncheckedUpdateManyWithoutSchoolNestedInput
    class_base_fee?: Class_base_feeUncheckedUpdateManyWithoutSchoolNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutSchoolNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutSchoolNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutSchoolNestedInput
    Admission?: AdmissionUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    medium_of_instruction?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school_type?: EnumSchoolTypeFieldUpdateOperationsInput | $Enums.SchoolType
    curriculum_type?: EnumCurriculumTypeFieldUpdateOperationsInput | $Enums.CurriculumType
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolId: string
    userId: string
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateManyAdmissionInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}