import {objectType} from "@nexus/schema";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id();
        t.model.email();
        t.model.name();

    }
});

export const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.string('token');
        t.field('user', {type: 'User'})
    }
})