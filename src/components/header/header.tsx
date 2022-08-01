import React from 'react'

import BSLogo from './../assets/bs-logo.png'
import { AccountLinks } from './account-links'
import { RetailHeaderLinksOuter } from './header.styles'
import { RetailHeaderLinks } from './retail-header-links'

export const Header = () => {
    return (
        <div>
            <RetailHeaderLinksOuter>
                <RetailHeaderLinks />
                <img src={BSLogo} alt={'bun stuff logo'}></img>
                <AccountLinks />
            </RetailHeaderLinksOuter>
        </div>
    )
}
