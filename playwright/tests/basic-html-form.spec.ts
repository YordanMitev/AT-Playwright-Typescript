import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
});


test.describe("Main page Tests", () => {
  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  test("Test password field", async ({ page }) => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPassword");
    await expect(passwordInput).toHaveValue("testPassword");
  });

  test("Test TextArea field", async ({ page }) => {
    const textArea = page.locator("xpath=//textarea[@name='comments']");
    await expect(textArea).toBeVisible();
    await textArea.fill("This is a test comment.");
    await expect(textArea).toHaveValue("This is a test comment.");
  });

  test("Test Checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  test("Test Radio Item selection", async ({ page }) => {
    const radioItem = page.locator('xpath=//input[@value="rd3"]');
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdown = page.locator('xpath=//select[@name="dropdown"]');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("dd2");
    await expect(dropdown).toHaveValue("dd2");
  });

  test("Submit the form", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@type='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
  });
});

