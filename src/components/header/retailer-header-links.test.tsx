import React from 'react'

import { render } from '@testing-library/react'

import { RetailHeaderLinks } from './retail-header-links'

describe('retail-header-links', () => {
    test('renders', () => {
        const { getByTestId } = render(<RetailHeaderLinks />)

        expect(getByTestId('retailer-header-links')).toBeInTheDocument()
    })
})
