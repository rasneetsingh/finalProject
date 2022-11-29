import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Rasneet Singh',
    email: 'rasneet@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aman Singh',
    email: 'aman@customer.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
