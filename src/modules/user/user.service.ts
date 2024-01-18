import { userRepository } from "@modules/user/user.repository";

import { User } from "./user.model";

const findAll = async () => {
  const users = await userRepository.findAllAsync();
  return users;
};

const findById = async (id: number) => {
  const user = await userRepository.findByIdAsync(id);
  return user;
};

const createUser = (user: User) => {
  userRepository.addUserAsync(user);
  return user;
};

export const userService = {
  findAll,
  findById,
  createUser,
};
