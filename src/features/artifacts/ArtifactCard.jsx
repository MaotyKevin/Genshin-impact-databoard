import { useNavigate } from "react-router-dom";
import "../../css/artifact.css";

function ArtifactCard({ id, name, appearance }) {
   const navigate = useNavigate();

   return (
      <div className="artifact-card">
         <button type="button" onClick={() => navigate(`/artifacts/${id}`)} aria-label={`View ${name}`} style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
            <img src={appearance} alt={`${name} artifact set`} width={80} height={80} loading="lazy" decoding="async" />
         </button>
         <span className="name-style">{name}</span>
      </div>
   );
}

export default ArtifactCard;