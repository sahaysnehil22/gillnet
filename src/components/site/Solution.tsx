import mail from "@/assets/Vector_3.png.asset.json";
import lock from "@/assets/Vector.png.asset.json";
import globe from "@/assets/Vector_1.png.asset.json";
import message from "@/assets/Vector_2.png.asset.json";

function Node({
  icon,
  title,
  sub,
  className,
  labelSide,
}: {
  icon: string;
  title: string;
  sub: string;
  className: string;
  labelSide: "top" | "bottom" | "left" | "right";
}) {
  const label = (
    <div className="whitespace-nowrap text-center">
      <p className="text-[11px]">{title}</p>
      <p className="text-[9px] italic opacity-70">{sub}</p>
    </div>
  );
  const vertical = labelSide === "top" || labelSide === "bottom";
  return (
    <div className={`absolute flex items-center gap-2 ${vertical ? "flex-col" : ""} ${className}`}>
      {(labelSide === "top" || labelSide === "left") && label}
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
        <img src={icon} alt="" className="h-4 w-4 object-contain invert" />
      </span>
      {(labelSide === "bottom" || labelSide === "right") && label}
    </div>
  );
}

export function Solution() {
  return (
    <section id="solution" className="mx-auto max-w-[1440px] px-6 pb-24 md:px-16 md:pb-32">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <p className="inline-block border-b border-primary pb-1 text-[13px] uppercase tracking-[0.14em]">
            The Solution
          </p>
          <h2 className="mt-5 text-[42px] leading-[1.05] sm:text-[56px] lg:text-[72px]">
            One <span className="italic font-light">Platform,</span>
            <br />
            <span className="italic font-light">Every</span> threat.
          </h2>
          <p className="mt-6 max-w-[440px] text-[15px] italic leading-[1.7] md:text-[16px]">
            GillNet AI combines the power of Artificial Intelligence with Cybersecurity to detect
            phishing attempts, scam messages, weak passwords and suspicious activity - Before they
            cause any damage.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[15px] italic md:text-[16px]">
            {["Detect", "Analyze", "Warn", "Protect"].map((s, i) => (
              <span key={s} className="flex items-center gap-4">
                {i > 0 && <span className="not-italic">·</span>}
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-10 sm:px-6">
          <div className="relative aspect-square w-full max-w-[420px]">

            <div className="absolute inset-0 rounded-full border border-primary/40" />
            <div className="absolute inset-[13%] rounded-full border border-primary/25" />
            <div className="absolute left-1/2 top-[14%] h-[36%] w-px -translate-x-1/2 bg-primary/50" />
            <div className="absolute bottom-[14%] left-1/2 h-[36%] w-px -translate-x-1/2 bg-primary/50" />
            <div className="absolute left-[14%] top-1/2 h-px w-[36%] -translate-y-1/2 bg-primary/50" />
            <div className="absolute right-[14%] top-1/2 h-px w-[36%] -translate-y-1/2 bg-primary/50" />

            <div className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary text-primary-foreground">
              <p className="text-[16px]">GillNet AI</p>
              <p className="text-[9px] italic opacity-80">A One-Stop Tool</p>
            </div>

            <Node
              icon={lock.url}
              title="Passwords"
              sub="Scan & Protect"
              labelSide="top"
              className="left-1/2 top-0 -translate-x-1/2"
            />
            <Node
              icon={message.url}
              title="Messages"
              sub="Inbox & Filters"
              labelSide="bottom"
              className="bottom-0 left-1/2 -translate-x-1/2"
            />
            <Node
              icon={mail.url}
              title="Emails"
              sub="Scan & Verify"
              labelSide="left"
              className="left-0 top-1/2 -translate-y-1/2"
            />
            <Node
              icon={globe.url}
              title="Websites"
              sub="Check safety"
              labelSide="right"
              className="right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
