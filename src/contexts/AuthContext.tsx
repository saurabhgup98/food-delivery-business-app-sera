import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, LoginRequest, RegisterRequest, AuthResponse } from "../services/api/types";
import { authApi } from "../services/api";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<AuthResponse>;
  register: (userData: RegisterRequest) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const isAuth = authApi.isAuthenticated();
        const currentUser = authApi.getCurrentUser();

        if (isAuth && currentUser) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Clear invalid tokens5
        authApi.logout();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Simple auth doesn't need token refresh
  // Removed token refresh logic for simple authentication

  const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authApi.login(credentials);

      if (response.success && response.data.user) {
        // Create user object with role information from response
        const userWithRole = {
          ...response.data.user,
          role: response.data.role,
          availableRoles: response.data.availableRoles,
          appIdentifier: response.data.appIdentifier,
          authMethod: response.data.authMethod
        };
        setUser(userWithRole);
        localStorage.setItem("isLoggedIn", "true");
        // Tokens are already stored by the auth service
      }

      return response;
    } catch (error: any) {
      const errorMessage = error.message || "Login failed";
      setError(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterRequest): Promise<AuthResponse> => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authApi.register(userData);

      if (response.success && response.data.user) {
        // Create user object with role information from response
        const userWithRole = {
          ...response.data.user,
          role: response.data.role,
          availableRoles: response.data.availableRoles,
          appIdentifier: response.data.appIdentifier,
          authMethod: response.data.authMethod
        };
        setUser(userWithRole);
        localStorage.setItem("isLoggedIn", "true");
        // Tokens are already stored by the auth service
      }

      return response;
    } catch (error: any) {
      const errorMessage = error.message || "Registration failed";
      setError(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await authApi.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      handleLogout();
    }
  };

  const handleLogout = (): void => {
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    setIsLoading(false);
  };

  const clearError = (): void => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    error,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
