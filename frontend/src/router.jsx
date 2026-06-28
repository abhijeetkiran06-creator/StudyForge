import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Study from "./pages/Study";
import Progress from "./pages/Progress";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/chat",
        element: <Chat />
    },
    {
        path: "/study",
        element: <Study />
    },
    {
        path: "/progress",
        element: <Progress />
    },
    {
        path: "/quiz",
        element: <Quiz />
    },
    {
        path: "/flashcards",
        element: <Flashcards />
    },
    {
        path: "/settings",
        element: <Settings />
    }
]);

export default router;