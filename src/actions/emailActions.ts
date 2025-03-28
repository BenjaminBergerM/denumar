"use server";

import { Resend } from 'resend';
import { validationEmail } from '@/emails/email-template-fr';

const resend = new Resend('re_Nsj6f1nB_Jv67WQtw6nMDERMWe1uGUYzh');

export async function sendEmail() {
  await resend.emails.send({
    from: 'Benjamin Berger <benjamin@mushroom-tech.com>',
    to: ['benjaminbergermaurette@gmail.com'],
    subject: '🌸 Une petite vérification… juste pour toi',
    html: validationEmail,
  });
}