import 'reflect-metadata'
import { Field, InputType } from 'type-graphql';
import {User} from "./UserEntity";

@InputType
export class UserCreateInput implements Partial<User> {
    @Field()
    email: string

    @Field({ nullable: true })
    name: string
}