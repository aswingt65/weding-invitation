async (page) => {
  const local = page.context().pages().filter(p => p.url().startsWith('http://localhost:3000')).at(-1);
  await local.bringToFront();
  const maps = [];
  for (const frame of await local.locator('iframe').all()) {
    await frame.scrollIntoViewIfNeeded();
    await local.waitForTimeout(3000);
    const content = await frame.contentFrame().locator('body').innerText({ timeout: 10000 }).catch(error => error.message);
    maps.push({ src: await frame.getAttribute('src'), text: content.slice(0, 800) });
  }
  await local.screenshot({ path: 'output/playwright/local-map-check.png' });
  return { maps, frames: local.frames().map(f => f.url()) };
}
