import React from 'react'

import { HeaderLinksInner } from './header.styles'

export const AccountLinks = () => {
    return (
        <HeaderLinksInner data-testid={'account-links'}>
            <a href={'/'}>Search</a>
            <a href={'/'}>£ GBP</a>
            <a href={'/'}>Account</a>
            <a href={'/'}>Cart (0)</a>
        </HeaderLinksInner>
    )
}
