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

test('clicking on already selected panel does not change its state', () => {
  fireEvent.click(controlsPanel)
  expect(controlsPanel).toHaveClass('selected')
  expect(controlsPanel).not.toHaveClass('unselected')
})

test('clicking on panel makes it selected', () => {
  fireEvent.click(externalPanel)
  expect(externalPanel).toHaveClass('selected')
  expect(monitoringPanel).toHaveClass('unselected')
  expect(controlsPanel).toHaveClass('unselected')
  
  fireEvent.click(controlsPanel)
  expect(controlsPanel).toHaveClass('selected')
  expect(externalPanel).toHaveClass('unselected')
  expect(monitoringPanel).toHaveClass('unselected')
})