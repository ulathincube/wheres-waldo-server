import prisma from "../utils/prisma.js"

export async function getWallpaper() {
  try {
    const response = await prisma.wallpaper.findFirst({
      include: {
        characters: true,
      },
    })
    console.log({ ...response })
    return response
  } catch (error: unknown) {
    if (error instanceof Error) throw error
  } finally {
    await prisma.$disconnect()
  }
}

getWallpaper()
