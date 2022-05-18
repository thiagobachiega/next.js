import Navbar from './navbar'

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return(
    <>
      <Navbar/>
      <div className="w-2/4 m-auto text-center flex flex-col">{children}</div>
    </>
  )           
}

export default Container