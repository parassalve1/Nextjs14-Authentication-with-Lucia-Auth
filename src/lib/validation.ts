import { z } from "zod";



const requiredString = z.string().trim().min(1,'required.')

export const SignUpShchema = z.object({
    username:requiredString.regex(/^[a-zA-z0-9-_]+$/,'only numbers,letter and "-,_" is useble.'),
    email:requiredString.email('please enter valid Email.'),
    password:requiredString.min(8,'minimum 8 char are required.')
})

export type SignUpValues = z.infer<typeof SignUpShchema>;


export const LoginSchema = z.object({
    username:requiredString,
    password:requiredString
})

export type Loginvalues = z.infer<typeof LoginSchema>