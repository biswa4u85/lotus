import { lazy, Suspense } from "react";
import { useTheme } from "./theme/use-theme";

const DarkTheme = lazy(() => import("./theme/dark-theme"));
const LightTheme = lazy(() => import("./theme/light-theme"));

const ThemeProvider = ({ children }) => {
  const [darkMode] = useTheme();
  return (
    <>
      <Suspense fallback={<span />}>
        {darkMode ? <DarkTheme /> : <LightTheme />}
      </Suspense>
      {children}
    </>
  );
};
export default ThemeProvider