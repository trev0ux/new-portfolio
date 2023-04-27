import dynamic from 'next/dynamic';

const MotionEl = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false
});

export default MotionEl;