import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PublicPages/Homepage/LandingPage/LandingPage")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Login"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/Password/:email",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Password/Password"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/Email-verification/:email",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Emailverification/Emailverification")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/Profile-information",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/ProfileInformation/ProfileInformation")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-number",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Addnumber/Addnumber"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/verify-number",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Mobileverification/Mobileverification")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/Dashboard",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Dashboard/MainComponent/Maincomponent")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/Profile",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Dashboardpages/Profilepage"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/allemailsuser",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Dashboardpages/editprofileemail"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/show-all-numbers-of-users",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Dashboardpages/Showmobilenumbers"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-secondary-mobile-number",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Addsecondarymobile/Addsecondarymobile")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/verify-secondary-mobile-number",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Verifysecondarymobile/Verifysecondarymobile")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/addgenderuser",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Dashboardpages/addgender"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-dob-user",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Dashboardpages/Adddob"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-secondary-email",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Addsecondaryemail/Addsecondaryemail")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-secondary-email-otp-verify",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Secondaryemailotpverify/Secondaryemailotpverify")
      )
    ),
    ispublic: true,
    exact: true,
  },

  {
    path: "/create-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Createpassword/Createpassword")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/forget-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Forgetpassword/Forgetpassword")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/reset-password",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Resetpassword/Resetpassword"))
    ),
    ispublic: true,
    exact: true,
  },
  // {
  //   path: "/advisor",
  //   component: lazy(() =>
  //     fakeDelay(delayTime)(import("../Pages/PublicPages/Advisor/Advisor"))
  //   ),
  //   ispublic: false,
  //   exact: true,
  // },
  {
    path: "/addAdvisor",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/addAdviser"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/editAdvisor/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/addAdviser"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/advisorListing",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Advisor/Advisor"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/view-profile/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/ViewprofileAdmin/ViewprofileAdmin")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Admin-Public",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Advisor/Advisor"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Dashboard-Admin",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/DashboardAdmin/DashboardAdmin")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/Aboutus",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Aboutus/Aboutus"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/change-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/Changepassword/Changepassword")
      )
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/terms",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Terms/Terms"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/faq",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/PublicPages/Faq/Faq"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/signup",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Auth/SignUpSeller/SignUpSeller.jsx")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/confirm-mail",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Pages/ConfirmMail/ConfirmMail")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/business",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Business/ManageBusiness"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/add-business",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Business/AddBusiness"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/startup",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Seller/Pages/Startup/Startup"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/listing",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Seller/Pages/Mylisting/Mylisting"))
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/createprofile",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Seller/Pages/Createprofile/Createprofile")
      )
    ),
    ispublic: true,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
