import { JiraBoardColumn } from "./jiraBoardColumn";

export function JiraBoard()
{
    
const data = {
  todo: [
    { id: "NUC-344", title: "Optimize experience for mobile web", tag: "BILLING" },
    { id: "NUC-360", title: "Onboard workout options (OWO)", tag: "ACCOUNTS" },
    { id: "NUC-337", title: "Multi-dest search UI mobileWeb", tag: "ACCOUNTS" },
    { id: "NUC-339", title: "Billing System integration-frontend", tag: "FORMS" },
    { id: "NUC-340", title: "Account settings defaults", tag: "ACCOUNTS" }

  ],
  inprogress: [
    { id: "NUC-342", title: "Fast trip search", tag: "ACCOUNTS" },
    { id: "NUC-335", title: "Affiliate links integration", tag: "BILLING" },
    { id: "NUC-341", title: "Shopping cart purchashing error-quick fix required", tag: "FORMS" }
  ],
  review: [
    { id: "NUC-367", title: "Revise and streamline booking flow", tag: "ACCOUNTS" },
    { id: "NUC-358", title: "Travel suggestion experiments", tag: "ACCOUNTS" },
    { id: "NUC-354", title: "Ongoing custemer satisfation", tag: "ACCOUNTS" },
    { id: "NUC-351", title: "Planet Taxi Device exploration & Research", tag: "FEERBACK" }
  ],
  done: [
    { id: "NUC-340", title: "High outage: Software bug fix", tag: "BILLING" },
    { id: "NUC-341", title: "Web-store purchasing performance fix", tag: "FORMS" },
  ],
};

    return(
         <div className="container-fluid mt-4">
           <h3 className="mb-4">Beyond Gravity – Board</h3>
           <div className="row g-3">
           <div className="col-3"><JiraBoardColumn title="TO DO" cards={data.todo} /></div>
           <div className="col-3"><JiraBoardColumn title="IN PROGRESS" cards={data.inprogress} /></div>
           <div className="col-3"><JiraBoardColumn title="IN REVIEW" cards={data.review} /></div>
           <div className="col-3"><JiraBoardColumn title="DONE" cards={data.done} /></div>
           </div>

      
         </div>
    )
}