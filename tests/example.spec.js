
const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mama adha town ekata yanavaa.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මම අද town එකට යනවා');
});



test('Pos_Fun_0002 - Partial validation sentence', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata una nisaa beheth ganna hospital ekata giyaa.doctor kivvaa dhavas thunakin adu unee naeththm lee ekak check karanna ooni kiyalaa');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට');
});

test('Pos_Fun_0003 - Partial validation sentence', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'ammaayi mamayi iridhaata polata yanavaa.api gihin enakam apee malliva oyalaage gedhara thiyaaganna puluvandha?oyalatath polen monaahari geenna thiyenavanam kiyannakoo.api vaeen ekee thamayi yannee.ikmanata reply ekak evanna.budhu saranayi.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අම්මායි');
});

test('Pos_Fun_0004 - Partial validation sentence', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'adha zoom meeting ekak thiyanavaa.Ekata join venna puluvandha oyaata?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අද');
});

test('Pos_Fun_0005 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'api sellam karanna yamu');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අපි');
});

test('Pos_Fun_0006 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mama nidhaaganna yanavaa.Good night!');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මම නිදාගන්න යනවා');
});

test('Pos_Fun_0007 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mallita badaginilu');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මල්ලිට බඩගිනිලු');
});

test('Pos_Fun_0008 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'adha raesviima thiyanava kivvaa,oyaa enavada?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අද රැස්වීම තියනවා කිව්වා');
});

test('Pos_Fun_0009 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'vaessa naethi vunoth api ground ekata yamudha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('වැස්ස');
});

test('Pos_Fun_0010 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'ara vaedeeta mokadha vunee?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අර වැඩේට මොකද වුනේ');
});

test('Pos_Fun_0011 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'vahaama mehen yanna.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('වහාම මෙහෙන් යන්න.');
});

test('Pos_Fun_0012 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'suba udhaeesanak obata!');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('සුබ උදෑසනක් ඔබට!');
});

test('Pos_Fun_0013 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'karunaakara mata paeenak dhenavadha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('කරුනාකර මට පෑනක් දෙනවද?');
});

test('Pos_Fun_0014 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'ov oyaa hari,mata dhaen theerenavaa.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('ඔව් ඔයා හරි,මට දැන් තේරෙනවා.');
});

test('Pos_Fun_0015 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata samaavenna,mata ath vaeradhiimak unee');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට');
});
test('Pos_Fun_0016 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'oyaata puluvannam dhavasakata oyaagee car eka dhenavadha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('ඔයාට');
});

test('Pos_Fun_0017 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'oya potha dhiipanko');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('ඔය පොත දීපන්කො');
});

test('Pos_Fun_0018 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata thibahayi,vathura ekak bomudha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට තිබහයි,වතුර එකක් බොමුද?');
});

test('Pos_Fun_0019 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'poddak inna,mama ikmanata ennam.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('පොඩ්ඩක් ඉන්න');
});

test('Pos_Fun_0020 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mama ehenam yanavaa,bye');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මම එහෙනම් යනවා,bye');
});

test('Pos_Fun_0021 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'api adha raeeta egg roti kamudha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අපි අද රෑට egg roti කමුද?');
});

test('Pos_Fun_0022 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'hari hari tikak innakoo,mama mee ena gaman');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('හරි හරි');
});

test('Pos_Fun_0023 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'api heta Kandy yanavaa,ehe gihin dhaladhaa maaligaavata gihin iita passe peradeniya campus eka balanna yanna inne.rata perahaera balalaa hotel ekaka idhalaa enava anidhdhaa.oyath enna apith ekka yanna.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අපි හෙට Kandy යනවා');
});

test('Pos_Fun_0024 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata ee photos tika balanna puluvandha?');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට ඒ photos ටික බලන්න පුලුවන්ද?');
});

test('Neg_Fun_0001 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'MaMa GeDhArA yanavaa');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මම ඟෙධර යනවා');
});

test('Neg_Fun_0002 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata ASAP enna kiyala kiwwa');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට ASAP එන්න කියල කිwwඅ..');
});

test('Neg_Fun_0003 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mama code eka github ekata push karaa.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මම code එක ගිතුබ් එකට push කරා.');
});

test('Neg_Fun_0004 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata adha javascript language eken code karanna thiyanavaa.');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට අද ජවසcරිප්ට් language එකෙන් code කරන්න තියනවා..');
});

test('Neg_Fun_0005 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'appatasiri mata Pothak ganna amathaka vunaa');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('අප්පටසිරි මට ඵොතක් ගන්න අමතක වුනා');
});

test('Neg_Fun_0006 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata mee caramelPudding kanna baee');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට මේ cඅරමෙල්ඵුඩ්ඩින්ග් කන්න බෑ..');
});

test('Neg_Fun_0007 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'matadhean jobeka epaa welaathiyenne');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මටදේන් ජොබෙක එපා wඑලාතියෙන්නෙ..');
});

test('Neg_Fun_0008 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata pebaravaari 10 Thailand Yanna bae');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට පෙබරවාරි 10 Thailand Yඅන්න බැ..');
});

test('Neg_Fun_0009 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'oyaa adhath homeWork karagena aevith naee');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('ඔයා අදත් හොමෙWඔර්ක් කරගෙන ඇවිත් නෑ..');
});
test('Neg_Fun_0010 - Simple sentence conversion', async ({ page }) => {
  // Step 1: Open the Swift Translator website
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Enter Singlish input
  await page.fill('textarea', 'mata tea bonna Bae');

  // Step 3: Wait for conversion suggestions
  await page.waitForTimeout(3000);

  // Step 4: Read entire page content
  const pageText = await page.textContent('body');

  // Step 5: Validate at least one correct Sinhala word appears
  expect(pageText).toContain('මට tea බොන්න ඹැ..');
});