import { get } from './ipProvider';

describe('get()', () => {
  it('should fetch ip when send request', async () => {
    const data = await get();
    expect(data.ip).toBe('77.114.58.236');
  });
});
