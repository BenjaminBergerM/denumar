"use server";

import { Resend } from 'resend';
import { validationEmail } from '@/emails/email-template-fr';

const resend = new Resend('re_Nsj6f1nB_Jv67WQtw6nMDERMWe1uGUYzh');

export async function sendEmail() {
  await resend.emails.send({
    from: 'Benjamin Berger <benjamin@mushroom-tech.com>',
    to: ['infodenumar@gmail.com'],
    subject: '🌸 Une petite vérification… juste pour toi',
    html: validationEmail,
  });
}

export async function sendConfirmation() {
  await resend.emails.send({
    from: 'Benjamin Berger <benjamin@mushroom-tech.com>',
    to: ['infodenumar@gmail.com'],
    subject: 'Merci pour ton OUI',
    html: `
      <div style="font-family: sans-serif; font-size: 16px; color: #444;">
        <h2>Merci d’avoir dit oui ❤️</h2>
        <p>Ce petit projet a été fait avec tout mon cœur.</p>
        <p>J’espère que chaque étape t’a fait sourire.</p>
        <p>Et surtout… que ce soit le début de bien d’autres moments ensemble 💫</p>
        <br />
        <p>Avec tout mon amour,</p>
        <p>Benja Berger</p>
      </div>
    `
  });
};
