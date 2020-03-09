const puppeteer = require('puppeteer');

const name = 'Patrick Cunha';

const runE2E = async () => {
	const browser = await puppeteer.launch({
		// headless: false,
		// slowMo: 250,
	});
	try {
		const page = await browser.newPage();
		await page.goto('http://localhost:3000', {
			waitUntil: 'networkidle2',
		});
		// click on card
		await page.click('#productCard-0');

		// click to increase product
		await page.click('#productCard-0 button[name="plus-button"]');

		// click to add the product quantity on the cart
		await page.click('#productCard-0 button[name="add-button"]');

		// type the name on the input
		await page.type('input[name="name"]', name);

		// type the email on the input
		await page.type('input[name="email"]', 'patrick.cunha@gmail.com');

		// click and select a gender
		await page.select('#gender-select', 'Masculino');

		await page.screenshot({ path: 'src/e2e/Home.png' });

		// click to finish purchase
		await page.click('#button-finish-purchase');

		await page.waitFor(500);

		await page.screenshot({ path: 'src/e2e/Finish.png' });

		await browser.close();
	} catch (err) {
		await browser.close();
	}
};

runE2E();
