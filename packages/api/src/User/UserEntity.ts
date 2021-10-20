import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'
import { IsEmail } from 'class-validator'

@ObjectType()
export class User {
    @Field(() => ID)
    id: number

    @Field()
    @IsEmail()
    email: string

    @Field()
    password: string
}