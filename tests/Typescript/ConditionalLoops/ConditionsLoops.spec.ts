import { expect, test } from '@playwright/test';

test('evaluates conditions and switch statements', () => {
  const output: string[] = [];

  const age = 19;
  if (age >= 18) {
    output.push('Eligible for voting');
  } else if (age >= 13 && age < 18) {
    output.push('Teen age');
  } else {
    output.push('Kid');
  }

  const day: string = 'M';
  switch (day) {
    case 'M':
      output.push('Monday');
      break;
    case 'T':
      output.push('Tuesday');
      break;
    default:
      output.push('No day');
      break;
  }

  expect(output).toEqual(['Eligible for voting', 'Monday']);
});
