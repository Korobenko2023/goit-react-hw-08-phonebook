import { HeaderNav } from "components/HeaderNav/HeaderNav";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <HeaderNav />     
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>        
        <Toaster position="top-right" reverseOrder={false}/>     
    </div>
  );
};
