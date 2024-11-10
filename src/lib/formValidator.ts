export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    region: string;
    cityMunicipality: string;
    barangay: string;
    street: string;
    quantity: number;
}

export interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
}

export class FormValidator {
    private static validateName(name: string): boolean {
        return /^[A-Za-z\s]+$/.test(name);
    }

    private static validateEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('.com');
    }

    private static validatePhone(phone: string): boolean {
        return /^\d{11}$/.test(phone);
    }

    public static validateForm(formData: FormData): FormErrors {
        const errors: FormErrors = {};

        if (!this.validateName(formData.firstName)) {
            errors.firstName = 'First name should only contain letters';
        }

        if (!this.validateName(formData.lastName)) {
            errors.lastName = 'Last name should only contain letters';
        }

        if (!this.validateEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!this.validatePhone(formData.phoneNumber)) {
            errors.phoneNumber = 'Phone number must be 11 digits';
        }

        return errors;
    }

    public static isFormValid(errors: FormErrors): boolean {
        return Object.keys(errors).length === 0;
    }
}

export const updateQuantity = {
    increase: (quantity: number): number => quantity + 1,
    decrease: (quantity: number): number => Math.max(1, quantity - 1)
};