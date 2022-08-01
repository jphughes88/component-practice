import styled from 'styled-components'

export const HeaderSection = styled.section({
    background: '#ffffff',
    height: '85px',
    position: 'relative'
})

export const RetailHeaderLinksOuter = styled.div({
    display: 'flex',
    flexDirection: 'row',
    padding: '0% 8% 0% 8%',
    height: '85px',
    justifyContent: 'space-between'
})

export const HeaderLinksInner = styled.div({
    display: 'flex',
    fontFamily: 'Roboto',
    width: '25%',
    fontSize: '15px',
    height: '85px',
    justifyContent: 'space-between',
    alignItems: 'center',
    'a:link': { textDecoration: 'none', color: 'black' },
    'a:visited': {
        color: 'black'
    }
})
