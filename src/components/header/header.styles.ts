import styled from 'styled-components'

export const HeaderSection = styled.section({
    background: '#ffffff',
    width: '100%',
    height: '85px',
    position: 'relative'
})

export const RetailHeaderLinksOuter = styled.div({
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    padding: '0px 30px 0px 30px',
    height: '85px',
    justifyContent: 'space-between'
})

export const RetailHeaderLinksInner = styled.div({
    display: 'flex',
    fontFamily: 'Roboto',
    width: '25%',
    fontSize: '14px',
    height: '85px',
    justifyContent: 'space-between',
    alignItems: 'center',
    'a:link': { textDecoration: 'none', color: 'black' },
    'a:visited': {
        color: 'black'
    }
})
