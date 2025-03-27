import { test, expect } from "@playwright/test";

test("Has logo exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Get image by alt text
  const logo = page.getByAltText("Playwright logo").first();
  await expect(logo).toBeVisible();
});

test("Has heading exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locte Heading 1 by locator tag name
  const headingTitle = page.locator("h1");

  // log in the test results locate element value
  console.log((await headingTitle.innerText()).valueOf());

  await expect(headingTitle).toBeVisible();
});

test("Have navigation links exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate navigation link Docs by role and text
  const docsLink = page.getByRole("link", { name: "Docs" });
  const apiLink = page.getByRole("link", { name: "API" });
  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Click Community navigation link and check the path", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

  // Locate navigation link by role and text
  const communityLink = page.getByRole("link", { name: "Community" });
  await expect(communityLink).toBeVisible();

  //Click the located element
  await communityLink.click();

// Expect the current page to have passed URL
  await expect(page).toHaveURL("https://playwright.dev/community/welcome")

  const headingTwo = page.getByRole("heading", {name: "Ambassadors"})
  await expect(headingTwo).toBeVisible();
});

// logosist_zAAF
test("Check if the ul exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);

// Locate logos list by locator clss name syntax
const logosListItems = page.locator("ul.logosList_zAAF li")

// Expect the count of the list items
await expect(logosListItems).toHaveCount(9);

});