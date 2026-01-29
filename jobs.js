const jobs = [
  {
    title: "SSC GD Constable Recruitment 2026",
    qualification: "10th Pass",
    age: "18–23 Years",
    lastDate: "20 March 2026",
    fees: "₹100",
    link: "#"
  },
  {
    title: "Bank Clerk Recruitment 2026",
    qualification: "Graduate",
    age: "20–28 Years",
    lastDate: "5 April 2026",
    fees: "₹250",
    link: "#"
  }
];

const jobContainer = document.getElementById("job-list");

jobs.forEach(job => {
  jobContainer.innerHTML += `
    <div class="job-card">
      <h3>${job.title}</h3>
      <p><b>Qualification:</b> ${job.qualification}</p>
      <p><b>Age Limit:</b> ${job.age}</p>
      <p><b>Last Date:</b> ${job.lastDate}</p>
      <p><b>Fees:</b> ${job.fees}</p>
      <a href="${job.link}" class="btn">Apply Online</a>
    </div>
  `;
});
