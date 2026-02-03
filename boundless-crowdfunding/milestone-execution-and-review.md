---
description: Submission, verification, and tranche releases.
---

# Milestone execution & review

Milestones start after the campaign is funded.

Review gates each payout.

### Activation

* Goal reached → funds lock in escrow.
* Milestone 1 activates automatically.
* Delivery date and progress tracker show publicly.

### Creator submission

Creators submit:

* Written report
* Links to deliverables (GitHub, demos, content)
* Evidence (screenshots, metrics, test results)
* Supporting materials

### Review process

Reviewers check:

* Scope match
* Completeness and quality
* Acceptance criteria
* Deliverable validity (tests, demos)

Reviewer decisions:

* **Approve**
* **Request revisions**
* **Reject**

### Outcomes

* Approved → escrow releases funds immediately → next milestone activates.
* Revisions → creator updates and resubmits (typical window **7–14 days**).
* Rejected → creator gets reasoning (appeal window **24–48 hours**).

### Timeline enforcement (automation)

* 7 days before deadline: reminder.
* Deadline day: final reminder.
* 7 days overdue: yellow flag.
* 14 days overdue: creator must post a public explanation.
* 30 days overdue: admin review triggers.
* 60 days overdue: possible termination and dispute.

### Fund release mechanism

1. Reviewer approves milestone.
2. System calculates tranche amount (milestone %).
3. TrustlessWork escrow executes release.
4. Asset transfers to creator wallet.
5. On-chain transaction logs.
6. Creator + backers notified.
