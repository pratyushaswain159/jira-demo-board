export function JiraBoardHeader() {
    return (
        <div className="bg-white border-bottom px-4 py-3">
            {/* Breadcrumb */}
            <div className="d-flex  text-muted small mb-1">
                <div>Projects / <span className="fw-medium">Beyond Gravity</span></div>
                <div className="ms-auto">
                    <button className="btn btn-light btn-sm">
                        <i className="bi bi-star"></i>
                    </button>

                    <button className="btn btn-light btn-sm">
                        <i className="bi bi-three-dots"></i>
                    </button>
                </div>
                
            </div>

            <div className="d-flex  align-items-center flex-wrap gap-3">
                {/* Left section */}
                <div className="d-flex align-items-center gap-3">
                    <h5 className="mb-0 fw-semibold">Board</h5>

                    {/* Search */}
                    <div className="input-group input-group-sm board-search">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                        />
                    </div>

                    {/* Avatars */}
                    <div className="d-flex align-items-center">
                        <img src="https://i.pravatar.cc/32?img=1" className="avatar rounded-circle" />
                        <img src="https://i.pravatar.cc/32?img=2" className="avatar rounded-circle" />
                        <img src="https://i.pravatar.cc/32?img=3" className="avatar rounded-circle" />
                        <img src="https://i.pravatar.cc/32?img=4" className="avatar rounded-circle" />
                        <div className="avatar more">+3</div>
                    </div>

                    {/* Epic dropdown */}
                    <select className="form-select form-select-sm w-auto">
                        <option>Epic</option>
                        <option>Story</option>
                        <option>Task</option>
                    </select>
                </div>

                {/* Right section */}
                <div className="d-flex align-items-center gap-3 ms-auto">
                    <span className="text-muted small fw-semibold">GROUP BY</span>

                    <select className="form-select form-select-sm w-auto">
                        <option>None</option>
                        <option>Status</option>
                        <option>Assignee</option>
                    </select>

                    <button className="btn btn-light btn-sm">
                        <i className="bi bi-bar-chart me-1"></i> Insights
                    </button>

                </div>
            </div>
        </div>
    )
}