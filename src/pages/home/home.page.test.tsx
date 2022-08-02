import React from 'react'

import { render } from '@testing-library/react'

import { HomePage } from './home.page'

describe('home page', () => {
    test('renders', () => {
        const { getByTestId, getByAltText } = render(<HomePage />)

        expect(getByTestId('retail-header-links')).toBeInTheDocument()
        expect(getByAltText('rabbit-background')).toBeInTheDocument()
    })
})
