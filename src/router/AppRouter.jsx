import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DCPage, HeroesRoutes, MarvelPage } from "../heroes";
import { Navbar } from "../ui";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    );
};
