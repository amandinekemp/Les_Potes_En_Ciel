const FormLogin = () => {
  return (
    <>
    <div className="card shadow rounded mb-4">
      <div className="card-body">
        <h3 className="card-title text-center">Se connecter</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail*</label>
            <input type="email" className="form-control" id="email" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe*</label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" required></input>
              <button className="btn btn-outline-secondary" type="button" id="togglePassword">
                <i className="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-info text-white">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default FormLogin;