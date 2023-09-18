import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

/* const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};
 */

const variants = {
  fadeIn: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  fadeOut: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
interface TransitionProps {
  children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          /*        key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out" */

          key={asPath}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
