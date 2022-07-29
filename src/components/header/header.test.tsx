import React from 'react'

import { render } from '@testing-library/react'

import { Header } from './header'

describe('header', () => {
    test('renders HeaderRetailLinks', () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId('header-retail-links'))
    })
})
