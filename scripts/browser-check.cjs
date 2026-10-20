async (page) => {
  const result = { comparisons: [], localErrors: [], failedLocalRequests: [] };
  const reference = page;
  const local = await page.context().newPage();
  local.on('pageerror', error => result.localErrors.push(error.message));
  local.on('response', response => {
    if (response.url().startsWith('http://localhost:3000') && response.status() >= 400)
      result.failedLocalRequests.push({ url: response.url(), status: response.status() });
  });
  await local.goto('http://localhost:3000');
  await local.getByRole('heading', { name: 'Tap to Open' }).waitFor();
  await local.screenshot({ path: 'output/playwright/local-curtain.png' });
  await local.getByRole('heading', { name: 'Tap to Open' }).click({ force: true });
  await local.waitForTimeout(6500);
  const revealAll = async p => {
    const height = await p.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 550) {
      await p.evaluate(y => window.scrollTo(0, y), y);
      await p.waitForTimeout(100);
    }
    await p.waitForTimeout(1800);
  };
  await revealAll(reference);
  await revealAll(local);
  const summarize = async p => p.evaluate(() => ({
    text: document.querySelector('main').innerText.replace(/\s+/g, ' ').trim(),
    links: [...document.querySelectorAll('main a')].map(a => ({ text: a.textContent, href: a.getAttribute('href') })),
    maps: [...document.querySelectorAll('iframe')].map(f => f.src),
    images: [...document.images].map(i => ({ alt: i.alt, loaded: i.complete && i.naturalWidth > 0 })),
  }));
  const original = await summarize(reference);
  const copied = await summarize(local);
  result.contentMatches = JSON.stringify(original) === JSON.stringify(copied);
  if (!result.contentMatches) result.content = { original, copied };
  result.audioBeforePause = await local.locator('audio').evaluate(a => ({ paused: a.paused, readyState: a.readyState, duration: a.duration }));
  await local.locator('audio').locator('..').getByRole('button').click();
  result.audioPaused = await local.locator('audio').evaluate(a => a.paused);
  await local.locator('audio').locator('..').getByRole('button').click();
  result.audioResumed = await local.locator('audio').evaluate(a => !a.paused);
  await local.locator('audio').evaluate(a => a.pause());
  await reference.locator('audio').evaluate(a => a.pause());
  for (const [width, height] of [[320, 740], [390, 844], [768, 1024], [1440, 900], [1920, 1080]]) {
    const dimensions = [];
    for (const [label, p] of [['reference', reference], ['local', local]]) {
      await p.setViewportSize({ width, height });
      await revealAll(p);
      await p.evaluate(() => window.scrollTo(0, 0));
      await p.screenshot({ path: `output/playwright/${label}-${width}.png`, fullPage: true });
      dimensions.push(await p.evaluate(() => ({
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        height: document.querySelector('main').getBoundingClientRect().height,
        sections: [...document.querySelectorAll('main section')].map(s => ({
          width: Math.round(s.getBoundingClientRect().width), height: Math.round(s.getBoundingClientRect().height)
        }))
      })));
    }
    result.comparisons.push({ width, exactDimensions: JSON.stringify(dimensions[0]) === JSON.stringify(dimensions[1]), reference: dimensions[0], local: dimensions[1] });
  }
  await local.setViewportSize({ width: 390, height: 844 });
  // Exercise the fallback without sending an invitation or opening external apps.
  await local.evaluate(() => Object.defineProperty(navigator, 'share', { value: undefined, configurable: true }));
  await local.getByTitle('Share Invitation').click();
  await local.getByRole('heading', { name: 'Share Invitation' }).waitFor();
  result.shareButtons = await local.getByRole('button').allTextContents();
  await local.screenshot({ path: 'output/playwright/local-share.png' });
  await local.getByRole('heading', { name: 'Share Invitation' }).locator('..').getByRole('button').click();
  await reference.evaluate(result => { window.__verification = result; }, result);
  return result;
}
