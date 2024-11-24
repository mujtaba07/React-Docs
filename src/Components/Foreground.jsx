import React, { useContext, useRef } from 'react'
import Card from './Card'
import { userContext } from '../Context/DataContext'

const Foreground = () => {
    // const data = [{
    //     desc:'lorem ddadyig dduwdwdgwyi dwydgwydgw dywdgwydg',
    //     fileSize: ".9mb",
    //     close: false,
    //     tag:{isOpen : false, tagTitle : "Download now" , tagColor : "green"}
    // }]
    const ref = useRef(null)
    const data = useContext(userContext)
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card key={index} data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground