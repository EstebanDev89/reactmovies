import Backdrop from '../Backdrop'
import Spinner from '../Spinner'

import React from 'react'

export default function Loading() {
    return (
        <Backdrop>
            <Spinner />
        </Backdrop>
    )
}
