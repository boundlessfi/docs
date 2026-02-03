---
description: Components, data flow, and TrustlessWork integration.
---

# System architecture

Crowdfunding is a hybrid system.

Metadata is off-chain.

Funds movement is on-chain.

### Key components

* **Campaign Registry**: Campaign metadata.
  * Storage: PostgreSQL.
  * Long-form content: IPFS (or equivalent).
* **Escrow contracts**: Hold and release funds.
  * Protocol: TrustlessWork.
* **Voting engine**: Community validation.
  * Model: On-chain governance.
* **Milestone tracker**: Proof collection and status.
  * Model: Hybrid (off-chain review, on-chain execution).
* **Notification service**: Real-time updates.
  * WebSocket + email.

### End-to-end data flow

1. Creator submits campaign.
2. Campaign Registry stores metadata.
3. Admin reviews and updates status.
4. Community votes.
5. Threshold reached → campaign goes live.
6. Backers pledge → funds deposit to escrow.
7. Goal reached → funds lock.
8. Creator submits milestone proof.
9. Reviewer approves → escrow releases tranche.
10. Final milestone approved → campaign completes.

### TrustlessWork escrow integration

Smart contract functions (conceptual):

* `createCampaignEscrow(campaignId, goalAmount, milestones[])`
* `depositPledge(campaignId, backerAddress, amount)`
* `lockFunds(campaignId)`
* `releaseMilestone(campaignId, milestoneId, creatorAddress, amount)`
* `refundBackers(campaignId)`
* `disputeMilestone(campaignId, milestoneId)`
