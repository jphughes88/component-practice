import React from 'react'

import { render } from '@testing-library/react'

import { Header } from './header'

describe('header', () => {
    test('renders RetailHeaderLinks', () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId('retail-header-links'))
    })

    test('renders logo', () => {
        const { getByAltText } = render(<Header />)

        expect(getByAltText('bun stuff logo'))
    })

    test('renders AccountLinks', () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId('account-links'))
    })
})
