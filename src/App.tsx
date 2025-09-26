import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Referral from "./pages/Referral";
import PersonalCare from "./pages/services/PersonalCare";
import CommunityParticipation from "./pages/services/CommunityParticipation";
import SupportedIndependentLiving from "./pages/services/SupportedIndependentLiving";
import HouseholdTasks from "./pages/services/HouseholdTasks";
import TransportSupport from "./pages/services/TransportSupport";
import EmploymentSupport from "./pages/services/EmploymentSupport";
import LifeSkillsDevelopment from "./pages/services/LifeSkillsDevelopment";
import MealPreparation from "./pages/services/MealPreparation";
import RespiteCare from "./pages/services/RespiteCare";
import ScrollToTop from "./components/ScrollToTop";
// import FindUs from "./components/findus";
import ContactFab from "./components/ContactFab";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/services/personal-care" element={<PersonalCare />} />
          <Route path="/services/community-participation" element={<CommunityParticipation />} />
          <Route path="/services/supported-independent-living" element={<SupportedIndependentLiving />} />
          <Route path="/services/household-tasks" element={<HouseholdTasks />} />
          <Route path="/services/transport-support" element={<TransportSupport />} />
          <Route path="/services/employment-support" element={<EmploymentSupport />} />
          <Route path="/services/life-skills-development" element={<LifeSkillsDevelopment />} />
          <Route path="/services/meal-preparation" element={<MealPreparation />} />
          <Route path="/services/respite-care" element={<RespiteCare />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
        {/* <FindUs showMap={true} showForm={false} /> */}
        <Footer />
        <ScrollToTop />
        <ContactFab />
      </div>
    </BrowserRouter>
  );
}

export default App;
