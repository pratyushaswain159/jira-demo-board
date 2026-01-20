export function JiraHeader() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            {/* LEFT SECTION */}
            <div className="d-flex align-items-center gap-3">
                {/* Jira Logo */}
                <span className="fw-bold text-primary d-flex align-items-center">
                    <i className="bi bi-grid-3x3-gap-fill me-1"></i> Jira
                </span>

                {/* Menu */}
                <ul className="navbar-nav flex-row gap-3">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Your work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-semibold text-primary" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Filter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dashboards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Teams</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Plans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                </ul>

                {/* Create Button */}
                <button className="btn btn-primary btn-sm ms-2">
                    Create
                </button>
            </div>

            {/* RIGHT SECTION */}
            <div className="d-flex align-items-center gap-3 ms-auto">
                {/* Search */}
                <div className="input-group input-group-sm" style={{ width: "220px" }}>
                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                    />
                </div>

                {/* Icons */}
                <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-bell fs-5"></i>
                    <i className="bi bi-question-circle fs-5"></i>
                    <i className="bi bi-gear fs-5"></i>
                </div>


                {/* Avatar */}
                <img
                    src="https://i.pravatar.cc/32"
                    alt="user"
                    className="rounded-circle"
                />
            </div>
        </nav>
    )
}