import prisma from "./utils/prisma.js"

async function seedDB() {
  try {
    const response = await prisma.wallpaper.create({
      data: {
        name: "wheres-waldo-01",
        url: "https://okuqlmbxqxstshjkqxxf.supabase.co/storage/v1/object/public/wheres-waldo/wheres-wally-01.webp",
        characters: {
          create: [
            {
              name: "surprised yellow guy",
              position_x: 0.5,
              position_y: 0.5,
              url: "https://okuqlmbxqxstshjkqxxf.supabase.co/storage/v1/object/public/wheres-waldo/character-01.webp",
            },
            {
              name: "chilled blue guy",
              position_x: 0.88,
              position_y: 0.86,
              url: "https://okuqlmbxqxstshjkqxxf.supabase.co/storage/v1/object/public/wheres-waldo/character-02.webp",
            },
            {
              name: "shocked red guy",
              position_x: 0.61,
              position_y: 0.66,
              url: "https://okuqlmbxqxstshjkqxxf.supabase.co/storage/v1/object/public/wheres-waldo/character-03.webp",
            },
          ],
        },
      },
    })
    console.log({ response })
    return response
  } catch (error: unknown) {
    if (error instanceof Error) throw error
  } finally {
    await prisma.$disconnect()
  }
}

seedDB()
