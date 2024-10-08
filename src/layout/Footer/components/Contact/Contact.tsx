import "./Contact.scss";
export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h1>¡CONTÁCTANOS!</h1>
        <p>
          ¿Tienes alguna duda o te gustaria recibir mayor información vía correo
          electronico de alguno de nuestros servicios?
        </p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Nombre"></input>
        <input type="email" placeholder="Correo"></input>
        <textarea placeholder="Escribe tu mensaje"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};
