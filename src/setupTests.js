// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, waitForElementToBeRemoved, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'
import '@testing-library/jest-dom';

test('loads and displays users', async () => {
  render(<App />)

  fireEvent.click(screen.getByText('Users'))

  await waitForElementToBeRemoved(() => screen.getByText('Loader'))

  expect(screen.getAllByText('Find on Map'))
})