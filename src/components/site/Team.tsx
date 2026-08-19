import team from "@/assets/Rectangle_10.png.asset.json";

const members = [
  { name: "Pushkar Bhardwaj", role: "Front-End Developer", stack: "(React, HTML, CSS, JS)" },
  { name: "Riya Singh", role: "Database Management", stack: "(MongoDB, SqlAlchemy, PSQL)" },
  { name: "Mayank Trigunayat", role: "Backend Developer", stack: "(Java, Springboot, Maven)" },
  { name: "Dhyey Patel", role: "UI/UX Designer & Deployment", stack: "(Figma, Vercel, HTML, CSS)" },
  { name: "Aman Agarwal", role: "AI/ML Engineer", stack: "(Python Fast API & Pytorch)" },
];

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
      <p className="inline-block border-b border-primary pb-1 text-[13px] uppercase tracking-[0.14em]">
        The Team
      </p>
      <h2 className="mt-5 text-[36px] leading-[1.08] sm:text-[48px] lg:text-[60px]">
        The <span className="italic font-light">Team</span> Behind
        <br />
        GillNet AI.
      </h2>

      <div className="mt-12 border border-primary p-4 md:p-8">
        <img
          src={team.url}
          alt="Illustration of the five GillNet AI team members"
          className="mx-auto w-full max-w-[900px]"
        />
        <div className="mx-auto grid max-w-[1000px] grid-cols-2 border-t border-primary sm:grid-cols-3 lg:grid-cols-5">
          {members.map((m, i) => (
            <div
              key={m.name}
              className={`flex flex-col items-center px-3 py-6 text-center ${
                i % 2 !== 0 ? "border-l border-primary" : ""
              } sm:border-l-0 ${i % 3 !== 0 ? "sm:border-l sm:border-primary" : ""} lg:border-l-0 ${
                i > 0 ? "lg:border-l lg:border-primary" : ""
              }`}
            >
              <p className="text-[14px] font-medium italic leading-tight">{m.name}</p>
              <p className="mt-3 text-[12px] italic leading-tight">{m.role}</p>
              <p className="mt-1 text-[10px] italic leading-tight opacity-80">{m.stack}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
