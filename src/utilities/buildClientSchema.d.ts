import { GraphQLSchema, GraphQLSchemaValidationOptions } from '../type/schema';

import { IntrospectionQuery } from './getIntrospectionQuery';

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
export function buildClientSchema(
  introspection: IntrospectionQuery,
  options?: GraphQLSchemaValidationOptions,
): GraphQLSchema;
