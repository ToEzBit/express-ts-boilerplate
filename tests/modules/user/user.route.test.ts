import request from "supertest";

import { type SendHttpResponse } from "@common/utils/send-http-response";
import { type User } from "@modules/user/user.model";
import { userService } from "@modules/user/user.service";
import { app } from "@src/server";

describe("USER_ROUTE", () => {
  describe("GET/ users", () => {
    it("should get all users", async () => {
      //Arc
      const response = await request(app).get("/users");
      const responseBody: SendHttpResponse<User[]> = response.body;
      const users = await userService.findAll();

      //Assert
      expect(response.statusCode).toEqual(200);
      expect(responseBody.payload?.length).toEqual(users.length);
    });
  });

  describe("GET/ users/:id", () => {
    it("should return a user valid id", async () => {
      //Arrange
      const testId = 1;

      //Arc
      const response = await request(app).get(`/users/${testId}`);
      const responseBody: SendHttpResponse<User> = response.body;

      const user = await userService.findById(testId);

      //Assert
      expect(response.statusCode).toEqual(200);
      expect(responseBody.payload?.id).toEqual(user?.id);
    });

    it("should retur a not found error", async () => {
      //Arrange
      const testId = 8888;

      //Arc
      const response = await request(app).get(`/users/${testId}`);

      //Assert
      expect(response.statusCode).toEqual(404);
    });
  });

  describe("POST /users", () => {
    it("should create a user", async () => {
      //Arrange
      const mockUser = {
        name: "Anakin skywallker",
        email: "Darth_Vader@sith.com",
        age: 88,
      };

      //Arc
      const response = await request(app).post("/users").send(mockUser);
      const responseBody: SendHttpResponse<User> = response.body;

      //Assert
      expect(response.statusCode).toEqual(201);
      expect(responseBody.payload?.name).toEqual(mockUser.name);
      expect(responseBody.payload?.email).toEqual(mockUser.email);
      expect(responseBody.payload?.age).toEqual(mockUser.age);
    });
  });
});
