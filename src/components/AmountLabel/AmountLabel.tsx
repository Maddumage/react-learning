import React, { FC } from "react";
import { Currency } from "../../constants";

type AmountLabelProps = {
  amount?: number;
  currency?: Currency;
  label?: string;
};

const AmountLabel: FC<AmountLabelProps> = ({
  amount = 0,
  currency = Currency.USD,
  label,
}) => {
  return (
    <div>
      {label && <span>{label}</span>}
      <span>
        {currency}
        {amount.toFixed(2)}
      </span>
    </div>
  );
};

export default AmountLabel;
