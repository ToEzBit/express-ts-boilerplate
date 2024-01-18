import { User } from "@modules/user/user.model";

const users: User[] = [
  {
    id: 1,
    name: "John",
    email: "john@email.com",
    age: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@email.com",
    age: 21,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

type FindAllAsync = () => Promise<User[] | []>;
type FindByIdAsync = (id: number) => Promise<User | null>;
type AddAsync = (user: User) => Promise<User>;

const findAllAsync: FindAllAsync = async () => {
  return users || [];
};

const findByIdAsync: FindByIdAsync = async (id: number) => {
  return users.find((user) => user.id === id) || null;
};

const addUserAsync: AddAsync = async (user: User) => {
  users.push(user);
  return user;
};

export const userRepository = {
  findAllAsync,
  findByIdAsync,
  addUserAsync,
};
