import { z } from 'zod';

const MIN_PASSWORD_LENGTH = 4;

export const passwordSchema = (inputValue: string) =>
  z.object({
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, 'The password must be four digits.')
      .refine((val) => val === inputValue, { message: 'The password does not match.' }),
  });
