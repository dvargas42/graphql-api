const users = [
  {
    nome: 'Ana',
    ativo: true,
  },
  {
    nome: "Marcia",
    ativo: false,
  }
]

const resolvers = {
  Query: {
    users: () => users,
    primeiroUser: () => users[0],
  }
}

module.exports = resolvers;