/**
 * Fetch all `examples` from the database. Run `npx prisma db push` at least once for this to work.
 *
 * If you are using `tRPC` you can access the prisma-client by adding it to the context:
 * ```ts
 * export async function createContext(event: H3Event) {
 *   return { prisma: event.context.prisma }
 * }
 *
 * export type Context = inferAsyncReturnType<typeof createContext>
 * ```
 */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  // `prisma` is typed and will help you to interact with the database. In addition all parameters you put into your database will be validated at runtime to ensure maximum safety.
  const body = await readBody(event)
  return { body }
})
