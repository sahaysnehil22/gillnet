import spiral from "@/assets/element-cropped.png.asset.json";
import users from "@/assets/libre-gui-users_logo.png.asset.json";
import lock from "@/assets/Vector.png.asset.json";
import globe from "@/assets/Vector_1.png.asset.json";

const threats = [
  { label: "Scammers", icon: users.url },
  { label: "Weak Passcode", icon: lock.url },
  { label: "Phishing Websites", icon: globe.url },
];

export function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-[1440px] px-6 py-20 md:px-16 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div className="order-2 flex items-start justify-center md:order-1 md:justify-start">
          <img
            src={spiral.url}
            alt="Black spiral object"
            className="mt-6 w-[300px] max-w-full sm:w-[380px] lg:w-[440px] xl:w-[500px]"
          />
        </div>

        <div className="order-1 md:order-2 md:text-right">
          <p className="inline-block border-b border-primary pb-1 text-[13px] uppercase tracking-[0.14em]">
            The Problem
          </p>
          <h2 className="mt-6 leading-[1.05]" style={{ fontSize: "clamp(22px, 4.4vw, 85px)" }}>
            <span className="block whitespace-nowrap">
              The <span className="font-normal">Digital</span>{" "}
              <span className="italic font-light">World</span>
            </span>
            <span className="block whitespace-nowrap">
              Rewards <span className="italic font-light">Convenience.</span>
            </span>
            <span className="block whitespace-nowrap">
              <span className="italic font-light">Attackers</span> Depend On It.
            </span>
          </h2>

          <p className="mt-6 text-[14px] font-light italic leading-[1.6] text-primary/90 md:ml-auto md:max-w-[520px]">
            Every click, password, and message creates an opportunity for cybercriminals. Most
            attacks don't exploit software—they exploit human trust.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 md:items-end">
            {threats.map((t) => (
              <div
                key={t.label}
                className="flex w-full items-center justify-between gap-6 rounded-[25px] border-[1.5px] border-primary py-2.5 pl-7 pr-2.5 md:w-auto md:min-w-[260px]"
              >
                <span className="text-[22px] leading-none">{t.label}</span>
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-primary">
                  <img src={t.icon} alt="" className="h-5 w-5 object-contain" />
                </span>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
