import React from 'react'

import { RetailHeaderLinksInner } from './header.styles'

export const RetailHeaderLinks = () => {
    return (
        <RetailHeaderLinksInner data-testid={'retail-header-links'}>
            <a href={'/'}>Housing & runs</a>
            <a href={'/'}>Hay</a>
            <a href={'/'}>Bedding</a>
            <a href={'/'}>Treats</a>
        </RetailHeaderLinksInner>
    )
}
