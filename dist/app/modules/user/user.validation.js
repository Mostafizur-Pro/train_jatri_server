"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        number: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        password: zod_1.z.string(),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        wallet: zod_1.z.string({
            required_error: 'wallet is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        number: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        password: zod_1.z.string(),
        email: zod_1.z.string({
            required_error: 'budget is required',
        }),
        wallet: zod_1.z.string({
            required_error: 'wallet is required',
        }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
