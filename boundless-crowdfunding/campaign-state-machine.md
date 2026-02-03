---
description: Lifecycle states and allowed transitions.
---

# Campaign state machine

Campaigns move through a strict state machine.

It prevents skipping validation or escrow.

### States

* **Draft**: Creator configures campaign. Not public.
* **Submitted**: Waiting for admin review.
* **Validated (Idea)**: Community voting is open.
* **Campaigning**: Funding is live. Pledges accepted.
* **Funded**: Goal reached. Funds locked in escrow.
* **Executing**: Milestones delivered and reviewed.
* **Completed**: All milestones approved.
* **Failed**: Deadline passed without reaching goal. Refunds executed.

### Transitions

* Draft → Submitted: Creator clicks **Submit for Review**.
* Submitted → Validated: Admin approves.
* Validated → Campaigning: Voting threshold reached.
* Campaigning → Funded: Funding goal reached before deadline.
* Campaigning → Failed: Deadline passes without reaching goal.
* Funded → Executing: Milestone 1 activates.
* Executing → Completed: All milestones approved.
