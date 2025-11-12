import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }).max(100),
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }).max(100),
  phone: z.string()
    .min(8, { message: 'El teléfono debe tener al menos 8 dígitos.' })
    .max(20)
    .regex(/^[+]?[0-9\s\-\(\)]+$/, { message: 'Por favor, ingresa un número de teléfono válido.' }),
  eventType: z.enum(['boda', '15años', 'otro'], {
    errorMap: () => ({ message: 'Por favor, selecciona un tipo de evento.' }),
  }),
  eventDate: z.string().min(1, { message: 'Por favor, selecciona una fecha.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
