import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedDate: z.string().or(z.date()).transform((v) => new Date(v)),
    updatedDate: z.string().or(z.date()).optional().transform((v) => (v ? new Date(v) : undefined)),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };