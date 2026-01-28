import { Navigate, Route, Routes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../components/LoginForm/LoginForm";
import Users from "../pages/users/Users";
import Analytics from "../pages/analytics/Analytics";
import Orders from "../pages/orders/Orders";
import Notifications from "../pages/notifications/Notifications";
import Settings from "../pages/settings/Settings";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
