import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import OTPVerification from "./pages/OTPVerification";
import Bookings from "./pages/Bookings";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import PaymentSuccessful from "./pages/PaymentSuccesful";
import PaymentFailure from "./pages/PaymentFailed";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ForgotPassword />} />
        <Route path="/otpVerification" element={<OTPVerification />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/allBookings" element={<Bookings />} />
        <Route path="/payementDetails" element={<PaymentConfirmation />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/donePayment" element={<PaymentSuccessful />} />
        <Route path="/failedPayment" element={<PaymentFailure />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;
