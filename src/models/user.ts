import prisma from "../utils/prisma.js"

export async function saveUser(username: string, time: number) {
  const response = await prisma.user.create({
    data: {
      username,
      time,
    },
  })
  return response
}

export async function getUsers() {
  const response = await prisma.user.findMany()
  return response
}
