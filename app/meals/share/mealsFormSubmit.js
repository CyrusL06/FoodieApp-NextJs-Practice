'use client'

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
    const { pending } = useFormStatus();

    // disable button if submitted 
    return(
    <button disabled={pending}>
    {pending ? 'Submiting...' : 'Share Meal'}
    </button>
    );
}