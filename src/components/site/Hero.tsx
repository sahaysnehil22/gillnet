import robot from "@/assets/11.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1440px] px-6 md:px-16">
      <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-[52px] leading-[1.05] tracking-tight sm:text-[72px] lg:text-[128px]">
            <span className="block">
              <span className="font-normal">Stay </span>
              <span className="font-light italic">Secure.</span>
            </span>
            <span className="block pl-[0.35em]">
              <span className="font-light">Stay </span>
              <span className="font-normal">Ahead.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-[539px] pl-1 text-[16px] leading-[1.5] md:text-[20px]">
            Detect phishing websites, uncover scam messages, strengthen your passwords, and protect
            your digital life with AI-Powered Cybersecurity tool.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 pl-1">
            <button className="h-[50px] w-[195px] rounded-full border border-primary text-[20px] transition-colors hover:bg-primary hover:text-primary-foreground">
              Start Protecting
            </button>
            <button className="h-[50px] w-[195px] rounded-full bg-primary text-[20px] text-primary-foreground transition-opacity hover:opacity-85">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={robot.url}
            alt="Black futuristic AI robot"
            width={510}
            height={700}
            className="h-auto w-[300px] max-w-full sm:w-[400px] lg:w-[510px]"
          />
        </div>
      </div>
    </section>
  );
}
