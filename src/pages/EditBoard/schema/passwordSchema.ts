import { z } from 'zod';

const MIN_PASSWORD_LENGTH = 4;

export const passwordSchema = (inputValue: string) =>
  z.object({
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, 'Password must be exactly 4 characters')
      .refine((val) => val === inputValue, { message: 'The password does not match.' }),
  });
