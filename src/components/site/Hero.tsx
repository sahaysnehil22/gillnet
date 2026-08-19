import robot from "@/assets/11.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1440px] px-6 md:px-16">
      <div className="grid items-center gap-8 py-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6 md:py-16">
        <div className="min-w-0">
          <h1 className="text-[44px] leading-[1.05] tracking-tight sm:text-[64px] lg:text-[104px] xl:text-[120px]">
            <span className="block">
              <span className="font-normal">Stay </span>
              <span className="font-light italic">Secure.</span>
            </span>
            <span className="block pl-[0.35em]">
              <span className="font-light">Stay </span>
              <span className="font-normal">Ahead.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[480px] pl-1 text-[15px] leading-[1.5] md:mt-8 md:text-[18px]">
            Detect phishing websites, uncover scam messages, strengthen your passwords, and protect
            your digital life with AI-Powered Cybersecurity tool.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 pl-1 md:gap-4">
            <button className="h-[42px] w-[150px] rounded-full border border-primary text-[15px] transition-colors hover:bg-primary hover:text-primary-foreground md:h-[46px] md:w-[168px] md:text-[17px]">
              Start Protecting
            </button>
            <button className="h-[42px] w-[150px] rounded-full bg-primary text-[15px] text-primary-foreground transition-opacity hover:opacity-85 md:h-[46px] md:w-[168px] md:text-[17px]">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center self-center md:justify-end">
          <img
            src={robot.url}
            alt="Black futuristic AI robot"
            width={510}
            height={700}
            className="h-auto w-[240px] max-w-full sm:w-[320px] md:w-[360px] lg:w-[470px] xl:w-[540px]"
          />
        </div>
      </div>
    </section>

  );
}
