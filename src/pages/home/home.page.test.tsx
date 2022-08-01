import React from 'react'

import { render } from '@testing-library/react'

import { RetailHeaderLinks } from '../../components/header/retail-header-links'

describe('home page', () => {
    test('renders', () => {
        const { getByTestId } = render(<RetailHeaderLinks />)

        expect(getByTestId('retail-header-links')).toBeInTheDocument()
    })
})
