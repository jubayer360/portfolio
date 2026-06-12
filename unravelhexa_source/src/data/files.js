// Auto-generated — do not edit manually
// Run: node scripts/embed-files.js

export const portfolioFiles = [
  {
    id: "registration-form",
    shortName: "RegistrationForm.html",
    language: "html",
    category: "Round 1",
    summary: "Full registration portal with payment verification, team formation, and live validation. Collected 300+ participants' details for the competition.",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unravel 6.0 | Full Registration</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #ff9f43;
      --secondary: #ee5253;
      --accent: #5f27cd;
      --success: #1dd1a1;
      --bg: #0a0a12;
      --card-bg: #1e1e2f;
      --text: #ffffff;
      --optional: #8395a7;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
    body {
      background-color: var(--bg);
      background-image: radial-gradient(at 0% 0%, rgba(95, 39, 205, 0.15) 0px, transparent 50%);
      color: var(--text);
      display: flex;
      justify-content: center;
      min-height: 100vh;
      padding: 15px;
    }
    .container {
      width: 100%;
      max-width: 650px;
      background: var(--card-bg);
      padding: 30px;
      border-radius: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.05);
      margin: auto;
    }
    header {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo-container {
      margin-bottom: 15px;
    }
    .logo {
      max-width: 400px;
      width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(245, 130, 32, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .section-head {
      display: flex;
      align-items: center;
      margin: 25px 0 15px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
    }
    .section-head::after {
      content: "";
      height: 1px;
      flex: 1;
      background: rgba(255, 255, 255, 0.1);
      margin-left: 15px;
    }
    .optional-tag {
      font-size: 0.7rem;
      color: var(--optional);
      margin-left: 8px;
      text-transform: none;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .full-width {
      grid-column: span 2;
    }
    label {
      font-size: 0.75rem;
      color: var(--optional);
      margin-bottom: 4px;
      display: block;
      margin-left: 5px;
    }
    input,
    select {
      width: 100%;
      padding: 12px 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1.5px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: white;
      font-size: 0.95rem;
      transition: 0.3s;
    }
    input:focus,
    select:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.07);
    }
    select option {
      background: #1e1e2f;
      color: white;
    }
    .payment-box {
      background: rgba(255, 159, 67, 0.08);
      border: 1px dashed var(--primary);
      padding: 15px;
      border-radius: 15px;
      margin-bottom: 20px;
      text-align: center;
    }
    .submit-btn {
      width: 100%;
      padding: 18px;
      margin-top: 30px;
      border: none;
      border-radius: 5px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    .submit-btn:active:not(:disabled) {
      transform: translateY(0);
    }
    .submit-btn:disabled {
      pointer-events: none;
      color: transparent;
    }
    .submit-btn:disabled::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spin 0.6s linear infinite;
    }
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    .error-msg {
      background: rgba(238, 82, 83, 0.15);
      border: 1px solid var(--secondary);
      color: #ff6b6b;
      padding: 12px 15px;
      border-radius: 12px;
      font-size: 0.85rem;
      margin-top: 15px;
      display: none;
      text-align: center;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: none;
      justify-content: center;
      align-items: center;
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.5);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .success-modal.active {
      transform: scale(1);
      opacity: 1;
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.8rem;
      font-weight: 800;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.15rem;
      color: #b8c6db;
      line-height: 1.7;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .facebook-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
      margin-bottom: 25px;
    }
    .facebook-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.45);
      color: white;
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.05rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 0.95rem;
      }
    }
    @media (max-width: 600px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
      .full-width {
        grid-column: span 1;
      }
    }
  </style>
  <style>
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2) format('woff2');
      unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-stretch: 100%;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  </style>
</head>
<body wotdisconnected="true" data-new-gr-c-s-check-loaded="14.1290.0" data-gr-ext-installed=""><span
    id="warning-container"><i data-reactroot=""></i></span>
  <div class="container">
    <header>
      <div class="logo-container">
        <img src="https://lh3.googleusercontent.com/d/1rT9vyAwzGi9jaDQbq8cNwAuKOVqWFY9F" alt="Unravel Logo"
          class="logo">
      </div>
      <p style="opacity: 0.5; font-size: 0.7rem;">Registration Form</p>
    </header>
    <form id="unravelForm">
      <div class="section-head">Team Information</div>
      <div class="form-grid">
        <div class="input-item"><label>Team Name *</label><input type="text" name="team_name" required=""></div>
        <div class="input-item"><label>University *</label><input type="text" name="uni_name" required=""></div>
      </div>
      <div class="section-head">Team Leader</div>
      <div class="form-grid">
        <div class="full-width"><label>Full Name *</label><input type="text" name="l_name" required=""></div>
        <div class="input-item"><label>Department</label><input type="text" name="l_dept"></div>
        <div class="input-item"><label>Year</label><input type="text" name="l_year"></div>
        <div class="input-item"><label>Email *</label><input type="email" name="l_email" required=""></div>
        <div class="input-item"><label>Contact *</label><input type="tel" name="l_phone" required=""></div>
      </div>
      <div class="section-head">Second Member <span class="optional-tag">(Optional)</span></div>
      <div class="form-grid">
        <div class="full-width"><label>Full Name</label><input type="text" name="m2_name"></div>
        <div class="input-item"><label>Department</label><input type="text" name="m2_dept"></div>
        <div class="input-item"><label>Year</label><input type="text" name="m2_year"></div>
        <div class="input-item"><label>Email</label><input type="email" name="m2_email"></div>
        <div class="input-item"><label>Contact</label><input type="tel" name="m2_phone"></div>
      </div>
      <div class="section-head">Payment</div>
      <div class="payment-box">
        <p style="font-size: 0.9rem;">Registration Fee: <b>200 TK</b></p>
        <p style="font-size: 0.9rem;">Send Money (Bkash/Nagad): <b>01586120216</b></p>
      </div>
      <div class="form-grid">
        <div class="input-item">
          <label>Method *</label>
          <select name="pay_method" required="">
            <option value="" disabled="" selected="">Select</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div class="input-item">
          <label>Transaction ID *</label>
          <input type="text" name="trx_id" placeholder="Ex: 8N76XW..." required="">
        </div>
      </div>
      <div class="error-msg" id="errorMsg">❌ Submission failed. Please try again.</div>
      <div class="section-head">Reference <span class="optional-tag">(Optional)</span></div>
      <div class="form-grid">
        <div class="full-width"><label>Reference Name</label><input type="text" name="ref_name"
            placeholder="Who referred you? (optional)"></div>
      </div>
      <button type="submit" class="submit-btn" id="submitBtn">Submit Registration</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal" id="successModalCard">
      <div class="close-modal" onclick="closePopup()">×</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Submitted!</h1>
      <div class="success-message">
        Dear team <strong id="pTeam"></strong>,<br>
        Round 1 casebook has been sent to your email.<br>
        Check your inbox and <strong>start brainstorming now!</strong>
      </div>
      <a href="https://www.facebook.com/hello.rubc" target="_blank" rel="noopener noreferrer" class="facebook-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Follow for Updates
      </a>
      <div style="color: #8892b0; font-size: 0.9rem; margin-top: 15px;">
        The grind never stops! 🚀
      </div>
    </div>
  </div>
  <script>
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxeX0XRvBBkteeYGusmKAalxzT3cQNe4x3HZErCcwP7JrGmhDyivZ86VP-XvOXiLtnN/exec";
    const form = document.getElementById('unravelForm');
    const overlay = document.getElementById('successModal');
    const card = document.getElementById('successModalCard');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      errorMsg.style.display = 'none';
      submitBtn.disabled = true;
      const formData = {
        team_name: form.team_name.value,
        uni_name: form.uni_name.value,
        l_name: form.l_name.value,
        l_dept: form.l_dept.value,
        l_year: form.l_year.value,
        l_email: form.l_email.value,
        l_phone: form.l_phone.value,
        m2_name: form.m2_name.value,
        m2_dept: form.m2_dept.value,
        m2_year: form.m2_year.value,
        m2_email: form.m2_email.value,
        m2_phone: form.m2_phone.value,
        pay_method: form.pay_method.value,
        trx_id: form.trx_id.value,
        ref_name: form.ref_name.value,
      };
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(formData)
        });
        document.getElementById('pTeam').innerText = formData.team_name;
        overlay.style.display = 'flex';
        setTimeout(() => card.classList.add('active'), 10);
      } catch (err) {
        errorMsg.style.display = 'block';
        console.error('Submission error:', err);
      } finally {
        submitBtn.disabled = false;
      }
    });
    function closePopup() {
      card.classList.remove('active');
      setTimeout(() => {
        overlay.style.display = 'none';
        form.reset();
      }, 300);
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closePopup();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });
  </script>
</body><grammarly-desktop-integration data-grammarly-shadow-root="true"><template shadowrootmode="open">
    <style>
      div.grammarly-desktop-integration {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      div.grammarly-desktop-integration:before {
        content: attr(data-content);
      }
    </style>
    <div aria-label="grammarly-integration" role="group" tabindex="-1" class="grammarly-desktop-integration"
      data-content="{&quot;mode&quot;:&quot;full&quot;,&quot;isActive&quot;:true,&quot;isUserDisabled&quot;:false}">
    </div>
  </template></grammarly-desktop-integration>
</html>`
  },
  {
    id: "submission-mailer",
    shortName: "SubmissionMailer.js",
    language: "javascript",
    category: "Round 1",
    summary: "Google Apps Script webhook that logs registration data to Sheets and auto-sends Round 1 casebook confirmation emails.",
    content: `function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    let data;
    try {
        data = JSON.parse(e.postData.contents);
    } catch (err) {
        data = JSON.parse(e.postData.getDataAsString());
    }
    sheet.appendRow([
        new Date().toLocaleString(),
        data.team_name || '',
        data.uni_name || '',
        data.l_name || '',
        data.l_dept || '',
        data.l_year || '',
        data.l_email || '',
        data.l_phone || '',
        data.m2_name || '',
        data.m2_dept || '',
        data.m2_year || '',
        data.m2_email || '',
        data.m2_phone || '',
        data.pay_method || '',
        data.trx_id || '',
        data.ref_name || ''
    ]);
    const newRow = sheet.getLastRow();
    sendR1ConfirmationEmail(sheet, newRow, data.team_name, data.l_email);
    return ContentService
        .createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
}
function sendR1ConfirmationEmail(sheet, row, teamName, leaderEmail) {
    const COLUMN_TO_WATCH = 17;
    const STATUS_COLUMN = 18;
    const TEMPLATE_FILE = "R1SubmissionConfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    try {
        if (!leaderEmail) {
            Logger.log("No leader email for row " + row + ". Email not sent.");
            sheet.getRange(row, STATUS_COLUMN).setValue("Error: No leader email.");
            return;
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        sheet.getRange(row, COLUMN_TO_WATCH).setValue("✅ Verified!");
        sheet.getRange(row, STATUS_COLUMN).setValue("Sent!");
        Logger.log("R1 confirmation sent to " + leaderEmail + " (row " + row + ")");
    } catch (error) {
        Logger.log("Error sending email for row " + row + ": " + error.toString());
        sheet.getRange(row, STATUS_COLUMN).setValue("Error: " + error.message);
    }
}
function doGet(e) {
    return ContentService
        .createTextOutput("OK")
        .setMimeType(ContentService.MimeType.TEXT);
}
`
  },
  {
    id: "standalone-verifier",
    shortName: "StandaloneVerifier.js",
    language: "javascript",
    category: "Round 1",
    summary: "Trigger-based verifier that watches for admin approval in Sheets and dispatches confirmation emails to verified teams.",
    content: `function sendR1ConfirmationEmail(e) {
    const SHEET_TO_WATCH = "Sheet1";
    const TEAM_NAME_COLUMN = 2;
    const EMAIL_COLUMN = 7;
    const COLUMN_TO_WATCH = 17;
    const STATUS_COLUMN = 18;
    const VALUE_TO_WATCH = "Verify";
    const TEMPLATE_FILE = "R1SubmissionConfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    const range = e.range;
    const sheet = range.getSheet();
    const editedRow = range.getRow();
    if (
        sheet.getName() !== SHEET_TO_WATCH ||
        range.getColumn() !== COLUMN_TO_WATCH ||
        e.value !== VALUE_TO_WATCH ||
        editedRow <= 1
    ) {
        return;
    }
    try {
        const dataRow = sheet.getRange(editedRow, 1, 1, sheet.getLastColumn()).getValues()[0];
        const teamName = dataRow[TEAM_NAME_COLUMN - 1];
        const leaderEmail = dataRow[EMAIL_COLUMN - 1];
        if (!leaderEmail) {
            Logger.log("No leader email found for row " + editedRow + ". Email not sent.");
            sheet.getRange(editedRow, STATUS_COLUMN).setValue("Error: No leader email.");
            return;
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        sheet.getRange(editedRow, COLUMN_TO_WATCH).setValue("✅ Verified!");
        sheet.getRange(editedRow, STATUS_COLUMN).setValue("Sent!");
        Logger.log("R1 confirmation sent to " + leaderEmail + " (row " + editedRow + ")");
    } catch (error) {
        Logger.log("Error in R1 confirmation script for row " + editedRow + ": " + error.toString());
        sheet.getRange(editedRow, STATUS_COLUMN).setValue("Error: " + error.message);
    }
}`
  },
  {
    id: "casebook-mail",
    shortName: "CasebookMail.html",
    language: "html",
    category: "Round 1",
    summary: "Branded HTML email template sent to all registered teams with casebook download link and submission deadline.",
    content: `<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Round 1 Submission Confirmed | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            YOU'RE IN. LET'S GO!</h2>
        <p
            style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
            Round 1 Casebook Released</p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
            Dear team <strong>{{team_name}}</strong>,
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Welcome to <strong>Xeron IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered
            by
            <strong>RAMPS BD</strong>. It is the biggest case competition designed exclusively for the north-bengal
            region’s 1st and 2nd-year students, organized by <strong>Rajshahi University Business Club</strong>.
            <br><br>
            We're pleased to inform you that your registration has been confirmed. You're on the list and the real
            challenge
            begins now.
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Here is your Round 1 casebook. Open it, analyze it and prepare your solution. Please follow the instructions
            in
            the casebook carefully. Any violation of the rules may lead to disqualification.
        </p>
        <div style="text-align: center; margin: 28px 0;">
            <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
                target="_blank"
                style="display: inline-block; margin-top: 1px; width: 50%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                Round 1 Casebook</a>
        </div>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please submit your solution by <strong style="color: #d72027;">May 20, 2026 at 11:59 AM (Noon)</strong>.
            Keep in mind that winners don't wait for the last second, they show up ready.
        </p>
        <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
            Time to lock in and give it your best shot. We'll be watching. Questions? We're one message away.
        </p>
        <p
            style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                Let's Unravel,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: "whatsapp-bot-mailer",
    shortName: "WhatsAppBotMailer.js",
    language: "javascript",
    category: "Round 1",
    summary: "Webhook endpoint that processes WhatsApp bot registration data and triggers automated email confirmations.",
    content: `function doPost(e) {
    const TEMPLATE_FILE = "Botregconfirmation";
    const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
    const FROM_NAME = "Unravel Hexa | Round 1";
    try {
        const data = JSON.parse(e.postData.contents);
        const answers = data.user_input_data || [];
        const findAnswer = (keyword) => {
            const item = answers.find(a =>
                a.question && a.question.toLowerCase().includes(keyword.toLowerCase())
            );
            return item ? item.answer : null;
        };
        const teamName = findAnswer("team");
        const leaderEmail = findAnswer("email");
        const phone = findAnswer("phone") || data.chat_id;
        const firstName = data.first_name || "";
        if (!leaderEmail) {
            Logger.log("No email found in payload");
            return ContentService
                .createTextOutput(JSON.stringify({ status: "error", message: "No email found" }))
                .setMimeType(ContentService.MimeType.JSON);
        }
        const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
        const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
        GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
            htmlBody: finalHtmlBody,
            name: FROM_NAME
        });
        Logger.log("✅ R1 confirmation sent to " + leaderEmail + " (team: " + teamName + ")");
        return ContentService
            .createTextOutput(JSON.stringify({
                status: "success",
                email: leaderEmail,
                team: teamName
            }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        Logger.log("❌ Error: " + error.toString());
        return ContentService
            .createTextOutput(JSON.stringify({ status: "error", message: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}`
  },
  {
    id: "wa-bot-mail-sender",
    shortName: "WABotMailSender.js",
    language: "javascript",
    category: "Round 1",
    summary: "Companion mailer for WhatsApp bot that parses chatbot conversation payloads, extracts team details, and sends personalized emails.",
    content: `function doPost(e) {
  const TEMPLATE_FILE = "Botregconfirmation";
  const EMAIL_SUBJECT = "Unravel Hexa: Round 1 Case";
  const FROM_NAME     = "Unravel Hexa | Round 1";
  try {
    const data = JSON.parse(e.postData.contents);
    const answers = data.user_input_data || [];
    const findAnswer = (keyword) => {
      const item = answers.find(a => 
        a.question && a.question.toLowerCase().includes(keyword.toLowerCase())
      );
      return item ? item.answer : null;
    };
    const teamName    = findAnswer("team");
    const leaderEmail = findAnswer("email");
    const phone       = findAnswer("phone") || data.chat_id;
    const firstName   = data.first_name || "";
    if (!leaderEmail) {
      Logger.log("No email found in payload");
      return ContentService
        .createTextOutput(JSON.stringify({status: "error", message: "No email found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    const htmlTemplate  = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
    const finalHtmlBody = htmlTemplate.replace(/{{team_name}}/g, teamName || "Your Team");
    GmailApp.sendEmail(leaderEmail, EMAIL_SUBJECT, "", {
      htmlBody: finalHtmlBody,
      name: FROM_NAME
    });
    Logger.log("✅ R1 confirmation sent to " + leaderEmail + " (team: " + teamName + ")");
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        email: leaderEmail,
        team: teamName
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("❌ Error: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({status: "error", message: error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`
  },
  {
    id: "r1-submission-html",
    shortName: "R1Submission.html",
    language: "html",
    category: "Round 1",
    summary: "Full submission portal with drag-and-drop file uploads and base64 encoding for Google Drive storage.",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <title>Round 1 Submission | Unravel 6X </title>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
    rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #0a0a0c;
      min-height: 100vh;
      color: white;
      overflow-x: hidden;
    }
    .header {
      text-align: center;
      padding: 40px 20px;
    }
    .logo-container {
      margin-bottom: 30px;
    }
    .logo {
      max-width: 500px;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .subtitle {
      font-size: 1.1rem;
      color: #b8c6db;
      font-weight: 300;
    }
    .form-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 30px 50px;
    }
    form {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding: 40px 50px;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    form:hover {
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      border-color: rgba(245, 130, 32, 0.2);
    }
    h2 {
      text-align: center;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: #f58220;
      margin: 30px 0 15px;
      border-bottom: 2px solid #d72027;
      padding-bottom: 6px;
      letter-spacing: 2px;
      user-select: none;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 6px;
      margin-top: 18px;
      color: #b8c6db;
      user-select: none;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea,
    select {
      width: 100%;
      padding: 12px 15px;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
      transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      font-weight: 500;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
      outline-offset: 2px;
    }
    textarea {
      font-family: 'Montserrat', sans-serif;
      resize: vertical;
      min-height: 110px;
      line-height: 1.5;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 16px;
      padding-right: 40px;
      min-height: 48px;
      line-height: 1.5;
      cursor: pointer;
    }
    select option {
      background-color: #1a1a2e;
      color: white;
      padding: 8px 12px;
      font-weight: 500;
      border: none;
      background: #1a1a2e;
    }
    select option:checked {
      background-color: #007bff;
      color: white;
    }
    select option:hover {
      background-color: #007bff;
      color: white;
    }
    select option:disabled {
      background-color: #2a2a3e;
      color: #666;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: #f58220;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
    }
    select:focus {
      background-color: rgba(255, 255, 255, 0.1);
    }
    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    input[type="tel"]::placeholder,
    textarea::placeholder {
      color: #8892b0;
    }
    input:invalid,
    select:invalid {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input.error,
    select.error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
    }
    .checkbox {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      user-select: none;
      color: #b8c6db;
      line-height: 1.5;
    }
    .checkbox input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #f58220;
      border-radius: 4px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      flex-shrink: 0;
    }
    .checkbox label {
      display: inline;
      margin: 0;
    }
    .checkbox input[type="checkbox"]:focus {
      border-color: #f58220;
      outline: none;
      box-shadow: 0 0 15px rgba(245, 130, 32, 0.4);
    }
    button {
      margin-top: 40px;
      width: 100%;
      padding: 18px;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      color: white;
      background: linear-gradient(135deg, #f58220, #d72027);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    button:hover:not(.loading) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    button:active {
      transform: translateY(0);
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    button.loading {
      pointer-events: none;
      color: transparent;
    }
    button.loading::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
    }
    .success {
      display: none;
    }
    .error-message {
      color: #e74c3c;
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
      user-select: none;
      display: none;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: 12px;
      border-radius: 8px;
    }
    .upload-progress {
      display: none;
      margin-top: 20px;
      padding: 18px 20px;
      background: rgba(245, 130, 32, 0.06);
      border: 1px solid rgba(245, 130, 32, 0.25);
      border-radius: 12px;
      user-select: none;
    }
    .upload-progress.show {
      display: block;
      animation: progressFadeIn 0.3s ease-out;
    }
    @keyframes progressFadeIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .upload-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    .upload-progress-status {
      color: #f58220;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .upload-progress-status .spinner-mini {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(245, 130, 32, 0.3);
      border-top-color: #f58220;
      border-radius: 50%;
      animation: spinner 0.7s linear infinite;
      flex-shrink: 0;
    }
    .upload-progress.done .upload-progress-status {
      color: #2ecc71;
    }
    .upload-progress.done .spinner-mini {
      display: none;
    }
    .upload-progress.error-state {
      background: rgba(231, 76, 60, 0.08);
      border-color: rgba(231, 76, 60, 0.35);
    }
    .upload-progress.error-state .upload-progress-status {
      color: #e74c3c;
    }
    .upload-progress.error-state .spinner-mini {
      display: none;
    }
    .upload-progress-percent {
      color: #b8c6db;
      font-weight: 700;
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .upload-progress-bar {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .upload-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 999px;
      transition: width 0.25s ease-out;
      position: relative;
      overflow: hidden;
    }
    .upload-progress-fill::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.35),
          transparent);
      animation: shimmer 1.4s linear infinite;
    }
    .upload-progress.done .upload-progress-fill {
      background: linear-gradient(135deg, #27ae60, #2ecc71);
    }
    .upload-progress.done .upload-progress-fill::after,
    .upload-progress.error-state .upload-progress-fill::after {
      display: none;
    }
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .upload-progress-detail {
      margin-top: 8px;
      color: #8892b0;
      font-size: 0.82rem;
      font-variant-numeric: tabular-nums;
    }
    .file-upload-area {
      position: relative;
      width: 100%;
      border: 2px dashed rgba(245, 130, 32, 0.35);
      border-radius: 10px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.03);
      margin-top: 4px;
    }
    .file-upload-area:hover,
    .file-upload-area.drag-over {
      border-color: #f58220;
      background: rgba(245, 130, 32, 0.06);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
    }
    .file-upload-area input[type="file"] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    .file-upload-icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    .file-upload-text {
      color: #b8c6db;
      font-weight: 500;
      font-size: 0.95rem;
      word-break: break-all;
    }
    .file-upload-hint {
      color: #566573;
      font-size: 0.8rem;
      margin-top: 6px;
    }
    .file-upload-area.has-file {
      border-style: solid;
      border-color: #27ae60;
      background: rgba(39, 174, 96, 0.06);
    }
    .file-upload-area.has-file .file-upload-text {
      color: #2ecc71;
    }
    .file-upload-area.file-error {
      border-style: solid;
      border-color: #e74c3c;
      background: rgba(231, 76, 60, 0.06);
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
    }
    .team-leader-info {
      margin-bottom: 25px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }
    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.7) translateY(50px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .modal-overlay.show .success-modal {
      transform: scale(1) translateY(0);
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.8rem;
      font-weight: 400;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.2rem;
      color: #b8c6db;
      line-height: 1.6;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .facebook-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      text-decoration: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
      margin-bottom: 25px;
    }
    .facebook-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.45);
      color: white;
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .form-container {
        padding: 0 15px 30px;
      }
      form {
        padding: 30px 25px;
      }
      h2 {
        font-size: 2.2rem;
      }
      .logo {
        max-width: 300px;
      }
      select {
        min-height: 52px;
        font-size: 16px;
        background-size: 18px;
        background-position: right 15px center;
        padding-right: 45px;
      }
      select option {
        padding: 12px 15px;
        font-size: 16px;
      }
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.1rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .header {
        padding: 30px 15px;
      }
      .logo {
        max-width: 200px;
      }
      h2 {
        font-size: 1.8rem;
      }
      .section-title {
        font-size: 1.2rem;
      }
      select {
        min-height: 54px;
        padding: 15px 50px 15px 15px;
      }
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 1rem;
      }
    }
    @supports not (appearance: none) {
      select {
        background-image: none;
        padding-right: 15px;
      }
    }
    @media (prefers-contrast: high) {
      select option {
        background-color: black;
        color: white;
      }
      select option:checked {
        background-color: white;
        color: black;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      <img src="https://lh3.googleusercontent.com/d/1rT9vyAwzGi9jaDQbq8cNwAuKOVqWFY9F" alt="Unravel Logo" class="logo">
    </div>
    <p class="subtitle">Submit your Round 1 solution
      below.</p>
  </div>
  <div class=”form-container”>
    <form id="registrationForm" novalidate>
      <h2>Round 1 Submission</h2>
      <div class="team-leader-info">
        <label for="teamName">Team Name</label>
        <input id="teamName" name="Team Name" type="text" required autocomplete="off" placeholder="Your team name" />
        <label for="teamLeaderName">Team Leader's Name</label>
        <input id="teamLeaderName" name="Team Leader's Name" type="text" required autocomplete="off"
          placeholder="Full name of the team leader" />
        <label for="teamLeaderEmail">Team Leader's Email Address</label>
        <input id="teamLeaderEmail" name="Team Leader's Email Address" type="email" required autocomplete="off"
          placeholder="Email that you used to register" />
        <label for="teamLeaderPhone">Team Leader's WhatsApp Number</label>
        <input id="teamLeaderPhone" name="Team Leader's Phone Number" type="tel" required autocomplete="off"
          placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
        <label for="pptxFile">Presentation File (PPTX / PPT)</label>
        <div class="file-upload-area" id="pptxArea" data-placeholder="Click or drag to upload PPTX / PPT file">
          <input id="pptxFile" name="pptxFile" type="file" accept=".pptx,.ppt" required />
          <div class="file-upload-icon"><img src="https://lh3.googleusercontent.com/d/1kKCE5ANBQy0wKVefC2ylpf0OS3q0vyb6"
              alt="PPTX icon" style="width:48px;height:48px;"></div>
          <div class="file-upload-text" id="pptxText">Click or drag to upload PPTX / PPT file</div>
          <div class="file-upload-hint">Accepted: .pptx, .ppt &bull; Max 30 MB</div>
        </div>
        <label for="pdfFile">Solution PDF</label>
        <div class="file-upload-area" id="pdfArea" data-placeholder="Click or drag to upload PDF file">
          <input id="pdfFile" name="pdfFile" type="file" accept=".pdf" required />
          <div class="file-upload-icon"><img src="https://lh3.googleusercontent.com/d/1Sn2dk9I4mMM-wbHvcmtGbChSLNSeBk2p"
              alt="PDF icon" style="width:48px;height:48px;"></div>
          <div class="file-upload-text" id="pdfText">Click or drag to upload PDF file</div>
          <div class="file-upload-hint">Accepted: .pdf &bull; Max 30 MB</div>
        </div>
        <label for="feedback">Feedback / Comments <span
            style="color:#8892b0; font-weight:400;">(optional)</span></label>
        <textarea id="feedback" name="Feedback" rows="4" maxlength="1000"
          placeholder="Anything you'd like the organizers to know? Suggestions, issues faced, shoutouts - drop them here."></textarea>
        <br>
      </div>
      <div class="checkbox">
        <input type="checkbox" id="confirmation" name="Confirmation" value="Confirmed" required />
        <label for="confirmation">I confirm that my submission is complete and ready to be evaluated.</label>
      </div>
      <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
      <div class="upload-progress" id="uploadProgress" aria-live="polite">
        <div class="upload-progress-header">
          <div class="upload-progress-status" id="uploadStatus">
            <span class="spinner-mini"></span>
            <span id="uploadStatusText">Preparing files...</span>
          </div>
          <div class="upload-progress-percent" id="uploadPercent">0%</div>
        </div>
        <div class="upload-progress-bar">
          <div class="upload-progress-fill" id="uploadFill"></div>
        </div>
        <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload completes.
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal">
      <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Submission Locked In!</h1>
      <div class="success-message">
        Your solution is in! Now sit tight and wait for the results.<br><br>
        Good luck! 🔥🏆
      </div>
      <a href="https://www.facebook.com/hello.rubc" target="_blank" rel="noopener noreferrer" class="facebook-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Follow for Updates
      </a>
      <div style="color: #8892b0; font-size: 0.9rem; margin-top: 15px;">
        The grind never stops! 🚀
      </div>
    </div>
  </div>
  <script>
    const form = document.getElementById("registrationForm");
    const submitBtn = form.querySelector("button[type='submit']");
    const successModal = document.getElementById("successModal");
    const errorMsg = document.getElementById("errorMsg");
    const fields = form.querySelectorAll("input:not([type='file']), select");
    const uploadProgress = document.getElementById("uploadProgress");
    const uploadStatusText = document.getElementById("uploadStatusText");
    const uploadPercent = document.getElementById("uploadPercent");
    const uploadFill = document.getElementById("uploadFill");
    const uploadDetail = document.getElementById("uploadDetail");
    function showProgress() {
      uploadProgress.classList.remove('done', 'error-state');
      uploadProgress.classList.add('show');
    }
    function hideProgress() {
      uploadProgress.classList.remove('show', 'done', 'error-state');
    }
    function setProgress(percent, statusText, detail) {
      const p = Math.max(0, Math.min(100, Math.round(percent)));
      uploadFill.style.width = p + '%';
      uploadPercent.textContent = p + '%';
      if (statusText !== undefined) uploadStatusText.textContent = statusText;
      if (detail !== undefined) uploadDetail.textContent = detail;
    }
    function markProgressDone(text) {
      uploadProgress.classList.add('done');
      uploadFill.style.width = '100%';
      uploadPercent.textContent = '100%';
      uploadStatusText.textContent = text || 'Submission complete!';
      uploadDetail.textContent = 'You can close this tab anytime.';
    }
    function markProgressError(text) {
      uploadProgress.classList.add('error-state');
      uploadStatusText.textContent = text || 'Upload failed';
      uploadDetail.textContent = 'See message above for details.';
    }
    function formatMB(bytes) {
      return (bytes / 1024 / 1024).toFixed(1) + ' MB';
    }
    const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxeX0XRvBBkteeYGusmKAalxzT3cQNe4x3HZErCcwP7JrGmhDyivZ86VP-XvOXiLtnN/exec";
    function logError(message, data = null) {
      try {
        const existingLogs = JSON.parse(localStorage.getItem('errorLogs') || '[]');
        existingLogs.push({ timestamp: new Date().toISOString(), message, data, userAgent: navigator.userAgent, url: window.location.href });
        if (existingLogs.length > 10) existingLogs.shift();
        localStorage.setItem('errorLogs', JSON.stringify(existingLogs));
      } catch (e) { }
    }
    function validateField(field) {
      if (field.id === 'teamLeaderPhone') {
        const v = field.value.trim();
        if (v.length === 11 && /^\\d{11}$/.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else {
        if (!field.checkValidity()) {
          field.classList.add("error");
          return false;
        } else {
          field.classList.remove("error");
          return true;
        }
      }
    }
    function validateFileArea(inputId, areaId, allowedExts) {
      const input = document.getElementById(inputId);
      const area = document.getElementById(areaId);
      if (!input.files || input.files.length === 0) {
        area.classList.add('file-error');
        return false;
      }
      const name = input.files[0].name.toLowerCase();
      if (!allowedExts.some(ext => name.endsWith(ext))) {
        area.classList.add('file-error');
        return false;
      }
      area.classList.remove('file-error');
      return true;
    }
    function sanitizeFileName(name) {
      return name.replace(/[^a-zA-Z0-9_\\- ]/g, '').replace(/\\s+/g, '_').slice(0, 50) || 'team';
    }
    function showSuccessModal() {
      successModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) { }
    }
    function closeSuccessModal() {
      successModal.classList.remove('show');
      document.body.style.overflow = '';
    }
    window.closeSuccessModal = closeSuccessModal;
    successModal.addEventListener('click', function (e) {
      if (e.target === successModal) closeSuccessModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
    });
    function setupFileInput(inputId, areaId, textId) {
      const input = document.getElementById(inputId);
      const area = document.getElementById(areaId);
      const text = document.getElementById(textId);
      input.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
          const file = this.files[0];
          const sizeMB = (file.size / 1024 / 1024).toFixed(1);
          text.textContent = file.name + ' (' + sizeMB + ' MB)';
          area.classList.add('has-file');
          area.classList.remove('file-error');
        } else {
          text.textContent = area.dataset.placeholder;
          area.classList.remove('has-file');
        }
      });
      area.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('drag-over');
      });
      area.addEventListener('dragleave', function () {
        this.classList.remove('drag-over');
      });
      area.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          input.files = e.dataTransfer.files;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
      clearOldErrorLogs();
      setupFileInput('pptxFile', 'pptxArea', 'pptxText');
      setupFileInput('pdfFile', 'pdfArea', 'pdfText');
      const phoneInput = document.getElementById('teamLeaderPhone');
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\\D/g, '');
        if (this.value.length > 11) this.value = this.value.slice(0, 11);
        validateField(this);
      });
      phoneInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
        validateField(this);
      });
    });
    function clearOldErrorLogs() {
      try {
        const logs = JSON.parse(localStorage.getItem('errorLogs') || '[]');
        const oneDayAgo = Date.now() - 86400000;
        localStorage.setItem('errorLogs', JSON.stringify(logs.filter(l => new Date(l.timestamp).getTime() > oneDayAgo)));
      } catch (e) { }
    }
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (submitBtn.classList.contains("loading")) return;
      hideProgress();
      let invalidFound = false;
      fields.forEach(field => {
        if (!validateField(field)) {
          if (!invalidFound) { field.focus(); invalidFound = true; }
        }
      });
      const pptxValid = validateFileArea('pptxFile', 'pptxArea', ['.pptx', '.ppt']);
      const pdfValid = validateFileArea('pdfFile', 'pdfArea', ['.pdf']);
      if (!pptxValid || !pdfValid) invalidFound = true;
      if (invalidFound) {
        errorMsg.textContent = "Please fill all required fields and attach both files correctly.";
        errorMsg.style.display = "block";
        return;
      }
      errorMsg.style.display = "none";
      const now = Date.now();
      if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
        errorMsg.textContent = "Please wait a few seconds before submitting again.";
        errorMsg.style.display = "block";
        return;
      }
      const pptxFile = document.getElementById('pptxFile').files[0];
      const pdfFile = document.getElementById('pdfFile').files[0];
      const MAX_SIZE = 30 * 1024 * 1024;
      if (pptxFile.size > MAX_SIZE || pdfFile.size > MAX_SIZE) {
        errorMsg.textContent = "Each file must be 30 MB or smaller.";
        errorMsg.style.display = "block";
        return;
      }
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Uploading...";
      const totalBytes = pptxFile.size + pdfFile.size;
      showProgress();
      setProgress(0,
        'Reading files...',
        'Preparing ' + formatMB(totalBytes) + ' for upload. Keep this tab open.');
      let serverPhaseTimer = null;
      try {
        const teamName = document.getElementById('teamName').value.trim();
        const safeName = sanitizeFileName(teamName);
        const pptxExt = pptxFile.name.toLowerCase().endsWith('.ppt') ? '.ppt' : '.pptx';
        let pptxRead = 0, pdfRead = 0;
        const updateReadProgress = () => {
          const readBytes = Math.round(pptxFile.size * pptxRead + pdfFile.size * pdfRead);
          const pct = totalBytes > 0 ? (readBytes / totalBytes) * 15 : 0;
          setProgress(pct, 'Reading files...',
            'Read ' + formatMB(readBytes) + ' of ' + formatMB(totalBytes));
        };
        const [pptxBase64, pdfBase64] = await Promise.all([
          readFileAsBase64WithProgress(pptxFile, p => { pptxRead = p; updateReadProgress(); }),
          readFileAsBase64WithProgress(pdfFile, p => { pdfRead = p; updateReadProgress(); })
        ]);
        const payload = {
          teamName: teamName,
          leaderName: document.getElementById('teamLeaderName').value.trim(),
          leaderEmail: document.getElementById('teamLeaderEmail').value.trim(),
          leaderPhone: document.getElementById('teamLeaderPhone').value.trim(),
          feedback: document.getElementById('feedback').value.trim(),
          pptxBase64: pptxBase64,
          pptxName: safeName + '_R1_Unravel Hexa' + pptxExt,
          pptxMime: pptxFile.type || 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          pdfBase64: pdfBase64,
          pdfName: safeName + '_R1_Unravel Hexa.pdf',
          pdfMime: 'application/pdf'
        };
        const body = JSON.stringify(payload);
        const bodyBytes = new Blob([body]).size;
        setProgress(15, 'Uploading to server...',
          'Sending ' + formatMB(bodyBytes) + ' to Google Drive. Larger files take longer.');
        let creep = 15;
        serverPhaseTimer = setInterval(() => {
          creep += (90 - creep) * 0.04;
          setProgress(creep, 'Uploading to server...',
            'Sending ' + formatMB(bodyBytes) + ' to Google Drive. Larger files take longer.');
        }, 400);
        const response = await fetch(WEBAPP_URL, {
          method: 'POST',
          body: body
        });
        clearInterval(serverPhaseTimer);
        serverPhaseTimer = null;
        if (!response.ok) {
          const errText = await response.text().catch(() => '');
          console.error('HTTP ' + response.status, errText.slice(0, 500));
          throw new Error('HTTP ' + response.status + ' from Apps Script.');
        }
        setProgress(95, 'Finalizing on Drive...',
          'Saving files and recording your submission.');
        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseErr) {
          console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
          throw new Error('Server returned non-JSON. Likely the web app is not deployed with "Anyone" access, or the URL is stale.');
        }
        if (data.success) {
          localStorage.setItem('lastSubmission', Date.now().toString());
          markProgressDone('Submission complete!');
          setTimeout(() => {
            form.reset();
            document.getElementById('pptxText').textContent = 'Click or drag to upload PPTX / PPT file';
            document.getElementById('pdfText').textContent = 'Click or drag to upload PDF file';
            document.getElementById('pptxArea').classList.remove('has-file', 'file-error');
            document.getElementById('pdfArea').classList.remove('has-file', 'file-error');
            showSuccessModal();
            fields.forEach(f => f.classList.remove("error"));
            hideProgress();
          }, 700);
        } else {
          logError('Backend error', data.error);
          errorMsg.textContent = data.error || "Submission failed. Please try again.";
          errorMsg.style.display = "block";
          markProgressError('Server rejected submission');
        }
      } catch (error) {
        console.error('Submission error:', error);
        logError('Submission error', error.message);
        errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error') + ' — open browser console (F12) for details.';
        errorMsg.style.display = "block";
        markProgressError('Upload failed');
      } finally {
        if (serverPhaseTimer) clearInterval(serverPhaseTimer);
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Submit";
      }
    });
    function readFileAsBase64WithProgress(file, onProgress) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onprogress = (e) => {
          if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
        };
        reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    fields.forEach(field => {
      field.addEventListener("input", () => {
        validateField(field);
        if (errorMsg.style.display === "block") errorMsg.style.display = "none";
      });
      field.addEventListener("change", () => validateField(field));
    });
  </script>
</body>
</html>`
  },
  {
    id: "r1-submission-js",
    shortName: "R1Submission.js",
    language: "javascript",
    category: "Round 1",
    summary: "Server-side Apps Script that validates, sanitizes, and stores submitted PPTX/PDF files to Google Drive with automatic sheet logging.",
    content: `
const SHEET_ID       = 'HIDDEN';
const PPTX_FOLDER_ID = 'HIDDEN';
const PDF_FOLDER_ID  = 'HIDDEN';
const MAX_FILE_BYTES = 30 * 1024 * 1024; 
const ALLOWED_PPTX_MIMES = [
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'application/vnd.ms-powerpoint',
  'application/octet-stream'
];
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const teamName    = sanitizeText(data.teamName, 100);
    const leaderName  = sanitizeText(data.leaderName, 100);
    const leaderEmail = sanitizeText(data.leaderEmail, 150).toLowerCase();
    const leaderPhone = sanitizeText(data.leaderPhone, 20);
    const feedback    = sanitizeText(data.feedback, 1000);
    if (!teamName || !leaderName || !leaderEmail || !leaderPhone) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(leaderEmail)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^\\d{11}$/.test(leaderPhone)) {
      return jsonResponse({ success: false, error: 'Invalid phone number.' });
    }
    if (!data.pptxBase64 || !data.pdfBase64) {
      return jsonResponse({ success: false, error: 'Missing file data.' });
    }
    const pptxName = sanitizeFileName(data.pptxName) || (sanitizeText(teamName, 50) + '_R1.pptx');
    const pdfName  = sanitizeFileName(data.pdfName)  || (sanitizeText(teamName, 50) + '_R1.pdf');
    if (!/\\.(pptx|ppt)$/i.test(pptxName)) {
      return jsonResponse({ success: false, error: 'Presentation must be .pptx or .ppt' });
    }
    if (!/\\.pdf$/i.test(pdfName)) {
      return jsonResponse({ success: false, error: 'Solution file must be .pdf' });
    }
    const pptxBytes = Utilities.base64Decode(data.pptxBase64);
    const pdfBytes  = Utilities.base64Decode(data.pdfBase64);
    if (pptxBytes.length > MAX_FILE_BYTES || pdfBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Each file must be 30 MB or smaller.' });
    }
    const pptxMime = data.pptxMime && ALLOWED_PPTX_MIMES.indexOf(data.pptxMime) !== -1
      ? data.pptxMime
      : 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    const pptxBlob = Utilities.newBlob(pptxBytes, pptxMime, pptxName);
    const pptxFile = DriveApp.getFolderById(PPTX_FOLDER_ID).createFile(pptxBlob);
    pptxFile.setDescription('Round 1 PPTX — ' + teamName);
    pptxFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const pptxLink = 'https://drive.google.com/file/d/' + pptxFile.getId() + '/view?usp=sharing';
    const pdfBlob = Utilities.newBlob(pdfBytes, 'application/pdf', pdfName);
    const pdfFile = DriveApp.getFolderById(PDF_FOLDER_ID).createFile(pdfBlob);
    pdfFile.setDescription('Round 1 PDF — ' + teamName);
    pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const pdfLink = 'https://drive.google.com/file/d/' + pdfFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    sheet.appendRow([
      new Date(),    
      teamName,      
      leaderName,    
      leaderEmail,   
      leaderPhone,   
      pptxLink,      
      pdfLink,       
      feedback       
    ]);
    return jsonResponse({ success: true, pptxUrl: pptxLink, pdfUrl: pdfLink });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X R1 Submission' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[^a-zA-Z0-9_\\-. ]/g, '')
    .replace(/\\s+/g, '_')
    .slice(0, 120);
}
`
  },
  {
    id: "finalist-congrats",
    shortName: "FinalistCongrats.html",
    language: "html",
    category: "Final Round",
    summary: "Congratulatory email template sent to finalist teams with prize pool details and Grand Finale preparation instructions.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎉 You're a Finalist! | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      CONGRATULATIONS, FINALIST!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      You Made It to the Grand Finale</p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We are thrilled to announce that your team has been selected as one of the finalists of <strong>Xeron IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>!
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Out of all the participating teams, yours stood out with exceptional analysis and strategic thinking. This is a
      remarkable achievement, and you should be incredibly proud of your hard work and dedication.
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 24px 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 4px; font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #f58220;">
        You're Already In The</p>
      <p
        style="margin: 0; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        ৳25,000 Prize Pool!</p>
      <p style="margin: 8px 0 0; font-size: 14px; color: #64748b;">
        As a finalist, you are guaranteed to be part of it.</p>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      What Happens Next?</h3>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We are currently finalizing the details for the <strong>Grand Finale</strong>. Here's what you need to know:
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #334155;">
            <strong><span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 18px; height: 18px; background-color: #d72027; border-radius: 4px; text-align: center; line-height: 18px; font-size: 11px; color: #ffffff; font-family: Arial, sans-serif;">&#9650;</span> Grand Finale Date</strong> &mdash; will be announced very soon. Stay tuned for the official
            announcement.
          </p>
          <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #334155;">
            <strong><span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 18px; height: 18px; background-color: #f58220; border-radius: 4px; text-align: center; line-height: 18px; font-size: 11px; color: #ffffff; font-family: Arial, sans-serif;">&#9654;</span> Final Round Casebook</strong> &mdash; will be sent to you shortly before the event. Keep an eye on
            your inbox.
          </p>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Until then, stay prepared and keep the momentum going!
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 20px; background-color: #fdf2f2; border: 1px dashed #d72027; border-radius: 12px;">
      <p
        style="margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
        <span style="display: inline-block; vertical-align: middle; margin-right: 6px; width: 22px; height: 22px; background-color: #d72027; border-radius: 50%; text-align: center; line-height: 22px; font-size: 12px; color: #ffffff; font-family: Arial, sans-serif;">&#10033;</span>
        One Quick Request!</p>
      <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #334155;">
        Please send us a <strong>professional photo of your team</strong> by simply <strong style="color: #d72027;">replying
          to this email</strong>. We'll feature it in our event materials and social media coverage.
      </p>
    </div>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      Once again, congratulations on this incredible milestone. The best is yet to come!
    </p>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`
  },
  {
    id: "final-casebook",
    shortName: "FinalCasebook.html",
    language: "html",
    category: "Final Round",
    summary: "Final round casebook distribution email with submission guidelines, deadlines, and event venue details.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎯 Final Round Casebook | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      FINAL ROUND CASEBOOK</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      It's Time to Unravel the Final Challenge</p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      The ultimate challenge is finally here! We are incredibly excited to share the <strong>Final Round
        Casebook</strong> for <strong>Xeron IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      You’ve shown exceptional strategic brilliance to make it this far, and now
      it's time to bring your absolute best to the Grand Finale.
    </p>
    <div
      style="text-align: center; margin: 28px 0; padding: 24px 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 16px; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        GET READY TO UNRAVEL THE CASE!</p>
      <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #334155;">
        The casebook contains all the details regarding <strong>submission</strong>, <strong>Grand Finale
          presentation instructions</strong>, and important information.</p>
      <a href="https://drive.google.com/file/d/1lKat-e_gyTR76X9hqcJObkaEOGgMwDZt/view?usp=drive_link" target="_blank"
        style="display: inline-block; background-color: #d72027; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(215, 32, 39, 0.25);">
        ACCESS THE CASEBOOK HERE
      </a>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Submission Details</h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Deadline:</strong> 12 June | 11:59 AM <strong
                style="color: #d72027; background-color: #fde8e8; padding: 2px 6px; border-radius: 4px; border: 1px solid #fca5a5;">(Noon)</strong>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Format:</strong> <code
                style="background-color: #f1f5f9; padding: 2px 4px; border-radius: 4px; color: #475569; font-family: monospace;">Team_Name_UNRAVELHEXA_FINALROUND</code>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Note:</strong> Only <strong>one submission</strong> per team will be accepted.
            </li>
            <li style="margin: 0;">
              <strong>Important:</strong> Please read the casebook carefully for more detailed instructions.
            </li>
          </ul>
        </td>
      </tr>
    </table>
    <div
      style="text-align: center; margin: 10px 0 18px;">
      <a href="https://forms.gle/dvXd8TVqS8oE3U9G8" target="_blank"
        style="display: inline-block; background-color: #f58220; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(245, 130, 32, 0.25);">
        SUBMIT YOUR SOLUTION HERE
      </a>
    </div>
    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium
            </li>
            <li style="margin: 0;">
              <strong>Time:</strong> TBA
            </li>
          </ul>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Best of luck with your final preparations! We can't wait to see what you bring to the Grand Finale. Let's make it
      a day to remember!
    </p>
    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "finalist-mailer",
    shortName: "FinalistMailer.js",
    language: "javascript",
    category: "Final Round",
    summary: "Spreadsheet-integrated bulk mailer with custom UI menu for selecting and sending finalist notifications to multiple teams.",
    content: `
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Send Mail")
    .addItem("Send to Selected Rows", "sendToSelected")
    .addToUi();
}
function sendToSelected() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const selection = sheet.getActiveRange();
  const ui = SpreadsheetApp.getUi();
  if (!selection) {
    ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
    return;
  }
  const startRow = selection.getRow();
  const numRows = selection.getNumRows();
  const confirm = ui.alert(
    "Confirm Send",
    \`You're about to send emails to \${numRows} team(s) (rows \${startRow} to \${startRow + numRows - 1}).\\n\\nProceed?\`,
    ui.ButtonSet.YES_NO
  );
  if (confirm !== ui.Button.YES) return;
  const htmlTemplate = HtmlService.createHtmlOutputFromFile("Email").getContent();
  let sent = 0;
  let failed = 0;
  const errors = [];
  for (let i = 0; i < numRows; i++) {
    const row = startRow + i;
    const teamName = sheet.getRange(row, 1).getValue().toString().trim();
    const email = sheet.getRange(row, 2).getValue().toString().trim();
    if (!teamName || !email) {
      errors.push(\`Row \${row}: Missing team name or email — skipped.\`);
      failed++;
      continue;
    }
    const body = htmlTemplate.replace(/\\{\\{team_name\\}\\}/g, teamName);
    try {
      GmailApp.sendEmail(email, "🏆 Congratulations, Finalist! | Unravel Hexa", "", {
        htmlBody: body,
        name: "Unravel Hexa — RUBC",
      });
      sent++;
    } catch (e) {
      errors.push(\`Row \${row} (\${email}): \${e.message}\`);
      failed++;
    }
  }
  let summary = \`✅ Sent: \${sent}\\n❌ Failed: \${failed}\`;
  if (errors.length > 0) {
    summary += "\\n\\nErrors:\\n" + errors.join("\\n");
  }
  ui.alert("Send Complete", summary, ui.ButtonSet.OK);
}
`
  },
  {
    id: "final-round-invitation-mailer",
    shortName: "07. InvitationMailer.js",
    language: "javascript",
    category: "Final Round",
    summary: "Script to send invitation emails to various stakeholders for the final round.",
    content: `function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Click Here to Send Email 🔥")
    .addItem("Send to Sponsors", "sendSponsorMail")
    .addItem("Send to Guests", "sendGuestMail")
    .addItem("Send to Campus Ambassadors", "sendAmbassadorMail")
    .addItem("Send to RU Clubs", "sendClubMail")
    .addItem("Send to Partner Clubs", "sendPartnerClubMail")
    .addSeparator()
    .addItem("Send to Apus", "sendApuMail")
    .addItem("Send to Vaiyas", "sendVaiyaMail")
    .addItem("Send to Advisors", "sendAdvisorMail")
    .addToUi();
}

const FROM_NAME = "Unravel Hexa | RUBC";
const NAME_COL = 1;
const EMAIL_COL = 2;
const SPONSOR_TYPE_COL = 3;

const SPONSOR_TEMPLATE_MAP = {
  title: "02.1. TitleSponsorMail",
  poweredby: "02.2. PoweredBySponsorMail",
  sabroad: "02.3. StudyAbroadPartnerMail",
};
const DEFAULT_SPONSOR_TEMPLATE = "02. SponsorMail";

const MAIL_CONFIGS = {
  sponsor: {
    label: "Sponsors",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{sponsor_name}}",
    fallbackName: "Partner",
    usesSponsorType: true,
  },
  guest: {
    label: "Guests",
    templateFile: "03. GuestMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{guest_name}}",
    fallbackName: "Guest",
  },
  ambassador: {
    label: "Campus Ambassadors",
    templateFile: "04. CampusAmbassadorMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{ambassador_name}}",
    fallbackName: "Ambassador",
  },
  club: {
    label: "RU Clubs",
    templateFile: "05. ClubMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{club_name}}",
    fallbackName: "Club",
  },
  partnerClub: {
    label: "Partner Clubs",
    templateFile: "06. PartnerClubMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{club_name}}",
    fallbackName: "Club",
  },
  apu: {
    label: "Apus",
    templateFile: "08. AlumniMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{alumni_name}}",
    fallbackName: "Alumnus",
  },
  vaiya: {
    label: "Vaiyas",
    templateFile: "08. AlumniMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{alumni_name}}",
    fallbackName: "Alumnus",
  },
  advisor: {
    label: "Advisors",
    templateFile: "09. AdvisorMail",
    subject: "Invitation to the Grand Finale of Unravel Hexa",
    placeholder: "{{advisor_name}}",
    fallbackName: "Advisor",
  },
};

function sendSponsorMail() {
  sendInvitationMail_("sponsor");
}

function sendGuestMail() {
  sendInvitationMail_("guest");
}

function sendAmbassadorMail() {
  sendInvitationMail_("ambassador");
}

function sendClubMail() {
  sendInvitationMail_("club");
}

function sendPartnerClubMail() {
  sendInvitationMail_("partnerClub");
}

function sendApuMail() {
  sendInvitationMail_("apu");
}

function sendVaiyaMail() {
  sendInvitationMail_("vaiya");
}

function sendAdvisorMail() {
  sendInvitationMail_("advisor");
}

function sendInvitationMail_(type) {
  const config = MAIL_CONFIGS[type];
  if (!config) {
    SpreadsheetApp.getUi().alert("⚠️ Error", "Unknown mail type: " + type, SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }

  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSheet();
  const selection = sheet.getActiveRange();

  if (!selection) {
    ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
    return;
  }

  const startRow = selection.getRow();
  const numRows = selection.getNumRows();
  const endRow = startRow + numRows - 1;

  if (startRow < 2) {
    ui.alert(
      "⚠️ Invalid Selection",
      "Please select data rows only (row 2 onwards). Don't include the header.",
      ui.ButtonSet.OK
    );
    return;
  }

  const lastCol = config.usesSponsorType ? SPONSOR_TYPE_COL : EMAIL_COL;
  const rows = sheet.getRange(startRow, NAME_COL, endRow, lastCol).getValues();

  let validCount = 0;
  for (let i = 0; i < rows.length; i++) {
    if (isValidEmail_(rows[i][EMAIL_COL - 1])) {
      validCount++;
    }
  }

  if (validCount === 0) {
    ui.alert("⚠️ No Emails", "No valid email addresses found in column B for the selected rows.", ui.ButtonSet.OK);
    return;
  }

  const sponsorNote = config.usesSponsorType
    ? "\\n\\nSponsor type is read from column C (Title / Powered By / Study Abroad)."
    : "";

  const confirm = ui.alert(
    "📧 Confirm Send",
    "Send mail to " + config.label + "?\\n\\n" +
      "This will email " + validCount + " recipient(s) (rows " + startRow + "–" + endRow + ")." +
      sponsorNote + "\\n\\nProceed?",
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) {
    ui.alert("Cancelled", "No emails were sent.", ui.ButtonSet.OK);
    return;
  }

  const templateCache = {};
  let defaultTemplate = null;

  if (!config.usesSponsorType) {
    try {
      defaultTemplate = loadTemplate_(config.templateFile, templateCache);
    } catch (err) {
      ui.alert(
        "⚠️ Template Missing",
        'Could not load HTML template "' + config.templateFile + '".\\n\\n' +
          "Add it in Apps Script (File → New → HTML file) and paste the matching .html content.",
        ui.ButtonSet.OK
      );
      return;
    }
  }

  let sentCount = 0;
  let failedCount = 0;
  const errors = [];
  for (let i = 0; i < rows.length; i++) {
    const rowNum = startRow + i;
    const email = String(rows[i][EMAIL_COL - 1] || "").trim();
    const name = String(rows[i][NAME_COL - 1] || "").trim() || config.fallbackName;

    if (!isValidEmail_(email)) continue;

    try {
      const templateFile = config.usesSponsorType
        ? resolveSponsorTemplate_(rows[i][SPONSOR_TYPE_COL - 1])
        : config.templateFile;
      const htmlTemplate = config.usesSponsorType
        ? loadTemplate_(templateFile, templateCache)
        : defaultTemplate;
      const finalHtml = fillPlaceholder_(htmlTemplate, config.placeholder, name);

      GmailApp.sendEmail(email, config.subject, "", {
        htmlBody: finalHtml,
        name: FROM_NAME,
      });

      sentCount++;
    } catch (err) {
      failedCount++;
      errors.push("Row " + rowNum + " (" + email + "): " + err.message);
      Logger.log("Failed row " + rowNum + ": " + err.toString());
    }
  }

  let summary = "Send mail to " + config.label + "\\n\\n✅ Sent: " + sentCount + "\\n❌ Failed: " + failedCount;
  if (errors.length > 0) {
    summary += "\\n\\nErrors:\\n" + errors.join("\\n");
  }

  ui.alert("📧 Done!", summary, ui.ButtonSet.OK);
  Logger.log(config.label + " invitation — Sent: " + sentCount + ", Failed: " + failedCount);
}

function resolveSponsorTemplate_(typeValue) {
  const normalized = String(typeValue || "")
    .trim()
    .toLowerCase()
    .replace(/[\\s_-]+/g, "");

  if (!normalized) {
    return DEFAULT_SPONSOR_TEMPLATE;
  }
  if (normalized.indexOf("title") !== -1) {
    return SPONSOR_TEMPLATE_MAP.title;
  }
  if (normalized.indexOf("powered") !== -1 || normalized === "poweredby") {
    return SPONSOR_TEMPLATE_MAP.poweredby;
  }
  if (
    normalized.indexOf("study") !== -1 ||
    normalized.indexOf("abroad") !== -1 ||
    normalized === "sabroad"
  ) {
    return SPONSOR_TEMPLATE_MAP.sabroad;
  }

  return DEFAULT_SPONSOR_TEMPLATE;
}

function loadTemplate_(templateFile, cache) {
  if (cache[templateFile]) {
    return cache[templateFile];
  }

  const content = HtmlService.createHtmlOutputFromFile(templateFile).getContent();
  cache[templateFile] = content;
  return content;
}

function isValidEmail_(value) {
  const email = String(value || "").trim();
  return email !== "" && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function fillPlaceholder_(html, placeholder, name) {
  return html.split(placeholder).join(escapeHtml_(name));
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}`
  },
  {
    id: "final-round-judge-mail",
    shortName: "01. JudgeMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting judges to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Final Round | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Join Us as a Distinguished Judge for the Grand Finale</p>
 

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{judge_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for kindly agreeing to judge the Grand Finale of <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have you
      on the panel.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Having received your response through the form on the website, we are pleased to share the
      <strong>Final Round Casebook</strong> and <strong>Brandbook</strong> with you below for your reference.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please review both documents at your convenience ahead of the Grand Finale. We look forward to your valuable
      insights and contribution on the judging panel.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1lKat-e_gyTR76X9hqcJObkaEOGgMwDZt/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Casebook</a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1UoMekk4Xr76SXD76MsoOMK0fJPPf7CKe/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Brandbook</a>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for your valuable time and
      contribution.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-title-sponsor-mail",
    shortName: "02.1. TitleSponsorMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for the title sponsor of the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Title Sponsor at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Title Sponsor</strong> of
      <strong style="color: #d72027;">Unravel Hexa</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      As our Title Sponsor, you have played a pivotal role in bringing this competition to life. Now, we would be
      honored to welcome you to the Grand Finale, the culminating celebration of months of strategic brilliance,
      dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage. We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-powered-by-sponsor-mail",
    shortName: "02.2. PoweredBySponsorMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for the powered-by sponsor of the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Powered By Sponsor at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Powered by</strong> sponsor of
      <strong style="color: #d72027;">Unravel Hexa</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      As our Powered by sponsor, you have been a vital force behind the success of this competition. Now, we would be
      honored to welcome you to the Grand Finale, the culminating celebration of months of strategic brilliance,
      dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage. We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-study-abroad-partner-mail",
    shortName: "02.3. StudyAbroadPartnerMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for the study abroad partner of the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Celebrating Our Study Abroad Partner at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{sponsor_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your generous support and partnership as the <strong>Study Abroad Partner</strong> of <strong>Xerone IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by <strong>Rajshahi University Business
        Club</strong>. We are truly grateful for your belief in us and for standing beside us throughout this journey.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Now, we would be honored to welcome you to the Grand Finale,
      the culminating celebration of months of strategic brilliance, dedication, and competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your presence would mean the world to us and to every participant who has worked tirelessly to reach this stage. We
      look forward to sharing this special evening with you.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #1476ed; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an integral part of
      Unravel Hexa — we couldn't have done it without you.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-guest-mail",
    shortName: "03. GuestMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting guests to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      An Exclusive Invitation for Our Distinguished Guests</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{guest_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      It is with great honor that we extend this special invitation to you for the Grand Finale of
      <strong>Xerone IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by
      <strong>RAMPS BD</strong>, organized by <strong>Rajshahi University Business Club</strong>. Your presence
      would be a privilege for us and a source of inspiration for every participant on stage.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be delighted to welcome you as we witness the culmination of months of strategic brilliance,
      dedication, and competition. Below is a brief overview of what Unravel Hexa stands for.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      About Unravel Hexa</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <p style="margin: 0 0 12px; color: #334155; font-size: 16px; line-height: 1.6;">
            <strong>Unravel</strong> is the flagship business case competition of <strong>Rajshahi University
              Business Club</strong>. It is now in its <strong>sixth edition</strong>, bringing together the brightest 1st
            and 2nd year undergraduates from universities across North Bengal to tackle real, market-inspired business
            challenges.
          </p>
          <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6;">
            At the Grand Finale, the <strong>top 8 teams</strong> will present their solutions before a distinguished
            panel, the culminating moment of a competition built to <em style="color: #d72027;">Unravel Your
              Potential</em> and showcase the next generation of business talent from the region.
          </p>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us for this
      milestone event.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-campus-ambassador-mail",
    shortName: "04. CampusAmbassadorMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting campus ambassadors to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Honoring Our Campus Ambassadors at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{ambassador_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for your dedication and hard work as a Campus Ambassador for <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized
      by <strong>Rajshahi University Business Club</strong>. Your efforts in spreading the word across campuses played
      a vital role in making this competition reach students far and wide.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be delighted to have you join us at the Grand Finale — the culminating celebration of everything you
      helped build. Your presence would mean a great deal to the entire team.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for being an essential part of
      Unravel Hexa — we truly appreciate everything you've done.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With heartfelt gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-club-mail",
    shortName: "05. ClubMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting university clubs to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      An Invitation to Our Fellow Clubs at the University of Rajshahi</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{club_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      On behalf of <strong>Rajshahi University Business Club</strong>, we extend our heartfelt gratitude to you and
      your members for the camaraderie and support you have shown throughout <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. As fellow clubs
      under the same university, your encouragement means a great deal to us.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be honored to welcome you and your members to the Grand Finale — a celebration of student talent,
      teamwork, and the vibrant club culture we all share at the University of Rajshahi.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to sharing this special evening together on campus.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-partner-club-mail",
    shortName: "06. PartnerClubMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting partner clubs to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      With heartfelt gratitude for your partnership
    </p>


    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{club_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      On behalf of <strong>Rajshahi University Business Club</strong>, we extend our heartfelt gratitude to you and
      your members for partnering with us throughout <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. Your
      collaboration in reaching students across campuses has been invaluable to the success of this competition.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be honored to welcome you and your members to the Grand Finale at the University of Rajshahi — the
      culminating celebration of student talent, teamwork, and the partnerships that brought Unravel Hexa to
      universities across the country.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to celebrating this milestone together.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With warm regards,<br />
        Team Unravel Hexa
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-alumni-mail",
    shortName: "08. AlumniMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting alumni to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Honoring Our Beloved Alumni at the Grand Finale</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{alumni_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for the legacy you have built and the footsteps you have left for us at
      <strong>Rajshahi University Business Club</strong>. As an alumnus, your contributions, dedication, and
      spirit continue to inspire every generation of members who follow in your path.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be truly delighted to welcome you to the Grand Finale of <strong>Xerone IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong> — the culminating
      celebration of everything our club stands for, and a moment we would be proud to share with those who helped
      shape who we are today.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. We sincerely hope you can join us and look forward
      to reuniting with you on this special evening.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With love and gratitude,<br />
        Rajshahi University Business Club
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-advisor-mail",
    shortName: "09. AdvisorMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template for inviting advisors to the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Finale Invitation | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      INVITATION TO THE GRAND FINALE</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      A Humble Invitation to Our Respected Advisors</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Respected <strong>{{advisor_name}}</strong> sir,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We hope this message finds you in good health and high spirits. On behalf of
      <strong>Rajshahi University Business Club</strong>, we express our deepest gratitude for the guidance,
      encouragement, and invaluable support you have extended to us as our advisor. Your wisdom and mentorship have
      been a constant source of strength for our members and our endeavors.
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would be profoundly honored by your esteemed presence at the Grand Finale of <strong>Xerone IT</strong>
      presents <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, the
      culminating event of our regional business case competition. Your blessings and presence would greatly inspire
      our participants and the entire organizing team.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Event Time:</strong> 2:00 PM
            </li>
            <li style="margin: 0;">
              <strong>Requested Reporting Time:</strong> 1:30 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Should you require any further information, please do not hesitate to contact us. We humbly hope you will
      grace us with your presence on this occasion.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With profound respect and gratitude,<br />
        Rajshahi University Business Club
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "final-round-deadline-extension-mail",
    shortName: "10. DeadlineExtensionMail.html",
    language: "html",
    category: "Final Round",
    summary: "Email template announcing a deadline extension for the final round.",
    content: `<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Deadline Extended — Final Round | Unravel Hexa</title>
</head>

<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>

    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      DEADLINE EXTENDED!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Final Round Submission Update</p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear team <strong>{{team_name}}</strong>,
    </p>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Greetings from <strong>Team Unravel Hexa 2026</strong>. We are pleased to inform you that the
      <strong>final presentation submission deadline has been extended by 12 hours</strong>. The new submission
      deadline is:
    </p>

    <div
      style="text-align: center; margin: 28px 0; padding: 20px; background: linear-gradient(135deg, #fff7ed, #fff1e6); border: 2px solid #f58220; border-radius: 12px;">
      <p
        style="margin: 0 0 4px; font-size: 14px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #f58220;">
        New Submission Deadline</p>
      <p
        style="margin: 0; font-size: 26px; font-weight: 800; color: #d72027; font-family: 'Times New Roman', Times, serif;">
        12 June 2026 (Friday), 11:59 PM</p>
    </div>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      This extension is being provided to ensure that all teams have adequate time to refine and finalize their
      solutions before the Grand Finale.
    </p>

    <div style="text-align: center; margin: 10px 0 18px;">
      <a href="https://forms.gle/dvXd8TVqS8oE3U9G8" target="_blank"
        style="display: inline-block; background-color: #f58220; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 12px 24px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; box-shadow: 0 4px 6px rgba(245, 130, 32, 0.25);">
        SUBMIT YOUR SOLUTION HERE
      </a>
    </div>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Grand Finale Event Details</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Date:</strong> 13 June (Saturday), 2026
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Venue:</strong> Senate Auditorium, University of Rajshahi
            </li>
            <li style="margin-bottom: 8px;">
              <strong>Location:</strong> <a href="https://maps.app.goo.gl/XijA7fdeQizeTpsU8" target="_blank"
                style="color: #d72027; text-decoration: none; font-weight: 600;">View on Google Map</a>
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Important Timings</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #f58220; border-radius: 4px;">
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              <strong>Reporting Time:</strong> 1:30 PM
            </li>
            <li style="margin: 0;">
              <strong>Presentation Session Starts:</strong> 2:00 PM
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      All teams are requested to arrive on time and complete the necessary formalities before the presentation session
      begins. Late arrivals may affect the presentation schedule.
    </p>

    <h3
      style="font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 10px; margin-top: 30px; font-family: 'Times New Roman', Times, serif;">
      Reminder</h3>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 18px;">
      <tr>
        <td style="padding: 12px 16px; background-color: #fdf8f3; border-left: 3px solid #d72027; border-radius: 4px;">
          <p style="margin: 0 0 8px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please ensure that:
          </p>
          <ul style="margin: 0; padding: 0 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">
              Your final presentation is submitted before the extended deadline.
            </li>
            <li style="margin-bottom: 8px;">
              All team members are aware of the reporting and presentation schedule.
            </li>
            <li style="margin: 0;">
              You carry any necessary materials required for your presentation.
            </li>
          </ul>
        </td>
      </tr>
    </table>

    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We congratulate you once again on reaching the Grand Finale and look forward to witnessing your innovative
      solutions on the final stage.
    </p>

    <p
      style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.6;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best regards,<br />
        Team Unravel Hexa 2026
      </strong>
    </p>

    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>

      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>

  </div>
</body>

</html>
`
  },
  {
    id: "judge-onboarding-form",
    shortName: "JudgeOnboarding.html",
    language: "html",
    category: "Judges",
    summary: "Judge registration and onboarding portal to collect details and availability.",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>Judge Onboarding | Unravel Hexa</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0a0a0c;
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
        }
        .logo-container {
            margin-bottom: 30px;
        }
        .logo {
            max-width: 550px;
            height: auto;
            filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
            transition: transform 0.3s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }
        .subtitle {
            font-size: 1.1rem;
            color: #b8c6db;
            font-weight: 300;
        }
        .form-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0 60px 50px;
        }
        form {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 50px;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        form:hover {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
            border-color: rgba(245, 130, 32, 0.2);
        }
        h2 {
            text-align: center;
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 6px;
            margin-top: 18px;
            color: #b8c6db;
            user-select: none;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        input[type="tel"]::placeholder {
            color: #8892b0;
        }
        input:invalid {
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        input.error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
        }
        button {
            margin-top: 40px;
            width: 100%;
            padding: 18px;
            font-size: 1.5rem;
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 2px;
            color: white;
            background: linear-gradient(135deg, #f58220, #d72027);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
            user-select: none;
            position: relative;
            overflow: hidden;
        }
        button:hover:not(.loading) {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
        }
        button:active {
            transform: translateY(0);
        }
        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
        button.loading {
            pointer-events: none;
            color: transparent;
        }
        button.loading::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 3px solid white;
            border-top-color: transparent;
            animation: spinner 0.6s linear infinite;
        }
        .error-message {
            color: #e74c3c;
            font-weight: 600;
            margin-top: 15px;
            text-align: center;
            user-select: none;
            display: none;
            background: rgba(231, 76, 60, 0.1);
            border: 1px solid rgba(231, 76, 60, 0.3);
            padding: 12px;
            border-radius: 8px;
        }
        .upload-progress {
            display: none;
            margin-top: 20px;
            padding: 18px 20px;
            background: rgba(245, 130, 32, 0.06);
            border: 1px solid rgba(245, 130, 32, 0.25);
            border-radius: 12px;
            user-select: none;
        }
        .upload-progress.show {
            display: block;
            animation: progressFadeIn 0.3s ease-out;
        }
        @keyframes progressFadeIn {
            from {
                opacity: 0;
                transform: translateY(-6px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .upload-progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            gap: 10px;
        }
        .upload-progress-status {
            color: #f58220;
            font-weight: 600;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }
        .upload-progress-status .spinner-mini {
            width: 14px;
            height: 14px;
            border: 2px solid rgba(245, 130, 32, 0.3);
            border-top-color: #f58220;
            border-radius: 50%;
            animation: spinner 0.7s linear infinite;
            flex-shrink: 0;
        }
        .upload-progress.done .upload-progress-status {
            color: #2ecc71;
        }
        .upload-progress.done .spinner-mini {
            display: none;
        }
        .upload-progress.error-state {
            background: rgba(231, 76, 60, 0.08);
            border-color: rgba(231, 76, 60, 0.35);
        }
        .upload-progress.error-state .upload-progress-status {
            color: #e74c3c;
        }
        .upload-progress.error-state .spinner-mini {
            display: none;
        }
        .upload-progress-percent {
            color: #b8c6db;
            font-weight: 700;
            font-size: 0.95rem;
            font-variant-numeric: tabular-nums;
        }
        .upload-progress-bar {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            overflow: hidden;
            position: relative;
        }
        .upload-progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 999px;
            transition: width 0.25s ease-out;
            position: relative;
            overflow: hidden;
        }
        .upload-progress-fill::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg,
                    transparent,
                    rgba(255, 255, 255, 0.35),
                    transparent);
            animation: shimmer 1.4s linear infinite;
        }
        .upload-progress.done .upload-progress-fill {
            background: linear-gradient(135deg, #27ae60, #2ecc71);
        }
        .upload-progress.done .upload-progress-fill::after,
        .upload-progress.error-state .upload-progress-fill::after {
            display: none;
        }
        @keyframes shimmer {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(100%);
            }
        }
        .upload-progress-detail {
            margin-top: 8px;
            color: #8892b0;
            font-size: 0.82rem;
            font-variant-numeric: tabular-nums;
        }
        .file-upload-area {
            position: relative;
            width: 100%;
            border: 2px dashed rgba(245, 130, 32, 0.35);
            border-radius: 10px;
            padding: 24px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.03);
            margin-top: 4px;
        }
        .file-upload-area:hover,
        .file-upload-area.drag-over {
            border-color: #f58220;
            background: rgba(245, 130, 32, 0.06);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
        }
        .file-upload-area input[type="file"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .file-upload-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .file-upload-text {
            color: #b8c6db;
            font-weight: 500;
            font-size: 0.95rem;
            word-break: break-all;
        }
        .file-upload-hint {
            color: #566573;
            font-size: 0.8rem;
            margin-top: 6px;
        }
        .file-upload-area.has-file {
            border-style: solid;
            border-color: #27ae60;
            background: rgba(39, 174, 96, 0.06);
        }
        .file-upload-area.has-file .file-upload-text {
            color: #2ecc71;
        }
        .file-upload-area.file-error {
            border-style: solid;
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.06);
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
        }
        .form-info {
            margin-bottom: 25px;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .success-modal {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(245, 130, 32, 0.35);
            border-radius: 25px;
            padding: 50px 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
            transform: scale(0.7) translateY(50px);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-overlay.show .success-modal {
            transform: scale(1) translateY(0);
        }
        .success-modal::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
            animation: rotate 4s linear infinite;
            z-index: -1;
        }
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
            animation: bounce 0.8s ease-out 0.3s both;
        }
        @keyframes bounce {
            0% {
                transform: scale(0) rotate(180deg);
            }
            50% {
                transform: scale(1.2) rotate(360deg);
            }
            100% {
                transform: scale(1) rotate(360deg);
            }
        }
        .success-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.8rem;
            font-weight: 400;
            letter-spacing: 2px;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from {
                filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
            }
            to {
                filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
            }
        }
        .success-message {
            font-size: 1.15rem;
            color: #b8c6db;
            line-height: 1.7;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .success-message strong {
            color: #f58220;
            font-weight: 700;
        }
        .ok-button {
            display: inline-block;
            background: linear-gradient(135deg, #f58220, #d72027);
            color: white;
            border: none;
            padding: 14px 50px;
            border-radius: 50px;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.4rem;
            letter-spacing: 3px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
        }
        .ok-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
        }
        .close-modal {
            position: absolute;
            top: 20px;
            right: 25px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        }
        .close-modal:hover {
            background: rgba(245, 130, 32, 0.25);
            transform: rotate(90deg);
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #f58220;
            animation: confetti-fall 3s linear infinite;
        }
        .confetti:nth-child(odd) {
            background: #d72027;
            animation-delay: -0.5s;
        }
        .confetti:nth-child(3n) {
            background: #ff6b6b;
            animation-delay: -1s;
        }
        .confetti:nth-child(4n) {
            background: #ffd93d;
            animation-delay: -1.5s;
        }
        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        .firework {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #f58220;
            border-radius: 50%;
            animation: firework 1.5s ease-out infinite;
        }
        @keyframes firework {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            .form-container {
                padding: 0 25px 30px;
            }
            form {
                padding: 30px 25px;
            }
            h2 {
                font-size: 2.2rem;
            }
            .logo {
                max-width: 340px;
            }
            .success-modal {
                padding: 40px 25px;
                margin: 20px;
            }
            .success-title {
                font-size: 2.2rem;
            }
            .success-message {
                font-size: 1.05rem;
            }
            .success-icon {
                width: 70px;
                height: 70px;
                font-size: 35px;
            }
        }
        @media (max-width: 480px) {
            .header {
                padding: 30px 15px;
            }
            .form-container {
                padding: 0 18px 30px;
            }
            .logo {
                max-width: 240px;
            }
            h2 {
                font-size: 1.8rem;
            }
            .success-modal {
                padding: 30px 20px;
            }
            .success-title {
                font-size: 1.8rem;
            }
            .success-message {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo-container">
            <img src="https://lh3.googleusercontent.com/d/1rT9vyAwzGi9jaDQbq8cNwAuKOVqWFY9F" alt="Unravel Logo"
                class="logo">
        </div>
    </div>
    <div class="form-container">
        <form id="onboardingForm" novalidate>
            <h2>Judge Onboarding</h2>
            <div class="form-info">
                <label for="fullName">Full Name</label>
                <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="Email" type="email" required autocomplete="off"
                    placeholder="your.email@example.com" />
                <label for="companyName">Company's Name</label>
                <input id="companyName" name="Company" type="text" required autocomplete="off"
                    placeholder="Name of your organization" />
                <label for="designation">Designation</label>
                <input id="designation" name="Designation" type="text" required autocomplete="off"
                    placeholder="Your role / position" />
                <label for="whatsappNumber">WhatsApp Number</label>
                <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off"
                    placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
                <label for="photoFile">Formal Photo</label>
                <div class="file-upload-area" id="photoArea"
                    data-placeholder="Click or drag to upload your formal photo">
                    <input id="photoFile" name="photoFile" type="file"
                        accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                        required />
                    <div class="file-upload-icon">📸</div>
                    <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
                    <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
                </div>
            </div>
            <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
            <div class="upload-progress" id="uploadProgress" aria-live="polite">
                <div class="upload-progress-header">
                    <div class="upload-progress-status" id="uploadStatus">
                        <span class="spinner-mini"></span>
                        <span id="uploadStatusText">Preparing file...</span>
                    </div>
                    <div class="upload-progress-percent" id="uploadPercent">0%</div>
                </div>
                <div class="upload-progress-bar">
                    <div class="upload-progress-fill" id="uploadFill"></div>
                </div>
                <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload
                    completes.
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="modal-overlay" id="successModal">
        <div class="success-modal">
            <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
            <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
            <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
            <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
            <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
            <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
            <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
            <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
            <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
            <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
            <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
            <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
            <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
            <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
            <div class="success-icon">✓</div>
            <h1 class="success-title">Thank You!</h1>
            <div class="success-message">
                We sincerely appreciate your time.<br><br>
                Kindly check your <strong>email inbox</strong> for the further details. We
                look forward to having you with us.
            </div>
            <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
        </div>
    </div>
    <script>
        const form = document.getElementById("onboardingForm");
        const submitBtn = form.querySelector("button[type='submit']");
        const successModal = document.getElementById("successModal");
        const errorMsg = document.getElementById("errorMsg");
        const fields = form.querySelectorAll("input:not([type='file'])");
        const uploadProgress = document.getElementById("uploadProgress");
        const uploadStatusText = document.getElementById("uploadStatusText");
        const uploadPercent = document.getElementById("uploadPercent");
        const uploadFill = document.getElementById("uploadFill");
        const uploadDetail = document.getElementById("uploadDetail");
        function showProgress() {
            uploadProgress.classList.remove('done', 'error-state');
            uploadProgress.classList.add('show');
        }
        function hideProgress() {
            uploadProgress.classList.remove('show', 'done', 'error-state');
        }
        function setProgress(percent, statusText, detail) {
            const p = Math.max(0, Math.min(100, Math.round(percent)));
            uploadFill.style.width = p + '%';
            uploadPercent.textContent = p + '%';
            if (statusText !== undefined) uploadStatusText.textContent = statusText;
            if (detail !== undefined) uploadDetail.textContent = detail;
        }
        function markProgressDone(text) {
            uploadProgress.classList.add('done');
            uploadFill.style.width = '100%';
            uploadPercent.textContent = '100%';
            uploadStatusText.textContent = text || 'Onboarding complete!';
            uploadDetail.textContent = 'You can close this tab anytime.';
        }
        function markProgressError(text) {
            uploadProgress.classList.add('error-state');
            uploadStatusText.textContent = text || 'Upload failed';
            uploadDetail.textContent = 'See message above for details.';
        }
        function formatMB(bytes) {
            return (bytes / 1024 / 1024).toFixed(2) + ' MB';
        }
        const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxllymqzkOs5oJDIV0EL5hjpX8mRh0vJL-hAkFks2Lx8zqr3HeWrQTe9-Xxk83slrNZ/exec";
        const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        function validateField(field) {
            if (field.id === 'whatsappNumber') {
                const v = field.value.trim();
                if (v.length === 11 && /^01\\d{9}$/.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else if (field.id === 'emailAddress') {
                const v = field.value.trim();
                if (EMAIL_REGEX.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else {
                if (!field.checkValidity() || !field.value.trim()) {
                    field.classList.add("error");
                    return false;
                } else {
                    field.classList.remove("error");
                    return true;
                }
            }
        }
        const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
        function validateFileArea() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            if (!input.files || input.files.length === 0) {
                area.classList.add('file-error');
                return false;
            }
            const file = input.files[0];
            if (!ALLOWED_PHOTO_EXT.test(file.name)) {
                area.classList.add('file-error');
                return false;
            }
            area.classList.remove('file-error');
            return true;
        }
        function getExtension(filename) {
            const idx = filename.lastIndexOf('.');
            return idx >= 0 ? filename.slice(idx) : '';
        }
        function sanitizeName(name) {
            return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
        }
        function showSuccessModal() {
            successModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (e) { }
        }
        function closeSuccessModal() {
            successModal.classList.remove('show');
            document.body.style.overflow = '';
        }
        window.closeSuccessModal = closeSuccessModal;
        successModal.addEventListener('click', function (e) {
            if (e.target === successModal) closeSuccessModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
        });
        function setupFileInput() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            const text = document.getElementById('photoText');
            input.addEventListener('change', function () {
                if (this.files && this.files.length > 0) {
                    const file = this.files[0];
                    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                    text.textContent = file.name + ' (' + sizeMB + ' MB)';
                    area.classList.add('has-file');
                    area.classList.remove('file-error');
                } else {
                    text.textContent = area.dataset.placeholder;
                    area.classList.remove('has-file');
                }
            });
            area.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('drag-over');
            });
            area.addEventListener('dragleave', function () {
                this.classList.remove('drag-over');
            });
            area.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    input.files = e.dataTransfer.files;
                    input.dispatchEvent(new Event('change'));
                }
            });
        }
        document.addEventListener('DOMContentLoaded', function () {
            setupFileInput();
            const phoneInput = document.getElementById('whatsappNumber');
            phoneInput.addEventListener('input', function () {
                this.value = this.value.replace(/\\D/g, '');
                if (this.value.length > 11) this.value = this.value.slice(0, 11);
                validateField(this);
            });
            phoneInput.addEventListener('paste', function (e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
                validateField(this);
            });
        });
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (submitBtn.classList.contains("loading")) return;
            hideProgress();
            let invalidFound = false;
            fields.forEach(field => {
                if (!validateField(field)) {
                    if (!invalidFound) { field.focus(); invalidFound = true; }
                }
            });
            const photoValid = validateFileArea();
            if (!photoValid) invalidFound = true;
            if (invalidFound) {
                errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
                errorMsg.style.display = "block";
                return;
            }
            errorMsg.style.display = "none";
            const now = Date.now();
            if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
                errorMsg.textContent = "Please wait a few seconds before submitting again.";
                errorMsg.style.display = "block";
                return;
            }
            const photoFile = document.getElementById('photoFile').files[0];
            const MAX_SIZE = 10 * 1024 * 1024;
            if (photoFile.size > MAX_SIZE) {
                errorMsg.textContent = "Photo must be 10 MB or smaller.";
                errorMsg.style.display = "block";
                return;
            }
            submitBtn.classList.add("loading");
            submitBtn.textContent = "Uploading...";
            showProgress();
            setProgress(0, 'Reading file...',
                'Preparing ' + formatMB(photoFile.size) + ' for upload. Keep this tab open.');
            let serverPhaseTimer = null;
            try {
                const fullName = document.getElementById('fullName').value.trim();
                const safeName = sanitizeName(fullName);
                const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
                const renamedFile = safeName + ' - Judge' + ext;
                const photoBase64 = await readFileAsBase64WithProgress(photoFile, p => {
                    setProgress(p * 15, 'Reading file...',
                        'Read ' + formatMB(photoFile.size * p) + ' of ' + formatMB(photoFile.size));
                });
                const payload = {
                    name: fullName,
                    email: document.getElementById('emailAddress').value.trim(),
                    company: document.getElementById('companyName').value.trim(),
                    designation: document.getElementById('designation').value.trim(),
                    whatsapp: document.getElementById('whatsappNumber').value.trim(),
                    photoBase64: photoBase64,
                    photoName: renamedFile,
                    photoMime: photoFile.type || 'image/jpeg'
                };
                const body = JSON.stringify(payload);
                const bodyBytes = new Blob([body]).size;
                setProgress(15, 'Uploading...',
                    'Uploading ' + formatMB(bodyBytes) + '. Please keep this tab open.');
                let creep = 15;
                serverPhaseTimer = setInterval(() => {
                    creep += (90 - creep) * 0.05;
                    setProgress(creep, 'Uploading...',
                        'Uploading ' + formatMB(bodyBytes) + '. Keep this tab open.');
                }, 400);
                const response = await fetch(WEBAPP_URL, {
                    method: 'POST',
                    body: body
                });
                clearInterval(serverPhaseTimer);
                serverPhaseTimer = null;
                if (!response.ok) {
                    const errText = await response.text().catch(() => '');
                    console.error('HTTP ' + response.status, errText.slice(0, 500));
                    throw new Error('HTTP ' + response.status + ' from Apps Script.');
                }
                setProgress(95, 'Finalizing...', 'Uploading photo and recording your details.');
                const responseText = await response.text();
                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
                    throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
                }
                if (data.success) {
                    localStorage.setItem('lastSubmission', Date.now().toString());
                    markProgressDone('Onboarding complete!');
                    setTimeout(() => {
                        form.reset();
                        document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
                        document.getElementById('photoArea').classList.remove('has-file', 'file-error');
                        showSuccessModal();
                        fields.forEach(f => f.classList.remove("error"));
                        hideProgress();
                    }, 700);
                } else {
                    errorMsg.textContent = data.error || "Submission failed. Please try again.";
                    errorMsg.style.display = "block";
                    markProgressError('Server rejected submission');
                }
            } catch (error) {
                console.error('Submission error:', error);
                errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
                errorMsg.style.display = "block";
                markProgressError('Upload failed');
            } finally {
                if (serverPhaseTimer) clearInterval(serverPhaseTimer);
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Submit";
            }
        });
        function readFileAsBase64WithProgress(file, onProgress) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onprogress = (e) => {
                    if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
                };
                reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        fields.forEach(field => {
            field.addEventListener("input", () => {
                validateField(field);
                if (errorMsg.style.display === "block") errorMsg.style.display = "none";
            });
            field.addEventListener("change", () => validateField(field));
        });
    </script>
</body>
</html>`
  },
  {
    id: "judge-onboarding-js",
    shortName: "JudgeOnboarding.js",
    language: "javascript",
    category: "Judges",
    summary: "Backend webhook to process judge onboarding data and log it into the centralized database.",
    content: `const SHEET_ID = '15m5dLcHLjlFrOu1fHO0y4t7cILT54nIyY_nqRqik3Uk';
const SHEET_NAME = 'Sheet1';
const PHOTO_FOLDER_ID = '1zd39NPYZEPeBiaRi7bKWRNRSNcPipotz';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const WS_EMAIL_TEMPLATE_FILE = "Email";
const WS_EMAIL_SUBJECT = "Unravel Hexa: Judge Onboarding";
const WS_EMAIL_FROM_NAME = "Unravel Hexa | Judge";
const ALLOWED_IMAGE_MIMES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'application/octet-stream'
];
function doPost(e) {
    const lock = LockService.getScriptLock();
    try {
        lock.waitLock(20000);
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
    }
    try {
        if (!e || !e.postData || !e.postData.contents) {
            return jsonResponse({ success: false, error: 'No payload received.' });
        }
        const data = JSON.parse(e.postData.contents);
        const name = sanitizeText(data.name, 100);
        const email = sanitizeText(data.email, 150).toLowerCase();
        const company = sanitizeText(data.company, 150);
        const designation = sanitizeText(data.designation, 150);
        const whatsapp = sanitizeText(data.whatsapp, 20);
        if (!name || !email || !company || !designation || !whatsapp) {
            return jsonResponse({ success: false, error: 'Missing required fields.' });
        }
        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            return jsonResponse({ success: false, error: 'Invalid email address.' });
        }
        if (!/^01\\d{9}$/.test(whatsapp)) {
            return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
        }
        if (!data.photoBase64) {
            return jsonResponse({ success: false, error: 'Missing photo data.' });
        }
        const photoName = sanitizeFileName(data.photoName) || (name + ' - Judge.jpg');
        if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
            return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
        }
        const photoBytes = Utilities.base64Decode(data.photoBase64);
        if (photoBytes.length > MAX_FILE_BYTES) {
            return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
        }
        const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
            ? data.photoMime
            : 'image/jpeg';
        const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
        const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
        photoFile.setDescription('Judge Photo — ' + name);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
        const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
        if (!sheet) {
            return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
        }
        const nextRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(nextRow, 1).setValue(new Date());
        sheet.getRange(nextRow, 2).setValue(name);
        sheet.getRange(nextRow, 3).setValue(email);
        sheet.getRange(nextRow, 4).setValue(company);
        sheet.getRange(nextRow, 5).setValue(designation);
        const phoneCell = sheet.getRange(nextRow, 6);
        phoneCell.setNumberFormat('@');
        phoneCell.setValue(whatsapp);
        sheet.getRange(nextRow, 7).setValue(photoLink);
        let emailSent = false;
        try {
            const htmlTemplate = HtmlService.createTemplateFromFile(WS_EMAIL_TEMPLATE_FILE).getRawContent();
            const finalHtmlBody = htmlTemplate.replace(/{{judge_name}}/g, name || "Judge");
            GmailApp.sendEmail(email, WS_EMAIL_SUBJECT, "", {
                htmlBody: finalHtmlBody,
                name: WS_EMAIL_FROM_NAME
            });
            emailSent = true;
            Logger.log("Judge email sent to " + email);
        } catch (mailErr) {
            Logger.log("Email dispatch failed for " + email + ": " + mailErr.toString());
        }
        return jsonResponse({ success: true, photoUrl: photoLink, emailSent: emailSent });
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server error: ' + err.message });
    } finally {
        try { lock.releaseLock(); } catch (e) { }
    }
}
function doGet() {
    return jsonResponse({ status: 'ok', service: 'Unravel 6X Judge Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
    return ContentService
        .createTextOutput(JSON.stringify(obj))
        .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
    if (s === null || s === undefined) return '';
    return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
    if (!name) return '';
    return String(name)
        .replace(/[\\\\/:*?"<>|]/g, '')
        .trim()
        .slice(0, 150);
}
`
  },
  {
    id: "judge-mail",
    shortName: "JudgeMail.html",
    language: "html",
    category: "Judges",
    summary: "Welcome email template sent to judges upon successful onboarding.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Judge Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{judge_name}}</strong>,
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you so much for kindly agreeing to judge <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
      <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have you
      on the panel.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please find the <strong>casebook</strong> and <strong>rulebook</strong> below. The rulebook contains the
      <strong>evaluation criteria</strong> you'll use during judging. Kindly review both at your convenience.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Casebook</a>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://drive.google.com/file/d/15V6fvF37wJhHUYYJS2U99weqYqnUENqI/view?usp=drive_link"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
            Rulebook</a>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Submissions close on <strong>20 May, 11:59 PM</strong>. We will share the assigned presentation files and
      judging details with you shortly after the deadline.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Please don't hesitate to reach out if you have any questions. Thank you once again for your valuable time.
    </p>
    <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        With gratitude,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`
  },
  {
    id: "judge-evaluation-mail",
    shortName: "EvaluationMail.html",
    language: "html",
    category: "Judges",
    summary: "Automated email delivering evaluation rubrics and scoring instructions to the panel.",
    content: `<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evaluation Sheet Ready | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            TIME TO JUDGE!</h2>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
            Dear <strong>{{judge_name}}</strong>,
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We hope you're doing well. Your individual <strong>evaluation sheet</strong> for
            <strong style="color: #d72027;">Unravel Hexa</strong> has been prepared and is now ready for you to access.
            Please
            use the button below to open it.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="{{evaluation_sheet_link}}" target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #22c55e, #15803d); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Evaluation Sheet</a>
                </td>
            </tr>
        </table>
        <p
            style="margin-bottom: 14px; font-size: 15px; line-height: 1.5; color: #92400e; background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 10px 14px; border-radius: 6px;">
            <strong>Important:</strong> Please make sure to access the evaluation sheet using the <strong>same email
                address</strong> you provided in the onboarding form.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We kindly request you to complete the evaluation by <strong>26 May, 2026 (Tuesday)</strong>.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            For your convenience, we are also attaching the <strong>casebook</strong> and <strong>rulebook</strong>
            again
            below. These are the same documents that were shared with you previously during onboarding.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/1JBU5QmqadPV6GJR_ucV3_BGmuwmGex1L/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Casebook</a>
                </td>
            </tr>
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/15V6fvF37wJhHUYYJS2U99weqYqnUENqI/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #1e293b, #475569); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(30, 41, 59, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Rulebook</a>
                </td>
            </tr>
        </table>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please don't hesitate to reach out if you have any questions or face any issues accessing the sheet. Thank
            you once
            again for your valuable time and contribution.
        </p>
        <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                With gratitude,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: "judge-evaluation-mailer",
    shortName: "EvaluationMailer.js",
    language: "javascript",
    category: "Judges",
    summary: "Script to distribute customized evaluation materials securely to all registered judges.",
    content: `
function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu("📧 Unravel Mailer")
        .addItem("Send Evaluation Sheets", "sendEvaluationSheetEmail")
        .addToUi();
}
function sendEvaluationSheetEmail() {
    const TEMPLATE_FILE = "Email";
    const EMAIL_SUBJECT = "Evaluation Sheet of Round 1 | Unravel Hexa";
    const FROM_NAME = "Unravel Hexa | RUBC";
    const NAME_COL = 2;  
    const EMAIL_COL = 3;  
    const LINK_COL = 4;  
    const ui = SpreadsheetApp.getUi();
    const sheet = SpreadsheetApp.getActiveSheet();
    const selection = sheet.getActiveRange();
    if (!selection) {
        ui.alert("⚠️ No Selection", "Please select the rows you want to send emails to.", ui.ButtonSet.OK);
        return;
    }
    const startRow = selection.getRow();
    const numRows = selection.getNumRows();
    if (startRow < 2) {
        ui.alert("⚠️ Invalid Selection", "Please select data rows only (row 2 onwards). Don't include the header.", ui.ButtonSet.OK);
        return;
    }
    const names = sheet.getRange(startRow, NAME_COL, numRows, 1).getValues();
    const emails = sheet.getRange(startRow, EMAIL_COL, numRows, 1).getValues();
    const links = sheet.getRange(startRow, LINK_COL, numRows, 1).getValues();
    let validCount = 0;
    for (let i = 0; i < numRows; i++) {
        if (emails[i][0] && String(emails[i][0]).trim() !== "") {
            validCount++;
        }
    }
    if (validCount === 0) {
        ui.alert("⚠️ No Emails", "No email addresses found in column C for the selected rows.", ui.ButtonSet.OK);
        return;
    }
    const confirm = ui.alert(
        "📧 Confirm Send",
        "This will send the evaluation sheet email to " + validCount + " judge(s) (rows " + startRow + "–" + (startRow + numRows - 1) + ").\\n\\nProceed?",
        ui.ButtonSet.YES_NO
    );
    if (confirm !== ui.Button.YES) {
        ui.alert("Cancelled", "No emails were sent.", ui.ButtonSet.OK);
        return;
    }
    const htmlTemplate = HtmlService.createTemplateFromFile(TEMPLATE_FILE).getRawContent();
    let sentCount = 0;
    let failedCount = 0;
    const errors = [];
    for (let i = 0; i < numRows; i++) {
        const email = String(emails[i][0]).trim();
        const judgeName = String(names[i][0]).trim() || "Judge";
        const sheetLink = String(links[i][0]).trim();
        const rowNum = startRow + i;
        if (!email) continue;
        if (!sheetLink) {
            failedCount++;
            errors.push("Row " + rowNum + " (" + email + "): Missing evaluation sheet link in column D.");
            continue;
        }
        try {
            const finalHtml = htmlTemplate
                .replace(/{{judge_name}}/g, judgeName)
                .replace(/{{evaluation_sheet_link}}/g, sheetLink);
            GmailApp.sendEmail(email, EMAIL_SUBJECT, "", {
                htmlBody: finalHtml,
                name: FROM_NAME
            });
            sentCount++;
        } catch (err) {
            failedCount++;
            errors.push("Row " + rowNum + " (" + email + "): " + err.message);
            Logger.log("Failed row " + rowNum + ": " + err.toString());
        }
    }
    let summary = "✅ Sent: " + sentCount + "\\n❌ Failed: " + failedCount;
    if (errors.length > 0) {
        summary += "\\n\\nErrors:\\n" + errors.join("\\n");
    }
    ui.alert("📧 Done!", summary, ui.ButtonSet.OK);
    Logger.log("Evaluation sheet email — Sent: " + sentCount + ", Failed: " + failedCount);
}
`
  },
  {
    id: "judge-thank-you-mail",
    shortName: "JudgeThankYou.html",
    language: "html",
    category: "Judges",
    summary: "Post-event gratitude email template acknowledging the judges' contribution.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Judging | UNRAVEL HEXA 2026</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      THANK YOU!</h2>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{Name}}</strong>,
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Greetings from Rajshahi University Business Club!
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      We would like to extend our heartfelt gratitude for your invaluable contribution as a judge in the First Round of UNRAVEL HEXA 2026. Your time, guidance, and thoughtful evaluation played a crucial role in making the competition insightful, fair, and inspiring for all participants.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your expertise and perspective helped us recognize the most promising ideas and encouraged participants to push their boundaries. We deeply appreciate your support and dedication throughout this journey.
    </p>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      For your reference and to celebrate your contribution, please find the judges' appreciation post here:
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
      <tr>
        <td align="center" style="padding: 6px;">
          <a href="https://www.facebook.com/hello.rubc/posts/pfbid02KCCdGiCUvsaMrVoJmcLmDTheRRZqLEevBWB4zx2TQ6eJsdkJVm2RgQAZPwcTCGwCl"
            target="_blank"
            style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">View Appreciation Post</a>
        </td>
      </tr>
    </table>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you once again for being an integral part of UNRAVEL HEXA 2026.
    </p>
    <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best regards,<br />
        Team UNRAVEL HEXA
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>
`
  },
  {
    id: "judge-thank-you-mailer",
    shortName: "ThankYouMailer.js",
    language: "javascript",
    category: "Judges",
    summary: "Automation to send personalized post-event thank you emails to the judging panel.",
    content: `
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Unravel Emails')
    .addItem('Send Thank You Emails (Selected Range)', 'sendThankYouEmails')
    .addToUi();
}
function sendThankYouEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const selection = sheet.getSelection();
  const activeRange = selection.getActiveRange();
  if (!activeRange) {
    SpreadsheetApp.getUi().alert('Error', 'Please select a range of cells containing Names in Column A and Emails in Column B.', SpreadsheetApp.getUi().ButtonSet.OK);
    return;
  }
  const startRow = activeRange.getRow();
  const numRows = activeRange.getNumRows();
  const dataRange = sheet.getRange(startRow, 1, numRows, 2);
  const data = dataRange.getValues();
  const htmlTemplate = HtmlService.createHtmlOutputFromFile('06. ThankYouMail').getContent();
  let emailsSent = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const name = row[0];
    const email = row[1];
    if (name && email && typeof email === 'string' && email.includes('@')) {
      let emailBody = htmlTemplate.replace('{{Name}}', name);
      try {
        MailApp.sendEmail({
          to: email,
          subject: 'Thank You for Judging UNRAVEL HEXA 2026',
          htmlBody: emailBody,
          name: 'Team UNRAVEL HEXA'
        });
        emailsSent++;
      } catch (e) {
        Logger.log('Error sending email to ' + email + ': ' + e.message);
      }
    }
  }
  SpreadsheetApp.getUi().alert('Success', 'Successfully sent ' + emailsSent + ' emails.', SpreadsheetApp.getUi().ButtonSet.OK);
}
`
  },
  {
    id: "mentor-form",
    shortName: "MentorForm.html",
    language: "html",
    category: "Mentors",
    summary: "Mentor onboarding and registration portal.",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <title>Mentor Onboarding | Unravel Hexa</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
        rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Montserrat', sans-serif;
            background-color: #0a0a0c;
            min-height: 100vh;
            color: white;
            overflow-x: hidden;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
        }
        .logo-container {
            margin-bottom: 30px;
        }
        .logo {
            max-width: 550px;
            height: auto;
            filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
            transition: transform 0.3s ease;
        }
        .logo:hover {
            transform: scale(1.05);
        }
        .subtitle {
            font-size: 1.1rem;
            color: #b8c6db;
            font-weight: 300;
        }
        .form-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 0 60px 50px;
        }
        form {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            max-width: 900px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 50px;
            transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        form:hover {
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
            border-color: rgba(245, 130, 32, 0.2);
        }
        h2 {
            text-align: center;
            font-family: 'Bebas Neue', sans-serif;
            font-weight: 400;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 30px;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        label {
            display: block;
            font-weight: 600;
            margin-bottom: 6px;
            margin-top: 18px;
            color: #b8c6db;
            user-select: none;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        input[type="tel"]::placeholder {
            color: #8892b0;
        }
        input:invalid {
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        input.error, textarea.error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
        }
        textarea {
            width: 100%;
            padding: 12px 15px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            color: white;
            font-size: 1rem;
            transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
            outline-offset: 2px;
            font-family: inherit;
            resize: vertical;
        }
        textarea:focus {
            outline: none;
            border-color: #f58220;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
        }
        textarea::placeholder {
            color: #8892b0;
        }
        button {
            margin-top: 40px;
            width: 100%;
            padding: 18px;
            font-size: 1.5rem;
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 2px;
            color: white;
            background: linear-gradient(135deg, #f58220, #d72027);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
            user-select: none;
            position: relative;
            overflow: hidden;
        }
        button:hover:not(.loading) {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
        }
        button:active {
            transform: translateY(0);
        }
        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
        button.loading {
            pointer-events: none;
            color: transparent;
        }
        button.loading::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin-top: -10px;
            margin-left: -10px;
            border-radius: 50%;
            border: 3px solid white;
            border-top-color: transparent;
            animation: spinner 0.6s linear infinite;
        }
        .error-message {
            color: #e74c3c;
            font-weight: 600;
            margin-top: 15px;
            text-align: center;
            user-select: none;
            display: none;
            background: rgba(231, 76, 60, 0.1);
            border: 1px solid rgba(231, 76, 60, 0.3);
            padding: 12px;
            border-radius: 8px;
        }
        .upload-warning {
            display: none;
            margin-top: 20px;
            padding: 14px 18px;
            background: rgba(245, 130, 32, 0.08);
            border: 1px solid rgba(245, 130, 32, 0.3);
            border-radius: 10px;
            text-align: center;
            color: #f58220;
            font-weight: 600;
            font-size: 0.92rem;
            user-select: none;
            animation: warningPulse 1.5s ease-in-out infinite;
        }
        .upload-warning.show {
            display: block;
        }
        @keyframes warningPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        .file-upload-area {
            position: relative;
            width: 100%;
            border: 2px dashed rgba(245, 130, 32, 0.35);
            border-radius: 10px;
            padding: 24px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.03);
            margin-top: 4px;
        }
        .file-upload-area:hover,
        .file-upload-area.drag-over {
            border-color: #f58220;
            background: rgba(245, 130, 32, 0.06);
            box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
        }
        .file-upload-area input[type="file"] {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
        .file-upload-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .file-upload-text {
            color: #b8c6db;
            font-weight: 500;
            font-size: 0.95rem;
            word-break: break-all;
        }
        .file-upload-hint {
            color: #566573;
            font-size: 0.8rem;
            margin-top: 6px;
        }
        .file-upload-area.has-file {
            border-style: solid;
            border-color: #27ae60;
            background: rgba(39, 174, 96, 0.06);
        }
        .file-upload-area.has-file .file-upload-text {
            color: #2ecc71;
        }
        .file-upload-area.file-error {
            border-style: solid;
            border-color: #e74c3c;
            background: rgba(231, 76, 60, 0.06);
            box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
        }
        .form-info {
            margin-bottom: 25px;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .modal-overlay.show {
            opacity: 1;
            visibility: visible;
        }
        .success-modal {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(245, 130, 32, 0.35);
            border-radius: 25px;
            padding: 50px 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
            transform: scale(0.7) translateY(50px);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .modal-overlay.show .success-modal {
            transform: scale(1) translateY(0);
        }
        .success-modal::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
            animation: rotate 4s linear infinite;
            z-index: -1;
        }
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .success-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #f58220, #d72027);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
            box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
            animation: bounce 0.8s ease-out 0.3s both;
        }
        @keyframes bounce {
            0% {
                transform: scale(0) rotate(180deg);
            }
            50% {
                transform: scale(1.2) rotate(360deg);
            }
            100% {
                transform: scale(1) rotate(360deg);
            }
        }
        .success-title {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2.8rem;
            font-weight: 400;
            letter-spacing: 2px;
            background: linear-gradient(135deg, #f58220, #d72027);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from {
                filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
            }
            to {
                filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
            }
        }
        .success-message {
            font-size: 1.15rem;
            color: #b8c6db;
            line-height: 1.7;
            margin-bottom: 30px;
            font-weight: 500;
        }
        .success-message strong {
            color: #f58220;
            font-weight: 700;
        }
        .ok-button {
            display: inline-block;
            background: linear-gradient(135deg, #f58220, #d72027);
            color: white;
            border: none;
            padding: 14px 50px;
            border-radius: 50px;
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.4rem;
            letter-spacing: 3px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
        }
        .ok-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
        }
        .close-modal {
            position: absolute;
            top: 20px;
            right: 25px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        }
        .close-modal:hover {
            background: rgba(245, 130, 32, 0.25);
            transform: rotate(90deg);
        }
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #f58220;
            animation: confetti-fall 3s linear infinite;
        }
        .confetti:nth-child(odd) {
            background: #d72027;
            animation-delay: -0.5s;
        }
        .confetti:nth-child(3n) {
            background: #ff6b6b;
            animation-delay: -1s;
        }
        .confetti:nth-child(4n) {
            background: #ffd93d;
            animation-delay: -1.5s;
        }
        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        .firework {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #f58220;
            border-radius: 50%;
            animation: firework 1.5s ease-out infinite;
        }
        @keyframes firework {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
        @media (max-width: 768px) {
            .form-container {
                padding: 0 25px 30px;
            }
            form {
                padding: 30px 25px;
            }
            h2 {
                font-size: 2.2rem;
            }
            .logo {
                max-width: 340px;
            }
            .success-modal {
                padding: 40px 25px;
                margin: 20px;
            }
            .success-title {
                font-size: 2.2rem;
            }
            .success-message {
                font-size: 1.05rem;
            }
            .success-icon {
                width: 70px;
                height: 70px;
                font-size: 35px;
            }
        }
        @media (max-width: 480px) {
            .header {
                padding: 30px 15px;
            }
            .form-container {
                padding: 0 18px 30px;
            }
            .logo {
                max-width: 240px;
            }
            h2 {
                font-size: 1.8rem;
            }
            .success-modal {
                padding: 30px 20px;
            }
            .success-title {
                font-size: 1.8rem;
            }
            .success-message {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo-container">
            <img src="https://lh3.googleusercontent.com/d/1rT9vyAwzGi9jaDQbq8cNwAuKOVqWFY9F" alt="Unravel Logo"
                class="logo">
        </div>
    </div>
    <div class="form-container">
        <form id="onboardingForm" novalidate>
            <h2>Mentor Onboarding</h2>
            <div class="form-info">
                <label for="fullName">Full Name</label>
                <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="Email" type="email" required autocomplete="off"
                    placeholder="your.email@example.com" />
                <label for="whatsappNumber">WhatsApp Number</label>
                <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off"
                    placeholder="01XXXXXXXXX" pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
                <label for="university">University</label>
                <input id="university" name="University" type="text" required autocomplete="off"
                    placeholder="Your university name" />
                <label for="department">Department</label>
                <input id="department" name="Department" type="text" required autocomplete="off"
                    placeholder="Your department" />
                <label for="paragraphText">Achievements</label>
                <textarea id="paragraphText" name="ParagraphText" required autocomplete="off"
                    placeholder="Your achievements" rows="4"></textarea>
                <label for="companyDesignation">Company & Designation <span
                        style="color: #566573; font-weight: 400;">(Optional)</span></label>
                <input id="companyDesignation" name="CompanyDesignation" type="text" autocomplete="off"
                    placeholder="(If any)" />
                <label for="photoFile">Formal Photo</label>
                <div class="file-upload-area" id="photoArea"
                    data-placeholder="Click or drag to upload your formal photo">
                    <input id="photoFile" name="photoFile" type="file"
                        accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif"
                        required />
                    <div class="file-upload-icon">📸</div>
                    <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
                    <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
                </div>
            </div>
            <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
            <div class="upload-warning" id="uploadWarning">
                ⚠️ Uploading... Please do not close this tab.
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="modal-overlay" id="successModal">
        <div class="success-modal">
            <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
            <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
            <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
            <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
            <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
            <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
            <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
            <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
            <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
            <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
            <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
            <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
            <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
            <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
            <div class="success-icon">✓</div>
            <h1 class="success-title">Thank You!</h1>
            <div class="success-message">
                We sincerely appreciate your time.<br><br>
                Kindly check your <strong>email inbox</strong> for the further details. We
                look forward to having you with us.
            </div>
            <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
        </div>
    </div>
    <script>
        const form = document.getElementById("onboardingForm");
        const submitBtn = form.querySelector("button[type='submit']");
        const successModal = document.getElementById("successModal");
        const errorMsg = document.getElementById("errorMsg");
        const fields = form.querySelectorAll("input:not([type='file']), textarea");
        const uploadWarning = document.getElementById("uploadWarning");
        const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwtZANHcsXtFYFJzsN0duy6TSFdi0d7h1bNn4zCQYy-3Dwcj8B4qHYqT-2KbI1FaHN9/exec";
        const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        function validateField(field) {
            if (field.id === 'companyDesignation') {
                field.classList.remove("error");
                return true;
            }
            if (field.id === 'whatsappNumber') {
                const v = field.value.trim();
                if (v.length === 11 && /^01\\d{9}$/.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else if (field.id === 'emailAddress') {
                const v = field.value.trim();
                if (EMAIL_REGEX.test(v)) {
                    field.classList.remove("error");
                    return true;
                } else {
                    field.classList.add("error");
                    return false;
                }
            } else {
                if (!field.checkValidity() || !field.value.trim()) {
                    field.classList.add("error");
                    return false;
                } else {
                    field.classList.remove("error");
                    return true;
                }
            }
        }
        const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
        function validateFileArea() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            if (!input.files || input.files.length === 0) {
                area.classList.add('file-error');
                return false;
            }
            const file = input.files[0];
            if (!ALLOWED_PHOTO_EXT.test(file.name)) {
                area.classList.add('file-error');
                return false;
            }
            area.classList.remove('file-error');
            return true;
        }
        function getExtension(filename) {
            const idx = filename.lastIndexOf('.');
            return idx >= 0 ? filename.slice(idx) : '';
        }
        function sanitizeName(name) {
            return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
        }
        function showSuccessModal() {
            successModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (e) { }
        }
        function closeSuccessModal() {
            successModal.classList.remove('show');
            document.body.style.overflow = '';
        }
        window.closeSuccessModal = closeSuccessModal;
        successModal.addEventListener('click', function (e) {
            if (e.target === successModal) closeSuccessModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
        });
        function setupFileInput() {
            const input = document.getElementById('photoFile');
            const area = document.getElementById('photoArea');
            const text = document.getElementById('photoText');
            input.addEventListener('change', function () {
                if (this.files && this.files.length > 0) {
                    const file = this.files[0];
                    const sizeMB = (file.size / 1024 / 1024).toFixed(2);
                    text.textContent = file.name + ' (' + sizeMB + ' MB)';
                    area.classList.add('has-file');
                    area.classList.remove('file-error');
                } else {
                    text.textContent = area.dataset.placeholder;
                    area.classList.remove('has-file');
                }
            });
            area.addEventListener('dragover', function (e) {
                e.preventDefault();
                this.classList.add('drag-over');
            });
            area.addEventListener('dragleave', function () {
                this.classList.remove('drag-over');
            });
            area.addEventListener('drop', function (e) {
                e.preventDefault();
                this.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    input.files = e.dataTransfer.files;
                    input.dispatchEvent(new Event('change'));
                }
            });
        }
        document.addEventListener('DOMContentLoaded', function () {
            setupFileInput();
            const phoneInput = document.getElementById('whatsappNumber');
            phoneInput.addEventListener('input', function () {
                this.value = this.value.replace(/\\D/g, '');
                if (this.value.length > 11) this.value = this.value.slice(0, 11);
                validateField(this);
            });
            phoneInput.addEventListener('paste', function (e) {
                e.preventDefault();
                const pastedText = (e.clipboardData || window.clipboardData).getData('text');
                this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
                validateField(this);
            });
        });
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (submitBtn.classList.contains("loading")) return;
            let invalidFound = false;
            fields.forEach(field => {
                if (!validateField(field)) {
                    if (!invalidFound) { field.focus(); invalidFound = true; }
                }
            });
            const photoValid = validateFileArea();
            if (!photoValid) invalidFound = true;
            if (invalidFound) {
                errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
                errorMsg.style.display = "block";
                return;
            }
            errorMsg.style.display = "none";
            const now = Date.now();
            if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
                errorMsg.textContent = "Please wait a few seconds before submitting again.";
                errorMsg.style.display = "block";
                return;
            }
            const photoFile = document.getElementById('photoFile').files[0];
            const MAX_SIZE = 10 * 1024 * 1024;
            if (photoFile.size > MAX_SIZE) {
                errorMsg.textContent = "Photo must be 10 MB or smaller.";
                errorMsg.style.display = "block";
                return;
            }
            submitBtn.classList.add("loading");
            submitBtn.textContent = "Uploading...";
            uploadWarning.classList.add('show');
            try {
                const fullName = document.getElementById('fullName').value.trim();
                const safeName = sanitizeName(fullName);
                const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
                const renamedFile = safeName + ' - Mentor' + ext;
                const photoBase64 = await readFileAsBase64(photoFile);
                const payload = {
                    name: fullName,
                    email: document.getElementById('emailAddress').value.trim(),
                    whatsapp: document.getElementById('whatsappNumber').value.trim(),
                    university: document.getElementById('university').value.trim(),
                    department: document.getElementById('department').value.trim(),
                    paragraphText: document.getElementById('paragraphText').value.trim(),
                    companyDesignation: document.getElementById('companyDesignation').value.trim(),
                    photoBase64: photoBase64,
                    photoName: renamedFile,
                    photoMime: photoFile.type || 'image/jpeg'
                };
                const response = await fetch(WEBAPP_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    const errText = await response.text().catch(() => '');
                    console.error('HTTP ' + response.status, errText.slice(0, 500));
                    throw new Error('HTTP ' + response.status + ' from Apps Script.');
                }
                const responseText = await response.text();
                let data;
                try {
                    data = JSON.parse(responseText);
                } catch (parseErr) {
                    console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
                    throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
                }
                if (data.success) {
                    localStorage.setItem('lastSubmission', Date.now().toString());
                    form.reset();
                    document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
                    document.getElementById('photoArea').classList.remove('has-file', 'file-error');
                    fields.forEach(f => f.classList.remove("error"));
                    showSuccessModal();
                } else {
                    errorMsg.textContent = data.error || "Submission failed. Please try again.";
                    errorMsg.style.display = "block";
                }
            } catch (error) {
                console.error('Submission error:', error);
                errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
                errorMsg.style.display = "block";
            } finally {
                uploadWarning.classList.remove('show');
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Submit";
            }
        });
        function readFileAsBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        fields.forEach(field => {
            field.addEventListener("input", () => {
                validateField(field);
                if (errorMsg.style.display === "block") errorMsg.style.display = "none";
            });
            field.addEventListener("change", () => validateField(field));
        });
    </script>
</body>
</html>`
  },
  {
    id: "mentor-mailer",
    shortName: "MentorMailer.js",
    language: "javascript",
    category: "Mentors",
    summary: "Automated script to process mentor registrations and dispatch confirmation emails.",
    content: `const SHEET_ID = '1hK16zpQQLEVyX0tFcMjDnbeln8yV3INHWxIB8UnX5Mk';
const SHEET_NAME = 'Sheet1';
const PHOTO_FOLDER_ID = '1ZHEyU5gP256_3_X5cbvAcLo16KAms0cE';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const WS_EMAIL_TEMPLATE_FILE = "Email";
const WS_EMAIL_SUBJECT = "Unravel Hexa: Mentor Onboarding";
const WS_EMAIL_FROM_NAME = "Unravel Hexa | RUBC";
const ALLOWED_IMAGE_MIMES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'application/octet-stream'
];
function doPost(e) {
    const lock = LockService.getScriptLock();
    try {
        lock.waitLock(20000);
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
    }
    try {
        if (!e || !e.postData || !e.postData.contents) {
            return jsonResponse({ success: false, error: 'No payload received.' });
        }
        const data = JSON.parse(e.postData.contents);
        const name = sanitizeText(data.name, 100);
        const email = sanitizeText(data.email, 150).toLowerCase();
        const whatsapp = sanitizeText(data.whatsapp, 20);
        const university = sanitizeText(data.university, 200);
        const department = sanitizeText(data.department, 200);
        const paragraphText = sanitizeText(data.paragraphText, 2000);
        const companyDesignation = sanitizeText(data.companyDesignation, 300); 
        if (!name || !email || !whatsapp || !university || !department) {
            return jsonResponse({ success: false, error: 'Missing required fields.' });
        }
        if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            return jsonResponse({ success: false, error: 'Invalid email address.' });
        }
        if (!/^01\\d{9}$/.test(whatsapp)) {
            return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
        }
        if (!data.photoBase64) {
            return jsonResponse({ success: false, error: 'Missing photo data.' });
        }
        const photoName = sanitizeFileName(data.photoName) || (name + ' - Mentor.jpg');
        if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
            return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
        }
        const photoBytes = Utilities.base64Decode(data.photoBase64);
        if (photoBytes.length > MAX_FILE_BYTES) {
            return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
        }
        const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
            ? data.photoMime
            : 'image/jpeg';
        const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
        const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
        photoFile.setDescription('Mentor Photo — ' + name);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
        const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
        if (!sheet) {
            return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
        }
        const nextRow = Math.max(sheet.getLastRow() + 1, 2);
        sheet.getRange(nextRow, 1).setValue(new Date());
        sheet.getRange(nextRow, 2).setValue(name);
        sheet.getRange(nextRow, 3).setValue(email);
        const phoneCell = sheet.getRange(nextRow, 4);
        phoneCell.setNumberFormat('@');
        phoneCell.setValue(whatsapp);
        sheet.getRange(nextRow, 5).setValue(university);
        sheet.getRange(nextRow, 6).setValue(department);
        sheet.getRange(nextRow, 7).setValue(paragraphText);
        sheet.getRange(nextRow, 8).setValue(companyDesignation);
        sheet.getRange(nextRow, 9).setValue(photoLink);
        let emailSent = false;
        try {
            const htmlTemplate = HtmlService.createTemplateFromFile(WS_EMAIL_TEMPLATE_FILE).getRawContent();
            const finalHtmlBody = htmlTemplate.replace(/{{name}}/g, name || "Mentor");
            GmailApp.sendEmail(email, WS_EMAIL_SUBJECT, "", {
                htmlBody: finalHtmlBody,
                name: WS_EMAIL_FROM_NAME
            });
            emailSent = true;
            Logger.log("Mentor email sent to " + email);
        } catch (mailErr) {
            Logger.log("Email dispatch failed for " + email + ": " + mailErr.toString());
        }
        return jsonResponse({ success: true, photoUrl: photoLink, emailSent: emailSent });
    } catch (err) {
        return jsonResponse({ success: false, error: 'Server error: ' + err.message });
    } finally {
        try { lock.releaseLock(); } catch (e) { }
    }
}
function doGet() {
    return jsonResponse({ status: 'ok', service: 'Unravel 6X Mentor Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
    return ContentService
        .createTextOutput(JSON.stringify(obj))
        .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
    if (s === null || s === undefined) return '';
    return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
    if (!name) return '';
    return String(name)
        .replace(/[\\\\/:*?"<>|]/g, '')
        .trim()
        .slice(0, 150);
}
`
  },
  {
    id: "mentor-email",
    shortName: "MentorEmail.html",
    language: "html",
    category: "Mentors",
    summary: "Welcome and onboarding confirmation email template for assigned mentors.",
    content: `<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mentor Onboarding Confirmed | Unravel 6X</title>
</head>
<body
    style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div
        style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td align="center" style="padding: 10px 0 5px; position: relative;">
                    <div style="position: relative; display: inline-block;">
                        <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl"
                            alt="Unravel Logo" style="height: auto; width: 350px; max-width: 100%; display: block;" />
                    </div>
                </td>
            </tr>
        </table>
        <h2
            style="text-align: center; font-weight: 800; font-size: 26px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
            WELCOME ABOARD, MENTOR!</h2>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6;">
            Dear <strong>{{name}}</strong>,
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Thank you so much for kindly agreeing to mentor at <strong>Xeron IT</strong> presents
            <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>, organized by
            <strong>Rajshahi University Business Club</strong>. We are truly grateful for your time and honored to have
            you
            guide our finalist teams.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            You will be assigned to a finalist team once the finalists are announced. Your mentorship window runs from
            <strong>June 1 – 12</strong>, with the Final Round taking place on <strong>June 13</strong>. There are no
            fixed
            sessions, the engagement is entirely flexible around your schedule.
        </p>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            Please find the <strong>Mentor Rulebook</strong> below. It outlines your role, guidelines, and the do's and
            don'ts to ensure a fair and enriching experience for the participants. Kindly review it at your convenience.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 22px 0;">
            <tr>
                <td align="center" style="padding: 6px;">
                    <a href="https://drive.google.com/file/d/1gdRzKrALPDWdTBcFGIrLDc1NqvGCmr3x/view?usp=drive_link"
                        target="_blank"
                        style="display: inline-block; width: 80%; padding: 14px; font-size: 17px; font-weight: 700; font-family: 'Times New Roman', Times, serif; color: white; background: linear-gradient(135deg, #f58220, #d72027); border: none; border-radius: 12px; box-shadow: 0 10px 30px rgba(245, 130, 32, 0.4); cursor: pointer; text-decoration: none; text-align: center; line-height: 1.2; letter-spacing: 0.5px;">Open
                        Mentor Rulebook</a>
                </td>
            </tr>
        </table>
        <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
            We will share your assigned team details once the finalists are confirmed. Please don't hesitate to reach
            out if
            you have any questions. Thank you once again for your valuable time and generosity.
        </p>
        <p style="margin-bottom: 14px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
            <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
                With gratitude,<br />
                Team Unravel Hexa
            </strong>
        </p>
        <div class="footer"
            style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
            <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
                <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
                    style="height: 40px;" />
            </p>
            <p
                style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
                RAJSHAHI UNIVERSITY BUSINESS CLUB
            </p>
            <div
                style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
                <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://unravelhexa.rubusinessclub.com/"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="https://www.facebook.com/hello.rubc"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
                <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
                    style="height: 9px; vertical-align: middle; margin-right: 2px;" />
                <a href="mailto:hello.rubc@gmail.com"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
                <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
                    style="height: 14px; vertical-align: middle; margin-right: 2px;" />
                <a href="tel:+8801586120216"
                    style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
            </div>
        </div>
    </div>
</body>
</html>`
  },
  {
    id: "speaker-onboarding",
    shortName: "SpeakerOnboarding.html",
    language: "html",
    category: "Workshop Speakers",
    summary: "Workshop speaker registration and detail collection form.",
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <title>Workshop Speaker Onboarding | Unravel 6X</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap"
    rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #0a0a0c;
      min-height: 100vh;
      color: white;
      overflow-x: hidden;
    }
    .header {
      text-align: center;
      padding: 40px 20px;
    }
    .logo-container {
      margin-bottom: 30px;
    }
    .logo {
      max-width: 550px;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(0, 123, 255, 0.3));
      transition: transform 0.3s ease;
    }
    .logo:hover {
      transform: scale(1.05);
    }
    .subtitle {
      font-size: 1.1rem;
      color: #b8c6db;
      font-weight: 300;
    }
    .form-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 60px 50px;
    }
    form {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding: 40px 50px;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    form:hover {
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      border-color: rgba(245, 130, 32, 0.2);
    }
    h2 {
      text-align: center;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 30px;
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 6px;
      margin-top: 18px;
      color: #b8c6db;
      user-select: none;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      width: 100%;
      padding: 12px 15px;
      border-radius: 10px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 1rem;
      transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      font-weight: 500;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
      outline-offset: 2px;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus {
      outline: none;
      border-color: #f58220;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.3);
    }
    input[type="text"]::placeholder,
    input[type="email"]::placeholder,
    input[type="tel"]::placeholder {
      color: #8892b0;
    }
    input:invalid {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    input.error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.4) !important;
    }
    button {
      margin-top: 40px;
      width: 100%;
      padding: 18px;
      font-size: 1.5rem;
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 2px;
      color: white;
      background: linear-gradient(135deg, #f58220, #d72027);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.3);
      user-select: none;
      position: relative;
      overflow: hidden;
    }
    button:hover:not(.loading) {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(215, 32, 39, 0.5);
    }
    button:active {
      transform: translateY(0);
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    button.loading {
      pointer-events: none;
      color: transparent;
    }
    button.loading::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin-top: -10px;
      margin-left: -10px;
      border-radius: 50%;
      border: 3px solid white;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
    }
    .error-message {
      color: #e74c3c;
      font-weight: 600;
      margin-top: 15px;
      text-align: center;
      user-select: none;
      display: none;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      padding: 12px;
      border-radius: 8px;
    }
    .upload-progress {
      display: none;
      margin-top: 20px;
      padding: 18px 20px;
      background: rgba(245, 130, 32, 0.06);
      border: 1px solid rgba(245, 130, 32, 0.25);
      border-radius: 12px;
      user-select: none;
    }
    .upload-progress.show {
      display: block;
      animation: progressFadeIn 0.3s ease-out;
    }
    @keyframes progressFadeIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .upload-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    .upload-progress-status {
      color: #f58220;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .upload-progress-status .spinner-mini {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(245, 130, 32, 0.3);
      border-top-color: #f58220;
      border-radius: 50%;
      animation: spinner 0.7s linear infinite;
      flex-shrink: 0;
    }
    .upload-progress.done .upload-progress-status {
      color: #2ecc71;
    }
    .upload-progress.done .spinner-mini {
      display: none;
    }
    .upload-progress.error-state {
      background: rgba(231, 76, 60, 0.08);
      border-color: rgba(231, 76, 60, 0.35);
    }
    .upload-progress.error-state .upload-progress-status {
      color: #e74c3c;
    }
    .upload-progress.error-state .spinner-mini {
      display: none;
    }
    .upload-progress-percent {
      color: #b8c6db;
      font-weight: 700;
      font-size: 0.95rem;
      font-variant-numeric: tabular-nums;
    }
    .upload-progress-bar {
      width: 100%;
      height: 10px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .upload-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 999px;
      transition: width 0.25s ease-out;
      position: relative;
      overflow: hidden;
    }
    .upload-progress-fill::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg,
          transparent,
          rgba(255, 255, 255, 0.35),
          transparent);
      animation: shimmer 1.4s linear infinite;
    }
    .upload-progress.done .upload-progress-fill {
      background: linear-gradient(135deg, #27ae60, #2ecc71);
    }
    .upload-progress.done .upload-progress-fill::after,
    .upload-progress.error-state .upload-progress-fill::after {
      display: none;
    }
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .upload-progress-detail {
      margin-top: 8px;
      color: #8892b0;
      font-size: 0.82rem;
      font-variant-numeric: tabular-nums;
    }
    .file-upload-area {
      position: relative;
      width: 100%;
      border: 2px dashed rgba(245, 130, 32, 0.35);
      border-radius: 10px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.03);
      margin-top: 4px;
    }
    .file-upload-area:hover,
    .file-upload-area.drag-over {
      border-color: #f58220;
      background: rgba(245, 130, 32, 0.06);
      box-shadow: 0 0 20px rgba(245, 130, 32, 0.15);
    }
    .file-upload-area input[type="file"] {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    .file-upload-icon {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    .file-upload-text {
      color: #b8c6db;
      font-weight: 500;
      font-size: 0.95rem;
      word-break: break-all;
    }
    .file-upload-hint {
      color: #566573;
      font-size: 0.8rem;
      margin-top: 6px;
    }
    .file-upload-area.has-file {
      border-style: solid;
      border-color: #27ae60;
      background: rgba(39, 174, 96, 0.06);
    }
    .file-upload-area.has-file .file-upload-text {
      color: #2ecc71;
    }
    .file-upload-area.file-error {
      border-style: solid;
      border-color: #e74c3c;
      background: rgba(231, 76, 60, 0.06);
      box-shadow: 0 0 15px rgba(231, 76, 60, 0.2);
    }
    .form-info {
      margin-bottom: 25px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
    }
    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
    }
    .success-modal {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(245, 130, 32, 0.35);
      border-radius: 25px;
      padding: 50px 40px;
      max-width: 600px;
      width: 90%;
      text-align: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 30px 80px rgba(215, 32, 39, 0.35);
      transform: scale(0.7) translateY(50px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .modal-overlay.show .success-modal {
      transform: scale(1) translateY(0);
    }
    .success-modal::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(245, 130, 32, 0.08), transparent);
      animation: rotate 4s linear infinite;
      z-index: -1;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .success-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 25px;
      background: linear-gradient(135deg, #f58220, #d72027);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 10px 30px rgba(215, 32, 39, 0.4);
      animation: bounce 0.8s ease-out 0.3s both;
    }
    @keyframes bounce {
      0% {
        transform: scale(0) rotate(180deg);
      }
      50% {
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        transform: scale(1) rotate(360deg);
      }
    }
    .success-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.8rem;
      font-weight: 400;
      letter-spacing: 2px;
      background: linear-gradient(135deg, #f58220, #d72027);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      animation: glow 2s ease-in-out infinite alternate;
    }
    @keyframes glow {
      from {
        filter: drop-shadow(0 0 8px rgba(245, 130, 32, 0.4));
      }
      to {
        filter: drop-shadow(0 0 16px rgba(215, 32, 39, 0.6));
      }
    }
    .success-message {
      font-size: 1.15rem;
      color: #b8c6db;
      line-height: 1.7;
      margin-bottom: 30px;
      font-weight: 500;
    }
    .success-message strong {
      color: #f58220;
      font-weight: 700;
    }
    .ok-button {
      display: inline-block;
      background: linear-gradient(135deg, #f58220, #d72027);
      color: white;
      border: none;
      padding: 14px 50px;
      border-radius: 50px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.4rem;
      letter-spacing: 3px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(215, 32, 39, 0.3);
    }
    .ok-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(215, 32, 39, 0.5);
    }
    .close-modal {
      position: absolute;
      top: 20px;
      right: 25px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    .close-modal:hover {
      background: rgba(245, 130, 32, 0.25);
      transform: rotate(90deg);
    }
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #f58220;
      animation: confetti-fall 3s linear infinite;
    }
    .confetti:nth-child(odd) {
      background: #d72027;
      animation-delay: -0.5s;
    }
    .confetti:nth-child(3n) {
      background: #ff6b6b;
      animation-delay: -1s;
    }
    .confetti:nth-child(4n) {
      background: #ffd93d;
      animation-delay: -1.5s;
    }
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    .firework {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #f58220;
      border-radius: 50%;
      animation: firework 1.5s ease-out infinite;
    }
    @keyframes firework {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(20);
        opacity: 0;
      }
    }
    @media (max-width: 768px) {
      .form-container {
        padding: 0 25px 30px;
      }
      form {
        padding: 30px 25px;
      }
      h2 {
        font-size: 2.2rem;
      }
      .logo {
        max-width: 340px;
      }
      .success-modal {
        padding: 40px 25px;
        margin: 20px;
      }
      .success-title {
        font-size: 2.2rem;
      }
      .success-message {
        font-size: 1.05rem;
      }
      .success-icon {
        width: 70px;
        height: 70px;
        font-size: 35px;
      }
    }
    @media (max-width: 480px) {
      .header {
        padding: 30px 15px;
      }
      .form-container {
        padding: 0 18px 30px;
      }
      .logo {
        max-width: 240px;
      }
      h2 {
        font-size: 1.8rem;
      }
      .success-modal {
        padding: 30px 20px;
      }
      .success-title {
        font-size: 1.8rem;
      }
      .success-message {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-container">
      <img src="https://lh3.googleusercontent.com/d/1rT9vyAwzGi9jaDQbq8cNwAuKOVqWFY9F" alt="Unravel Logo" class="logo">
    </div>
  </div>
  <div class="form-container">
    <form id="onboardingForm" novalidate>
      <h2>Speaker Onboarding</h2>
      <div class="form-info">
        <label for="fullName">Full Name</label>
        <input id="fullName" name="Name" type="text" required autocomplete="off" placeholder="Your full name" />
        <label for="emailAddress">Email Address</label>
        <input id="emailAddress" name="Email" type="email" required autocomplete="off"
          placeholder="your.email@example.com" />
        <label for="companyName">Company's Name</label>
        <input id="companyName" name="Company" type="text" required autocomplete="off"
          placeholder="Name of your organization" />
        <label for="designation">Designation</label>
        <input id="designation" name="Designation" type="text" required autocomplete="off"
          placeholder="Your role / position" />
        <label for="whatsappNumber">WhatsApp Number</label>
        <input id="whatsappNumber" name="WhatsApp" type="tel" required autocomplete="off" placeholder="01XXXXXXXXX"
          pattern="[0-9]{11}" maxlength="11" inputmode="numeric" />
        <label for="photoFile">Formal Photo</label>
        <div class="file-upload-area" id="photoArea" data-placeholder="Click or drag to upload your formal photo">
          <input id="photoFile" name="photoFile" type="file" accept=".jpg,.jpeg,.png,.webp,.heic,.heif,image/jpeg,image/png,image/webp,image/heic,image/heif" required />
          <div class="file-upload-icon">📸</div>
          <div class="file-upload-text" id="photoText">Click or drag to upload your formal photo</div>
          <div class="file-upload-hint">Accepted: JPEG, PNG, HEIC, HEIF &bull; Max 10 MB</div>
        </div>
      </div>
      <div class="error-message" id="errorMsg">Please fill all required fields correctly before submitting.</div>
      <div class="upload-progress" id="uploadProgress" aria-live="polite">
        <div class="upload-progress-header">
          <div class="upload-progress-status" id="uploadStatus">
            <span class="spinner-mini"></span>
            <span id="uploadStatusText">Preparing file...</span>
          </div>
          <div class="upload-progress-percent" id="uploadPercent">0%</div>
        </div>
        <div class="upload-progress-bar">
          <div class="upload-progress-fill" id="uploadFill"></div>
        </div>
        <div class="upload-progress-detail" id="uploadDetail">Please keep this tab open until the upload completes.
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div class="modal-overlay" id="successModal">
    <div class="success-modal">
      <div class="close-modal" onclick="closeSuccessModal()">&times;</div>
      <div class="confetti" style="left: 10%; animation-delay: 0s;"></div>
      <div class="confetti" style="left: 20%; animation-delay: 0.2s;"></div>
      <div class="confetti" style="left: 30%; animation-delay: 0.4s;"></div>
      <div class="confetti" style="left: 40%; animation-delay: 0.6s;"></div>
      <div class="confetti" style="left: 50%; animation-delay: 0.8s;"></div>
      <div class="confetti" style="left: 60%; animation-delay: 1s;"></div>
      <div class="confetti" style="left: 70%; animation-delay: 1.2s;"></div>
      <div class="confetti" style="left: 80%; animation-delay: 1.4s;"></div>
      <div class="confetti" style="left: 90%; animation-delay: 1.6s;"></div>
      <div class="firework" style="top: 20%; left: 15%; animation-delay: 0.5s;"></div>
      <div class="firework" style="top: 30%; right: 15%; animation-delay: 1s;"></div>
      <div class="firework" style="bottom: 30%; left: 20%; animation-delay: 1.5s;"></div>
      <div class="firework" style="bottom: 20%; right: 20%; animation-delay: 2s;"></div>
      <div class="success-icon">✓</div>
      <h1 class="success-title">Thank You!</h1>
      <div class="success-message">
        We sincerely appreciate your time.<br><br>
        Kindly check your <strong>email inbox</strong> for the further details regarding the workshop. We
        look forward to having you with us.
      </div>
      <button type="button" class="ok-button" onclick="closeSuccessModal()">OKAY</button>
    </div>
  </div>
  <script>
    const form = document.getElementById("onboardingForm");
    const submitBtn = form.querySelector("button[type='submit']");
    const successModal = document.getElementById("successModal");
    const errorMsg = document.getElementById("errorMsg");
    const fields = form.querySelectorAll("input:not([type='file'])");
    const uploadProgress = document.getElementById("uploadProgress");
    const uploadStatusText = document.getElementById("uploadStatusText");
    const uploadPercent = document.getElementById("uploadPercent");
    const uploadFill = document.getElementById("uploadFill");
    const uploadDetail = document.getElementById("uploadDetail");
    function showProgress() {
      uploadProgress.classList.remove('done', 'error-state');
      uploadProgress.classList.add('show');
    }
    function hideProgress() {
      uploadProgress.classList.remove('show', 'done', 'error-state');
    }
    function setProgress(percent, statusText, detail) {
      const p = Math.max(0, Math.min(100, Math.round(percent)));
      uploadFill.style.width = p + '%';
      uploadPercent.textContent = p + '%';
      if (statusText !== undefined) uploadStatusText.textContent = statusText;
      if (detail !== undefined) uploadDetail.textContent = detail;
    }
    function markProgressDone(text) {
      uploadProgress.classList.add('done');
      uploadFill.style.width = '100%';
      uploadPercent.textContent = '100%';
      uploadStatusText.textContent = text || 'Onboarding complete!';
      uploadDetail.textContent = 'You can close this tab anytime.';
    }
    function markProgressError(text) {
      uploadProgress.classList.add('error-state');
      uploadStatusText.textContent = text || 'Upload failed';
      uploadDetail.textContent = 'See message above for details.';
    }
    function formatMB(bytes) {
      return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    }
    const WEBAPP_URL = "https://script.google.com/macros/s/AKfycbw8wu6plzK21oHC7_PuK8gO7_xO6CvEUxio7bUgJ-LgoJ81GQKjLDRoAyh6JHNT_PQg/exec";
    const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    function validateField(field) {
      if (field.id === 'whatsappNumber') {
        const v = field.value.trim();
        if (v.length === 11 && /^01\\d{9}$/.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else if (field.id === 'emailAddress') {
        const v = field.value.trim();
        if (EMAIL_REGEX.test(v)) {
          field.classList.remove("error");
          return true;
        } else {
          field.classList.add("error");
          return false;
        }
      } else {
        if (!field.checkValidity() || !field.value.trim()) {
          field.classList.add("error");
          return false;
        } else {
          field.classList.remove("error");
          return true;
        }
      }
    }
    const ALLOWED_PHOTO_EXT = /\\.(jpe?g|png|webp|heic|heif)$/i;
    function validateFileArea() {
      const input = document.getElementById('photoFile');
      const area = document.getElementById('photoArea');
      if (!input.files || input.files.length === 0) {
        area.classList.add('file-error');
        return false;
      }
      const file = input.files[0];
      if (!ALLOWED_PHOTO_EXT.test(file.name)) {
        area.classList.add('file-error');
        return false;
      }
      area.classList.remove('file-error');
      return true;
    }
    function getExtension(filename) {
      const idx = filename.lastIndexOf('.');
      return idx >= 0 ? filename.slice(idx) : '';
    }
    function sanitizeName(name) {
      return name.replace(/[\\\\/:*?"<>|]/g, '').trim();
    }
    function showSuccessModal() {
      successModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) { }
    }
    function closeSuccessModal() {
      successModal.classList.remove('show');
      document.body.style.overflow = '';
    }
    window.closeSuccessModal = closeSuccessModal;
    successModal.addEventListener('click', function (e) {
      if (e.target === successModal) closeSuccessModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && successModal.classList.contains('show')) closeSuccessModal();
    });
    function setupFileInput() {
      const input = document.getElementById('photoFile');
      const area = document.getElementById('photoArea');
      const text = document.getElementById('photoText');
      input.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
          const file = this.files[0];
          const sizeMB = (file.size / 1024 / 1024).toFixed(2);
          text.textContent = file.name + ' (' + sizeMB + ' MB)';
          area.classList.add('has-file');
          area.classList.remove('file-error');
        } else {
          text.textContent = area.dataset.placeholder;
          area.classList.remove('has-file');
        }
      });
      area.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('drag-over');
      });
      area.addEventListener('dragleave', function () {
        this.classList.remove('drag-over');
      });
      area.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          input.files = e.dataTransfer.files;
          input.dispatchEvent(new Event('change'));
        }
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
      setupFileInput();
      const phoneInput = document.getElementById('whatsappNumber');
      phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/\\D/g, '');
        if (this.value.length > 11) this.value = this.value.slice(0, 11);
        validateField(this);
      });
      phoneInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        this.value = pastedText.replace(/\\D/g, '').slice(0, 11);
        validateField(this);
      });
    });
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (submitBtn.classList.contains("loading")) return;
      hideProgress();
      let invalidFound = false;
      fields.forEach(field => {
        if (!validateField(field)) {
          if (!invalidFound) { field.focus(); invalidFound = true; }
        }
      });
      const photoValid = validateFileArea();
      if (!photoValid) invalidFound = true;
      if (invalidFound) {
        errorMsg.textContent = "Please fill all required fields and attach a valid photo.";
        errorMsg.style.display = "block";
        return;
      }
      errorMsg.style.display = "none";
      const now = Date.now();
      if (now - parseInt(localStorage.getItem('lastSubmission') || '0') < 5000) {
        errorMsg.textContent = "Please wait a few seconds before submitting again.";
        errorMsg.style.display = "block";
        return;
      }
      const photoFile = document.getElementById('photoFile').files[0];
      const MAX_SIZE = 10 * 1024 * 1024;
      if (photoFile.size > MAX_SIZE) {
        errorMsg.textContent = "Photo must be 10 MB or smaller.";
        errorMsg.style.display = "block";
        return;
      }
      submitBtn.classList.add("loading");
      submitBtn.textContent = "Uploading...";
      showProgress();
      setProgress(0, 'Reading file...',
        'Preparing ' + formatMB(photoFile.size) + ' for upload. Keep this tab open.');
      let serverPhaseTimer = null;
      try {
        const fullName = document.getElementById('fullName').value.trim();
        const safeName = sanitizeName(fullName);
        const ext = getExtension(photoFile.name).toLowerCase() || '.jpg';
        const renamedFile = safeName + ' - WS_Speaker' + ext;
        const photoBase64 = await readFileAsBase64WithProgress(photoFile, p => {
          setProgress(p * 15, 'Reading file...',
            'Read ' + formatMB(photoFile.size * p) + ' of ' + formatMB(photoFile.size));
        });
        const payload = {
          name: fullName,
          email: document.getElementById('emailAddress').value.trim(),
          company: document.getElementById('companyName').value.trim(),
          designation: document.getElementById('designation').value.trim(),
          whatsapp: document.getElementById('whatsappNumber').value.trim(),
          photoBase64: photoBase64,
          photoName: renamedFile,
          photoMime: photoFile.type || 'image/jpeg'
        };
        const body = JSON.stringify(payload);
        const bodyBytes = new Blob([body]).size;
        setProgress(15, 'Uploading...',
          'Uploading ' + formatMB(bodyBytes) + '. Please keep this tab open.');
        let creep = 15;
        serverPhaseTimer = setInterval(() => {
          creep += (90 - creep) * 0.05;
          setProgress(creep, 'Uploading...',
            'Uploading ' + formatMB(bodyBytes) + '. Keep this tab open.');
        }, 400);
        const response = await fetch(WEBAPP_URL, {
          method: 'POST',
          body: body
        });
        clearInterval(serverPhaseTimer);
        serverPhaseTimer = null;
        if (!response.ok) {
          const errText = await response.text().catch(() => '');
          console.error('HTTP ' + response.status, errText.slice(0, 500));
          throw new Error('HTTP ' + response.status + ' from Apps Script.');
        }
        setProgress(95, 'Finalizing...', 'Uploading photo and recording your details.');
        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (parseErr) {
          console.error('Non-JSON response from Apps Script:', responseText.slice(0, 800));
          throw new Error('Server returned non-JSON. Check that the web app is deployed with "Anyone" access.');
        }
        if (data.success) {
          localStorage.setItem('lastSubmission', Date.now().toString());
          if (data.emailSent === false && data.emailError) {
            console.warn('Email dispatch failed:', data.emailError);
            markProgressDone('Saved, but email failed');
            errorMsg.textContent = "Submission saved, but the email could not be sent: " + data.emailError;
            errorMsg.style.display = "block";
          } else {
            markProgressDone('Onboarding complete!');
          }
          setTimeout(() => {
            form.reset();
            document.getElementById('photoText').textContent = 'Click or drag to upload your formal photo';
            document.getElementById('photoArea').classList.remove('has-file', 'file-error');
            showSuccessModal();
            fields.forEach(f => f.classList.remove("error"));
            hideProgress();
          }, 700);
        } else {
          errorMsg.textContent = data.error || "Submission failed. Please try again.";
          errorMsg.style.display = "block";
          markProgressError('Server rejected submission');
        }
      } catch (error) {
        console.error('Submission error:', error);
        errorMsg.textContent = "Upload failed: " + (error.message || 'Unknown error');
        errorMsg.style.display = "block";
        markProgressError('Upload failed');
      } finally {
        if (serverPhaseTimer) clearInterval(serverPhaseTimer);
        submitBtn.classList.remove("loading");
        submitBtn.textContent = "Submit";
      }
    });
    function readFileAsBase64WithProgress(file, onProgress) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onprogress = (e) => {
          if (e.lengthComputable && onProgress) onProgress(e.loaded / e.total);
        };
        reader.onload = () => { if (onProgress) onProgress(1); resolve(reader.result.split(',')[1]); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    fields.forEach(field => {
      field.addEventListener("input", () => {
        validateField(field);
        if (errorMsg.style.display === "block") errorMsg.style.display = "none";
      });
      field.addEventListener("change", () => validateField(field));
    });
  </script>
</body>
</html>`
  },
  {
    id: "speaker-onboarding-js",
    shortName: "SpeakerOnboarding.js",
    language: "javascript",
    category: "Workshop Speakers",
    summary: "Backend automation handling speaker registration data and syncing to Sheets.",
    content: `
const SHEET_ID       = 'REPLACE_WITH_SHEET_ID';
const SHEET_NAME     = 'Sheet1';
const PHOTO_FOLDER_ID = '17HSUyBCMstD9QV0cixsfJ6FYCxaP5qZ_';
const MAX_FILE_BYTES = 10 * 1024 * 1024; 
const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/octet-stream'
];
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const name        = sanitizeText(data.name, 100);
    const email       = sanitizeText(data.email, 150).toLowerCase();
    const company     = sanitizeText(data.company, 150);
    const designation = sanitizeText(data.designation, 150);
    const whatsapp    = sanitizeText(data.whatsapp, 20);
    if (!name || !email || !company || !designation || !whatsapp) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^01\\d{9}$/.test(whatsapp)) {
      return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
    }
    if (!data.photoBase64) {
      return jsonResponse({ success: false, error: 'Missing photo data.' });
    }
    const photoName = sanitizeFileName(data.photoName) || (name + ' - WS_Speaker.jpg');
    if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
      return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
    }
    const photoBytes = Utilities.base64Decode(data.photoBase64);
    if (photoBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
    }
    const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
      ? data.photoMime
      : 'image/jpeg';
    const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
    const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
    photoFile.setDescription('Workshop Speaker Photo - ' + name);
    photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
    }
    const nextRow = Math.max(sheet.getLastRow() + 1, 2);
    sheet.getRange(nextRow, 1).setValue(new Date());
    sheet.getRange(nextRow, 2).setValue(name);
    sheet.getRange(nextRow, 3).setValue(email);
    sheet.getRange(nextRow, 4).setValue(company);
    sheet.getRange(nextRow, 5).setValue(designation);
    const phoneCell = sheet.getRange(nextRow, 6);
    phoneCell.setNumberFormat('@');
    phoneCell.setValue(whatsapp);
    sheet.getRange(nextRow, 7).setValue(photoLink);
    return jsonResponse({ success: true, photoUrl: photoLink });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) {}
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X Workshop Speaker Onboarding' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[\\\\/:*?"<>|]/g, '')
    .trim()
    .slice(0, 150);
}
`
  },
  {
    id: "speaker-mail",
    shortName: "SpeakerMail.html",
    language: "html",
    category: "Workshop Speakers",
    summary: "Confirmation and itinerary email template for workshop speakers.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Workshop Speaker Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for joining us as a Workshop Speaker for <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. It is the biggest
      <strong>business case competition</strong> designed exclusively for the north-bengal region’s 1st and 2nd-year
      students, organized by <strong>Rajshahi University Business Club</strong>. Your onboarding has been confirmed
      and we are truly honored to have you on board.
    </p>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      The Case at a Glance
    </h3>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      <strong>Becoming Bangladesh's #1 Mobile Financial Platform.</strong> Participants step into the shoes of
      <strong>CASh-E</strong>, the country's #2 MFS player (~27% share, ~90M registered users, backed by Bangladesh
      Post Office), and design a 3 to 5 year strategy to close the gap with <strong>bKash</strong>. The brief is split
      into three connected tasks:
    </p>
    <ol style="margin: 0 0 18px 22px; padding: 0; font-size: 15px; line-height: 1.6; color: #334155;">
      <li style="margin-bottom: 6px;"><strong>App Innovation & Strategic Partnerships:</strong> new features and
        ecosystem plays to drive engagement and retention.</li>
      <li style="margin-bottom: 6px;"><strong>Marketing & Promotional Campaign Design:</strong> at least 6 distinct,
        high-impact campaigns to win urban youth, rural masses, and merchants.</li>
      <li style="margin-bottom: 6px;"><strong>Financial Modeling, Investment, Budget & ROI:</strong> capex,
        partnership costs, campaign budgets, incremental revenue, payback & NPV/IRR.</li>
    </ol>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      Evaluation Criteria (Total: 100)
    </h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="border-collapse: collapse; margin-bottom: 18px; font-family: 'Times New Roman', Times, serif; font-size: 15px;">
      <thead>
        <tr style="background-color: #f58220; color: #ffffff;">
          <th align="left" style="padding: 10px 12px; font-weight: 700;">Criteria</th>
          <th align="right" style="padding: 10px 12px; font-weight: 700;">Marks</th>
        </tr>
      </thead>
      <tbody style="color: #334155;">
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Situation Analysis</td>
          <td align="right" style="padding: 8px 12px;">5</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Problem Identification</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Market Understanding</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Big Idea</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;"><strong>Strategy Formulation (Service Features)</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Integrated Marketing & Communication Plan</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Financial & Timeline</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Feasibility Analysis</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Clarity & Structure of Presentation</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #1e293b; color: #ffffff;">
          <td style="padding: 10px 12px; font-weight: 700;">TOTAL</td>
          <td align="right" style="padding: 10px 12px; font-weight: 700;">100</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-bottom: 18px; font-size: 14px; line-height: 1.6; color: #64748b; font-style: italic;">
      Note: Big Idea, Strategy Formulation, and Integrated Marketing & Communication Plan carry the highest weightage.
      Judges will prioritize originality, strategic coherence, and real-world feasibility.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Our team will be in touch shortly with the schedule and other details. Should you have any questions or specific
      requirements for your session, please feel free to reach out to us.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "speaker-direct-mailer",
    shortName: "DirectMailSender.js",
    language: "javascript",
    category: "Workshop Speakers",
    summary: "Utility script for sending direct, personalized communication to speakers.",
    content: `
const SHEET_ID        = '1FFoDj2tG86HwiL7vvLkIvHYisq9U0IvrtCJr7hYePpM';
const SHEET_NAME      = 'Sheet1';
const PHOTO_FOLDER_ID = '17HSUyBCMstD9QV0cixsfJ6FYCxaP5qZ_';
const MAX_FILE_BYTES  = 10 * 1024 * 1024; 
const WS_EMAIL_SUBJECT   = 'Unravel Hexa: Workshop Speaker Casebook';
const WS_EMAIL_FROM_NAME = 'Unravel Hexa | Workshop';
const ALLOWED_IMAGE_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'application/octet-stream'
];
const WS_EMAIL_HTML = \`<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Workshop Speaker Onboarding Confirmed | Unravel 6X</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      WELCOME ABOARD!</h2>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for joining us as a Workshop Speaker for <strong>Xeron IT</strong> presents
      <strong style="color: #d72027;">Unravel Hexa</strong> powered by <strong>RAMPS BD</strong>. It is the biggest
      <strong>business case competition</strong> designed exclusively for the north-bengal region's 1st and 2nd-year
      students, organized by <strong>Rajshahi University Business Club</strong>. Your onboarding has been confirmed
      and we are truly honored to have you on board.
    </p>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      The Case at a Glance
    </h3>
    <p style="margin-bottom: 14px; font-size: 16px; line-height: 1.6; color: #334155;">
      <strong>Becoming Bangladesh's #1 Mobile Financial Platform.</strong> Participants step into the shoes of
      <strong>CASh-E</strong>, the country's #2 MFS player (~27% share, ~90M registered users, backed by Bangladesh
      Post Office), and design a 3 to 5 year strategy to close the gap with <strong>bKash</strong>. The brief is split
      into three connected tasks:
    </p>
    <ol style="margin: 0 0 18px 22px; padding: 0; font-size: 15px; line-height: 1.6; color: #334155;">
      <li style="margin-bottom: 6px;"><strong>App Innovation & Strategic Partnerships:</strong> new features and
        ecosystem plays to drive engagement and retention.</li>
      <li style="margin-bottom: 6px;"><strong>Marketing & Promotional Campaign Design:</strong> at least 6 distinct,
        high-impact campaigns to win urban youth, rural masses, and merchants.</li>
      <li style="margin-bottom: 6px;"><strong>Financial Modeling, Investment, Budget & ROI:</strong> capex,
        partnership costs, campaign budgets, incremental revenue, payback & NPV/IRR.</li>
    </ol>
    <h3
      style="font-size: 18px; font-weight: 700; color: #d72027; margin: 24px 0 10px; font-family: 'Times New Roman', Times, serif; border-left: 4px solid #f58220; padding-left: 10px;">
      Evaluation Criteria (Total: 100)
    </h3>
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="border-collapse: collapse; margin-bottom: 18px; font-family: 'Times New Roman', Times, serif; font-size: 15px;">
      <thead>
        <tr style="background-color: #f58220; color: #ffffff;">
          <th align="left" style="padding: 10px 12px; font-weight: 700;">Criteria</th>
          <th align="right" style="padding: 10px 12px; font-weight: 700;">Marks</th>
        </tr>
      </thead>
      <tbody style="color: #334155;">
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Situation Analysis</td>
          <td align="right" style="padding: 8px 12px;">5</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Problem Identification</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Market Understanding</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Big Idea</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;"><strong>Strategy Formulation (Service Features)</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;"><strong>Integrated Marketing & Communication Plan</strong></td>
          <td align="right" style="padding: 8px 12px;"><strong>15</strong></td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Financial & Timeline</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px;">Feasibility Analysis</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #fdf8f3;">
          <td style="padding: 8px 12px;">Clarity & Structure of Presentation</td>
          <td align="right" style="padding: 8px 12px;">10</td>
        </tr>
        <tr style="background-color: #1e293b; color: #ffffff;">
          <td style="padding: 10px 12px; font-weight: 700;">TOTAL</td>
          <td align="right" style="padding: 10px 12px; font-weight: 700;">100</td>
        </tr>
      </tbody>
    </table>
    <p style="margin-bottom: 18px; font-size: 14px; line-height: 1.6; color: #64748b; font-style: italic;">
      Note: Big Idea, Strategy Formulation, and Integrated Marketing & Communication Plan carry the highest weightage.
      Judges will prioritize originality, strategic coherence, and real-world feasibility.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Our team will be in touch shortly with the schedule and other details. Should you have any questions or specific
      requirements for your session, please feel free to reach out to us.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Let's Unravel,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>\`;
function buildEmailBody(speakerName) {
  return WS_EMAIL_HTML.replace(/{{speaker_name}}/g, speakerName || 'Speaker');
}
function sendCasebookEmail(toEmail, speakerName) {
  const body = buildEmailBody(speakerName);
  GmailApp.sendEmail(toEmail, WS_EMAIL_SUBJECT, '', {
    htmlBody: body,
    name: WS_EMAIL_FROM_NAME
  });
}
function testSendEmail() {
  const TEST_TO = Session.getActiveUser().getEmail() || 'YOUR_EMAIL@example.com';
  sendCasebookEmail(TEST_TO, 'Test Speaker');
  Logger.log('Test email sent to ' + TEST_TO);
}
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server busy. Please try again.' });
  }
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, error: 'No payload received.' });
    }
    const data = JSON.parse(e.postData.contents);
    const name        = sanitizeText(data.name, 100);
    const email       = sanitizeText(data.email, 150).toLowerCase();
    const company     = sanitizeText(data.company, 150);
    const designation = sanitizeText(data.designation, 150);
    const whatsapp    = sanitizeText(data.whatsapp, 20);
    if (!name || !email || !company || !designation || !whatsapp) {
      return jsonResponse({ success: false, error: 'Missing required fields.' });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email address.' });
    }
    if (!/^01\\d{9}$/.test(whatsapp)) {
      return jsonResponse({ success: false, error: 'Invalid WhatsApp number. Expecting 11 digits starting with 01.' });
    }
    if (!data.photoBase64) {
      return jsonResponse({ success: false, error: 'Missing photo data.' });
    }
    const photoName = sanitizeFileName(data.photoName) || (name + ' - WS_Speaker.jpg');
    if (!/\\.(jpe?g|png|webp|heic|heif)$/i.test(photoName)) {
      return jsonResponse({ success: false, error: 'Photo must be an image file (JPG, PNG, WEBP).' });
    }
    const photoBytes = Utilities.base64Decode(data.photoBase64);
    if (photoBytes.length > MAX_FILE_BYTES) {
      return jsonResponse({ success: false, error: 'Photo must be 10 MB or smaller.' });
    }
    const photoMime = data.photoMime && ALLOWED_IMAGE_MIMES.indexOf(data.photoMime) !== -1
      ? data.photoMime
      : 'image/jpeg';
    const photoBlob = Utilities.newBlob(photoBytes, photoMime, photoName);
    const photoFile = DriveApp.getFolderById(PHOTO_FOLDER_ID).createFile(photoBlob);
    photoFile.setDescription('Workshop Speaker Photo - ' + name);
    photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    const photoLink = 'https://drive.google.com/file/d/' + photoFile.getId() + '/view?usp=sharing';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse({ success: false, error: 'Responses sheet "' + SHEET_NAME + '" not found.' });
    }
    const nextRow = Math.max(sheet.getLastRow() + 1, 2);
    sheet.getRange(nextRow, 1).setValue(new Date());
    sheet.getRange(nextRow, 2).setValue(name);
    sheet.getRange(nextRow, 3).setValue(email);
    sheet.getRange(nextRow, 4).setValue(company);
    sheet.getRange(nextRow, 5).setValue(designation);
    const phoneCell = sheet.getRange(nextRow, 6);
    phoneCell.setNumberFormat('@');
    phoneCell.setValue(whatsapp);
    sheet.getRange(nextRow, 7).setValue(photoLink);
    let emailSent = false;
    let emailError = null;
    try {
      sendCasebookEmail(email, name);
      emailSent = true;
      Logger.log('Workshop speaker email sent to ' + email);
    } catch (mailErr) {
      emailError = mailErr && mailErr.message ? mailErr.message : String(mailErr);
      Logger.log('Email dispatch failed for ' + email + ': ' + emailError);
    }
    return jsonResponse({
      success: true,
      photoUrl: photoLink,
      emailSent: emailSent,
      emailError: emailError
    });
  } catch (err) {
    return jsonResponse({ success: false, error: 'Server error: ' + err.message });
  } finally {
    try { lock.releaseLock(); } catch (e) { }
  }
}
function doGet() {
  return jsonResponse({ status: 'ok', service: 'Unravel 6X Workshop Speaker Onboarding (Direct Mail)' });
}
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function sanitizeText(s, maxLen) {
  if (s === null || s === undefined) return '';
  return String(s).trim().slice(0, maxLen);
}
function sanitizeFileName(name) {
  if (!name) return '';
  return String(name)
    .replace(/[\\\\/:*?"<>|]/g, '')
    .trim()
    .slice(0, 150);
}
`
  },
  {
    id: "speaker-thank-you",
    shortName: "SpeakerThankYou.html",
    language: "html",
    category: "Workshop Speakers",
    summary: "Post-event thank you email template for workshop facilitators.",
    content: `<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for an Insightful Session | Unravel Hexa</title>
</head>
<body
  style="font-family: 'Times New Roman', Times, serif; background-color: #f5f0eb; margin: 0; padding: 0; color: #333333; font-size: 16px; line-height: 1.6; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div
    style="margin: 10px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); border-top: 3px solid #f58220; max-width: 700px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center" style="padding: 10px 0 5px; position: relative;">
          <div style="position: relative; display: inline-block;">
            <img src="https://lh3.googleusercontent.com/d/1ULmWBwUxsbxfUnA1SZcmaNPkiChHpDVl" alt="Unravel Logo"
              style="height: auto; width: 350px; max-width: 100%; display: block;" />
          </div>
        </td>
      </tr>
    </table>
    <h2
      style="text-align: center; font-weight: 800; font-size: 28px; margin-bottom: 6px; color: #1e293b; font-family: 'Times New Roman', Times, serif;">
      THANK YOU!</h2>
    <p
      style="text-align: center; font-size: 14px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #f58220; margin-top: 0; margin-bottom: 22px;">
      Workshop Speaker Appreciation
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6;">
      Dear <strong>{{speaker_name}}</strong>,
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Thank you for conducting the Online Workshop on <strong>Business Case Solving</strong> for the participants of
      <strong>Xeron IT</strong> presents <strong style="color: #d72027;">Unravel Hexa</strong>, powered by
      <strong>RAMPS BD</strong>.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      Your time and expertise added real value to the session, and we appreciate you sharing them with our participants.
    </p>
    <p style="margin-bottom: 18px; font-size: 16px; line-height: 1.6; color: #334155;">
      We hope to stay in touch and look forward to future collaborations.
    </p>
    <p style="margin-bottom: 18px; color: #475569; font-family: 'Times New Roman', Times, serif; font-size: 16px;">
      <strong style="color: #1e293b; font-weight: 600; font-family: 'Times New Roman', Times, serif;">
        Best Regards,<br />
        Team Unravel Hexa
      </strong>
    </p>
    <div class="footer"
      style="margin-top: 25px; font-size: 15px; border-top: 2px solid #f0e8df; padding-top: 20px; color: #64748b; text-align: center; background-color: #fdf8f3; border-radius: 8px; padding: 20px;">
      <p style="text-align: center; margin-bottom: 10px; font-family: 'Times New Roman', Times, serif;">
        <img src="https://lh3.googleusercontent.com/d/1qSgu8BNINAbZiuoniMnrOyzgUKdHYdxl" alt="RUBC Logo"
          style="height: 40px;" />
      </p>
      <p
        style="font-size: 17px; font-weight: 600; text-align: center; margin-top: 0; font-family: 'Times New Roman', Times, serif; color: #64748b;">
        RAJSHAHI UNIVERSITY BUSINESS CLUB
      </p>
      <div
        style="display: inline-block; text-align: left; font-family: 'Times New Roman', Times, serif; color: #64748b; font-size: 12px;">
        <img src="https://lh3.googleusercontent.com/d/1LKDM7xFU3w94w1IbdLAz_2xOyVeSOrc3"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://unravelhexa.rubusinessclub.com/"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">unravelhexa.rubusinessclub.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1C2-pClGKNNYBJAHBV_cUi6_ka8LYZ-h0"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="https://www.facebook.com/hello.rubc"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">www.facebook.com/hello.rubc</a><br />
        <img src="https://lh3.googleusercontent.com/d/1lCbM0aGS2sDUhNS1XbFy7zHkIIgbRvER" alt="Email"
          style="height: 9px; vertical-align: middle; margin-right: 2px;" />
        <a href="mailto:hello.rubc@gmail.com"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">hello.rubc@gmail.com</a><br />
        <img src="https://lh3.googleusercontent.com/d/1hdlRf7PifL-RfIc5lC_1gHckC6RePmi2" alt="Phone"
          style="height: 14px; vertical-align: middle; margin-right: 2px;" />
        <a href="tel:+8801586120216"
          style="color: #64748b; text-decoration: none; font-weight: 500; font-family: 'Times New Roman', Times, serif;">01586120216</a>
      </div>
    </div>
  </div>
</body>
</html>`
  },
];
