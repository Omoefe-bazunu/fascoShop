import { ResetPasswordPage1 } from "./components/Authenthication/ResetPasswordPage1"
import { ResetPasswordPage2 } from "./components/Authenthication/ResetPasswordPage2"
import { ResetPasswordPage3 } from "./components/Authenthication/ResetPasswordPage3"
import { SignInPage } from "./components/Authenthication/SignInPage"
import {SignUpPage} from "./components/Authenthication/SignUpPage"
import { HeroSection } from "./components/HomePage/HeroSection"
import { Partners } from "./components/HomePage/Partners"
import { Trial } from "./components/HomePage/Trial"
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
      <Trial />
    </div>
    </>
  )
}

export default App
