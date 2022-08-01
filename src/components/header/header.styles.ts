import styled from 'styled-components'

export const HeaderSection = styled.section({
    background: '#ffffff',
    width: '100%',
    height: '85px',
    position: 'relative'
})

export const RetailHeaderLinksOuter = styled.div({
    position: 'absolute',
    top: '50%',
    margin: 0,
    padding: '0px 0px 0px 10px',
    transform: 'translateY(-50%)'
})

export const RetailHeaderLinksInner = styled.div({
    display: 'inline',
    textAlign: 'left',
    'font-family': 'Roboto',
    'font-size': '14px',
    'a:link': { 'text-decoration': 'none', color: 'black' },
    a: {
        padding: '0px 15px 0px 15px'
    },
    'a:visited': {
        color: 'black'
    }
})
