// src/models/user.ts
import { z } from 'zod';

export const schemaUser = z
  .object({
    username: z.string().min(3, 'El nombre es obligatorio'),
    password: z.string().min(6, 'La contraseña es obligatoria'),
    confirmPassword: z.string().min(6, 'La confirmación es obligatoria'),
    status: z.enum(['active', 'inactive']).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type UserFormValues = z.infer<typeof schemaUser>;


// import { z } from 'zod';

// export const schemaUser = z
//   .object({
//     username: z.string().min(3, 'El nombre el obligarotio'),
//     password: z.string().min(6, 'La contraseña es obligatoria'),
//     confirmPassword: z.string().min(6, 'La confirmacion es obligatoria'),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Las contraseñas no coinciden',
//     path: ['confirmPassword'],
//   });

// export type UserFormValues = z.infer<typeof schemaUser>;
