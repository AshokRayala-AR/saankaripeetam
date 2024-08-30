import Home from "./components/home/Home"
import ForgotPassword from "./components/signups/ForgotPassword"
import OTPPage from "./components/signups/OTPPage"
import PasswordComplete from "./components/signups/PasswordComplete"
import SetPassword from "./components/signups/SetPassword"
import SignIn from "./components/signups/SignIn"
import SignUpMain from "./components/signups/SignUpmain"
import SignUpCreate from "./components/signups/SignUpCreate"
import AboutPage from "./components/about/AboutPage"
import ContactUsPage from "./components/contactus/ContactUsPage"
import DonationPaymentPage from "./components/donationpayment/DonationPaymentPage"
import JoinUsPage from "./components/joinus/JoinUsPage"
import LotusFramer from "./components/home/founder/lotusframer"
import CartPage from "./components/cart/CartPage"

function App() {

  return (
    <div>
      {/* <CartPage /> */}
      <Home />
      {/* <LotusFramer /> */}


      <div>
         <DonationPaymentPage />
      </div>


      <div>
      <SignIn />
      <SignUpMain />
      <SignUpCreate />
      <ForgotPassword />
      <OTPPage />
      <SetPassword />
      <PasswordComplete />
      </div>

      
    </div>
  )
}

export default App;

<div>
      <SignIn />
      <SignUpMain />
      <SignUpCreate />
      <ForgotPassword />
      <OTPPage />
      <SetPassword />
      <PasswordComplete />
      </div>

//       {/* <div>
//         <AboutPage />
//       </div> */}

//       <div>

//         <ContactUsPage />

//       </div>

//       <div>
//         <LotusFramer />
//       </div>

//       <div>
//         <DonationPaymentPage />
//       </div>

//       <div>
//         <JoinUsPage />
//       </div> */}

