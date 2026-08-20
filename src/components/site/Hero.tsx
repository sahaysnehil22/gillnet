import robot from "@/assets/11.png.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1440px] flex-col justify-center px-6 md:min-h-[calc(100svh-78px)] md:px-16"
    >
      <div className="grid items-center gap-2 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:gap-8 md:py-4">
        <div className="min-w-0">
          <h1 className="text-[44px] leading-[1.0] tracking-tight sm:text-[62px] lg:text-[82px] xl:text-[96px]">
            <span className="block">
              <span className="font-normal">Stay </span>
              <span className="font-light italic">Secure.</span>
            </span>
            <span className="block font-normal">Stay</span>
            <span className="block pl-[0.30em] font-normal">Ahead.</span>
          </h1>

          <p className="mt-5 max-w-[480px] pl-1 text-[15px] leading-[1.5] md:mt-6 md:text-[17px]">
            Detect phishing websites, uncover scam messages, strengthen your passwords, and protect
            your digital life with AI-Powered Cybersecurity tool.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 pl-1 md:gap-4">
            <button className="h-[42px] w-[150px] rounded-full border border-primary text-[15px] transition-colors hover:bg-primary hover:text-primary-foreground md:h-[46px] md:w-[168px] md:text-[17px]">
              Start Protecting
            </button>
            <button className="h-[42px] w-[150px] rounded-full bg-primary text-[15px] text-primary-foreground transition-opacity hover:opacity-85 md:h-[46px] md:w-[168px] md:text-[17px]">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-center md:justify-end">
          <img
            src={robot.url}
            alt="Black futuristic AI robot"
            className="h-auto w-[260px] max-w-full object-contain sm:w-[320px] md:max-h-[68svh] md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
