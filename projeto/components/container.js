import Navbar from './navbar'

export default function Container({children}) {
    return(
        <>
        <Navbar/>
        <div className="w-2/4 m-auto text-center flex flex-col">{children}</div>
        </>
        
    )
}