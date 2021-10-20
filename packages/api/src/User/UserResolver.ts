import 'reflect-metadata'
import {
    Resolver,
    Query,
    Mutation,
    Arg,
    Ctx,
    FieldResolver,
    Root,
    Int,
    InputType,
    Field,
} from 'type-graphql'
import { User } from './UserEntity'
import { Context} from "../context";

@Resolver(User)
export class UserResolver {

    @Mutation()

}