const FormInscription = () => {
  return (
    <>
    <div className="card shadow rounded">
      <div className="card-body">
        <h3 className="card-title text-center">Créer un compte</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom*</label>
            <input type="text" className="form-control" id="prenom" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom*</label>
            <input type="text" className="form-control" id="nom" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date de naissance*</label>
            <input type="date" className="form-control" id="dob" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="adresse" className="form-label">Adresse*</label>
            <input type="text" className="form-control" id="adresse" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="codePostalVille" className="form-label">Code postal - Ville*</label>
            <input type="text" className="form-control" id="codePostalVille" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="emailSignup" className="form-label">E-mail*</label>
            <input type="email" className="form-control" id="emailSignup" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordSignup" className="form-label">Mot de passe*</label>
            <div className="input-group">
              <input type="password" className="form-control" id="passwordSignup" required></input>
              <button className="btn btn-outline-secondary" type="button" id="togglePasswordSignup">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="newsletter"></input>
            <label className="form-check-label" htmlFor="newsletter">
              Incrivez-vous à la newsletter de l&apos;association.
            </label>
          </div>
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" id="infoEmail" required></input>
            <label className="form-check-label" htmlFor="infoEmail">
              J&apos;autorise le café des enfants à m&apos;envoyer des informations par e-mail.*
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-info text-white">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default FormInscription;