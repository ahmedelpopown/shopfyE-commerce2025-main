import Footer from "../Footer/Footer"
import Navbar from "../NavBar/Navbar"
import Setting from "../NavBar/setting/Setting"

 // eslint-disable-next-line react/prop-types
 const Layout = ({ children }) => {
  return (
      <>
      

 
         <Setting/>
<div className=" z-[100] sticky top-0 left-0">
  <Navbar />
</div>

<div className="relative z-100">
  {children}
</div>
   <Footer/>
      
     
      </>
   
   
  )
}

export default Layout