
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Suspense fallback={<LoadingSpinner />}>
        <App />
    </Suspense>
);
