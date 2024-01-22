import request from "supertest";

import { app } from "@src/server";

describe("HEALTH_CHECK_ROUTE", () => {
  describe("GET/ health-check", () => {
    it("should server is healthy", async () => {
      //Arc
      const response = await request(app).get("/health-check");
      const responseBody = response.body;

      //Assert
      expect(response.status).toEqual(200);
      expect(responseBody.payload).toEqual("SERVER_IS_HEALTHY");
    });
  });
});
