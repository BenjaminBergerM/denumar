export const validationEmail = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Denu Mar - Vérification</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #fffafc;
      color: #162455;
      padding: 2rem;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background-color: #dbeafe;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .button {
      display: inline-block;
      margin-top: 2rem;
      padding: 12px 24px;
      background-color: #165dfb;
      color: white;
      text-decoration: none;
      color: #fff !important;
      border: none;
      cursor: pointer;
      border-radius: 8px;
      font-size: 16px;
    }
    .footer {
      margin-top: 2rem;
      font-size: 12px;
      color: #282828;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🌸 Une petite vérification… juste pour toi</h2>
    <p>Coucou Denu,</p>
    <p>
      Ce n’est pas un mail comme les autres…<br />
      C’est juste un petit geste pour confirmer que c’est bien toi, la vraie 🌷
    </p>
    <p>
      Clique sur le bouton ci-dessous pour continuer ta petite aventure dans <strong>Denu Mar</strong> 💫
    </p>

    <a
      class="button"
      href="https://denumar.com/validate"
    >
      Valider mon identité
    </a>

    <p class="footer">
      Avec tendresse,<br/>
      Quelqu’un qui pense à toi.
    </p>
  </div>
</body>
</html>
`;