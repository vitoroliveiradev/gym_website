import { useRef } from "react";
import "./Join.css";
import emailJs from "@emailjs/browser";
import { useState } from "react";

export const Join = () => {
    const [inputEmail, setInputEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_hy0ml1e",
        "template_pp6i03h",
        form.current,
        "LJIxKDpkMR04fK7V1"
      )
      .then(
        (result) => {
          alert("Email Enviado com Sucesso!");
        },
        (error) => {
          alert("Erro no Envio. Tente novamente!");
        }
      );
      setInputEmail("");
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form onSubmit={sendEmail} ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email adress"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};
