import { format } from "date-fns";
import logo from "../../images/card-logo.svg";
import ThankYou from '../thankYou/thankYou';
import { useFormState } from "../../hooks/useFormState";
import { useConfirm } from "../../hooks/useConfirm";

const CardForm = () => {
  const {
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
  } = useFormState();

  const { confirmed, setConfirmed, handleConfirm } = useConfirm({
    name,
    cardNumber,
    date,
    cvc,
    setError,
  });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
      <div className="mt-10 mx-5 grid grid-cols-1">
        <article className="front-card p-5 flex flex-col justify-between">
          <img src={logo} alt="" className="w-20 lg:w-28" />

          <div>
            <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">
              {cardNumber}
            </h2>

            <ul className="flex items-center justify-between">
              <li className="text-white uppercase text-base lg:text-xl tracking-widest">
                {name}
              </li>
              <li className="text-white text-base lg:text-xl tracking-widest">
                {format(new Date(date), "MM/yy")}
              </li>
            </ul>
          </div>
        </article>

        <article className="back-card relative lg:ml-20">
          <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest">
            {cvc}
          </p>
        </article>
      </div>

      <div className="pt-8 px-5 pb-20">
        {!confirmed && (
          <form
            className="flex flex-col justify-center gap-8 max-w-lg lg:h-screen"
            onSubmit={handleConfirm}
          >
            <div>
              <label htmlFor="cardholder_name">Cardholder Name</label>
              <input
                type="text"
                name="cardholder_name"
                id="cardholder_name"
                placeholder="e.g. Jane Appleseed"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="card_number">Card Number</label>
              <input
                type="text"
                name="card_number"
                id="card_number"
                placeholder="e.g. 1234 5678 9012 3456"
                required
                maxLength={19}
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>

            <article className="flex items-center justify-between gap-8">
              <div className="flex-1">
                <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
                <input
                  type="month"
                  name="expiry_date"
                  id="expiry_date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  placeholder="e.g. 123"
                  required
                  maxLength={3}
                  value={cvc}
                  onChange={handleCvcChange}
                />
              </div>
            </article>

            {error && (
              <p className="text-red-500 text-center">{error}</p>
            )}

            <button type="submit" className="btn">
              Confirm
            </button>
          </form>
        )}

        {confirmed && <ThankYou setConfirmed={setConfirmed} resetForm={resetForm} />}
      </div>
    </div>
  );
};

export default CardForm;
