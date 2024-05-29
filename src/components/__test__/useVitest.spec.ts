import { describe, it, expect } from 'vitest';

describe('useVitest', () => {
	it('renders properly', () => {
		const sum2 = (a: number, b: number) => a + b;
		expect(sum2(1, 2)).toBe(3);
	});
});
