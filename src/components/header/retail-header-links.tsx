import React from 'react'

import { HeaderLinksInner } from './header.styles'

export const RetailHeaderLinks = () => {
    return (
        <HeaderLinksInner data-testid={'retail-header-links'}>
            <a href={'/'}>Housing & runs</a>
            <a href={'/'}>Hay</a>
            <a href={'/'}>Bedding</a>
            <a href={'/'}>Treats</a>
        </HeaderLinksInner>
    )
}
