import * as z from 'zod'

export const joinRoomSchema = z.object({
  username: z
    .string()
    .min(2, '用户名必须超过两个字符')
    .max(50, '用户名不能超过五十个字符'),
  roomId: z.string().trim().length(21, '房间名必须超过21个字符'),
})
