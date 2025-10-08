interface NekoHandwritingProps {
    title?: string;
    subtitle?: string;
}

function NekoHandwriting06({
    title = "Hand Written",
    subtitle = "Optional subtitle",
}: NekoHandwritingProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    className="w-full h-full"
                >
                    <path
                        d="M 180 280 C 220 240, 270 210, 330 220 C 390 230, 440 270, 470 320 C 490 355, 500 395, 490 430"
                        fill="none"
                        strokeWidth="11"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black opacity-85 animate-draw-path"
                        style={{
                            strokeDasharray: 1000,
                            strokeDashoffset: 1000,
                            animation: 'draw 2s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards'
                        }}
                    />
                    <path
                        d="M 490 430 C 480 465, 460 490, 430 500 C 380 515, 320 510, 280 480"
                        fill="none"
                        strokeWidth="11"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black opacity-85 animate-draw-path"
                        style={{
                            strokeDasharray: 600,
                            strokeDashoffset: 600,
                            animation: 'draw 1.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) 2s forwards'
                        }}
                    />
                    <path
                        d="M 530 320 C 570 280, 630 250, 700 260 C 770 270, 830 310, 870 360 C 900 400, 910 450, 900 490"
                        fill="none"
                        strokeWidth="11"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black opacity-85 animate-draw-path"
                        style={{
                            strokeDasharray: 1100,
                            strokeDashoffset: 1100,
                            animation: 'draw 2.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) 3.2s forwards'
                        }}
                    />
                    <path
                        d="M 900 490 C 890 520, 870 540, 840 545 C 790 553, 740 540, 710 510"
                        fill="none"
                        strokeWidth="11"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black opacity-85 animate-draw-path"
                        style={{
                            strokeDasharray: 500,
                            strokeDashoffset: 500,
                            animation: 'draw 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) 5.4s forwards'
                        }}
                    />
                    <circle
                        cx="330"
                        cy="220"
                        r="6"
                        fill="currentColor"
                        className="text-black opacity-0"
                        style={{
                            animation: 'fadeIn 0.4s ease-in 0.8s forwards'
                        }}
                    />
                    <circle
                        cx="700"
                        cy="260"
                        r="6"
                        fill="currentColor"
                        className="text-black opacity-0"
                        style={{
                            animation: 'fadeIn 0.4s ease-in 3.8s forwards'
                        }}
                    />
                </svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center opacity-0 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl text-black tracking-tighter flex items-center gap-2">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-black/80">
                        {subtitle}
                    </p>
                )}
            </div>
            <style>{`
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes fadeIn {
                    to {
                        opacity: 0.85;
                    }
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out 0.5s forwards;
                }
            `}</style>
        </div>
    );
}

export { NekoHandwriting06 };
