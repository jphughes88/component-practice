import React, { useEffect, useState } from 'react'

import { NOTICES } from '../../utils/banner-utils'
import { HeaderBanner } from '../header/header.styles'

export const NoticeBanner = () => {
    const [noticeIndex, setNoticeIndex] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            noticeIndex < NOTICES.length - 1 ? setNoticeIndex(noticeIndex + 1) : setNoticeIndex(0)
        }, 6000)
    }, [noticeIndex])

    return <HeaderBanner>{NOTICES[noticeIndex]}</HeaderBanner>
}
