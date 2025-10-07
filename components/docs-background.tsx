import { FlickeringGrid} from "@/components/flickerring-grid-hero";
import {LOGO_BASE64} from "@/components/flickerring-grid-demo";

// 定义遮罩样式
const maskStyle = {
  WebkitMaskImage: `url('${LOGO_BASE64}')`,
  WebkitMaskSize: '100vw',
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  maskImage: `url('${LOGO_BASE64}')`,
  maskSize: '100vw',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
} as const;

// 定义网格动画颜色和配置
const GRID_CONFIG = {
  background: {
    color: "#6366f1",
    maxOpacity: 0.08,
    flickerChance: 0.15,
    squareSize: 4,
    gridGap: 4,
  },
  logo: {
    color: "#6366f1",
    maxOpacity: 0.45,
    flickerChance: 0.2,
    squareSize: 2,
    gridGap: 3,
  },
} as const;

const FlickeringGridDemo2 = () => {
  return (
   <div className="flex w-full h-screen justify-center items-center">
        <FlickeringGrid
        className={`absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] motion-safe:animate-pulse`}
        {...GRID_CONFIG.background}
      />
      <div 
        className="absolute inset-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in" 
        style={{
          ...maskStyle,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>
    </div>
  );
};

export { FlickeringGridDemo2 };
