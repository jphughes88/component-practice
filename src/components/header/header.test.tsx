import React from 'react'

import { render } from '@testing-library/react'

import { Header } from './header'

describe('header', () => {
    test('renders RetailHeaderLinks', () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId('retail-header-links'))
    })
})
