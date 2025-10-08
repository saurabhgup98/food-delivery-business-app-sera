import { VALIDATION_MESSAGES } from '../../constants/authConstants';

export interface ValidationErrors {
    [key: string]: string;
}

export const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
        return VALIDATION_MESSAGES.REQUIRED;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return VALIDATION_MESSAGES.EMAIL_INVALID;
    }
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (!password.trim()) {
        return VALIDATION_MESSAGES.REQUIRED;
    }
    if (password.length < 8) {
        return VALIDATION_MESSAGES.PASSWORD_MIN_LENGTH;
    }
    return null;
};

export const validateLoginForm = (formData: { email: string; password: string }): ValidationErrors => {
    const errors: ValidationErrors = {};

    const emailError = validateEmail(formData.email);
    if (emailError) {
        errors.email = emailError;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
        errors.password = passwordError;
    }

    return errors;
};