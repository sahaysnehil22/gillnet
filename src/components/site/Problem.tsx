import spiral from "@/assets/element.png.asset.json";
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
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex justify-center md:order-1">
          <img src={spiral.url} alt="Black spiral object" className="w-[320px] max-w-full lg:w-[440px]" />
        </div>

        <div className="order-1 md:order-2 md:text-right">
          <p className="inline-block border-b border-primary pb-1 text-[13px] uppercase tracking-[0.14em]">
            The Problem
          </p>
          <h2 className="mt-6 text-[34px] leading-[1.12] sm:text-[44px] lg:text-[56px]">
            The <span className="font-normal">Digital</span> <span className="italic font-light">World</span>
            <br />
            Rewards <span className="italic font-light">Convenience.</span>
            <br />
            <span className="italic font-light">Attackers</span> Depend On It.
          </h2>
          <p className="mt-6 text-[15px] italic leading-[1.6] md:ml-auto md:max-w-[520px] md:text-[16px]">
            Every click, password, and message creates an opportunity for cybercriminals. Most
            attacks don't exploit software—they exploit human trust.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 md:items-end">
            {threats.map((t) => (
              <div
                key={t.label}
                className="flex w-full items-center justify-between gap-6 rounded-full border border-primary px-5 py-3 md:w-[300px]"
              >
                <span className="text-[18px]">{t.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary">
                  <img src={t.icon} alt="" className="h-4 w-4 object-contain" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
