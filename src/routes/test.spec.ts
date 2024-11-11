import { FormValidator, type FormData, updateQuantity } from "$lib/formValidator";
import { test, expect, describe } from 'vitest';

describe('FormValidator', () => {
    // Helper function to create valid form data
    const createValidFormData = (): FormData => ({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "12345678901",
        country: "USA",
        region: "California",
        cityMunicipality: "Los Angeles",
        barangay: "N/A",
        street: "123 Main St",
        quantity: 1
    });

    describe('validateForm', () => {
        test('should return no errors for valid form data', () => {
            const formData = createValidFormData();
            const errors = FormValidator.validateForm(formData);
            expect(errors).toEqual({});
        });

        test('should validate first name', () => {
            const formData = {
                ...createValidFormData(),
                firstName: "John123"
            };
            const errors = FormValidator.validateForm(formData);
            expect(errors.firstName).toBe('First name should only contain letters');
        });

        test('should validate last name', () => {
            const formData = {
                ...createValidFormData(),
                lastName: "Doe123"
            };
            const errors = FormValidator.validateForm(formData);
            expect(errors.lastName).toBe('Last name should only contain letters');
        });

        test('should validate email format', () => {
            const invalidEmails = [
                "invalid.email",
                "invalid@email",
                "invalid@email.org",
                "@email.com",
                "email@.com"
            ];

            invalidEmails.forEach(email => {
                const formData = {
                    ...createValidFormData(),
                    email
                };
                const errors = FormValidator.validateForm(formData);
                expect(errors.email).toBe('Invalid email format');
            });
        });

        test('should validate phone number', () => {
            const invalidPhones = [
                "123",
                "123456789",
                "123456789012",
                "abcdefghijk",
                "123-456-7890"
            ];

            invalidPhones.forEach(phone => {
                const formData = {
                    ...createValidFormData(),
                    phoneNumber: phone
                };
                const errors = FormValidator.validateForm(formData);
                expect(errors.phoneNumber).toBe('Phone number must be 11 digits');
            });
        });
    });

    describe('isFormValid', () => {
        test('should return true for empty errors object', () => {
            expect(FormValidator.isFormValid({})).toBe(true);
        });

        test('should return false when errors exist', () => {
            const errors = {
                firstName: 'First name should only contain letters'
            };
            expect(FormValidator.isFormValid(errors)).toBe(false);
        });
    });
});

describe('updateQuantity', () => {
    describe('increase', () => {
        test('should increment quantity by 1', () => {
            expect(updateQuantity.increase(1)).toBe(2);
            expect(updateQuantity.increase(5)).toBe(6);
        });
    });

    describe('decrease', () => {
        test('should decrement quantity by 1 but not below 1', () => {
            expect(updateQuantity.decrease(2)).toBe(1);
            expect(updateQuantity.decrease(5)).toBe(4);
            expect(updateQuantity.decrease(1)).toBe(1); // Should not go below 1
        });
    });
});