#!/usr/bin/env node
// Script to read all portfolio files and embed them into a JS module
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PORTFOLIO_DIR = '/Users/jubayer/Codes/Unravel 6X/PortfolioFiles';
const OUTPUT = join(import.meta.dirname, '..', 'src', 'data', 'files.js');

const files = [
  // Round 1
  { id: 'registration-form', shortName: 'RegistrationForm.html', language: 'html', category: 'Round 1', summary: "Full registration portal with payment verification, team formation, and live validation. Collected 300+ participants' details for the competition.", originalPath: '01_1_RegistrationForm.html' },
  { id: 'submission-mailer', shortName: 'SubmissionMailer.js', language: 'javascript', category: 'Round 1', summary: 'Google Apps Script webhook that logs registration data to Sheets and auto-sends Round 1 casebook confirmation emails.', originalPath: '01_2_SubmissionMailer.js' },
  { id: 'standalone-verifier', shortName: 'StandaloneVerifier.js', language: 'javascript', category: 'Round 1', summary: 'Trigger-based verifier that watches for admin approval in Sheets and dispatches confirmation emails to verified teams.', originalPath: '01_2_2_StandaloneVerifier.js' },
  { id: 'casebook-mail', shortName: 'CasebookMail.html', language: 'html', category: 'Round 1', summary: 'Branded HTML email template sent to all registered teams with casebook download link and submission deadline.', originalPath: '01_3_Round1CasebookMail.html' },
  { id: 'whatsapp-bot-mailer', shortName: 'WhatsAppBotMailer.js', language: 'javascript', category: 'Round 1', summary: 'Webhook endpoint that processes WhatsApp bot registration data and triggers automated email confirmations.', originalPath: '01_4_1_WhatsAppBotMailer.js' },
  { id: 'wa-bot-mail-sender', shortName: 'WABotMailSender.js', language: 'javascript', category: 'Round 1', summary: 'Companion mailer for WhatsApp bot that parses chatbot conversation payloads, extracts team details, and sends personalized emails.', originalPath: '01_4_2_WABotMailSender.js' },
  { id: 'r1-submission-html', shortName: 'R1Submission.html', language: 'html', category: 'Round 1', summary: 'Full submission portal with drag-and-drop file uploads and base64 encoding for Google Drive storage.', originalPath: '01_5_1_R1Submission.html' },
  { id: 'r1-submission-js', shortName: 'R1Submission.js', language: 'javascript', category: 'Round 1', summary: 'Server-side Apps Script that validates, sanitizes, and stores submitted PPTX/PDF files to Google Drive with automatic sheet logging.', originalPath: '01_5_1_R1Submission.js' },
  
  // Final Round
  { id: 'finalist-congrats', shortName: 'FinalistCongrats.html', language: 'html', category: 'Final Round', summary: 'Congratulatory email template sent to finalist teams with prize pool details and Grand Finale preparation instructions.', originalPath: '02_1_FinalistCongratsMail.html' },
  { id: 'final-casebook', shortName: 'FinalCasebook.html', language: 'html', category: 'Final Round', summary: 'Final round casebook distribution email with submission guidelines, deadlines, and event venue details.', originalPath: '02_2_FinalRoundCasebookMail.html' },
  { id: 'finalist-mailer', shortName: 'FinalistMailer.js', language: 'javascript', category: 'Final Round', summary: 'Spreadsheet-integrated bulk mailer with custom UI menu for selecting and sending finalist notifications to multiple teams.', originalPath: '02_2_FinalistMailer.js' },
  { id: 'final-round-invitation-mailer', shortName: 'InvitationMailer.js', language: 'javascript', category: 'Final Round', summary: 'Script to send invitation emails to various stakeholders for the final round.', originalPath: 'Final Round/InvitationMailer.js' },
  { id: 'final-round-judge-mail', shortName: 'JudgeMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting judges to the final round.', originalPath: 'Final Round/JudgeMail.html' },
  { id: 'final-round-title-sponsor-mail', shortName: 'TitleSponsorMail.html', language: 'html', category: 'Final Round', summary: 'Email template for the title sponsor of the final round.', originalPath: 'Final Round/TitleSponsorMail.html' },
  { id: 'final-round-powered-by-sponsor-mail', shortName: 'PoweredBySponsorMail.html', language: 'html', category: 'Final Round', summary: 'Email template for the powered-by sponsor of the final round.', originalPath: 'Final Round/PoweredBySponsorMail.html' },
  { id: 'final-round-study-abroad-partner-mail', shortName: 'StudyAbroadPartnerMail.html', language: 'html', category: 'Final Round', summary: 'Email template for the study abroad partner of the final round.', originalPath: 'Final Round/StudyAbroadPartnerMail.html' },
  { id: 'final-round-guest-mail', shortName: 'GuestMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting guests to the final round.', originalPath: 'Final Round/GuestMail.html' },
  { id: 'final-round-campus-ambassador-mail', shortName: 'CampusAmbassadorMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting campus ambassadors to the final round.', originalPath: 'Final Round/CampusAmbassadorMail.html' },
  { id: 'final-round-club-mail', shortName: 'ClubMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting university clubs to the final round.', originalPath: 'Final Round/ClubMail.html' },
  { id: 'final-round-partner-club-mail', shortName: 'PartnerClubMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting partner clubs to the final round.', originalPath: 'Final Round/PartnerClubMail.html' },
  { id: 'final-round-alumni-mail', shortName: 'AlumniMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting alumni to the final round.', originalPath: 'Final Round/AlumniMail.html' },
  { id: 'final-round-advisor-mail', shortName: 'AdvisorMail.html', language: 'html', category: 'Final Round', summary: 'Email template for inviting advisors to the final round.', originalPath: 'Final Round/AdvisorMail.html' },
  { id: 'final-round-deadline-extension-mail', shortName: 'DeadlineExtensionMail.html', language: 'html', category: 'Final Round', summary: 'Email template announcing a deadline extension for the final round.', originalPath: 'Final Round/DeadlineExtensionMail.html' },

  // Judges
  { id: 'judge-onboarding-form', shortName: 'JudgeOnboarding.html', language: 'html', category: 'Judges', summary: 'Judge registration and onboarding portal to collect details and availability.', originalPath: 'Judges/01. Judgeonboardingform.html' },
  { id: 'judge-onboarding-js', shortName: 'JudgeOnboarding.js', language: 'javascript', category: 'Judges', summary: 'Backend webhook to process judge onboarding data and log it into the centralized database.', originalPath: 'Judges/02. Judgeonboarding.js' },
  { id: 'judge-mail', shortName: 'JudgeMail.html', language: 'html', category: 'Judges', summary: 'Welcome email template sent to judges upon successful onboarding.', originalPath: 'Judges/03. JudgeMail.html' },
  { id: 'judge-evaluation-mail', shortName: 'EvaluationMail.html', language: 'html', category: 'Judges', summary: 'Automated email delivering evaluation rubrics and scoring instructions to the panel.', originalPath: 'Judges/04. EvaluationMail.html' },
  { id: 'judge-evaluation-mailer', shortName: 'EvaluationMailer.js', language: 'javascript', category: 'Judges', summary: 'Script to distribute customized evaluation materials securely to all registered judges.', originalPath: 'Judges/05. EvaluationMailer.js' },
  { id: 'judge-thank-you-mail', shortName: 'JudgeThankYou.html', language: 'html', category: 'Judges', summary: 'Post-event gratitude email template acknowledging the judges\' contribution.', originalPath: 'Judges/06. ThankYouMail.html' },
  { id: 'judge-thank-you-mailer', shortName: 'ThankYouMailer.js', language: 'javascript', category: 'Judges', summary: 'Automation to send personalized post-event thank you emails to the judging panel.', originalPath: 'Judges/07. ThankYouMailer.js' },

  // Mentors
  { id: 'mentor-form', shortName: 'MentorForm.html', language: 'html', category: 'Mentors', summary: 'Mentor onboarding and registration portal.', originalPath: 'Mentors/01. Mentorform.html' },
  { id: 'mentor-mailer', shortName: 'MentorMailer.js', language: 'javascript', category: 'Mentors', summary: 'Automated script to process mentor registrations and dispatch confirmation emails.', originalPath: 'Mentors/02. Mentor Mailer.js' },
  { id: 'mentor-email', shortName: 'MentorEmail.html', language: 'html', category: 'Mentors', summary: 'Welcome and onboarding confirmation email template for assigned mentors.', originalPath: 'Mentors/03. MentorEMail.html' },

  // Workshop Speakers
  { id: 'speaker-onboarding', shortName: 'SpeakerOnboarding.html', language: 'html', category: 'Workshop Speakers', summary: 'Workshop speaker registration and detail collection form.', originalPath: 'Workshop Speakers/01. wspeakeronboarding.html' },
  { id: 'speaker-onboarding-js', shortName: 'SpeakerOnboarding.js', language: 'javascript', category: 'Workshop Speakers', summary: 'Backend automation handling speaker registration data and syncing to Sheets.', originalPath: 'Workshop Speakers/02. wspeakeronboarding.js' },
  { id: 'speaker-mail', shortName: 'SpeakerMail.html', language: 'html', category: 'Workshop Speakers', summary: 'Confirmation and itinerary email template for workshop speakers.', originalPath: 'Workshop Speakers/03. MailforWSpeakers.html' },
  { id: 'speaker-direct-mailer', shortName: 'DirectMailSender.js', language: 'javascript', category: 'Workshop Speakers', summary: 'Utility script for sending direct, personalized communication to speakers.', originalPath: 'Workshop Speakers/04. directmailsender.js' },
  { id: 'speaker-thank-you', shortName: 'SpeakerThankYou.html', language: 'html', category: 'Workshop Speakers', summary: 'Post-event thank you email template for workshop facilitators.', originalPath: 'Workshop Speakers/06. ThankYouMail.html' }
];

let output = '// Auto-generated — do not edit manually\n// Run: node scripts/embed-files.js\n\nexport const portfolioFiles = [\n';

for (const f of files) {
  const raw = readFileSync(join(PORTFOLIO_DIR, f.originalPath), 'utf-8');
  // Escape backticks and ${} in template literals
  const escaped = raw
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');

  output += `  {\n`;
  output += `    id: ${JSON.stringify(f.id)},\n`;
  output += `    shortName: ${JSON.stringify(f.shortName)},\n`;
  output += `    language: ${JSON.stringify(f.language)},\n`;
  output += `    category: ${JSON.stringify(f.category)},\n`;
  output += `    summary: ${JSON.stringify(f.summary)},\n`;
  output += `    content: \`${escaped}\`\n`;
  output += `  },\n`;
}

output += '];\n';

writeFileSync(OUTPUT, output, 'utf-8');
console.log(`✅ Embedded ${files.length} files into ${OUTPUT}`);
