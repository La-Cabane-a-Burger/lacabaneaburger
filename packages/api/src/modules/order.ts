export const Order = `
    type Order {
        id: ID!
        user: User
        store: Store
        price: Int!
        date: String!
    }
`

export const OrderResolver = {};
