import React from 'react'

import { render } from '@testing-library/react'

import { RetailHeaderLinks } from './retail-header-links'

describe('retail-header-links', () => {
    test('renders', () => {
        const { getByRole } = render(<RetailHeaderLinks />)

        expect(getByRole('link', { name: 'Housing & runs', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: 'Hay', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: 'Bedding', current: false })).toBeInTheDocument()
        expect(getByRole('link', { name: 'Treats', current: false })).toBeInTheDocument()
    })

    test('links contain correct urls', () => {
        const { getByRole } = render(<RetailHeaderLinks />)

        expect(getByRole('link', { name: 'Housing & runs', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: 'Hay', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: 'Bedding', current: false })).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: 'Treats', current: false })).toHaveAttribute('href', '/')
    })
})
