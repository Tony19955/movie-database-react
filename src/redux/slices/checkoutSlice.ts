import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types/redux/Store';
import { CheckoutState } from '../../types/redux/CheckoutSlice';
import { CheckoutAddressPayload, PickUpPointAddressPayload } from '../../types/redux/PayloadAction';

const initialState: CheckoutState = {
    checkoutFormStep: 1,
    pickUpPointAddress: {
        id: '',
        city: '',
        name: '',
        postalCode: '',
        street: ''
    },
    shippingAddress: {
        address1: '',
        address2: '',
        city: '',
        country: '',
        dialCode: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        postalCode: '',
        zone: ''
    },
    billingAddress: {
        address1: '',
        address2: '',
        city: '',
        country: '',
        dialCode: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        postalCode: '',
        zone: ''
    },
    shippingMethod: ''
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        goToPreviousStep: (state) => {
            state.checkoutFormStep--;
        },
        goToNextStep: (state) => {
            state.checkoutFormStep++;
        },
        goToInformationStep: (state) => {
            state.checkoutFormStep = 1;
        },
        savePickUpPointAddress: (state, action: PayloadAction<PickUpPointAddressPayload>) => {
            state.pickUpPointAddress = action.payload;
        },
        saveShippingAddress: (state, action: PayloadAction<CheckoutAddressPayload>) => {
            state.shippingAddress = action.payload;
        },
        saveBillingAddress: (state, action: PayloadAction<CheckoutAddressPayload>) => {
            state.billingAddress = action.payload;
        },
        saveShippingMethod: (state, action: PayloadAction<string>) => {
            state.shippingMethod = action.payload;
        },
        clearBillingAddress: (state) => {
            state.billingAddress = {
                address1: '',
                address2: '',
                city: '',
                country: '',
                dialCode: '',
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                postalCode: '',
                zone: ''
            };
        },
        clearPickUpPointAddress: (state) => {
            state.pickUpPointAddress = {
                id: '',
                city: '',
                name: '',
                postalCode: '',
                street: ''
            };
        },
        clearCheckout: (state) => {
            state.pickUpPointAddress = {
                id: '',
                city: '',
                name: '',
                postalCode: '',
                street: ''
            };
            state.shippingAddress = {
                address1: '',
                address2: '',
                city: '',
                country: '',
                dialCode: '',
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                postalCode: '',
                zone: ''
            };
            state.billingAddress = {
                address1: '',
                address2: '',
                city: '',
                country: '',
                dialCode: '',
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                postalCode: '',
                zone: ''
            };
            state.shippingMethod = '';
        }
    }
});

export const selectCheckoutFormStep = (state: RootState) => state.checkout.checkoutFormStep;
export const selectPickUpPointAddress = (state: RootState) => state.checkout.pickUpPointAddress;
export const selectShippingAddress = (state: RootState) => state.checkout.shippingAddress;
export const selectShippingAddressCountry = (state: RootState) => state.checkout.shippingAddress.country;
export const selectBillingAddressCountry = (state: RootState) => state.checkout.billingAddress.country;
export const selectBillingAddress = (state: RootState) => state.checkout.billingAddress;
export const selectShippingMethod = (state: RootState) => state.checkout.shippingMethod;

export const {
    goToNextStep,
    goToPreviousStep,
    goToInformationStep,
    savePickUpPointAddress,
    saveShippingAddress,
    saveBillingAddress,
    saveShippingMethod,
    clearCheckout,
    clearBillingAddress,
    clearPickUpPointAddress
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
