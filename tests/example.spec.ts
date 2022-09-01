import { test, expect } from "@playwright/test"

test("Example test", async ({ page }) => {
  await page.goto("/")

  // get all rows from all available tables ( thead + tbody
  const allRowCount = await page.locator("tr").count()

  // get all rows from table1 ( thead + tbody
  const table1AllRowCount = await page.locator("#table1 tr").count()

  // get all rows from table2 ( thead + tbody )
  const table2AllRowCount = await page.locator("#table2 tr").count()

  // use only table1 tbody rows
  const table1BodyRowCount = await page.locator("#table1 tbody > tr").count()

  // use only table2 tbody rows
  const table2BodyRowCount = await page.locator("#table2 tbody > tr").count()

  // use all tbody rows
  const allBodyRowCount = await page.locator("tbody > tr").count()

  expect(allRowCount).toEqual(7)
  expect(table1AllRowCount).toEqual(3)
  expect(table2AllRowCount).toEqual(4)
  expect(table1BodyRowCount).toEqual(2)
  expect(table2BodyRowCount).toEqual(3)

  expect(allBodyRowCount).toEqual(5)
})
