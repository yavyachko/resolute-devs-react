import axios from "axios";
import React, { useCallback, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [msg, setMsg] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelChange = (e) => {
    setTel(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !msg || !name || !tel) {
        console.error("Some fields are still empty");
        return;
      }
      axios
      .post('http://localhost:8081/send-email', {
        from: email,
        subject: 'Application form Resolute',
        text:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .background {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
      }
      .wrapper {
        position: relative;
        height: fit-content;
        padding-bottom: 20px;
        margin: auto;
        background-color: #1c1b1d;
      }
      .wrapper__header {
        background-color: #513a82;
        color: white;
        font-size: 18px;
        text-align: center;
        padding: 14px 0;
      }
      .wrapper__collab-mail {
        width: 70%;
        margin: auto;
        border-collapse: collapse;
        color: white;
        border: none;
        padding: 10px;
      }
      .wrapper__collab-mail__item {
        border: none;
      }
      .wrapper__collab-mail__item__header {
        font-weight: bold;
        font-size: 13px;
        padding: 8px 12px;
      }
      .wrapper__collab-mail__item__content {
        font-size: 10px;
        padding: 8px 12px;
        max-width:300px;
        text-align:end;
      }
      span,
      a {
        color: #9c73f2 !important;
      }
      .roboto-thin {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-style: normal;
      }
      .roboto-light {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
      }
      .roboto-regular {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      .roboto-medium {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
      }
      .roboto-bold {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
      }
      .roboto-black {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: normal;
      }
      .roboto-thin-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-style: italic;
      }
      .roboto-light-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
      }
      .roboto-regular-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: italic;
      }
      .roboto-medium-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: italic;
      }
      .roboto-bold-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: italic;
      }
      .roboto-black-italic {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: italic;
      }
      * {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        line-height: 1;
      }
      :focus,
      :active {
        outline: none;
      }
      a {
        text-decoration: none;
        color: #454545;
      }
      a:focus,
      a:active {
        outline: none;
      }
      html,
      body {
        line-height: auto;
      }
      ul li {
        list-style: none;
      }
      h1,
      h2,
      h3,
      h4 {
        line-height: 130%;
      }
      footer{
          text-align:center;
      }
    </style>
    <title>Email</title>
  </head>
  <body>
    <div class="wrapper">
      <header class="wrapper__header roboto-bold">
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/Kzy6jsN/Group-821.png" alt="Resolute Devs" border="0"></a>
      </header>
      <table class="wrapper__collab-mail">
        <tr class="wrapper__collab-mail__item">
          <td class="wrapper__collab-mail__item__header roboto-bold">Name</td>
          <td class="wrapper__collab-mail__item__content roboto-medium">${name}</td>
        </tr>
        <tr class="wrapper__collab-mail__item">
          <td class="wrapper__collab-mail__item__header roboto-bold">Email</td>
          <td class="wrapper__collab-mail__item__content roboto-medium">${email}</td>
        </tr>
        <tr class="wrapper__collab-mail__item">
          <td class="wrapper__collab-mail__item__header roboto-bold">Phone</td>
          <td class="wrapper__collab-mail__item__content roboto-medium">${tel}</td>
        </tr>
        <tr class="wrapper__collab-mail__item">
          <td class="wrapper__collab-mail__item__header roboto-bold">Message</td>
          <td class="wrapper__collab-mail__item__content roboto-medium">${msg}</td>
        </tr>
      </table>
      <footer>
        <p class="roboto-bold">
          <a href="mailto:${email}">Message back</a>
        </p>
      </footer>
    </div>
  </body>
</html>
`
      })
      .then(() => {
        console.success('Email was sent succesfully');
        setEmail('')
        setMsg('')
        setName('')
        setTel('')
      })
      .catch(e => {
        console.error('Unexpected error sending an email');
        console.error(e);
      });
    },
    [email, msg, name, tel]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={handleNameChange}
      />
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={tel}
          onChange={handleTelChange}
        />
      </div>
      <input
        type="text"
        placeholder="Message"
        value={msg}
        onChange={handleMsgChange}
      />
      <button type="submit">Send</button>
    </form>
  );
}
