import Footer from "../Footer/Footer"
import Navbar from "../NavBar/Navbar"
import Setting from "../NavBar/setting/Setting"

 // eslint-disable-next-line react/prop-types
 const Layout = ({ children }) => {
  return (
      <>
      

  
     <div className="shadow-sm">
       <Setting/>
      <Navbar/>
     </div>
      
      <div className=" min-h-[100vh] md:min-h-[85vh] flex flex-col flex-nowrap  items-stretch">{children}</div>
   <Footer/>
      
     
      </>
   
   
  )
}

export default Layout