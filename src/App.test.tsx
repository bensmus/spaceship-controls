import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'

let externalPanel: HTMLElement
let controlsPanel: HTMLElement
let monitoringPanel: HTMLElement

beforeEach(() => {
  render(<Provider store={store}><App /></Provider>);
  externalPanel = screen.getByText(/external/i).parentElement!
  controlsPanel = screen.getByText(/controls/i).parentElement!
  monitoringPanel = screen.getByText(/monitoring/i).parentElement!
})

test('expected text is present', () => {
  expect(externalPanel).toBeInTheDocument();
  expect(controlsPanel).toBeInTheDocument();
  expect(monitoringPanel).toBeInTheDocument();
});

test('starts up with controls panel selected', () => {
  expect(externalPanel).toHaveClass('unselected')
  expect(controlsPanel).toHaveClass('selected')
  expect(monitoringPanel).toHaveClass('unselected')
})

test('clicking on panel changes its class', () => {
  expect(externalPanel).toHaveClass('unselected')
  fireEvent(externalPanel, new MouseEvent('click'))
  expect(externalPanel).toHaveClass('selected')

  expect(controlsPanel).toHaveClass('selected')
  fireEvent(controlsPanel, new MouseEvent('click'))
  expect(controlsPanel).toHaveClass('unselected')

  expect(monitoringPanel).toHaveClass('unselected')
  fireEvent(monitoringPanel, new MouseEvent('click'))
  expect(monitoringPanel).toHaveClass('selected')
})