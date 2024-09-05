import App from '../App';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('TEST CASE 1', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-1');

  const cross = await within(faqItem).findByTestId('cross');

  userEvent.click(cross);

  expect(screen.queryByTestId('faq-1')).not.toBeInTheDocument();
});

test('TEST CASE 2', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-2');

  const expand = await within(faqItem).findByTestId('expand');

  userEvent.click(expand);

  screen.getByText(/Once your order has shipped/i);

  userEvent.click(expand);

  expect(
    screen.queryByText(/Once your order has shipped/i)
  ).not.toBeInTheDocument();
});

test('TEST CASE 3', async () => {
  render(<App />);

  const faqItem = screen.getByTestId('faq-5');

  const expand = await within(faqItem).findByTestId('expand');
  const cross = await within(faqItem).findByTestId('cross');

  userEvent.click(expand);

  userEvent.click(cross);

  expect(
    screen.queryByText(/Orders can be modified or canceled within one hour of placement/i)
  ).not.toBeInTheDocument();

  expect(
    screen.queryByText(/How can I contact customer support/i)
  ).not.toBeInTheDocument();
});
