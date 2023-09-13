import * as z from 'zod'

export const createRoomSchema = z.object({
  username: z
    .string()
    .min(2, '用户名必须超过两个字符')
    .max(50, '用户名不能超过五十个字符'),
})
 