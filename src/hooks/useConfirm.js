import { useState } from "react";

export function useConfirm({ name, cardNumber, date, cvc, setError }) {
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirm = (e) => {
        e.preventDefault();

        if (name && cardNumber && date && cvc) {
            setConfirmed(true);
            setError("");
        } else {
            setError("Please fill in all fields.");
        }
    };

    return {
        confirmed,
        setConfirmed,
        handleConfirm,
        };
}