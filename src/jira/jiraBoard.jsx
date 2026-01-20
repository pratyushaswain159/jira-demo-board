import { JiraBoardColumn } from "./jiraBoardColumn";
import { JiraBoardHeader } from "./jiraBoardHeader";

export function JiraBoard() {

    const data = {
        todo: [
            { id: "NUC-344", title: "Optimize experience for mobile web", tag: "BILLING" , avatar : "https://i.pravatar.cc/32?img=1" },
            { id: "NUC-360", title: "Onboard workout options (OWO)", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=2" },
            { id: "NUC-337", title: "Multi-dest search UI mobileWeb", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=3"},
            { id: "NUC-339", title: "Billing System integration-frontend", tag: "FORMS" , avatar : "https://i.pravatar.cc/32?img=4"},
            { id: "NUC-340", title: "Account settings defaults", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=5" }

        ],
        inprogress: [
            { id: "NUC-342", title: "Fast trip search", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=6" },
            { id: "NUC-335", title: "Affiliate links integration", tag: "BILLING" , avatar : "https://i.pravatar.cc/32?img=7" },
            { id: "NUC-341", title: "Shopping cart purchashing error-quick fix required", tag: "FORMS" , avatar : "https://i.pravatar.cc/32?img=8" }
        ],
        review: [
            { id: "NUC-367", title: "Revise and streamline booking flow", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=9" },
            { id: "NUC-358", title: "Travel suggestion experiments", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=10" },
            { id: "NUC-354", title: "Ongoing custemer satisfation", tag: "ACCOUNTS" , avatar : "https://i.pravatar.cc/32?img=11" },
            { id: "NUC-351", title: "Planet Taxi Device exploration & Research", tag: "FEERBACK" , avatar : "https://i.pravatar.cc/32?img=12" }
        ],
        done: [
            { id: "NUC-340", title: "High outage: Software bug fix", tag: "BILLING" , avatar : "https://i.pravatar.cc/32?img=13" },
            { id: "NUC-341", title: "Web-store purchasing performance fix", tag: "FORMS" , avatar : "https://i.pravatar.cc/32?img=14" },
        ],
    };

    return (
        <div className="container-fluid mt-4">
            <div>
                <JiraBoardHeader/>
            </div>
            <div className="row g-3">
                <div className="col-3"><JiraBoardColumn title="TO DO" cards={data.todo} /></div>
                <div className="col-3"><JiraBoardColumn title="IN PROGRESS" cards={data.inprogress} /></div>
                <div className="col-3"><JiraBoardColumn title="IN REVIEW" cards={data.review} /></div>
                <div className="col-3"><JiraBoardColumn title="DONE" cards={data.done} /></div>
            </div>


        </div>
    )
}