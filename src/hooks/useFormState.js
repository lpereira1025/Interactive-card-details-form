import { useState } from "react";

export const useFormState = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("01/23");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, ""); // Remove spaces
    const formattedValue = value
      .replace(/\D/g, "") // Remove non-numeric characters
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Add spaces after every 4 digits
    setCardNumber(formattedValue);
  };

  const handleCvcChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvc(value);
    }
  };

  const resetForm = () => {
    setName("");
    setCardNumber("");
    setDate("01/23");
    setCvc("");
    setError("");
  };

  return {
    name,
    setName,
    cardNumber,
    handleCardNumberChange,
    date,
    setDate,
    cvc,
    handleCvcChange,
    error,
    setError,
    resetForm,
  };
};
