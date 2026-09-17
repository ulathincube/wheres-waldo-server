import * as z from "zod"

export const WallpaperParams = z.object({
  characterId: z.string(),
  wallpaperId: z.string(),
})

export const WallpaperBody = z.object({
  position: z.object({
    x: z.float32(),
    y: z.float32(),
  }),
})

export const CharacterIdParam = z.object({
  characterId: z.string(),
})

export const WallpaperIdParam = z.object({
  wallpaperId: z.string(),
})

export const CompletionTimeBody = z.object({
  completionTime: z.number(),
})

export const SaveUser = z.object({
  username: z.string(),
})
