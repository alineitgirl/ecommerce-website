import { Navbar, Footer} from "@/src/components";

const RootLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default RootLayout;