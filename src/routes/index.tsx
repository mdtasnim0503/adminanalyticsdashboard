import { Navigate, Route, Routes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Dashboard from "../components/Dashboard/Dashboard";
import MainLayout from "../MainLayout/MainLayout";
import LoginForm from "../MainLayout/LoginForm/LoginForm";
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
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
