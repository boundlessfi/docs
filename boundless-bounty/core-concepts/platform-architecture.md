---
description: Technical layers and data flow.
---

# Platform architecture

Boundless Bounty runs on Stellar.

It uses Soroban contracts for escrow and platform state.

### Stack (high level)

* **Blockchain:** Stellar (XLM payments).
* **Smart contracts:** Soroban.
* **Smart accounts:** Account abstraction via `smart-account-kit`.
* **Auth:** Passkeys (WebAuthn).
* **App:** Web frontend + backend APIs + database.
* **Files:** IPFS or similar for deliverables (planned).

### Passkey wallet model

* Users sign up with a passkey.
* A Stellar account is created in the background.
* Users never handle seed phrases.

### Typical data flow

1. Project creates a bounty.
2. Project funds escrow in XLM.
3. Contributor applies or claims.
4. Contributor submits deliverables.
5. Project reviews and approves.
6. Escrow releases payment.
7. Reputation and credits update.

{% hint style="info" %}
Account abstraction makes “wallet setup” feel like normal login.
{% endhint %}
