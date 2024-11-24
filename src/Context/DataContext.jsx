import React , { createContext } from 'react'

export const userContext = createContext()

const DataContext = ({children}) => {
     const data = [{
        desc:'lorem this is the description that im working with react and this is my first react project',
        fileSize: ".9mb",
        close: false,
        tag:{isOpen : false, tagTitle : "Download now" , tagColor : "red"}
    },
    {
      desc:'lorem this is the description that im working with react and this is my first react project',
      fileSize: ".9mb",
      close: false,
      tag:{isOpen : true, tagTitle : "Download now" , tagColor : "blue"}
  },
  {
    desc:'lorem this is the description that im working with react and this is my first react project',
    fileSize: ".9mb",
    close: false,
    tag:{isOpen : true, tagTitle : "Upload" , tagColor : "green"}
}]
  return (
    <div>
        <userContext.Provider value={data} >
            {children}
        </userContext.Provider>
    </div>
  )
}

export default DataContext