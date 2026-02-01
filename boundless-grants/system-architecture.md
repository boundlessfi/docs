---
description: Technical foundation and TrustlessWork integration.
---

# System architecture

Grants combine off-chain workflow with on-chain enforcement.

State lives in the Boundless database.

Payments and disputes live in escrow contracts.

### Core components

#### Grant registry (database)

PostgreSQL stores:

* Programs and configuration.
* Applications and submission metadata.
* Review scores and reviewer comments.
* Milestones and progress state.
* Grantee profiles and delivery history.

#### TrustlessWork escrow integration

Smart contracts handle:

* **Budget locking.** Total grant funds are escrowed on approval.
* **Milestone schedule.** Each milestone has deliverables and a payout %.
* **Tranche release.** Funds transfer on milestone approval.
* **Disputes.** Arbitration paths when parties disagree.
* **On-chain logs.** Key actions are recorded transparently.

#### Review and scoring system

* Weighted criteria.
* 3–5 reviewers per application.
* Score aggregation with basic outlier handling.
* Conflict-of-interest checks.
* Public rubrics.

#### Notification engine

Typical triggers:

* Application submitted → applicant confirmation.
* Under review → weekly status updates.
* Approved or rejected → decision + feedback.
* Milestone due soon → reminder 7 days before deadline.
* Milestone submitted → reviewer notification.
* Milestone approved → payout confirmation.
* Milestone rejected → feedback + resubmission path.

### Grant state machine

Lifecycle states:

* Program announced.
* Applications open.
* Application submitted.
* Under review.
* Approved or rejected.
* Approved → escrow funded → active.
* Active → milestone execution.
* Milestone complete → next milestone or final completion.
* Completed → success tracking.
* Failed → dispute or termination.

### Data flow (application → completion)

1. Committee publishes a program.
2. Applicant submits a complete application.
3. Admin screens for eligibility and completeness.
4. Experts review and score.
5. Committee decides based on scores and fit.
6. Escrow is created and funded.
7. Milestone 1 starts.
8. Grantee submits proof of work.
9. Committee reviews deliverables.
10. Escrow releases the milestone tranche.
11. Repeat for each milestone.
12. Final milestone closes the grant.
13. Impact metrics are tracked over time.
