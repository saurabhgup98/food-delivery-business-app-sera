import React from "react";
import { BUTTON_TEXT, CSS_CLASSES } from "../constants/AuthFormConstants";
import { PrimarySubmitBtn } from "../../Buttons";
import { buttonData } from "../../Buttons/buttonData";
import { PrimaryInput, PrimaryInputProps } from "../../Input";

export const AuthInput: React.FC<PrimaryInputProps> = (props) => {
  return <PrimaryInput {...props} />;
};

interface SubmitButtonProps {
  isLoading: boolean;
  mode: "login" | "register";
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading,
  mode,
  disabled = false,
}) => {
  const getButtonText = () => {
    if (isLoading) {
      return mode === "login"
        ? BUTTON_TEXT.SIGNING_IN
        : BUTTON_TEXT.CREATING_ACCOUNT;
    }
    return mode === "login" ? BUTTON_TEXT.SIGN_IN : BUTTON_TEXT.CREATE_ACCOUNT;
  };

  const getLoadingText = () => {
    return mode === "login"
      ? BUTTON_TEXT.SIGNING_IN
      : BUTTON_TEXT.CREATING_ACCOUNT;
  };

  return (
    <PrimarySubmitBtn
      btnProps={buttonData.SubmitBtnProps}
      isLoading={isLoading}
      loadingText={getLoadingText()}
      disabled={disabled}
    >
      {getButtonText()}
    </PrimarySubmitBtn>
  );
};

/**
 * Reusable error display component
 */
interface ErrorDisplayProps {
  error: string | null;
  className?: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  className = "",
}) => {
  if (!error) return null;

  return (
    <div
      className={`mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg ${className}`}
    >
      <p className="text-red-400 text-sm font-medium">{error}</p>
    </div>
  );
};

/**
 * Reusable form divider component
 */
export const FormDivider: React.FC = () => {
  return (
    <div className="flex items-center my-6">
      <div className="flex-1 border-t border-slate-600/50"></div>
      <span className="px-4 text-gray-400 text-sm font-medium tracking-wide">
        or continue with
      </span>
      <div className="flex-1 border-t border-slate-600/50"></div>
    </div>
  );
};

/**
 * Reusable mode switch component
 */
interface ModeSwitchProps {
  mode: "login" | "register";
  onModeSwitch: () => void;
}

export const ModeSwitch: React.FC<ModeSwitchProps> = ({
  mode,
  onModeSwitch,
}) => {
  return (
    <div className="mt-6 text-center">
      <span className="text-gray-400 text-sm font-medium tracking-wide">
        {mode === "login"
          ? "Don't have an account? "
          : "Already have an account? "}
      </span>
      <button onClick={onModeSwitch} className={CSS_CLASSES.MODE_SWITCH}>
        {mode === "login" ? BUTTON_TEXT.SIGN_UP_HERE : BUTTON_TEXT.SIGN_IN_HERE}
      </button>
    </div>
  );
};
