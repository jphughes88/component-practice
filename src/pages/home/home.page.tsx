import React from 'react'

import RabbitBackground from '../../components/assets/rabbit-background.png'
import { Header } from '../../components/header/header'
import { HeaderSection } from '../../components/header/header.styles'
import { BackgroundImage } from './home.page.styles'

export const HomePage = () => {
    return (
        <div>
            <HeaderSection>
                <Header />
            </HeaderSection>
            <BackgroundImage>
                <img src={RabbitBackground} alt={'rabbit-background'}></img>
            </BackgroundImage>
        </div>
    )
}
