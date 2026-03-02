import { Providers } from "./app/providers";
import AppRoutes from "./routes/AppRoutes.tsx";

export const App = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};
