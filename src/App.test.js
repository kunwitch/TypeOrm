// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TypeOrm title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TypeOrm/i);
    expect(titleElement).toBeInTheDocument();
});
