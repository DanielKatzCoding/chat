import React from 'react'
import { IMsg } from '../../types/types'

const Msg = ({ msgs }: { msgs: IMsg }) => {
  return (
    <div>
      {msgs.text}
    </div>
  )
}

export default Msg