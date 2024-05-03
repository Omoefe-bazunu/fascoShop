import { ResetPasswordPage1 } from "./components/Authenthication/ResetPasswordPage1"
import { ResetPasswordPage2 } from "./components/Authenthication/ResetPasswordPage2"
import { ResetPasswordPage3 } from "./components/Authenthication/ResetPasswordPage3"
import { SignInPage } from "./components/Authenthication/SignInPage"
import {SignUpPage} from "./components/Authenthication/SignUpPage"
import { Deals } from "./components/HomePage/Deals"
import { HeroSection } from "./components/HomePage/HeroSection"
import { NewArrivals } from "./components/HomePage/NewArrivals"
import { Partners } from "./components/HomePage/Partners"
import { NavBar } from "./components/NavBar"


function App() {

  return (
    <>
    <div className="wrapper bg-gray-50 h-screen w-full">
      {/* <SignUpPage /> */}
      {/* <SignInPage /> */}
      {/* <ResetPasswordPage1 /> */}
      {/* <ResetPasswordPage2 /> */}
      {/* <ResetPasswordPage3 /> */}
      <NavBar />
      <HeroSection />
      <Partners />
      <Deals />
      <NewArrivals />
    </div>
    </>
  )
}

export default App
