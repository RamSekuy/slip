
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model SalarySlip
 * 
 */
export type SalarySlip = $Result.DefaultSelection<Prisma.$SalarySlipPayload>
/**
 * Model SalarySlipReport
 * 
 */
export type SalarySlipReport = $Result.DefaultSelection<Prisma.$SalarySlipReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Education: {
  SD: 'SD',
  SMP: 'SMP',
  SMA: 'SMA',
  SMK: 'SMK',
  MA: 'MA',
  MTS: 'MTS',
  D3: 'D3',
  S1: 'S1',
  S2: 'S2',
  S3: 'S3'
};

export type Education = (typeof Education)[keyof typeof Education]


export const Role: {
  KepsekSDTQ: 'KepsekSDTQ',
  Kepsek: 'Kepsek',
  GuruSDTQ: 'GuruSDTQ',
  GuruSMPTQ: 'GuruSMPTQ',
  GuruSMA: 'GuruSMA',
  GuruTerbang: 'GuruTerbang',
  Chef: 'Chef',
  Cleaner: 'Cleaner',
  Morobbi: 'Morobbi',
  Laundry: 'Laundry',
  Admin: 'Admin',
  FO: 'FO',
  Sekretaris: 'Sekretaris',
  Keuangan: 'Keuangan',
  KetuaYayasan: 'KetuaYayasan',
  Maintenance: 'Maintenance',
  Musyrif: 'Musyrif'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Education = $Enums.Education

export const Education: typeof $Enums.Education

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salarySlip`: Exposes CRUD operations for the **SalarySlip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalarySlips
    * const salarySlips = await prisma.salarySlip.findMany()
    * ```
    */
  get salarySlip(): Prisma.SalarySlipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salarySlipReport`: Exposes CRUD operations for the **SalarySlipReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalarySlipReports
    * const salarySlipReports = await prisma.salarySlipReport.findMany()
    * ```
    */
  get salarySlipReport(): Prisma.SalarySlipReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Employee: 'Employee',
    SalarySlip: 'SalarySlip',
    SalarySlipReport: 'SalarySlipReport'
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
      modelProps: "employee" | "salarySlip" | "salarySlipReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      SalarySlip: {
        payload: Prisma.$SalarySlipPayload<ExtArgs>
        fields: Prisma.SalarySlipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalarySlipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalarySlipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          findFirst: {
            args: Prisma.SalarySlipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalarySlipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          findMany: {
            args: Prisma.SalarySlipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>[]
          }
          create: {
            args: Prisma.SalarySlipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          createMany: {
            args: Prisma.SalarySlipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalarySlipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>[]
          }
          delete: {
            args: Prisma.SalarySlipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          update: {
            args: Prisma.SalarySlipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          deleteMany: {
            args: Prisma.SalarySlipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalarySlipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalarySlipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>[]
          }
          upsert: {
            args: Prisma.SalarySlipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipPayload>
          }
          aggregate: {
            args: Prisma.SalarySlipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalarySlip>
          }
          groupBy: {
            args: Prisma.SalarySlipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalarySlipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalarySlipCountArgs<ExtArgs>
            result: $Utils.Optional<SalarySlipCountAggregateOutputType> | number
          }
        }
      }
      SalarySlipReport: {
        payload: Prisma.$SalarySlipReportPayload<ExtArgs>
        fields: Prisma.SalarySlipReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalarySlipReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalarySlipReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          findFirst: {
            args: Prisma.SalarySlipReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalarySlipReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          findMany: {
            args: Prisma.SalarySlipReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>[]
          }
          create: {
            args: Prisma.SalarySlipReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          createMany: {
            args: Prisma.SalarySlipReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalarySlipReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>[]
          }
          delete: {
            args: Prisma.SalarySlipReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          update: {
            args: Prisma.SalarySlipReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          deleteMany: {
            args: Prisma.SalarySlipReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalarySlipReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalarySlipReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>[]
          }
          upsert: {
            args: Prisma.SalarySlipReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalarySlipReportPayload>
          }
          aggregate: {
            args: Prisma.SalarySlipReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalarySlipReport>
          }
          groupBy: {
            args: Prisma.SalarySlipReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalarySlipReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalarySlipReportCountArgs<ExtArgs>
            result: $Utils.Optional<SalarySlipReportCountAggregateOutputType> | number
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
    employee?: EmployeeOmit
    salarySlip?: SalarySlipOmit
    salarySlipReport?: SalarySlipReportOmit
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
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    slips: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slips?: boolean | EmployeeCountOutputTypeCountSlipsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSlipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalarySlipReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    lastEducation: string | null
    updatedAt: Date | null
    createdAt: Date | null
    defaultSalaryId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    lastEducation: string | null
    updatedAt: Date | null
    createdAt: Date | null
    defaultSalaryId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    lastEducation: number
    updatedAt: number
    createdAt: number
    defaultSalaryId: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    lastEducation?: true
    updatedAt?: true
    createdAt?: true
    defaultSalaryId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    lastEducation?: true
    updatedAt?: true
    createdAt?: true
    defaultSalaryId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    lastEducation?: true
    updatedAt?: true
    createdAt?: true
    defaultSalaryId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt: Date
    createdAt: Date
    defaultSalaryId: string
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    lastEducation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    defaultSalaryId?: boolean
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
    slips?: boolean | Employee$slipsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    lastEducation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    defaultSalaryId?: boolean
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    lastEducation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    defaultSalaryId?: boolean
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    lastEducation?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    defaultSalaryId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "lastEducation" | "updatedAt" | "createdAt" | "defaultSalaryId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
    slips?: boolean | Employee$slipsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultSalary?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      defaultSalary: Prisma.$SalarySlipPayload<ExtArgs>
      slips: Prisma.$SalarySlipReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      lastEducation: string
      updatedAt: Date
      createdAt: Date
      defaultSalaryId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    defaultSalary<T extends SalarySlipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalarySlipDefaultArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slips<T extends Employee$slipsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$slipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly role: FieldRef<"Employee", 'Role'>
    readonly lastEducation: FieldRef<"Employee", 'String'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly defaultSalaryId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.slips
   */
  export type Employee$slipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    where?: SalarySlipReportWhereInput
    orderBy?: SalarySlipReportOrderByWithRelationInput | SalarySlipReportOrderByWithRelationInput[]
    cursor?: SalarySlipReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalarySlipReportScalarFieldEnum | SalarySlipReportScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model SalarySlip
   */

  export type AggregateSalarySlip = {
    _count: SalarySlipCountAggregateOutputType | null
    _avg: SalarySlipAvgAggregateOutputType | null
    _sum: SalarySlipSumAggregateOutputType | null
    _min: SalarySlipMinAggregateOutputType | null
    _max: SalarySlipMaxAggregateOutputType | null
  }

  export type SalarySlipAvgAggregateOutputType = {
    gajiPokok: number | null
    masaKerja: number | null
    tunjanganJabatan: number | null
    tunjanganfungsional: number | null
    waliKelas: number | null
    kurikulum: number | null
    kesiswaan: number | null
    bendahara: number | null
    operasionalSD: number | null
    operasionalSMP: number | null
    operasionalSMA: number | null
    media: number | null
    tunjanganKesehatan: number | null
    kehadiran: number | null
    kbmTahfidz: number | null
    kbmFormal: number | null
    inval: number | null
    gTerbang: number | null
    tunjanganMakan: number | null
    tunjanganTinggal: number | null
    seragam: number | null
    sedekah: number | null
    kasbon: number | null
    denda: number | null
  }

  export type SalarySlipSumAggregateOutputType = {
    gajiPokok: number | null
    masaKerja: number | null
    tunjanganJabatan: number | null
    tunjanganfungsional: number | null
    waliKelas: number | null
    kurikulum: number | null
    kesiswaan: number | null
    bendahara: number | null
    operasionalSD: number | null
    operasionalSMP: number | null
    operasionalSMA: number | null
    media: number | null
    tunjanganKesehatan: number | null
    kehadiran: number | null
    kbmTahfidz: number | null
    kbmFormal: number | null
    inval: number | null
    gTerbang: number | null
    tunjanganMakan: number | null
    tunjanganTinggal: number | null
    seragam: number | null
    sedekah: number | null
    kasbon: number | null
    denda: number | null
  }

  export type SalarySlipMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    createdAt: Date | null
    gajiPokok: number | null
    masaKerja: number | null
    tunjanganJabatan: number | null
    tunjanganfungsional: number | null
    waliKelas: number | null
    kurikulum: number | null
    kesiswaan: number | null
    bendahara: number | null
    operasionalSD: number | null
    operasionalSMP: number | null
    operasionalSMA: number | null
    media: number | null
    tunjanganKesehatan: number | null
    kehadiran: number | null
    kbmTahfidz: number | null
    kbmFormal: number | null
    inval: number | null
    gTerbang: number | null
    tunjanganMakan: number | null
    tunjanganTinggal: number | null
    seragam: number | null
    sedekah: number | null
    kasbon: number | null
    denda: number | null
  }

  export type SalarySlipMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
    createdAt: Date | null
    gajiPokok: number | null
    masaKerja: number | null
    tunjanganJabatan: number | null
    tunjanganfungsional: number | null
    waliKelas: number | null
    kurikulum: number | null
    kesiswaan: number | null
    bendahara: number | null
    operasionalSD: number | null
    operasionalSMP: number | null
    operasionalSMA: number | null
    media: number | null
    tunjanganKesehatan: number | null
    kehadiran: number | null
    kbmTahfidz: number | null
    kbmFormal: number | null
    inval: number | null
    gTerbang: number | null
    tunjanganMakan: number | null
    tunjanganTinggal: number | null
    seragam: number | null
    sedekah: number | null
    kasbon: number | null
    denda: number | null
  }

  export type SalarySlipCountAggregateOutputType = {
    id: number
    updatedAt: number
    createdAt: number
    gajiPokok: number
    masaKerja: number
    tunjanganJabatan: number
    tunjanganfungsional: number
    waliKelas: number
    kurikulum: number
    kesiswaan: number
    bendahara: number
    operasionalSD: number
    operasionalSMP: number
    operasionalSMA: number
    media: number
    tunjanganKesehatan: number
    kehadiran: number
    kbmTahfidz: number
    kbmFormal: number
    inval: number
    gTerbang: number
    tunjanganMakan: number
    tunjanganTinggal: number
    seragam: number
    sedekah: number
    kasbon: number
    denda: number
    _all: number
  }


  export type SalarySlipAvgAggregateInputType = {
    gajiPokok?: true
    masaKerja?: true
    tunjanganJabatan?: true
    tunjanganfungsional?: true
    waliKelas?: true
    kurikulum?: true
    kesiswaan?: true
    bendahara?: true
    operasionalSD?: true
    operasionalSMP?: true
    operasionalSMA?: true
    media?: true
    tunjanganKesehatan?: true
    kehadiran?: true
    kbmTahfidz?: true
    kbmFormal?: true
    inval?: true
    gTerbang?: true
    tunjanganMakan?: true
    tunjanganTinggal?: true
    seragam?: true
    sedekah?: true
    kasbon?: true
    denda?: true
  }

  export type SalarySlipSumAggregateInputType = {
    gajiPokok?: true
    masaKerja?: true
    tunjanganJabatan?: true
    tunjanganfungsional?: true
    waliKelas?: true
    kurikulum?: true
    kesiswaan?: true
    bendahara?: true
    operasionalSD?: true
    operasionalSMP?: true
    operasionalSMA?: true
    media?: true
    tunjanganKesehatan?: true
    kehadiran?: true
    kbmTahfidz?: true
    kbmFormal?: true
    inval?: true
    gTerbang?: true
    tunjanganMakan?: true
    tunjanganTinggal?: true
    seragam?: true
    sedekah?: true
    kasbon?: true
    denda?: true
  }

  export type SalarySlipMinAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    gajiPokok?: true
    masaKerja?: true
    tunjanganJabatan?: true
    tunjanganfungsional?: true
    waliKelas?: true
    kurikulum?: true
    kesiswaan?: true
    bendahara?: true
    operasionalSD?: true
    operasionalSMP?: true
    operasionalSMA?: true
    media?: true
    tunjanganKesehatan?: true
    kehadiran?: true
    kbmTahfidz?: true
    kbmFormal?: true
    inval?: true
    gTerbang?: true
    tunjanganMakan?: true
    tunjanganTinggal?: true
    seragam?: true
    sedekah?: true
    kasbon?: true
    denda?: true
  }

  export type SalarySlipMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    gajiPokok?: true
    masaKerja?: true
    tunjanganJabatan?: true
    tunjanganfungsional?: true
    waliKelas?: true
    kurikulum?: true
    kesiswaan?: true
    bendahara?: true
    operasionalSD?: true
    operasionalSMP?: true
    operasionalSMA?: true
    media?: true
    tunjanganKesehatan?: true
    kehadiran?: true
    kbmTahfidz?: true
    kbmFormal?: true
    inval?: true
    gTerbang?: true
    tunjanganMakan?: true
    tunjanganTinggal?: true
    seragam?: true
    sedekah?: true
    kasbon?: true
    denda?: true
  }

  export type SalarySlipCountAggregateInputType = {
    id?: true
    updatedAt?: true
    createdAt?: true
    gajiPokok?: true
    masaKerja?: true
    tunjanganJabatan?: true
    tunjanganfungsional?: true
    waliKelas?: true
    kurikulum?: true
    kesiswaan?: true
    bendahara?: true
    operasionalSD?: true
    operasionalSMP?: true
    operasionalSMA?: true
    media?: true
    tunjanganKesehatan?: true
    kehadiran?: true
    kbmTahfidz?: true
    kbmFormal?: true
    inval?: true
    gTerbang?: true
    tunjanganMakan?: true
    tunjanganTinggal?: true
    seragam?: true
    sedekah?: true
    kasbon?: true
    denda?: true
    _all?: true
  }

  export type SalarySlipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalarySlip to aggregate.
     */
    where?: SalarySlipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlips to fetch.
     */
    orderBy?: SalarySlipOrderByWithRelationInput | SalarySlipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalarySlipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalarySlips
    **/
    _count?: true | SalarySlipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalarySlipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalarySlipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalarySlipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalarySlipMaxAggregateInputType
  }

  export type GetSalarySlipAggregateType<T extends SalarySlipAggregateArgs> = {
        [P in keyof T & keyof AggregateSalarySlip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalarySlip[P]>
      : GetScalarType<T[P], AggregateSalarySlip[P]>
  }




  export type SalarySlipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalarySlipWhereInput
    orderBy?: SalarySlipOrderByWithAggregationInput | SalarySlipOrderByWithAggregationInput[]
    by: SalarySlipScalarFieldEnum[] | SalarySlipScalarFieldEnum
    having?: SalarySlipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalarySlipCountAggregateInputType | true
    _avg?: SalarySlipAvgAggregateInputType
    _sum?: SalarySlipSumAggregateInputType
    _min?: SalarySlipMinAggregateInputType
    _max?: SalarySlipMaxAggregateInputType
  }

  export type SalarySlipGroupByOutputType = {
    id: string
    updatedAt: Date
    createdAt: Date
    gajiPokok: number
    masaKerja: number
    tunjanganJabatan: number
    tunjanganfungsional: number
    waliKelas: number
    kurikulum: number
    kesiswaan: number
    bendahara: number
    operasionalSD: number
    operasionalSMP: number
    operasionalSMA: number
    media: number
    tunjanganKesehatan: number
    kehadiran: number
    kbmTahfidz: number
    kbmFormal: number
    inval: number
    gTerbang: number
    tunjanganMakan: number
    tunjanganTinggal: number
    seragam: number
    sedekah: number
    kasbon: number
    denda: number
    _count: SalarySlipCountAggregateOutputType | null
    _avg: SalarySlipAvgAggregateOutputType | null
    _sum: SalarySlipSumAggregateOutputType | null
    _min: SalarySlipMinAggregateOutputType | null
    _max: SalarySlipMaxAggregateOutputType | null
  }

  type GetSalarySlipGroupByPayload<T extends SalarySlipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalarySlipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalarySlipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalarySlipGroupByOutputType[P]>
            : GetScalarType<T[P], SalarySlipGroupByOutputType[P]>
        }
      >
    >


  export type SalarySlipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    gajiPokok?: boolean
    masaKerja?: boolean
    tunjanganJabatan?: boolean
    tunjanganfungsional?: boolean
    waliKelas?: boolean
    kurikulum?: boolean
    kesiswaan?: boolean
    bendahara?: boolean
    operasionalSD?: boolean
    operasionalSMP?: boolean
    operasionalSMA?: boolean
    media?: boolean
    tunjanganKesehatan?: boolean
    kehadiran?: boolean
    kbmTahfidz?: boolean
    kbmFormal?: boolean
    inval?: boolean
    gTerbang?: boolean
    tunjanganMakan?: boolean
    tunjanganTinggal?: boolean
    seragam?: boolean
    sedekah?: boolean
    kasbon?: boolean
    denda?: boolean
    report?: boolean | SalarySlip$reportArgs<ExtArgs>
    defaultFor?: boolean | SalarySlip$defaultForArgs<ExtArgs>
  }, ExtArgs["result"]["salarySlip"]>

  export type SalarySlipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    gajiPokok?: boolean
    masaKerja?: boolean
    tunjanganJabatan?: boolean
    tunjanganfungsional?: boolean
    waliKelas?: boolean
    kurikulum?: boolean
    kesiswaan?: boolean
    bendahara?: boolean
    operasionalSD?: boolean
    operasionalSMP?: boolean
    operasionalSMA?: boolean
    media?: boolean
    tunjanganKesehatan?: boolean
    kehadiran?: boolean
    kbmTahfidz?: boolean
    kbmFormal?: boolean
    inval?: boolean
    gTerbang?: boolean
    tunjanganMakan?: boolean
    tunjanganTinggal?: boolean
    seragam?: boolean
    sedekah?: boolean
    kasbon?: boolean
    denda?: boolean
  }, ExtArgs["result"]["salarySlip"]>

  export type SalarySlipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    gajiPokok?: boolean
    masaKerja?: boolean
    tunjanganJabatan?: boolean
    tunjanganfungsional?: boolean
    waliKelas?: boolean
    kurikulum?: boolean
    kesiswaan?: boolean
    bendahara?: boolean
    operasionalSD?: boolean
    operasionalSMP?: boolean
    operasionalSMA?: boolean
    media?: boolean
    tunjanganKesehatan?: boolean
    kehadiran?: boolean
    kbmTahfidz?: boolean
    kbmFormal?: boolean
    inval?: boolean
    gTerbang?: boolean
    tunjanganMakan?: boolean
    tunjanganTinggal?: boolean
    seragam?: boolean
    sedekah?: boolean
    kasbon?: boolean
    denda?: boolean
  }, ExtArgs["result"]["salarySlip"]>

  export type SalarySlipSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    gajiPokok?: boolean
    masaKerja?: boolean
    tunjanganJabatan?: boolean
    tunjanganfungsional?: boolean
    waliKelas?: boolean
    kurikulum?: boolean
    kesiswaan?: boolean
    bendahara?: boolean
    operasionalSD?: boolean
    operasionalSMP?: boolean
    operasionalSMA?: boolean
    media?: boolean
    tunjanganKesehatan?: boolean
    kehadiran?: boolean
    kbmTahfidz?: boolean
    kbmFormal?: boolean
    inval?: boolean
    gTerbang?: boolean
    tunjanganMakan?: boolean
    tunjanganTinggal?: boolean
    seragam?: boolean
    sedekah?: boolean
    kasbon?: boolean
    denda?: boolean
  }

  export type SalarySlipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt" | "createdAt" | "gajiPokok" | "masaKerja" | "tunjanganJabatan" | "tunjanganfungsional" | "waliKelas" | "kurikulum" | "kesiswaan" | "bendahara" | "operasionalSD" | "operasionalSMP" | "operasionalSMA" | "media" | "tunjanganKesehatan" | "kehadiran" | "kbmTahfidz" | "kbmFormal" | "inval" | "gTerbang" | "tunjanganMakan" | "tunjanganTinggal" | "seragam" | "sedekah" | "kasbon" | "denda", ExtArgs["result"]["salarySlip"]>
  export type SalarySlipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | SalarySlip$reportArgs<ExtArgs>
    defaultFor?: boolean | SalarySlip$defaultForArgs<ExtArgs>
  }
  export type SalarySlipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalarySlipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalarySlipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalarySlip"
    objects: {
      report: Prisma.$SalarySlipReportPayload<ExtArgs> | null
      defaultFor: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
      createdAt: Date
      gajiPokok: number
      masaKerja: number
      tunjanganJabatan: number
      tunjanganfungsional: number
      waliKelas: number
      kurikulum: number
      kesiswaan: number
      bendahara: number
      operasionalSD: number
      operasionalSMP: number
      operasionalSMA: number
      media: number
      tunjanganKesehatan: number
      kehadiran: number
      kbmTahfidz: number
      kbmFormal: number
      inval: number
      gTerbang: number
      tunjanganMakan: number
      tunjanganTinggal: number
      seragam: number
      sedekah: number
      kasbon: number
      denda: number
    }, ExtArgs["result"]["salarySlip"]>
    composites: {}
  }

  type SalarySlipGetPayload<S extends boolean | null | undefined | SalarySlipDefaultArgs> = $Result.GetResult<Prisma.$SalarySlipPayload, S>

  type SalarySlipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalarySlipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalarySlipCountAggregateInputType | true
    }

  export interface SalarySlipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalarySlip'], meta: { name: 'SalarySlip' } }
    /**
     * Find zero or one SalarySlip that matches the filter.
     * @param {SalarySlipFindUniqueArgs} args - Arguments to find a SalarySlip
     * @example
     * // Get one SalarySlip
     * const salarySlip = await prisma.salarySlip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalarySlipFindUniqueArgs>(args: SelectSubset<T, SalarySlipFindUniqueArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalarySlip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalarySlipFindUniqueOrThrowArgs} args - Arguments to find a SalarySlip
     * @example
     * // Get one SalarySlip
     * const salarySlip = await prisma.salarySlip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalarySlipFindUniqueOrThrowArgs>(args: SelectSubset<T, SalarySlipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalarySlip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipFindFirstArgs} args - Arguments to find a SalarySlip
     * @example
     * // Get one SalarySlip
     * const salarySlip = await prisma.salarySlip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalarySlipFindFirstArgs>(args?: SelectSubset<T, SalarySlipFindFirstArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalarySlip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipFindFirstOrThrowArgs} args - Arguments to find a SalarySlip
     * @example
     * // Get one SalarySlip
     * const salarySlip = await prisma.salarySlip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalarySlipFindFirstOrThrowArgs>(args?: SelectSubset<T, SalarySlipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalarySlips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalarySlips
     * const salarySlips = await prisma.salarySlip.findMany()
     * 
     * // Get first 10 SalarySlips
     * const salarySlips = await prisma.salarySlip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salarySlipWithIdOnly = await prisma.salarySlip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalarySlipFindManyArgs>(args?: SelectSubset<T, SalarySlipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalarySlip.
     * @param {SalarySlipCreateArgs} args - Arguments to create a SalarySlip.
     * @example
     * // Create one SalarySlip
     * const SalarySlip = await prisma.salarySlip.create({
     *   data: {
     *     // ... data to create a SalarySlip
     *   }
     * })
     * 
     */
    create<T extends SalarySlipCreateArgs>(args: SelectSubset<T, SalarySlipCreateArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalarySlips.
     * @param {SalarySlipCreateManyArgs} args - Arguments to create many SalarySlips.
     * @example
     * // Create many SalarySlips
     * const salarySlip = await prisma.salarySlip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalarySlipCreateManyArgs>(args?: SelectSubset<T, SalarySlipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalarySlips and returns the data saved in the database.
     * @param {SalarySlipCreateManyAndReturnArgs} args - Arguments to create many SalarySlips.
     * @example
     * // Create many SalarySlips
     * const salarySlip = await prisma.salarySlip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalarySlips and only return the `id`
     * const salarySlipWithIdOnly = await prisma.salarySlip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalarySlipCreateManyAndReturnArgs>(args?: SelectSubset<T, SalarySlipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalarySlip.
     * @param {SalarySlipDeleteArgs} args - Arguments to delete one SalarySlip.
     * @example
     * // Delete one SalarySlip
     * const SalarySlip = await prisma.salarySlip.delete({
     *   where: {
     *     // ... filter to delete one SalarySlip
     *   }
     * })
     * 
     */
    delete<T extends SalarySlipDeleteArgs>(args: SelectSubset<T, SalarySlipDeleteArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalarySlip.
     * @param {SalarySlipUpdateArgs} args - Arguments to update one SalarySlip.
     * @example
     * // Update one SalarySlip
     * const salarySlip = await prisma.salarySlip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalarySlipUpdateArgs>(args: SelectSubset<T, SalarySlipUpdateArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalarySlips.
     * @param {SalarySlipDeleteManyArgs} args - Arguments to filter SalarySlips to delete.
     * @example
     * // Delete a few SalarySlips
     * const { count } = await prisma.salarySlip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalarySlipDeleteManyArgs>(args?: SelectSubset<T, SalarySlipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalarySlips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalarySlips
     * const salarySlip = await prisma.salarySlip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalarySlipUpdateManyArgs>(args: SelectSubset<T, SalarySlipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalarySlips and returns the data updated in the database.
     * @param {SalarySlipUpdateManyAndReturnArgs} args - Arguments to update many SalarySlips.
     * @example
     * // Update many SalarySlips
     * const salarySlip = await prisma.salarySlip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalarySlips and only return the `id`
     * const salarySlipWithIdOnly = await prisma.salarySlip.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalarySlipUpdateManyAndReturnArgs>(args: SelectSubset<T, SalarySlipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalarySlip.
     * @param {SalarySlipUpsertArgs} args - Arguments to update or create a SalarySlip.
     * @example
     * // Update or create a SalarySlip
     * const salarySlip = await prisma.salarySlip.upsert({
     *   create: {
     *     // ... data to create a SalarySlip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalarySlip we want to update
     *   }
     * })
     */
    upsert<T extends SalarySlipUpsertArgs>(args: SelectSubset<T, SalarySlipUpsertArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalarySlips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipCountArgs} args - Arguments to filter SalarySlips to count.
     * @example
     * // Count the number of SalarySlips
     * const count = await prisma.salarySlip.count({
     *   where: {
     *     // ... the filter for the SalarySlips we want to count
     *   }
     * })
    **/
    count<T extends SalarySlipCountArgs>(
      args?: Subset<T, SalarySlipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalarySlipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalarySlip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalarySlipAggregateArgs>(args: Subset<T, SalarySlipAggregateArgs>): Prisma.PrismaPromise<GetSalarySlipAggregateType<T>>

    /**
     * Group by SalarySlip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipGroupByArgs} args - Group by arguments.
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
      T extends SalarySlipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalarySlipGroupByArgs['orderBy'] }
        : { orderBy?: SalarySlipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalarySlipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalarySlipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalarySlip model
   */
  readonly fields: SalarySlipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalarySlip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalarySlipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends SalarySlip$reportArgs<ExtArgs> = {}>(args?: Subset<T, SalarySlip$reportArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    defaultFor<T extends SalarySlip$defaultForArgs<ExtArgs> = {}>(args?: Subset<T, SalarySlip$defaultForArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalarySlip model
   */
  interface SalarySlipFieldRefs {
    readonly id: FieldRef<"SalarySlip", 'String'>
    readonly updatedAt: FieldRef<"SalarySlip", 'DateTime'>
    readonly createdAt: FieldRef<"SalarySlip", 'DateTime'>
    readonly gajiPokok: FieldRef<"SalarySlip", 'Int'>
    readonly masaKerja: FieldRef<"SalarySlip", 'Int'>
    readonly tunjanganJabatan: FieldRef<"SalarySlip", 'Int'>
    readonly tunjanganfungsional: FieldRef<"SalarySlip", 'Int'>
    readonly waliKelas: FieldRef<"SalarySlip", 'Int'>
    readonly kurikulum: FieldRef<"SalarySlip", 'Int'>
    readonly kesiswaan: FieldRef<"SalarySlip", 'Int'>
    readonly bendahara: FieldRef<"SalarySlip", 'Int'>
    readonly operasionalSD: FieldRef<"SalarySlip", 'Int'>
    readonly operasionalSMP: FieldRef<"SalarySlip", 'Int'>
    readonly operasionalSMA: FieldRef<"SalarySlip", 'Int'>
    readonly media: FieldRef<"SalarySlip", 'Int'>
    readonly tunjanganKesehatan: FieldRef<"SalarySlip", 'Int'>
    readonly kehadiran: FieldRef<"SalarySlip", 'Int'>
    readonly kbmTahfidz: FieldRef<"SalarySlip", 'Int'>
    readonly kbmFormal: FieldRef<"SalarySlip", 'Int'>
    readonly inval: FieldRef<"SalarySlip", 'Int'>
    readonly gTerbang: FieldRef<"SalarySlip", 'Int'>
    readonly tunjanganMakan: FieldRef<"SalarySlip", 'Int'>
    readonly tunjanganTinggal: FieldRef<"SalarySlip", 'Int'>
    readonly seragam: FieldRef<"SalarySlip", 'Int'>
    readonly sedekah: FieldRef<"SalarySlip", 'Int'>
    readonly kasbon: FieldRef<"SalarySlip", 'Int'>
    readonly denda: FieldRef<"SalarySlip", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SalarySlip findUnique
   */
  export type SalarySlipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlip to fetch.
     */
    where: SalarySlipWhereUniqueInput
  }

  /**
   * SalarySlip findUniqueOrThrow
   */
  export type SalarySlipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlip to fetch.
     */
    where: SalarySlipWhereUniqueInput
  }

  /**
   * SalarySlip findFirst
   */
  export type SalarySlipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlip to fetch.
     */
    where?: SalarySlipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlips to fetch.
     */
    orderBy?: SalarySlipOrderByWithRelationInput | SalarySlipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalarySlips.
     */
    cursor?: SalarySlipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalarySlips.
     */
    distinct?: SalarySlipScalarFieldEnum | SalarySlipScalarFieldEnum[]
  }

  /**
   * SalarySlip findFirstOrThrow
   */
  export type SalarySlipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlip to fetch.
     */
    where?: SalarySlipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlips to fetch.
     */
    orderBy?: SalarySlipOrderByWithRelationInput | SalarySlipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalarySlips.
     */
    cursor?: SalarySlipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalarySlips.
     */
    distinct?: SalarySlipScalarFieldEnum | SalarySlipScalarFieldEnum[]
  }

  /**
   * SalarySlip findMany
   */
  export type SalarySlipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlips to fetch.
     */
    where?: SalarySlipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlips to fetch.
     */
    orderBy?: SalarySlipOrderByWithRelationInput | SalarySlipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalarySlips.
     */
    cursor?: SalarySlipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlips.
     */
    skip?: number
    distinct?: SalarySlipScalarFieldEnum | SalarySlipScalarFieldEnum[]
  }

  /**
   * SalarySlip create
   */
  export type SalarySlipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * The data needed to create a SalarySlip.
     */
    data: XOR<SalarySlipCreateInput, SalarySlipUncheckedCreateInput>
  }

  /**
   * SalarySlip createMany
   */
  export type SalarySlipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalarySlips.
     */
    data: SalarySlipCreateManyInput | SalarySlipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalarySlip createManyAndReturn
   */
  export type SalarySlipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * The data used to create many SalarySlips.
     */
    data: SalarySlipCreateManyInput | SalarySlipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalarySlip update
   */
  export type SalarySlipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * The data needed to update a SalarySlip.
     */
    data: XOR<SalarySlipUpdateInput, SalarySlipUncheckedUpdateInput>
    /**
     * Choose, which SalarySlip to update.
     */
    where: SalarySlipWhereUniqueInput
  }

  /**
   * SalarySlip updateMany
   */
  export type SalarySlipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalarySlips.
     */
    data: XOR<SalarySlipUpdateManyMutationInput, SalarySlipUncheckedUpdateManyInput>
    /**
     * Filter which SalarySlips to update
     */
    where?: SalarySlipWhereInput
    /**
     * Limit how many SalarySlips to update.
     */
    limit?: number
  }

  /**
   * SalarySlip updateManyAndReturn
   */
  export type SalarySlipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * The data used to update SalarySlips.
     */
    data: XOR<SalarySlipUpdateManyMutationInput, SalarySlipUncheckedUpdateManyInput>
    /**
     * Filter which SalarySlips to update
     */
    where?: SalarySlipWhereInput
    /**
     * Limit how many SalarySlips to update.
     */
    limit?: number
  }

  /**
   * SalarySlip upsert
   */
  export type SalarySlipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * The filter to search for the SalarySlip to update in case it exists.
     */
    where: SalarySlipWhereUniqueInput
    /**
     * In case the SalarySlip found by the `where` argument doesn't exist, create a new SalarySlip with this data.
     */
    create: XOR<SalarySlipCreateInput, SalarySlipUncheckedCreateInput>
    /**
     * In case the SalarySlip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalarySlipUpdateInput, SalarySlipUncheckedUpdateInput>
  }

  /**
   * SalarySlip delete
   */
  export type SalarySlipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
    /**
     * Filter which SalarySlip to delete.
     */
    where: SalarySlipWhereUniqueInput
  }

  /**
   * SalarySlip deleteMany
   */
  export type SalarySlipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalarySlips to delete
     */
    where?: SalarySlipWhereInput
    /**
     * Limit how many SalarySlips to delete.
     */
    limit?: number
  }

  /**
   * SalarySlip.report
   */
  export type SalarySlip$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    where?: SalarySlipReportWhereInput
  }

  /**
   * SalarySlip.defaultFor
   */
  export type SalarySlip$defaultForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * SalarySlip without action
   */
  export type SalarySlipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlip
     */
    select?: SalarySlipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlip
     */
    omit?: SalarySlipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipInclude<ExtArgs> | null
  }


  /**
   * Model SalarySlipReport
   */

  export type AggregateSalarySlipReport = {
    _count: SalarySlipReportCountAggregateOutputType | null
    _min: SalarySlipReportMinAggregateOutputType | null
    _max: SalarySlipReportMaxAggregateOutputType | null
  }

  export type SalarySlipReportMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    salarySlipId: string | null
    createdAt: Date | null
  }

  export type SalarySlipReportMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    date: Date | null
    salarySlipId: string | null
    createdAt: Date | null
  }

  export type SalarySlipReportCountAggregateOutputType = {
    id: number
    employeeId: number
    date: number
    salarySlipId: number
    createdAt: number
    _all: number
  }


  export type SalarySlipReportMinAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    salarySlipId?: true
    createdAt?: true
  }

  export type SalarySlipReportMaxAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    salarySlipId?: true
    createdAt?: true
  }

  export type SalarySlipReportCountAggregateInputType = {
    id?: true
    employeeId?: true
    date?: true
    salarySlipId?: true
    createdAt?: true
    _all?: true
  }

  export type SalarySlipReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalarySlipReport to aggregate.
     */
    where?: SalarySlipReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlipReports to fetch.
     */
    orderBy?: SalarySlipReportOrderByWithRelationInput | SalarySlipReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalarySlipReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlipReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlipReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalarySlipReports
    **/
    _count?: true | SalarySlipReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalarySlipReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalarySlipReportMaxAggregateInputType
  }

  export type GetSalarySlipReportAggregateType<T extends SalarySlipReportAggregateArgs> = {
        [P in keyof T & keyof AggregateSalarySlipReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalarySlipReport[P]>
      : GetScalarType<T[P], AggregateSalarySlipReport[P]>
  }




  export type SalarySlipReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalarySlipReportWhereInput
    orderBy?: SalarySlipReportOrderByWithAggregationInput | SalarySlipReportOrderByWithAggregationInput[]
    by: SalarySlipReportScalarFieldEnum[] | SalarySlipReportScalarFieldEnum
    having?: SalarySlipReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalarySlipReportCountAggregateInputType | true
    _min?: SalarySlipReportMinAggregateInputType
    _max?: SalarySlipReportMaxAggregateInputType
  }

  export type SalarySlipReportGroupByOutputType = {
    id: string
    employeeId: string
    date: Date
    salarySlipId: string
    createdAt: Date
    _count: SalarySlipReportCountAggregateOutputType | null
    _min: SalarySlipReportMinAggregateOutputType | null
    _max: SalarySlipReportMaxAggregateOutputType | null
  }

  type GetSalarySlipReportGroupByPayload<T extends SalarySlipReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalarySlipReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalarySlipReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalarySlipReportGroupByOutputType[P]>
            : GetScalarType<T[P], SalarySlipReportGroupByOutputType[P]>
        }
      >
    >


  export type SalarySlipReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    salarySlipId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salarySlipReport"]>

  export type SalarySlipReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    salarySlipId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salarySlipReport"]>

  export type SalarySlipReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    date?: boolean
    salarySlipId?: boolean
    createdAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salarySlipReport"]>

  export type SalarySlipReportSelectScalar = {
    id?: boolean
    employeeId?: boolean
    date?: boolean
    salarySlipId?: boolean
    createdAt?: boolean
  }

  export type SalarySlipReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "date" | "salarySlipId" | "createdAt", ExtArgs["result"]["salarySlipReport"]>
  export type SalarySlipReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }
  export type SalarySlipReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }
  export type SalarySlipReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    salarySlip?: boolean | SalarySlipDefaultArgs<ExtArgs>
  }

  export type $SalarySlipReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalarySlipReport"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      salarySlip: Prisma.$SalarySlipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      date: Date
      salarySlipId: string
      createdAt: Date
    }, ExtArgs["result"]["salarySlipReport"]>
    composites: {}
  }

  type SalarySlipReportGetPayload<S extends boolean | null | undefined | SalarySlipReportDefaultArgs> = $Result.GetResult<Prisma.$SalarySlipReportPayload, S>

  type SalarySlipReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalarySlipReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalarySlipReportCountAggregateInputType | true
    }

  export interface SalarySlipReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalarySlipReport'], meta: { name: 'SalarySlipReport' } }
    /**
     * Find zero or one SalarySlipReport that matches the filter.
     * @param {SalarySlipReportFindUniqueArgs} args - Arguments to find a SalarySlipReport
     * @example
     * // Get one SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalarySlipReportFindUniqueArgs>(args: SelectSubset<T, SalarySlipReportFindUniqueArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalarySlipReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalarySlipReportFindUniqueOrThrowArgs} args - Arguments to find a SalarySlipReport
     * @example
     * // Get one SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalarySlipReportFindUniqueOrThrowArgs>(args: SelectSubset<T, SalarySlipReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalarySlipReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportFindFirstArgs} args - Arguments to find a SalarySlipReport
     * @example
     * // Get one SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalarySlipReportFindFirstArgs>(args?: SelectSubset<T, SalarySlipReportFindFirstArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalarySlipReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportFindFirstOrThrowArgs} args - Arguments to find a SalarySlipReport
     * @example
     * // Get one SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalarySlipReportFindFirstOrThrowArgs>(args?: SelectSubset<T, SalarySlipReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalarySlipReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalarySlipReports
     * const salarySlipReports = await prisma.salarySlipReport.findMany()
     * 
     * // Get first 10 SalarySlipReports
     * const salarySlipReports = await prisma.salarySlipReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salarySlipReportWithIdOnly = await prisma.salarySlipReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalarySlipReportFindManyArgs>(args?: SelectSubset<T, SalarySlipReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalarySlipReport.
     * @param {SalarySlipReportCreateArgs} args - Arguments to create a SalarySlipReport.
     * @example
     * // Create one SalarySlipReport
     * const SalarySlipReport = await prisma.salarySlipReport.create({
     *   data: {
     *     // ... data to create a SalarySlipReport
     *   }
     * })
     * 
     */
    create<T extends SalarySlipReportCreateArgs>(args: SelectSubset<T, SalarySlipReportCreateArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalarySlipReports.
     * @param {SalarySlipReportCreateManyArgs} args - Arguments to create many SalarySlipReports.
     * @example
     * // Create many SalarySlipReports
     * const salarySlipReport = await prisma.salarySlipReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalarySlipReportCreateManyArgs>(args?: SelectSubset<T, SalarySlipReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalarySlipReports and returns the data saved in the database.
     * @param {SalarySlipReportCreateManyAndReturnArgs} args - Arguments to create many SalarySlipReports.
     * @example
     * // Create many SalarySlipReports
     * const salarySlipReport = await prisma.salarySlipReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalarySlipReports and only return the `id`
     * const salarySlipReportWithIdOnly = await prisma.salarySlipReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalarySlipReportCreateManyAndReturnArgs>(args?: SelectSubset<T, SalarySlipReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalarySlipReport.
     * @param {SalarySlipReportDeleteArgs} args - Arguments to delete one SalarySlipReport.
     * @example
     * // Delete one SalarySlipReport
     * const SalarySlipReport = await prisma.salarySlipReport.delete({
     *   where: {
     *     // ... filter to delete one SalarySlipReport
     *   }
     * })
     * 
     */
    delete<T extends SalarySlipReportDeleteArgs>(args: SelectSubset<T, SalarySlipReportDeleteArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalarySlipReport.
     * @param {SalarySlipReportUpdateArgs} args - Arguments to update one SalarySlipReport.
     * @example
     * // Update one SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalarySlipReportUpdateArgs>(args: SelectSubset<T, SalarySlipReportUpdateArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalarySlipReports.
     * @param {SalarySlipReportDeleteManyArgs} args - Arguments to filter SalarySlipReports to delete.
     * @example
     * // Delete a few SalarySlipReports
     * const { count } = await prisma.salarySlipReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalarySlipReportDeleteManyArgs>(args?: SelectSubset<T, SalarySlipReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalarySlipReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalarySlipReports
     * const salarySlipReport = await prisma.salarySlipReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalarySlipReportUpdateManyArgs>(args: SelectSubset<T, SalarySlipReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalarySlipReports and returns the data updated in the database.
     * @param {SalarySlipReportUpdateManyAndReturnArgs} args - Arguments to update many SalarySlipReports.
     * @example
     * // Update many SalarySlipReports
     * const salarySlipReport = await prisma.salarySlipReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalarySlipReports and only return the `id`
     * const salarySlipReportWithIdOnly = await prisma.salarySlipReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalarySlipReportUpdateManyAndReturnArgs>(args: SelectSubset<T, SalarySlipReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalarySlipReport.
     * @param {SalarySlipReportUpsertArgs} args - Arguments to update or create a SalarySlipReport.
     * @example
     * // Update or create a SalarySlipReport
     * const salarySlipReport = await prisma.salarySlipReport.upsert({
     *   create: {
     *     // ... data to create a SalarySlipReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalarySlipReport we want to update
     *   }
     * })
     */
    upsert<T extends SalarySlipReportUpsertArgs>(args: SelectSubset<T, SalarySlipReportUpsertArgs<ExtArgs>>): Prisma__SalarySlipReportClient<$Result.GetResult<Prisma.$SalarySlipReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalarySlipReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportCountArgs} args - Arguments to filter SalarySlipReports to count.
     * @example
     * // Count the number of SalarySlipReports
     * const count = await prisma.salarySlipReport.count({
     *   where: {
     *     // ... the filter for the SalarySlipReports we want to count
     *   }
     * })
    **/
    count<T extends SalarySlipReportCountArgs>(
      args?: Subset<T, SalarySlipReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalarySlipReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalarySlipReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalarySlipReportAggregateArgs>(args: Subset<T, SalarySlipReportAggregateArgs>): Prisma.PrismaPromise<GetSalarySlipReportAggregateType<T>>

    /**
     * Group by SalarySlipReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalarySlipReportGroupByArgs} args - Group by arguments.
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
      T extends SalarySlipReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalarySlipReportGroupByArgs['orderBy'] }
        : { orderBy?: SalarySlipReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalarySlipReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalarySlipReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalarySlipReport model
   */
  readonly fields: SalarySlipReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalarySlipReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalarySlipReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    salarySlip<T extends SalarySlipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalarySlipDefaultArgs<ExtArgs>>): Prisma__SalarySlipClient<$Result.GetResult<Prisma.$SalarySlipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalarySlipReport model
   */
  interface SalarySlipReportFieldRefs {
    readonly id: FieldRef<"SalarySlipReport", 'String'>
    readonly employeeId: FieldRef<"SalarySlipReport", 'String'>
    readonly date: FieldRef<"SalarySlipReport", 'DateTime'>
    readonly salarySlipId: FieldRef<"SalarySlipReport", 'String'>
    readonly createdAt: FieldRef<"SalarySlipReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalarySlipReport findUnique
   */
  export type SalarySlipReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlipReport to fetch.
     */
    where: SalarySlipReportWhereUniqueInput
  }

  /**
   * SalarySlipReport findUniqueOrThrow
   */
  export type SalarySlipReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlipReport to fetch.
     */
    where: SalarySlipReportWhereUniqueInput
  }

  /**
   * SalarySlipReport findFirst
   */
  export type SalarySlipReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlipReport to fetch.
     */
    where?: SalarySlipReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlipReports to fetch.
     */
    orderBy?: SalarySlipReportOrderByWithRelationInput | SalarySlipReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalarySlipReports.
     */
    cursor?: SalarySlipReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlipReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlipReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalarySlipReports.
     */
    distinct?: SalarySlipReportScalarFieldEnum | SalarySlipReportScalarFieldEnum[]
  }

  /**
   * SalarySlipReport findFirstOrThrow
   */
  export type SalarySlipReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlipReport to fetch.
     */
    where?: SalarySlipReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlipReports to fetch.
     */
    orderBy?: SalarySlipReportOrderByWithRelationInput | SalarySlipReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalarySlipReports.
     */
    cursor?: SalarySlipReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlipReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlipReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalarySlipReports.
     */
    distinct?: SalarySlipReportScalarFieldEnum | SalarySlipReportScalarFieldEnum[]
  }

  /**
   * SalarySlipReport findMany
   */
  export type SalarySlipReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter, which SalarySlipReports to fetch.
     */
    where?: SalarySlipReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalarySlipReports to fetch.
     */
    orderBy?: SalarySlipReportOrderByWithRelationInput | SalarySlipReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalarySlipReports.
     */
    cursor?: SalarySlipReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalarySlipReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalarySlipReports.
     */
    skip?: number
    distinct?: SalarySlipReportScalarFieldEnum | SalarySlipReportScalarFieldEnum[]
  }

  /**
   * SalarySlipReport create
   */
  export type SalarySlipReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * The data needed to create a SalarySlipReport.
     */
    data: XOR<SalarySlipReportCreateInput, SalarySlipReportUncheckedCreateInput>
  }

  /**
   * SalarySlipReport createMany
   */
  export type SalarySlipReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalarySlipReports.
     */
    data: SalarySlipReportCreateManyInput | SalarySlipReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalarySlipReport createManyAndReturn
   */
  export type SalarySlipReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * The data used to create many SalarySlipReports.
     */
    data: SalarySlipReportCreateManyInput | SalarySlipReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalarySlipReport update
   */
  export type SalarySlipReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * The data needed to update a SalarySlipReport.
     */
    data: XOR<SalarySlipReportUpdateInput, SalarySlipReportUncheckedUpdateInput>
    /**
     * Choose, which SalarySlipReport to update.
     */
    where: SalarySlipReportWhereUniqueInput
  }

  /**
   * SalarySlipReport updateMany
   */
  export type SalarySlipReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalarySlipReports.
     */
    data: XOR<SalarySlipReportUpdateManyMutationInput, SalarySlipReportUncheckedUpdateManyInput>
    /**
     * Filter which SalarySlipReports to update
     */
    where?: SalarySlipReportWhereInput
    /**
     * Limit how many SalarySlipReports to update.
     */
    limit?: number
  }

  /**
   * SalarySlipReport updateManyAndReturn
   */
  export type SalarySlipReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * The data used to update SalarySlipReports.
     */
    data: XOR<SalarySlipReportUpdateManyMutationInput, SalarySlipReportUncheckedUpdateManyInput>
    /**
     * Filter which SalarySlipReports to update
     */
    where?: SalarySlipReportWhereInput
    /**
     * Limit how many SalarySlipReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalarySlipReport upsert
   */
  export type SalarySlipReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * The filter to search for the SalarySlipReport to update in case it exists.
     */
    where: SalarySlipReportWhereUniqueInput
    /**
     * In case the SalarySlipReport found by the `where` argument doesn't exist, create a new SalarySlipReport with this data.
     */
    create: XOR<SalarySlipReportCreateInput, SalarySlipReportUncheckedCreateInput>
    /**
     * In case the SalarySlipReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalarySlipReportUpdateInput, SalarySlipReportUncheckedUpdateInput>
  }

  /**
   * SalarySlipReport delete
   */
  export type SalarySlipReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
    /**
     * Filter which SalarySlipReport to delete.
     */
    where: SalarySlipReportWhereUniqueInput
  }

  /**
   * SalarySlipReport deleteMany
   */
  export type SalarySlipReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalarySlipReports to delete
     */
    where?: SalarySlipReportWhereInput
    /**
     * Limit how many SalarySlipReports to delete.
     */
    limit?: number
  }

  /**
   * SalarySlipReport without action
   */
  export type SalarySlipReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalarySlipReport
     */
    select?: SalarySlipReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalarySlipReport
     */
    omit?: SalarySlipReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalarySlipReportInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    lastEducation: 'lastEducation',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    defaultSalaryId: 'defaultSalaryId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const SalarySlipScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    gajiPokok: 'gajiPokok',
    masaKerja: 'masaKerja',
    tunjanganJabatan: 'tunjanganJabatan',
    tunjanganfungsional: 'tunjanganfungsional',
    waliKelas: 'waliKelas',
    kurikulum: 'kurikulum',
    kesiswaan: 'kesiswaan',
    bendahara: 'bendahara',
    operasionalSD: 'operasionalSD',
    operasionalSMP: 'operasionalSMP',
    operasionalSMA: 'operasionalSMA',
    media: 'media',
    tunjanganKesehatan: 'tunjanganKesehatan',
    kehadiran: 'kehadiran',
    kbmTahfidz: 'kbmTahfidz',
    kbmFormal: 'kbmFormal',
    inval: 'inval',
    gTerbang: 'gTerbang',
    tunjanganMakan: 'tunjanganMakan',
    tunjanganTinggal: 'tunjanganTinggal',
    seragam: 'seragam',
    sedekah: 'sedekah',
    kasbon: 'kasbon',
    denda: 'denda'
  };

  export type SalarySlipScalarFieldEnum = (typeof SalarySlipScalarFieldEnum)[keyof typeof SalarySlipScalarFieldEnum]


  export const SalarySlipReportScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    date: 'date',
    salarySlipId: 'salarySlipId',
    createdAt: 'createdAt'
  };

  export type SalarySlipReportScalarFieldEnum = (typeof SalarySlipReportScalarFieldEnum)[keyof typeof SalarySlipReportScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    lastEducation?: StringFilter<"Employee"> | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    defaultSalaryId?: StringFilter<"Employee"> | string
    defaultSalary?: XOR<SalarySlipScalarRelationFilter, SalarySlipWhereInput>
    slips?: SalarySlipReportListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    lastEducation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    defaultSalaryId?: SortOrder
    defaultSalary?: SalarySlipOrderByWithRelationInput
    slips?: SalarySlipReportOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    defaultSalaryId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    role?: EnumRoleFilter<"Employee"> | $Enums.Role
    lastEducation?: StringFilter<"Employee"> | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    defaultSalary?: XOR<SalarySlipScalarRelationFilter, SalarySlipWhereInput>
    slips?: SalarySlipReportListRelationFilter
  }, "id" | "email" | "defaultSalaryId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    lastEducation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    defaultSalaryId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    role?: EnumRoleWithAggregatesFilter<"Employee"> | $Enums.Role
    lastEducation?: StringWithAggregatesFilter<"Employee"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    defaultSalaryId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type SalarySlipWhereInput = {
    AND?: SalarySlipWhereInput | SalarySlipWhereInput[]
    OR?: SalarySlipWhereInput[]
    NOT?: SalarySlipWhereInput | SalarySlipWhereInput[]
    id?: StringFilter<"SalarySlip"> | string
    updatedAt?: DateTimeFilter<"SalarySlip"> | Date | string
    createdAt?: DateTimeFilter<"SalarySlip"> | Date | string
    gajiPokok?: IntFilter<"SalarySlip"> | number
    masaKerja?: IntFilter<"SalarySlip"> | number
    tunjanganJabatan?: IntFilter<"SalarySlip"> | number
    tunjanganfungsional?: IntFilter<"SalarySlip"> | number
    waliKelas?: IntFilter<"SalarySlip"> | number
    kurikulum?: IntFilter<"SalarySlip"> | number
    kesiswaan?: IntFilter<"SalarySlip"> | number
    bendahara?: IntFilter<"SalarySlip"> | number
    operasionalSD?: IntFilter<"SalarySlip"> | number
    operasionalSMP?: IntFilter<"SalarySlip"> | number
    operasionalSMA?: IntFilter<"SalarySlip"> | number
    media?: IntFilter<"SalarySlip"> | number
    tunjanganKesehatan?: IntFilter<"SalarySlip"> | number
    kehadiran?: IntFilter<"SalarySlip"> | number
    kbmTahfidz?: IntFilter<"SalarySlip"> | number
    kbmFormal?: IntFilter<"SalarySlip"> | number
    inval?: IntFilter<"SalarySlip"> | number
    gTerbang?: IntFilter<"SalarySlip"> | number
    tunjanganMakan?: IntFilter<"SalarySlip"> | number
    tunjanganTinggal?: IntFilter<"SalarySlip"> | number
    seragam?: IntFilter<"SalarySlip"> | number
    sedekah?: IntFilter<"SalarySlip"> | number
    kasbon?: IntFilter<"SalarySlip"> | number
    denda?: IntFilter<"SalarySlip"> | number
    report?: XOR<SalarySlipReportNullableScalarRelationFilter, SalarySlipReportWhereInput> | null
    defaultFor?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type SalarySlipOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
    report?: SalarySlipReportOrderByWithRelationInput
    defaultFor?: EmployeeOrderByWithRelationInput
  }

  export type SalarySlipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalarySlipWhereInput | SalarySlipWhereInput[]
    OR?: SalarySlipWhereInput[]
    NOT?: SalarySlipWhereInput | SalarySlipWhereInput[]
    updatedAt?: DateTimeFilter<"SalarySlip"> | Date | string
    createdAt?: DateTimeFilter<"SalarySlip"> | Date | string
    gajiPokok?: IntFilter<"SalarySlip"> | number
    masaKerja?: IntFilter<"SalarySlip"> | number
    tunjanganJabatan?: IntFilter<"SalarySlip"> | number
    tunjanganfungsional?: IntFilter<"SalarySlip"> | number
    waliKelas?: IntFilter<"SalarySlip"> | number
    kurikulum?: IntFilter<"SalarySlip"> | number
    kesiswaan?: IntFilter<"SalarySlip"> | number
    bendahara?: IntFilter<"SalarySlip"> | number
    operasionalSD?: IntFilter<"SalarySlip"> | number
    operasionalSMP?: IntFilter<"SalarySlip"> | number
    operasionalSMA?: IntFilter<"SalarySlip"> | number
    media?: IntFilter<"SalarySlip"> | number
    tunjanganKesehatan?: IntFilter<"SalarySlip"> | number
    kehadiran?: IntFilter<"SalarySlip"> | number
    kbmTahfidz?: IntFilter<"SalarySlip"> | number
    kbmFormal?: IntFilter<"SalarySlip"> | number
    inval?: IntFilter<"SalarySlip"> | number
    gTerbang?: IntFilter<"SalarySlip"> | number
    tunjanganMakan?: IntFilter<"SalarySlip"> | number
    tunjanganTinggal?: IntFilter<"SalarySlip"> | number
    seragam?: IntFilter<"SalarySlip"> | number
    sedekah?: IntFilter<"SalarySlip"> | number
    kasbon?: IntFilter<"SalarySlip"> | number
    denda?: IntFilter<"SalarySlip"> | number
    report?: XOR<SalarySlipReportNullableScalarRelationFilter, SalarySlipReportWhereInput> | null
    defaultFor?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type SalarySlipOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
    _count?: SalarySlipCountOrderByAggregateInput
    _avg?: SalarySlipAvgOrderByAggregateInput
    _max?: SalarySlipMaxOrderByAggregateInput
    _min?: SalarySlipMinOrderByAggregateInput
    _sum?: SalarySlipSumOrderByAggregateInput
  }

  export type SalarySlipScalarWhereWithAggregatesInput = {
    AND?: SalarySlipScalarWhereWithAggregatesInput | SalarySlipScalarWhereWithAggregatesInput[]
    OR?: SalarySlipScalarWhereWithAggregatesInput[]
    NOT?: SalarySlipScalarWhereWithAggregatesInput | SalarySlipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalarySlip"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalarySlip"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SalarySlip"> | Date | string
    gajiPokok?: IntWithAggregatesFilter<"SalarySlip"> | number
    masaKerja?: IntWithAggregatesFilter<"SalarySlip"> | number
    tunjanganJabatan?: IntWithAggregatesFilter<"SalarySlip"> | number
    tunjanganfungsional?: IntWithAggregatesFilter<"SalarySlip"> | number
    waliKelas?: IntWithAggregatesFilter<"SalarySlip"> | number
    kurikulum?: IntWithAggregatesFilter<"SalarySlip"> | number
    kesiswaan?: IntWithAggregatesFilter<"SalarySlip"> | number
    bendahara?: IntWithAggregatesFilter<"SalarySlip"> | number
    operasionalSD?: IntWithAggregatesFilter<"SalarySlip"> | number
    operasionalSMP?: IntWithAggregatesFilter<"SalarySlip"> | number
    operasionalSMA?: IntWithAggregatesFilter<"SalarySlip"> | number
    media?: IntWithAggregatesFilter<"SalarySlip"> | number
    tunjanganKesehatan?: IntWithAggregatesFilter<"SalarySlip"> | number
    kehadiran?: IntWithAggregatesFilter<"SalarySlip"> | number
    kbmTahfidz?: IntWithAggregatesFilter<"SalarySlip"> | number
    kbmFormal?: IntWithAggregatesFilter<"SalarySlip"> | number
    inval?: IntWithAggregatesFilter<"SalarySlip"> | number
    gTerbang?: IntWithAggregatesFilter<"SalarySlip"> | number
    tunjanganMakan?: IntWithAggregatesFilter<"SalarySlip"> | number
    tunjanganTinggal?: IntWithAggregatesFilter<"SalarySlip"> | number
    seragam?: IntWithAggregatesFilter<"SalarySlip"> | number
    sedekah?: IntWithAggregatesFilter<"SalarySlip"> | number
    kasbon?: IntWithAggregatesFilter<"SalarySlip"> | number
    denda?: IntWithAggregatesFilter<"SalarySlip"> | number
  }

  export type SalarySlipReportWhereInput = {
    AND?: SalarySlipReportWhereInput | SalarySlipReportWhereInput[]
    OR?: SalarySlipReportWhereInput[]
    NOT?: SalarySlipReportWhereInput | SalarySlipReportWhereInput[]
    id?: StringFilter<"SalarySlipReport"> | string
    employeeId?: StringFilter<"SalarySlipReport"> | string
    date?: DateTimeFilter<"SalarySlipReport"> | Date | string
    salarySlipId?: StringFilter<"SalarySlipReport"> | string
    createdAt?: DateTimeFilter<"SalarySlipReport"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    salarySlip?: XOR<SalarySlipScalarRelationFilter, SalarySlipWhereInput>
  }

  export type SalarySlipReportOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    salarySlipId?: SortOrder
    createdAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    salarySlip?: SalarySlipOrderByWithRelationInput
  }

  export type SalarySlipReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    salarySlipId?: string
    employeeId_date?: SalarySlipReportEmployeeIdDateCompoundUniqueInput
    AND?: SalarySlipReportWhereInput | SalarySlipReportWhereInput[]
    OR?: SalarySlipReportWhereInput[]
    NOT?: SalarySlipReportWhereInput | SalarySlipReportWhereInput[]
    employeeId?: StringFilter<"SalarySlipReport"> | string
    date?: DateTimeFilter<"SalarySlipReport"> | Date | string
    createdAt?: DateTimeFilter<"SalarySlipReport"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    salarySlip?: XOR<SalarySlipScalarRelationFilter, SalarySlipWhereInput>
  }, "id" | "salarySlipId" | "employeeId_date">

  export type SalarySlipReportOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    salarySlipId?: SortOrder
    createdAt?: SortOrder
    _count?: SalarySlipReportCountOrderByAggregateInput
    _max?: SalarySlipReportMaxOrderByAggregateInput
    _min?: SalarySlipReportMinOrderByAggregateInput
  }

  export type SalarySlipReportScalarWhereWithAggregatesInput = {
    AND?: SalarySlipReportScalarWhereWithAggregatesInput | SalarySlipReportScalarWhereWithAggregatesInput[]
    OR?: SalarySlipReportScalarWhereWithAggregatesInput[]
    NOT?: SalarySlipReportScalarWhereWithAggregatesInput | SalarySlipReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalarySlipReport"> | string
    employeeId?: StringWithAggregatesFilter<"SalarySlipReport"> | string
    date?: DateTimeWithAggregatesFilter<"SalarySlipReport"> | Date | string
    salarySlipId?: StringWithAggregatesFilter<"SalarySlipReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalarySlipReport"> | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    defaultSalary: SalarySlipCreateNestedOneWithoutDefaultForInput
    slips?: SalarySlipReportCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    defaultSalaryId: string
    slips?: SalarySlipReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultSalary?: SalarySlipUpdateOneRequiredWithoutDefaultForNestedInput
    slips?: SalarySlipReportUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultSalaryId?: StringFieldUpdateOperationsInput | string
    slips?: SalarySlipReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    defaultSalaryId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultSalaryId?: StringFieldUpdateOperationsInput | string
  }

  export type SalarySlipCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    report?: SalarySlipReportCreateNestedOneWithoutSalarySlipInput
    defaultFor?: EmployeeCreateNestedOneWithoutDefaultSalaryInput
  }

  export type SalarySlipUncheckedCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    report?: SalarySlipReportUncheckedCreateNestedOneWithoutSalarySlipInput
    defaultFor?: EmployeeUncheckedCreateNestedOneWithoutDefaultSalaryInput
  }

  export type SalarySlipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    report?: SalarySlipReportUpdateOneWithoutSalarySlipNestedInput
    defaultFor?: EmployeeUpdateOneWithoutDefaultSalaryNestedInput
  }

  export type SalarySlipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    report?: SalarySlipReportUncheckedUpdateOneWithoutSalarySlipNestedInput
    defaultFor?: EmployeeUncheckedUpdateOneWithoutDefaultSalaryNestedInput
  }

  export type SalarySlipCreateManyInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
  }

  export type SalarySlipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
  }

  export type SalarySlipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
  }

  export type SalarySlipReportCreateInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSlipsInput
    salarySlip: SalarySlipCreateNestedOneWithoutReportInput
  }

  export type SalarySlipReportUncheckedCreateInput = {
    id?: string
    employeeId: string
    date: Date | string
    salarySlipId: string
    createdAt?: Date | string
  }

  export type SalarySlipReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSlipsNestedInput
    salarySlip?: SalarySlipUpdateOneRequiredWithoutReportNestedInput
  }

  export type SalarySlipReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    salarySlipId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalarySlipReportCreateManyInput = {
    id?: string
    employeeId: string
    date: Date | string
    salarySlipId: string
    createdAt?: Date | string
  }

  export type SalarySlipReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalarySlipReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    salarySlipId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SalarySlipScalarRelationFilter = {
    is?: SalarySlipWhereInput
    isNot?: SalarySlipWhereInput
  }

  export type SalarySlipReportListRelationFilter = {
    every?: SalarySlipReportWhereInput
    some?: SalarySlipReportWhereInput
    none?: SalarySlipReportWhereInput
  }

  export type SalarySlipReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    lastEducation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    defaultSalaryId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    lastEducation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    defaultSalaryId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    lastEducation?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    defaultSalaryId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type SalarySlipReportNullableScalarRelationFilter = {
    is?: SalarySlipReportWhereInput | null
    isNot?: SalarySlipReportWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type SalarySlipCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
  }

  export type SalarySlipAvgOrderByAggregateInput = {
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
  }

  export type SalarySlipMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
  }

  export type SalarySlipMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
  }

  export type SalarySlipSumOrderByAggregateInput = {
    gajiPokok?: SortOrder
    masaKerja?: SortOrder
    tunjanganJabatan?: SortOrder
    tunjanganfungsional?: SortOrder
    waliKelas?: SortOrder
    kurikulum?: SortOrder
    kesiswaan?: SortOrder
    bendahara?: SortOrder
    operasionalSD?: SortOrder
    operasionalSMP?: SortOrder
    operasionalSMA?: SortOrder
    media?: SortOrder
    tunjanganKesehatan?: SortOrder
    kehadiran?: SortOrder
    kbmTahfidz?: SortOrder
    kbmFormal?: SortOrder
    inval?: SortOrder
    gTerbang?: SortOrder
    tunjanganMakan?: SortOrder
    tunjanganTinggal?: SortOrder
    seragam?: SortOrder
    sedekah?: SortOrder
    kasbon?: SortOrder
    denda?: SortOrder
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

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type SalarySlipReportEmployeeIdDateCompoundUniqueInput = {
    employeeId: string
    date: Date | string
  }

  export type SalarySlipReportCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    salarySlipId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalarySlipReportMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    salarySlipId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalarySlipReportMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    date?: SortOrder
    salarySlipId?: SortOrder
    createdAt?: SortOrder
  }

  export type SalarySlipCreateNestedOneWithoutDefaultForInput = {
    create?: XOR<SalarySlipCreateWithoutDefaultForInput, SalarySlipUncheckedCreateWithoutDefaultForInput>
    connectOrCreate?: SalarySlipCreateOrConnectWithoutDefaultForInput
    connect?: SalarySlipWhereUniqueInput
  }

  export type SalarySlipReportCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput> | SalarySlipReportCreateWithoutEmployeeInput[] | SalarySlipReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutEmployeeInput | SalarySlipReportCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalarySlipReportCreateManyEmployeeInputEnvelope
    connect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
  }

  export type SalarySlipReportUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput> | SalarySlipReportCreateWithoutEmployeeInput[] | SalarySlipReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutEmployeeInput | SalarySlipReportCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalarySlipReportCreateManyEmployeeInputEnvelope
    connect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalarySlipUpdateOneRequiredWithoutDefaultForNestedInput = {
    create?: XOR<SalarySlipCreateWithoutDefaultForInput, SalarySlipUncheckedCreateWithoutDefaultForInput>
    connectOrCreate?: SalarySlipCreateOrConnectWithoutDefaultForInput
    upsert?: SalarySlipUpsertWithoutDefaultForInput
    connect?: SalarySlipWhereUniqueInput
    update?: XOR<XOR<SalarySlipUpdateToOneWithWhereWithoutDefaultForInput, SalarySlipUpdateWithoutDefaultForInput>, SalarySlipUncheckedUpdateWithoutDefaultForInput>
  }

  export type SalarySlipReportUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput> | SalarySlipReportCreateWithoutEmployeeInput[] | SalarySlipReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutEmployeeInput | SalarySlipReportCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalarySlipReportUpsertWithWhereUniqueWithoutEmployeeInput | SalarySlipReportUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalarySlipReportCreateManyEmployeeInputEnvelope
    set?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    disconnect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    delete?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    connect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    update?: SalarySlipReportUpdateWithWhereUniqueWithoutEmployeeInput | SalarySlipReportUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalarySlipReportUpdateManyWithWhereWithoutEmployeeInput | SalarySlipReportUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalarySlipReportScalarWhereInput | SalarySlipReportScalarWhereInput[]
  }

  export type SalarySlipReportUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput> | SalarySlipReportCreateWithoutEmployeeInput[] | SalarySlipReportUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutEmployeeInput | SalarySlipReportCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalarySlipReportUpsertWithWhereUniqueWithoutEmployeeInput | SalarySlipReportUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalarySlipReportCreateManyEmployeeInputEnvelope
    set?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    disconnect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    delete?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    connect?: SalarySlipReportWhereUniqueInput | SalarySlipReportWhereUniqueInput[]
    update?: SalarySlipReportUpdateWithWhereUniqueWithoutEmployeeInput | SalarySlipReportUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalarySlipReportUpdateManyWithWhereWithoutEmployeeInput | SalarySlipReportUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalarySlipReportScalarWhereInput | SalarySlipReportScalarWhereInput[]
  }

  export type SalarySlipReportCreateNestedOneWithoutSalarySlipInput = {
    create?: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutSalarySlipInput
    connect?: SalarySlipReportWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutDefaultSalaryInput = {
    create?: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultSalaryInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SalarySlipReportUncheckedCreateNestedOneWithoutSalarySlipInput = {
    create?: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutSalarySlipInput
    connect?: SalarySlipReportWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutDefaultSalaryInput = {
    create?: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultSalaryInput
    connect?: EmployeeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalarySlipReportUpdateOneWithoutSalarySlipNestedInput = {
    create?: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutSalarySlipInput
    upsert?: SalarySlipReportUpsertWithoutSalarySlipInput
    disconnect?: SalarySlipReportWhereInput | boolean
    delete?: SalarySlipReportWhereInput | boolean
    connect?: SalarySlipReportWhereUniqueInput
    update?: XOR<XOR<SalarySlipReportUpdateToOneWithWhereWithoutSalarySlipInput, SalarySlipReportUpdateWithoutSalarySlipInput>, SalarySlipReportUncheckedUpdateWithoutSalarySlipInput>
  }

  export type EmployeeUpdateOneWithoutDefaultSalaryNestedInput = {
    create?: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultSalaryInput
    upsert?: EmployeeUpsertWithoutDefaultSalaryInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDefaultSalaryInput, EmployeeUpdateWithoutDefaultSalaryInput>, EmployeeUncheckedUpdateWithoutDefaultSalaryInput>
  }

  export type SalarySlipReportUncheckedUpdateOneWithoutSalarySlipNestedInput = {
    create?: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
    connectOrCreate?: SalarySlipReportCreateOrConnectWithoutSalarySlipInput
    upsert?: SalarySlipReportUpsertWithoutSalarySlipInput
    disconnect?: SalarySlipReportWhereInput | boolean
    delete?: SalarySlipReportWhereInput | boolean
    connect?: SalarySlipReportWhereUniqueInput
    update?: XOR<XOR<SalarySlipReportUpdateToOneWithWhereWithoutSalarySlipInput, SalarySlipReportUpdateWithoutSalarySlipInput>, SalarySlipReportUncheckedUpdateWithoutSalarySlipInput>
  }

  export type EmployeeUncheckedUpdateOneWithoutDefaultSalaryNestedInput = {
    create?: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultSalaryInput
    upsert?: EmployeeUpsertWithoutDefaultSalaryInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDefaultSalaryInput, EmployeeUpdateWithoutDefaultSalaryInput>, EmployeeUncheckedUpdateWithoutDefaultSalaryInput>
  }

  export type EmployeeCreateNestedOneWithoutSlipsInput = {
    create?: XOR<EmployeeCreateWithoutSlipsInput, EmployeeUncheckedCreateWithoutSlipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSlipsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type SalarySlipCreateNestedOneWithoutReportInput = {
    create?: XOR<SalarySlipCreateWithoutReportInput, SalarySlipUncheckedCreateWithoutReportInput>
    connectOrCreate?: SalarySlipCreateOrConnectWithoutReportInput
    connect?: SalarySlipWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSlipsNestedInput = {
    create?: XOR<EmployeeCreateWithoutSlipsInput, EmployeeUncheckedCreateWithoutSlipsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSlipsInput
    upsert?: EmployeeUpsertWithoutSlipsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSlipsInput, EmployeeUpdateWithoutSlipsInput>, EmployeeUncheckedUpdateWithoutSlipsInput>
  }

  export type SalarySlipUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<SalarySlipCreateWithoutReportInput, SalarySlipUncheckedCreateWithoutReportInput>
    connectOrCreate?: SalarySlipCreateOrConnectWithoutReportInput
    upsert?: SalarySlipUpsertWithoutReportInput
    connect?: SalarySlipWhereUniqueInput
    update?: XOR<XOR<SalarySlipUpdateToOneWithWhereWithoutReportInput, SalarySlipUpdateWithoutReportInput>, SalarySlipUncheckedUpdateWithoutReportInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type SalarySlipCreateWithoutDefaultForInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    report?: SalarySlipReportCreateNestedOneWithoutSalarySlipInput
  }

  export type SalarySlipUncheckedCreateWithoutDefaultForInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    report?: SalarySlipReportUncheckedCreateNestedOneWithoutSalarySlipInput
  }

  export type SalarySlipCreateOrConnectWithoutDefaultForInput = {
    where: SalarySlipWhereUniqueInput
    create: XOR<SalarySlipCreateWithoutDefaultForInput, SalarySlipUncheckedCreateWithoutDefaultForInput>
  }

  export type SalarySlipReportCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    salarySlip: SalarySlipCreateNestedOneWithoutReportInput
  }

  export type SalarySlipReportUncheckedCreateWithoutEmployeeInput = {
    id?: string
    date: Date | string
    salarySlipId: string
    createdAt?: Date | string
  }

  export type SalarySlipReportCreateOrConnectWithoutEmployeeInput = {
    where: SalarySlipReportWhereUniqueInput
    create: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput>
  }

  export type SalarySlipReportCreateManyEmployeeInputEnvelope = {
    data: SalarySlipReportCreateManyEmployeeInput | SalarySlipReportCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type SalarySlipUpsertWithoutDefaultForInput = {
    update: XOR<SalarySlipUpdateWithoutDefaultForInput, SalarySlipUncheckedUpdateWithoutDefaultForInput>
    create: XOR<SalarySlipCreateWithoutDefaultForInput, SalarySlipUncheckedCreateWithoutDefaultForInput>
    where?: SalarySlipWhereInput
  }

  export type SalarySlipUpdateToOneWithWhereWithoutDefaultForInput = {
    where?: SalarySlipWhereInput
    data: XOR<SalarySlipUpdateWithoutDefaultForInput, SalarySlipUncheckedUpdateWithoutDefaultForInput>
  }

  export type SalarySlipUpdateWithoutDefaultForInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    report?: SalarySlipReportUpdateOneWithoutSalarySlipNestedInput
  }

  export type SalarySlipUncheckedUpdateWithoutDefaultForInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    report?: SalarySlipReportUncheckedUpdateOneWithoutSalarySlipNestedInput
  }

  export type SalarySlipReportUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SalarySlipReportWhereUniqueInput
    update: XOR<SalarySlipReportUpdateWithoutEmployeeInput, SalarySlipReportUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SalarySlipReportCreateWithoutEmployeeInput, SalarySlipReportUncheckedCreateWithoutEmployeeInput>
  }

  export type SalarySlipReportUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SalarySlipReportWhereUniqueInput
    data: XOR<SalarySlipReportUpdateWithoutEmployeeInput, SalarySlipReportUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalarySlipReportUpdateManyWithWhereWithoutEmployeeInput = {
    where: SalarySlipReportScalarWhereInput
    data: XOR<SalarySlipReportUpdateManyMutationInput, SalarySlipReportUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type SalarySlipReportScalarWhereInput = {
    AND?: SalarySlipReportScalarWhereInput | SalarySlipReportScalarWhereInput[]
    OR?: SalarySlipReportScalarWhereInput[]
    NOT?: SalarySlipReportScalarWhereInput | SalarySlipReportScalarWhereInput[]
    id?: StringFilter<"SalarySlipReport"> | string
    employeeId?: StringFilter<"SalarySlipReport"> | string
    date?: DateTimeFilter<"SalarySlipReport"> | Date | string
    salarySlipId?: StringFilter<"SalarySlipReport"> | string
    createdAt?: DateTimeFilter<"SalarySlipReport"> | Date | string
  }

  export type SalarySlipReportCreateWithoutSalarySlipInput = {
    id?: string
    date: Date | string
    createdAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutSlipsInput
  }

  export type SalarySlipReportUncheckedCreateWithoutSalarySlipInput = {
    id?: string
    employeeId: string
    date: Date | string
    createdAt?: Date | string
  }

  export type SalarySlipReportCreateOrConnectWithoutSalarySlipInput = {
    where: SalarySlipReportWhereUniqueInput
    create: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
  }

  export type EmployeeCreateWithoutDefaultSalaryInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    slips?: SalarySlipReportCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDefaultSalaryInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    slips?: SalarySlipReportUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDefaultSalaryInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
  }

  export type SalarySlipReportUpsertWithoutSalarySlipInput = {
    update: XOR<SalarySlipReportUpdateWithoutSalarySlipInput, SalarySlipReportUncheckedUpdateWithoutSalarySlipInput>
    create: XOR<SalarySlipReportCreateWithoutSalarySlipInput, SalarySlipReportUncheckedCreateWithoutSalarySlipInput>
    where?: SalarySlipReportWhereInput
  }

  export type SalarySlipReportUpdateToOneWithWhereWithoutSalarySlipInput = {
    where?: SalarySlipReportWhereInput
    data: XOR<SalarySlipReportUpdateWithoutSalarySlipInput, SalarySlipReportUncheckedUpdateWithoutSalarySlipInput>
  }

  export type SalarySlipReportUpdateWithoutSalarySlipInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSlipsNestedInput
  }

  export type SalarySlipReportUncheckedUpdateWithoutSalarySlipInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutDefaultSalaryInput = {
    update: XOR<EmployeeUpdateWithoutDefaultSalaryInput, EmployeeUncheckedUpdateWithoutDefaultSalaryInput>
    create: XOR<EmployeeCreateWithoutDefaultSalaryInput, EmployeeUncheckedCreateWithoutDefaultSalaryInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDefaultSalaryInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDefaultSalaryInput, EmployeeUncheckedUpdateWithoutDefaultSalaryInput>
  }

  export type EmployeeUpdateWithoutDefaultSalaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slips?: SalarySlipReportUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDefaultSalaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slips?: SalarySlipReportUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutSlipsInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    defaultSalary: SalarySlipCreateNestedOneWithoutDefaultForInput
  }

  export type EmployeeUncheckedCreateWithoutSlipsInput = {
    id?: string
    name: string
    email: string
    role: $Enums.Role
    lastEducation: string
    updatedAt?: Date | string
    createdAt?: Date | string
    defaultSalaryId: string
  }

  export type EmployeeCreateOrConnectWithoutSlipsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSlipsInput, EmployeeUncheckedCreateWithoutSlipsInput>
  }

  export type SalarySlipCreateWithoutReportInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    defaultFor?: EmployeeCreateNestedOneWithoutDefaultSalaryInput
  }

  export type SalarySlipUncheckedCreateWithoutReportInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    gajiPokok?: number
    masaKerja?: number
    tunjanganJabatan?: number
    tunjanganfungsional?: number
    waliKelas?: number
    kurikulum?: number
    kesiswaan?: number
    bendahara?: number
    operasionalSD?: number
    operasionalSMP?: number
    operasionalSMA?: number
    media?: number
    tunjanganKesehatan?: number
    kehadiran?: number
    kbmTahfidz?: number
    kbmFormal?: number
    inval?: number
    gTerbang?: number
    tunjanganMakan?: number
    tunjanganTinggal?: number
    seragam?: number
    sedekah?: number
    kasbon?: number
    denda?: number
    defaultFor?: EmployeeUncheckedCreateNestedOneWithoutDefaultSalaryInput
  }

  export type SalarySlipCreateOrConnectWithoutReportInput = {
    where: SalarySlipWhereUniqueInput
    create: XOR<SalarySlipCreateWithoutReportInput, SalarySlipUncheckedCreateWithoutReportInput>
  }

  export type EmployeeUpsertWithoutSlipsInput = {
    update: XOR<EmployeeUpdateWithoutSlipsInput, EmployeeUncheckedUpdateWithoutSlipsInput>
    create: XOR<EmployeeCreateWithoutSlipsInput, EmployeeUncheckedCreateWithoutSlipsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSlipsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSlipsInput, EmployeeUncheckedUpdateWithoutSlipsInput>
  }

  export type EmployeeUpdateWithoutSlipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultSalary?: SalarySlipUpdateOneRequiredWithoutDefaultForNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSlipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastEducation?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultSalaryId?: StringFieldUpdateOperationsInput | string
  }

  export type SalarySlipUpsertWithoutReportInput = {
    update: XOR<SalarySlipUpdateWithoutReportInput, SalarySlipUncheckedUpdateWithoutReportInput>
    create: XOR<SalarySlipCreateWithoutReportInput, SalarySlipUncheckedCreateWithoutReportInput>
    where?: SalarySlipWhereInput
  }

  export type SalarySlipUpdateToOneWithWhereWithoutReportInput = {
    where?: SalarySlipWhereInput
    data: XOR<SalarySlipUpdateWithoutReportInput, SalarySlipUncheckedUpdateWithoutReportInput>
  }

  export type SalarySlipUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    defaultFor?: EmployeeUpdateOneWithoutDefaultSalaryNestedInput
  }

  export type SalarySlipUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gajiPokok?: IntFieldUpdateOperationsInput | number
    masaKerja?: IntFieldUpdateOperationsInput | number
    tunjanganJabatan?: IntFieldUpdateOperationsInput | number
    tunjanganfungsional?: IntFieldUpdateOperationsInput | number
    waliKelas?: IntFieldUpdateOperationsInput | number
    kurikulum?: IntFieldUpdateOperationsInput | number
    kesiswaan?: IntFieldUpdateOperationsInput | number
    bendahara?: IntFieldUpdateOperationsInput | number
    operasionalSD?: IntFieldUpdateOperationsInput | number
    operasionalSMP?: IntFieldUpdateOperationsInput | number
    operasionalSMA?: IntFieldUpdateOperationsInput | number
    media?: IntFieldUpdateOperationsInput | number
    tunjanganKesehatan?: IntFieldUpdateOperationsInput | number
    kehadiran?: IntFieldUpdateOperationsInput | number
    kbmTahfidz?: IntFieldUpdateOperationsInput | number
    kbmFormal?: IntFieldUpdateOperationsInput | number
    inval?: IntFieldUpdateOperationsInput | number
    gTerbang?: IntFieldUpdateOperationsInput | number
    tunjanganMakan?: IntFieldUpdateOperationsInput | number
    tunjanganTinggal?: IntFieldUpdateOperationsInput | number
    seragam?: IntFieldUpdateOperationsInput | number
    sedekah?: IntFieldUpdateOperationsInput | number
    kasbon?: IntFieldUpdateOperationsInput | number
    denda?: IntFieldUpdateOperationsInput | number
    defaultFor?: EmployeeUncheckedUpdateOneWithoutDefaultSalaryNestedInput
  }

  export type SalarySlipReportCreateManyEmployeeInput = {
    id?: string
    date: Date | string
    salarySlipId: string
    createdAt?: Date | string
  }

  export type SalarySlipReportUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salarySlip?: SalarySlipUpdateOneRequiredWithoutReportNestedInput
  }

  export type SalarySlipReportUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    salarySlipId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalarySlipReportUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    salarySlipId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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