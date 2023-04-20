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

export default eventHandler(async () => {
  const dinosaurs = await prisma.dinosaur.findMany()
  console.log(dinosaurs)
  return dinosaurs
})
