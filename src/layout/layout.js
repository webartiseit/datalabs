import MainFooter from "./footer";
import MainHeader from "./header";

const Layout =(props)=>{
    return(
       <>
       <MainHeader/>
       {
        props.children
       }
       <MainFooter/>
       </> 
    )
}
export default Layout;