import { z } from 'zod';
import { redisKeyRegex } from '../helpers';
const ModelPresetSchema = z.object({
    temperature: z.number(),
    maxOutputTokens: z.number(),
    topP: z.number(),
    topK: z.number(),
});
const ExampleSchema = z.object({
    input: z.object({
        content: z.string(),
    }),
    output: z.object({
        content: z.string(),
    }),
});
const SystemMessageSchema = z.object({
    name: z
        .string()
        .refine((name) => redisKeyRegex.test(name), 'Invalid systemMessages.name value. Allowed only alphanumeric characters (a-z, A-Z, 0-9) and the specified symbols (: . - _)'),
    systemMessage: z.string(),
    examples: z.array(ExampleSchema),
    model: z.string(),
    modelPreset: ModelPresetSchema,
});
export const createChatCompletionRequestSchema = z
    .object({
    systemMessages: z.array(SystemMessageSchema),
})
    .strict();
//# sourceMappingURL=CreateChatCompletionRequestSchema.js.map