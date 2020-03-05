import puppeteer from 'puppeteer';

describe('Run the "happy ending" of the application', () => {
	it('headless test', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			// slowMo: 250,
		});
		const page = await browser.newPage();
		await page.goto('https://google.com', { waitUntil: 'networkidle2' });
		await page.type('input[name="q"]', 'Patrick Cunha');
		const inputValue = await page.evaluate(
			() => document.querySelector('input[name="q"]').value
		);
		expect(inputValue).toBe('Patrick Cunha');
		await browser.close();
		// expect(true).toBe(false);
	}, 16000);
});
