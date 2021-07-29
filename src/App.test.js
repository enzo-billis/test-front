import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar links', () => {
  render(<App />);
  const linkHomeElement = screen.getByText(/Home/i);
  const linkPhotosByAlbumElement = screen.getByText(/Photos by Album/i);
  const linkUsersElement = screen.getByText(/Users/i);
  
  expect(linkHomeElement).toBeInTheDocument();
  expect(linkPhotosByAlbumElement).toBeInTheDocument();
  expect(linkUsersElement).toBeInTheDocument();
});
