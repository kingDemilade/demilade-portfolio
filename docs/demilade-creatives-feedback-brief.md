# Demilade Creatives Client Feedback Brief

Status: First release implemented; deployment test pending  
Last updated: August 25, 2026

## Outcome

Create a short, private post-project experience that helps Demilade Creatives:

- Learn what worked well and what could improve
- Collect thoughtful, specific client reflections
- Receive clear permission before using feedback publicly
- Identify clients who may be suitable for a future case study

The first release is a collection form only. It will not include a public
testimonial gallery.

## Working Page Identity

Page title: **Share Your Experience**

Eyebrow: **Client Reflection**

Tone:

- Warm
- Polished
- Thoughtful

Estimated completion time: **About 3 minutes**

Recommended URL:

```text
/share-your-experience
```

This page will normally be shared directly with a client after a project or
service has been fulfilled. It does not need to be a primary navigation item.

## Proposed Introduction

### Heading

**Thank you for creating with me.**

### Supporting copy

Your perspective helps me continue refining the Demilade Creatives experience.
I would love to hear what stood out, what made a difference, and anything I can
carry into future collaborations.

This reflection takes about three minutes. You decide whether your words may be
shared publicly or kept private.

## Proposed Form

### Section 1: About the collaboration

#### 1. Your name

- Field type: text
- Required: yes
- Internal name: `name`
- Helper text: None

#### 2. Business or organization

- Field type: text
- Required: no
- Internal name: `organization`
- Helper text: Leave blank if this project was personal.

#### 3. Email address

- Field type: email
- Required: yes
- Internal name: `email`
- Helper text: Used only if I need to follow up about your feedback. It will not
  be displayed publicly.

#### 4. What did we create together?

- Field type: select
- Required: yes
- Internal name: `service`
- Options:
  - Website Design & Development
  - Motion Graphics & Animation
  - Graphic Design
  - Creative Consultation
  - Website + Creative Support
  - Other

These options intentionally mirror the current service categories instead of
individual package names. This prevents the form from needing an update every
time packages are renamed.

### Section 2: Your experience

#### 5. How would you describe your overall experience?

- Field type: five-point choice
- Required: yes
- Internal name: `rating`
- Visible choices:
  - Exceptional
  - Great
  - Good
  - Fair
  - Needs improvement

Use words alongside any visual scale so the meaning is clear and accessible.
Do not show a public-facing star rating in the first release.

#### 6. What goal or challenge brought you to Demilade Creatives?

- Field type: textarea
- Required: yes
- Internal name: `challenge`
- Suggested helper text: A sentence or two is perfect.

#### 7. What changed, improved, or stood out most during our work together?

- Field type: textarea
- Required: yes
- Internal name: `outcome`
- Suggested helper text: You might think about the process, communication, final
  result, or how the work supported your goals.

#### 8. What could have made the experience even better?

- Field type: textarea
- Required: no
- Internal name: `private_improvement`
- Helper text: This response is always private and will never be used as a
  testimonial.

#### 9. Would you recommend Demilade Creatives? Why or why not?

- Field type: textarea
- Required: no
- Internal name: `recommendation`
- Helper text: Honest feedback is welcome.

### Section 3: Sharing your words

#### Permission introduction

Your feedback is valuable whether it stays between us or is shared. Please
choose how Demilade Creatives may use your responses to questions 6, 7, and 9.
Your private improvement note will never be published.

#### 10. May Demilade Creatives share your feedback?

- Field type: radio group
- Required: yes
- Internal name: `publication_permission`
- Options:
  - Yes, with my name and business or organization
  - Yes, but identify me by first name only
  - Yes, but keep me anonymous
  - No, keep all of my feedback private

No option should be selected by default.

#### 11. Where may approved feedback be used?

- Field type: checkbox group
- Required: only when a public-sharing option is selected
- Internal name: `approved_channels`
- Options:
  - Demilade Creatives website
  - Demilade Creatives social media
  - Proposals and other promotional materials

Include a **Select all** convenience control, but leave every option unchecked
by default.

#### 12. May I contact you about a longer client story?

- Field type: radio group
- Required: no
- Internal name: `case_study_interest`
- Options:
  - Yes, I am open to a follow-up
  - Not at this time

#### Consent note

Demilade Creatives may lightly edit approved feedback for length or clarity
without changing its meaning. You may request an update or removal at any time
by emailing `demilade.creatives@gmail.com`.

#### Submit label

**Share My Experience**

## Confirmation Experience

### Heading

**Thank you for sharing your perspective.**

### Message

Your feedback has been received. I appreciate the time, trust, and creativity
you brought to our collaboration—and I will carry your perspective into what I
create next.

### Actions

- Primary: **Return Home**
- Optional secondary: **View Our Project**, shown only if a relevant project URL
  can be supplied without adding maintenance complexity

## Submission and Review Workflow

### Recommended first-release storage

Use Netlify Forms because the current Demilade Creatives contact form already
uses Netlify's form handling. This provides:

- Private submissions without exposing a spreadsheet feed
- Existing hosting compatibility
- Spam controls and a honeypot pattern already used by the site
- No new database or Apps Script deployment to maintain

Google Sheets may be added later through an export or automation if spreadsheet
reporting becomes useful. It is not required for launch.

### Internal review states

Use these states in the review log or future testimonial data source:

- `new`
- `approved`
- `private`
- `needs-follow-up`
- `archived`

Netlify submissions must not feed directly into a public testimonial page. A
separate, curated public data source should be created only after approval.

### Review routine

1. Open the new form submission.
2. Read the private improvement answer first and note any follow-up needed.
3. Check the publication choice and approved channels.
4. Decide whether the response is private, publishable, or needs clarification.
5. If publishing, create a separate approved testimonial record containing only
   the permitted text and attribution.
6. Preserve the original submission and its permission record.
7. Honor update or removal requests across every approved channel.

## Request Timing

Recommended send time: **two to five business days after final delivery or the
client's successful launch**.

Send the request personally rather than through a generic newsletter. The first
message should be brief and include:

- A genuine thank-you
- The direct form link
- The three-minute expectation
- A statement that honest and private feedback is welcome
- No pressure to provide a public testimonial

### Draft request message

Hi [Client Name],

Thank you again for trusting me with [project or service]. Now that we have
wrapped up, I would love to learn what stood out and what I can continue
improving.

I created a short client reflection that takes about three minutes. Your
feedback can remain completely private—you decide whether any part may be
shared.

[Share your experience]

I appreciate your time and the opportunity to create with you.

## Decisions Made in This Draft

- Collection and public display remain separate.
- The form is not placed in the primary navigation.
- Service categories are broad and stable rather than package-specific.
- Improvement feedback is explicitly private.
- Publication is opt-in and has no default selection.
- Clients control attribution and permitted channels.
- Netlify Forms is the recommended first-release submission method.
- A public testimonials section is deferred until 6–10 strong, approved
  responses have been collected.

## Approved Foundation

The following decisions were approved on August 25, 2026:

1. The page title is **Share Your Experience**.
2. The overall-experience labels are **Exceptional**, **Great**, **Good**,
   **Fair**, and **Needs improvement**.
3. The recommendation question remains optional.
4. Website, social media, and proposals/promotional materials remain separate
   permission channels.
5. Testimonial update or removal requests use
   `demilade.creatives@gmail.com`.
6. The form supports an optional project identifier in the shared URL so the
   completed project can be recorded automatically.

Phase 1 is complete. Visual design and implementation may now begin without
additional foundational decisions.

## Build Readiness Checklist

- Approved content and field structure
- Approved publication choices
- Approved removal-contact method
- Selected submission platform: Netlify Forms
- Existing site form pattern available for reuse
- Public testimonial display explicitly deferred
- Project-aware link behavior approved

Implementation should still include responsive visual QA, keyboard and screen
reader checks, submission success and failure handling, spam protection, and a
real Netlify deployment test before launch.

## First Release Implementation

Implemented on August 25, 2026.

### Pages and supporting files

- `share-your-experience.html`: private client-reflection form
- `experience-thank-you.html`: dedicated confirmation experience
- `js/client-reflection.js`: project-aware links, conditional permissions, and
  client-side validation
- `css/style.css`: responsive light/dark visual treatment

### Link format

Standard link:

```text
https://demilade-creatives.com/share-your-experience
```

Project-aware link:

```text
https://demilade-creatives.com/share-your-experience?project=LolaCooks
```

Project and service-aware link:

```text
https://demilade-creatives.com/share-your-experience?project=LolaCooks&service=Website%20Design%20%26%20Development
```

The `project` value appears above the form and is saved with the submission. A
matching `service` value preselects the service dropdown. Unknown service values
are safely ignored.

### Implemented safeguards

- Both pages use `noindex, nofollow` metadata.
- The page is not included in primary navigation.
- Netlify honeypot spam protection is enabled.
- No publication option is selected by default.
- Public permission reveals a required channel-selection step.
- Private permission clears all public channel selections.
- Improvement feedback is clearly labeled as always private.
- Project URL values are cleaned and length-limited before display.
- The confirmation page is separate from the general contact confirmation.

### Pre-launch requirement

Netlify only activates and detects the form after a deployment. Before sending
the link to clients:

1. Deploy the updated site through its existing Netlify workflow.
2. Confirm that `client-reflection` appears in the Netlify Forms dashboard.
3. Submit one private test response.
4. Submit one public-permission test response with at least one channel.
5. Confirm both submissions appear with every expected field.
6. Confirm the redirect reaches `experience-thank-you.html`.
7. Delete or archive the test responses.
