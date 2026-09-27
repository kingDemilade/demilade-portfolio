# Client Feedback and Testimonial Workflow

Last updated: August 25, 2026

## Purpose

This document defines a reusable process for collecting client feedback after a
service is fulfilled. The experience should feel native to each brand while the
underlying workflow remains simple, consistent, and easy to maintain.

This system may be used for Demilade Creatives, LolaCooks, MPL Recovery, and
future client websites.

## Guiding Principle

Build a private feedback experience first and a public testimonial experience
second.

Clients should be able to give honest feedback without assuming that every
answer will be published. A testimonial is created only when the client grants
permission and the site owner approves it.

## Reusable System

The implementation has two layers.

### Shared operational core

This remains consistent across brands:

1. A client receives a direct link after service completion.
2. The client completes a short, mobile-friendly feedback form.
3. The submission is written to a private Google Sheet.
4. New submissions are unpublished by default.
5. The site owner reviews the response and its publication permission.
6. Approved responses may later appear on the website.
7. The client sees a branded thank-you message after submitting.

The first version does not require a database, client login, CMS, search,
filters, video uploads, or automatic public publishing.

### Brand-specific layer

These decisions change for each website:

- Page name and introductory copy
- Tone of voice
- Colors, typography, imagery, and motion
- Service/category choices
- Question wording
- Client terminology
- Thank-you message
- Whether public testimonials appear on a dedicated page or within existing
  pages

Examples:

- Demilade Creatives: **Share Your Experience** or **Client Reflections**
- LolaCooks: language centered on the meal, occasion, hospitality, and guest
  experience
- MPL Recovery: language centered on care, recovery, confidence, performance,
  and the athlete/parent/coach relationship

## Minimum Form Structure

The recommended form should take approximately three minutes.

### Identity and context

- Name
- Organization, title, or relationship to the service, when relevant
- Service received
- Project or service completion date, optional

### Experience

- Overall satisfaction rating
- What need, challenge, or goal brought you to us?
- What changed, improved, or stood out most?
- Would you recommend working with us? Why?

The transformation questions should be adapted to the brand. They should invite
specific, useful answers instead of generic praise.

### Publication permission

The client must choose one clear option:

- Publish with my name and organization
- Publish anonymously
- Keep this feedback private

Permission to publish does not guarantee publication. Every response remains
subject to owner review.

### Optional follow-up permissions

These should only be included when the brand has a real use for them:

- Permission to show a headshot or company logo
- Permission to contact the client for a longer case study
- Permission to use the response on social media or marketing materials

## Recommended Data Schema

Use consistent internal column names even when the visible questions differ by
brand:

```text
Timestamp
Status
Brand
Name
Organization
ClientType
Service
Rating
Challenge
Outcome
Recommendation
PublicationPermission
DisplayName
AssetPermission
InternalNotes
```

Recommended `Status` values:

- `new`
- `approved`
- `private`
- `needs-follow-up`
- `archived`

The public website must never rely on publication permission alone. A response
should be displayed only when both permission and approval allow it.

## Content and Privacy Rules

- Explain how feedback may be used before submission.
- Do not preselect permission to publish.
- Do not make public permission a requirement for submitting feedback.
- Keep private feedback out of publicly accessible JSON or CSV files.
- Avoid collecting sensitive information that is not needed.
- For health-related brands such as MPL Recovery, do not prompt clients to
  disclose diagnoses or detailed medical information.
- For minors, obtain the appropriate parent or guardian authorization before
  publishing identifying information.
- Preserve the client's meaning when editing a quote for length or clarity.
- Keep a record of the permission attached to every published testimonial.

## Design Pattern

The collection page should be focused and welcoming:

1. Familiar brand header or a simplified brand mark
2. Short introduction explaining the purpose and time required
3. One visually cohesive form
4. Clear required and optional fields
5. Plain-language publication choices
6. Submit button with a specific label, such as **Share My Experience**
7. Branded confirmation state

Avoid adding a public testimonial gallery to the collection form. Collection
and display serve different audiences and should remain separate experiences.

## Delivery Phases

### Phase 1: Brand brief and decisions

Complete the discovery worksheet below and approve the form questions,
permissions, and workflow before designing or coding.

### Phase 2: Content and form specification

Write the final page introduction, labels, questions, helper text, consent copy,
validation messages, submit label, and confirmation message.

### Phase 3: Visual direction

Translate the existing brand system into the feedback experience. Decide the
page layout, responsive behavior, imagery, interaction style, and accessibility
requirements.

### Phase 4: Data setup

Create the private Google Sheet and Apps Script endpoint. New responses must be
stored with `Status` set to `new`. Store configuration outside the page markup
where practical.

### Phase 5: Build

Build the form, client-side validation, submission states, failure recovery,
spam protection, and confirmation experience. Do not build a public display
page unless it is part of the approved scope.

### Phase 6: Test

Test on desktop and mobile, with keyboard navigation, slow or failed requests,
missing optional fields, duplicate submissions, and all permission choices.
Confirm that private and unapproved submissions cannot appear publicly.

### Phase 7: Launch and handoff

Publish the page, run a real submission test, document the Sheet and deployment
ownership, and provide the site owner with the review and approval steps.

### Phase 8: Public testimonial strategy

After enough strong, permitted responses have been collected, decide whether to
use them in service pages, the homepage, project case studies, or a dedicated
client-stories page.

## Phase 1 Discovery Worksheet

This is the first task for every brand.

### Purpose

- What should the owner learn from the feedback?
- Is the primary goal service improvement, testimonial collection, referrals,
  case-study discovery, or a combination?
- At what point after fulfillment will the request be sent?

### Audience

- Who completes the form?
- Are there distinct client types that require different wording?
- Could a minor or another protected audience be involved?

### Brand experience

- What should the page be called?
- What should the experience feel like in three adjectives?
- Which existing page best represents the brand visually?
- What terminology does the brand use for the client and the service?

### Questions

- Which services should appear in the service selector?
- What before-and-after story matters for this business?
- Is a numeric or star rating useful internally?
- Which questions are required?
- Is there an optional private-comments field?

### Permission and ownership

- Where might approved testimonials be used?
- Which attribution options will be offered?
- Who reviews submissions?
- Who owns the Google Sheet and Apps Script deployment?
- How can a client later request that a testimonial be removed?

### Success criteria

- How many completed responses would make the first release useful?
- What completion rate is expected?
- How quickly should the owner review new submissions?
- When will the public testimonial strategy be reconsidered?

## First Implementation: Demilade Creatives

The recommended first action is to complete the Phase 1 worksheet for Demilade
Creatives. This becomes the reference implementation for the reusable system.

Initial working assumptions from the brainstorm:

- Working title: **Share Your Experience**
- Tone: warm, polished, thoughtful
- Estimated completion time: three minutes
- Primary goals: improve the client experience and collect permission-based
  testimonials
- Submission destination: private Google Sheet
- Default submission state: `new`
- Public display: deferred until approximately 6–10 strong, approved responses
  have been collected
- Maintenance model: manual review and approval; no CMS or paid testimonial
  platform required for the first version

The Demilade Creatives question set, permission language, submission platform,
and removal-contact method were approved on August 25, 2026. Its Phase 1
foundation is complete and ready for visual design and implementation.

The current Demilade Creatives content and workflow proposal is documented in:

- `docs/demilade-creatives-feedback-brief.md`

## Existing Reference

MPL Recovery already demonstrates the technical pattern:

- Form submission to Google Apps Script
- Storage in Google Sheets
- Unapproved-by-default submissions
- Manual approval
- Optional dynamic public display
- Local fallback data

Its implementation and setup notes are located in:

- `projects/website-projects/mpl-recovery-site/survey.html`
- `projects/website-projects/mpl-recovery-site/testimonials.html`
- `projects/website-projects/mpl-recovery-site/docs/testimonials-google-sheets-handoff.md`

Future implementations should reuse the workflow, not copy MPL-specific content,
categories, health considerations, or visual design.
