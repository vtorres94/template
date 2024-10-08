import "./Member.scss";

export const Member = ({ name, icon }: any) => {
  return (
    <div className="member-container">
      <div className="member-picture">
        <img src={icon} alt="member" />
      </div>
      <div className="member-info">
        <h1>{name}</h1>
        <h2>Asesor Certificado</h2>
      </div>
    </div>
  );
};
