import React from 'react'

import { RetailHeaderLinksOuter } from './header.styles'
import { RetailHeaderLinks } from './retail-header-links'

export const Header = () => {
    return (
        <RetailHeaderLinksOuter>
            <RetailHeaderLinks />
        </RetailHeaderLinksOuter>
    )
}
