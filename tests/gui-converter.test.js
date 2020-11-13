import { promises as fs } from 'fs';
import { parse } from '../assets/js/gui-converter';

test('GUI Converter', async () => {
  const path = 'tests/gui-converter';
  for (const file of (await fs.readdir(path)).filter(file => file.endsWith('.sk'))) {
    const script = (await fs.readFile(`${path}/${file}`)).toString().split('-- Supposed to be: --\n');
    expect(await parse(script[0])).toBe(script[1]);
  }
});
