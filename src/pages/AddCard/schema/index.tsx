import { z } from 'zod';

export const addFormSchema = z.object({
  name: z.string().min(1, 'Name is Required').min(2, 'Please enter at least 2 characters'),
  password: z
    .union([
      z.string().length(4, 'Password must be exactly 4 characters'),
      z.string().length(0, 'Password must be empty or exactly 4 characters'),
    ])
    .optional(),
  content: z.string().min(1),
});
