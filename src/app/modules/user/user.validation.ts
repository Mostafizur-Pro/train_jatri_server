import { z } from 'zod'


const createUserZodSchema = z.object({
  body: z.object({
    number: z.string({
      required_error: 'Phone number is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    password: z.string(),
    email: z.string({
      required_error: 'email is required',
    }),
    wallet: z.string({
      required_error: 'wallet is required',
    }),
  }),
})

const updateUserZodSchema = z.object({
  body: z.object({
    number: z.string({
      required_error: 'Phone number is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    password: z.string(),
    email: z.string({
      required_error: 'budget is required',
    }),
    wallet: z.string({
      required_error: 'wallet is required',
    }),
  }),
})

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
}
