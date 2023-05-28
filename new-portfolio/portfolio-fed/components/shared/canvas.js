import { useEffect } from "react";


export default function Canvas() {
  useEffect(() => {
    const noise = () => {
      const canvas = document.getElementById('noise');
      const ctx = canvas.getContext('2d');
      const noiseData = [];
      let frame = 0;

      const createNoise = () => {
        const idata = ctx.createImageData(canvas.width, canvas.height);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;
        for (let i = 0; i < len; i++) {
          buffer32[i] = Math.random() < 0.5 ? 0xff000000 : 0xffffffff;
        }
        noiseData.push(idata);
      };

      const paintNoise = () => {
        frame = (frame + 1) % noiseData.length;
        ctx.putImageData(noiseData[frame], 0, 0);
      };

      const loop = () => {
        paintNoise();
        window.requestAnimationFrame(loop);
      };

      const setup = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (let i = 0; i < 10; i++) {
          createNoise();
        }
        loop();
        reset();
      };

      let resizeThrottle;
      const reset = () => {
        window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);
          resizeThrottle = window.setTimeout(() => {
            window.cancelAnimationFrame(loop);
            setup();
          }, 200);
        }, false);
      };

      const init = () => {
        setup();
      };

      init();
    };

    noise();
  })

  return (
    <canvas id="noise" className="noise">
    </canvas>
  )
}