// ./src/IP.test.js
import { fireEvent, render, screen } from '@testing-library/react';
import { ipProviderFetchResolvedOnce } from './testUtilis';
import IP from './IP';

jest.spyOn(window, 'fetch');

describe('<IP>', () => {
  test('render IP address', async () => {
    ipProviderFetchResolvedOnce(window.fetch);

    render(<IP />);

    const loader = screen.getByText(/Loading.../i);
    expect(loader).toBeInTheDocument();
    const reg = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/i;
    const ip = await screen.findByText(reg);
    expect(ip).toBeInTheDocument();
  });

  test('refresh IP when button was clicked', async () => {
    ipProviderFetchResolvedOnce(window.fetch);
    ipProviderFetchResolvedOnce(window.fetch);
    render(<IP />);

    const button = await screen.findByRole('button', { name: 'refresh' });

    fireEvent.click(button);

    const ip = await screen.findByText('100.100.100.100');

    expect(ip).toBeInTheDocument();
  });
});
