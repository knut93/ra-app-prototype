import React from 'react'
interface PropsInterface {
    children: React.ReactNode,

}
function ButtonTest({children}: PropsInterface) {
  return (
    <button>{children}</button>
  )
}

export default ButtonTest