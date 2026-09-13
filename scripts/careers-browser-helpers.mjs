export async function waitForImages(page) {
  // A lazy footer image is not broken just because the page has not been scrolled yet.
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(async node => {
      await Promise.race([node.decode(), new Promise((_,reject) => setTimeout(() => reject(new Error(`Image timeout: ${node.src}`)), 10000))]);
      if (!node.naturalWidth) throw new Error(`Image failed to decode: ${node.src}`);
    });
  }
  await page.evaluate(() => scrollTo(0, 0));
}
