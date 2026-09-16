import prisma from "../utils/prisma.js"

export async function getWallpaper() {
  try {
    const response = await prisma.wallpaper.findFirst({
      include: {
        characters: {
          select: {
            id: true,
            name: true,
            url: true,
            position_x: true,
            position_y: true,
          },
        },
      },
    })

    return response
  } catch (error: unknown) {
    if (error instanceof Error) throw error
  } finally {
    await prisma.$disconnect()
  }
}

export async function findWallpaper(wallpaperId: string) {
  try {
    const response = await prisma.wallpaper.findUnique({
      where: {
        id: wallpaperId,
      },
    })
    return response
  } catch (error: unknown) {
    if (error instanceof Error) throw error
  } finally {
    await prisma.$disconnect()
  }
}

export async function findCharacter(characterId: string) {
  try {
    const response = await prisma.character.findUnique({
      where: {
        id: characterId,
      },
    })
    return response
  } catch (error: unknown) {
    if (error instanceof Error) throw error
  } finally {
    await prisma.$disconnect()
  }
}
