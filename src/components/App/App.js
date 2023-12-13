// import { AppContainer, AppTitle, AppTitleContact } from "./App.style";
// import { GlobalStyle } from "components/Services/GlobalStyle";
// import { ContactForm } from "components/ContactForm/ContactForm";
// import { Filter } from "components/Filter/Filter";
// import { ContactList } from "components/ContactList/ContactList";

// import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";

// import toast, { Toaster } from "react-hot-toast";




// import { useEffect } from "react";
// import { Loader } from "components/Loader/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "redux/auth/operations";
// import { selectIsRefreshing } from "redux/auth/selectors";
// import { Route, Routes } from "react-router-dom";
// import { AppLayout } from "./AppLayout";

// export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);
  
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route path="/" element={<AppLayout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );




  //  ( <AppContainer>        
  //        <AppTitle>Phonebook</AppTitle>
  //        <ContactForm /> 
  //        {isLoading && !error && <Loader />}
  //        {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
  //        {contacts.length > 0 ? (
  //            <>
  //              <AppTitleContact>Contacts list</AppTitleContact>              
  //              <Filter />
  //              <ContactList />
  //            </>
  //           ) : null}        
  //       <Toaster position="top-center"/> 
  //       <GlobalStyle />
  //     </AppContainer>
  //   );  
  
  
  
  
  
  
  
// };
  
 

 