import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { DCPage, HeroesRoutes, MarvelPage } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    );
};
