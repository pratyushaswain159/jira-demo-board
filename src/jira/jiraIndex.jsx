import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { JiraBoard } from "./jiraBoard"
import { JiraBacklog } from "./jiraBacklog"
import { JiraCode } from "./jiraCode"
import { JiraRoadmap } from "./jiraRoadmap"
import { JiraSecurity } from "./jiraSecurity"
import { JiraIssues } from "./jiraIssues"
import { JiraReleases } from "./jiraReleases"
import { JiraReports } from "./jiraReports"
import { JiraHeader } from "./jiraHeader"
import { JiraSettings } from "./jiraSettings"

export function JiraIndex() {
  return (
    <div className="container-fluid ">
      <header className="text-white text-center p-2 mt-2 ">
        <JiraHeader />
      </header>
      <section className=" mt-2 row">
        
          <nav className="col-2 border ">
            <div>
              <h6>PLANNING</h6>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/roadmap"><span className="bi bi-signpost-2"> </span>Roadmap</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/backlog"><span className="bi bi-backpack4"> </span>Backlog</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/board"><span className="bi bi-view-stacked"> </span>Board</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/reports"><span className="bi bi-graph-up-arrow"> </span>Reports</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/issues"><span className="bi bi-ticket-detailed"> </span>Issues</Link>
              </div>
            </div>
            <div>
              <h6>DEVELOPMENT</h6>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/code"><span className="bi bi-code-slash"> </span>Code</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/security"><span className="bi bi-lock"> </span>Security</Link>
              </div>
              <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/releases"><span className="bi bi-aspect-ratio"> </span>Releases</Link>
              </div>
            </div>
            <div border border-light >
               <div className="mb-2">
                <Link className="btn btn-light d-flex text-start align-items-center justify-content-start w-100" to="/settings"><span className="bi bi-gear"> </span>Project Settings</Link>
              </div>
            </div>
          </nav>
          <main className="col-10 border">
            <Routes>
              <Route path="/" element={<JiraBoard />} />
              <Route path="board" element={<JiraBoard />} />
              <Route path="backlog" element={<JiraBacklog />} />
              <Route path="code" element={<JiraCode />} />
              <Route path="issues" element={<JiraIssues />} />
              <Route path="releases" element={<JiraReleases />} />
              <Route path="reports" element={<JiraReports />} />
              <Route path="roadmap" element={<JiraRoadmap />} />
              <Route path="security" element={<JiraSecurity />} />
              <Route path="settings" element={<JiraSettings />}/>
            </Routes>
          </main>
        
      </section>
    </div>
  )
}