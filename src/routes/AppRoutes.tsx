import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";
import CreateAccount from "../pages/CreateAccount";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
