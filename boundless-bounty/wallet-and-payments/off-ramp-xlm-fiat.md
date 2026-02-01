---
description: Convert XLM to fiat and withdraw to a bank account (planned).
---

# Off-ramp (XLM → fiat)

Off-ramping lets contributors convert earned XLM to fiat.

This feature is planned.

### Partners

* Integrates with regulated on/off-ramp providers.
* Locked quotes with a short time window.
* Coverage across many countries.

### Supported regions (initial)

* USD (US): ACH, wire, debit.
* EUR (EU): SEPA.
* GBP (UK): Faster Payments.
* NGN (Nigeria): bank transfer, mobile money.
* KES (Kenya): M-Pesa.
* INR (India): UPI and bank transfer.

### Flow

1. Open **Wallet → Off-ramp**.
2. Pick a currency.
3. Enter amount in XLM or fiat.
4. Review the rate and fees.
5. Confirm KYC level.
6. Add or select a bank account.
7. Approve with your passkey.
8. Track status until completion.

### KYC limits (tiered)

* **Level 0:** no off-ramp access.
* **Level 1:** up to $500 per transaction and $2,000 per month.
* **Level 2:** up to $10,000 per transaction and $50,000 per month.
* **Enterprise:** custom limits.

### Fees (typical)

* Exchange spread: \~0.5–1.5%.
* Platform fee: 1% (capped at $10).
* Partner fixed fee: often $2–$5.
* Stellar network fee: negligible.

### Fraud controls

* Passkey required for withdrawals.
* Confirmation codes (email + SMS).
* 24-hour hold for first withdrawal to a new bank account.
* Velocity limits and anomaly detection.

### If a transfer fails

* XLM is returned to your wallet.
* You get the failure reason.
* You can correct details and retry.
