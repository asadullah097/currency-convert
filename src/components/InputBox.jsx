import { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}) {
    const id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1-2">
                <label htmlFor="currency" className="text-black/2 mb-2 inline-block">{label}</label>
                <input
                    id={id}
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={amountDisabled}
                    placeholder="Amount"
                    className="outline-none w-full bg-transparent py-1.5"
                />
            </div>
            <div className="w-1-2 flex flex-wrap justify-end text-right">
                <p className="text-black/20 mb-2 w-full">Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export { InputBox };
