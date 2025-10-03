import { useState } from "react"
import { NeonText , NeonColorPicker, type NeonPreset } from "@/components/ui/neon-lighting";

export default function DemoOne() {
  const [currentPreset, setCurrentPreset] = useState<NeonPreset>("classic")
  const [intensity, setIntensity] = useState(1)

  return (
    <>
      <NeonColorPicker
        currentPreset={currentPreset}
        onPresetChange={setCurrentPreset}
        intensity={intensity}
        onIntensityChange={setIntensity}
      />
      <NeonText initialText="霓虹(NEON)" contentEditable spellCheck={false} preset={currentPreset} intensity={intensity} />
    </>
  )
}
