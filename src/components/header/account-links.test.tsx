import React from 'react'

import { render } from '@testing-library/react'

import { AccountLinks } from './account-links'

describe('account-links', () => {
    test('renders', () => {
        const { getByRole } = render(<AccountLinks />)

        expect(getByRole('link', { name: 'Search', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: '£ GBP', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: 'Account', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: 'Cart (0)', current: false })).toBeInTheDocument()
    })

    test('links contain correct urls', () => {
        const { getByRole } = render(<AccountLinks />)

        expect(getByRole('link', { name: 'Search', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: '£ GBP', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: 'Account', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: 'Cart (0)', current: false })).toHaveAttribute('href', '/')
    })
})
