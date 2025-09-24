import { XIcon } from "../Icons";
import { AuthModalsProps } from "./types/AuthFormTypes";
import { useModalState, useFormMode } from "./hooks/AuthFormHooks";
import { LoginForm } from "./forms/LoginForm";
import { RegisterForm } from "./forms/RegisterForm";
import { OAuthButtons } from "./components/OAuthButtons";
import { FormDivider, ModeSwitch } from "./components/AuthFormFields";
import { MODAL_TITLES, MODAL_SUBTITLES } from "./constants/AuthFormConstants";

export default function AuthModals({
  isOpen,
  onClose,
  mode,
  onModeChange,
  onSuccess,
}: AuthModalsProps) {
  // Custom hooks for modal and form management
  const { isAnimating, handleClose } = useModalState(isOpen, onClose);
  const { switchMode } = useFormMode(mode, onModeChange);

  // Handle successful authentication
  const handleAuthSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ top: "80px" }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        style={{ top: "-80px" }}
      ></div>

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-md mx-4 transform transition-all duration-700 ease-out ${
          isAnimating
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-[-100vh] opacity-0 scale-95"
        }`}
      >
        {/* Modal Content */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-2xl shadow-2xl border border-slate-600/30 overflow-hidden max-h-[90vh] flex flex-col">
          {/* Fixed Enhanced Header */}
          <div className="relative bg-gradient-to-r from-sera-blue via-sera-blue/90 to-sera-blue/80 px-6 py-4 flex-shrink-0 overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                  <span className="text-white text-lg font-bold">🔐</span>
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold tracking-wide drop-shadow-sm">
                    {mode === "login"
                      ? MODAL_TITLES.LOGIN
                      : MODAL_TITLES.REGISTER}
                  </h2>
                  <p className="text-white/90 text-sm font-medium tracking-wide">
                    {mode === "login"
                      ? MODAL_SUBTITLES.LOGIN
                      : MODAL_SUBTITLES.REGISTER}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Render appropriate form based on mode */}
              {mode === "login" ? (
                <LoginForm onSuccess={handleAuthSuccess} />
              ) : (
                <RegisterForm onSuccess={handleAuthSuccess} />
              )}

              {/* Form Divider */}
              <FormDivider />

              {/* OAuth Buttons */}
              <OAuthButtons />

              {/* Mode Switch */}
              <ModeSwitch mode={mode} onModeSwitch={switchMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
