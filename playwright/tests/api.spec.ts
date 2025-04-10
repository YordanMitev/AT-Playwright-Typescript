import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "../test-data/constants";
import REQUEST_BODY from "../test-data/request_body.json";


test.describe("Matchers example", () => {
  test("toContainEqual example", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    await expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  test("toEqual example", async () => {
    await expect({ id: 1, name: "Alice" }).toEqual({ id: 1, name: "Alice" });
  });

  test("toMatchObject example", async () => {
    const user = { id: 1, name: "Alice", age: 30 };
    await expect(user).toMatchObject({ name: "Alice", age: 30 });
  });

  test("toHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };

    await expect(user).toHaveProperty("profile.name");
    await expect(user).toHaveProperty("profile.name", "Alice");
  });
});

test.describe("CRUD Operations", () => {
  test("API Test - GET Products", async ({ request }) => {
    const requestURL = `${REQUEST_URL}`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    await console.log(responseBody);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    await expect(responseBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });

  test("API Test 2 - GET Product", async ({ request }) => {
    const requestURL = `${REQUEST_URL}/${PRODUCT_ID}`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    await console.log(responseBody);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    await expect(responseBody).toEqual(
      expect.objectContaining({
        title: "Solid Gold Petite Micropave ",
      })
    );

    expect(responseBody).toMatchObject({ price: 168, category: "jewelery" });

    expect(responseBody).toHaveProperty("image");
    expect(responseBody).toHaveProperty("rating.rate");
  });

  test("API Test 3 - Create Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      data:
        REQUEST_BODY,
        // {
        //   id: 21,
        //   title: "Test",
        //   price: 0.3,
        //   description: "Test",
        //   category: "string",
        //   image: "http://example.com",
        // },
    });
    const responseBody = await response.json();
    await console.log(responseBody);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    await expect(responseBody).toEqual({
      id: 21,
      title: "Test",
      price: 0.3,
      description: "Test",
      category: "string",
      image: "http://example.com",
    });

    expect(responseBody).toHaveProperty("price", 0.3);
  });

  test("API Test 4 - Update Product", async ({ request }) => {
    const response = await request.put(`${REQUEST_URL}/${PRODUCT_ID}`, {
      data: REQUEST_BODY,
      // {
      //   id: 6,
      //   title: "Test",
      //   price: 0.3,
      //   description: "Test",
      //   category: "string",
      //   image: "http://example.com",
      // },
    });
    const responseBody = await response.json();
    await console.log(responseBody);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);

    await expect(responseBody).toMatchObject({
      title: "Test",
      price: 0.3,
      description: "Test",
    });
  });

  test("API Test 5 - Delete Product", async ({ request }) => {
    const response = await request.delete(`${REQUEST_URL}/${PRODUCT_ID}`);
    const responseBody = await response.json();
    await console.log(responseBody);

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
  });
});
