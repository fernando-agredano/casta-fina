'use client';

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  scrollHint?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  eyebrow,
  title,
  subtitle,
  scrollHint,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef({ scrollProgress: 0, mediaFullyExpanded: false, touchStartY: 0 });

  useEffect(() => {
    stateRef.current = { scrollProgress, mediaFullyExpanded, touchStartY };
  });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const { scrollProgress, mediaFullyExpanded } = stateRef.current;

      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { scrollProgress, mediaFullyExpanded, touchStartY } = stateRef.current;
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(0);
    };

    const handleScroll = (): void => {
      if (!stateRef.current.mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    const handleSkipIntro = (): void => {
      setScrollProgress(1);
      setMediaFullyExpanded(true);
      setShowContent(true);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('castafina:skip-hero-intro', handleSkipIntro);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('castafina:skip-hero-intro', handleSkipIntro);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const PHASE1_END = 0.4;
  const phase2 = Math.max(
    0,
    Math.min((scrollProgress - PHASE1_END) / (1 - PHASE1_END), 1)
  );

  const titleOpacity = 1 - phase2;
  const subtitleOpacity = 1 - phase2;

  const mediaWidth = phase2 * (isMobileState ? 940 : 1500);
  const mediaHeight = phase2 * (isMobileState ? 620 : 800);
  const mediaOpacity = Math.min(phase2 * 3, 1);
  const textTranslateX = phase2 * (isMobileState ? 140 : 130);

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[50%_25%]"
              priority
            />
            <div className="absolute inset-0 bg-background/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/70" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative px-6">
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl border border-cobalt/25 overflow-hidden max-w-[min(calc(100vw-3rem),80rem)] md:max-w-[min(calc(100vw-8rem),80rem)]"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxHeight: '78vh',
                  opacity: mediaOpacity,
                  boxShadow: '0 30px 80px -20px oklch(0.06 0.01 255 / 0.7)',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={mediaSrc}
                    alt={title || 'Casta Fina'}
                    fill
                    sizes="(max-width: 768px) 90vw, 60vw"
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/45"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0.55 - scrollProgress * 0.35 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {eyebrow && (
                    <p
                      className="text-xs md:text-sm tracking-[0.3em] uppercase text-cobalt"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {eyebrow}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center text-center gap-3 w-full relative z-10 transition-none flex-col">
                <motion.h1
                  className="font-display font-black uppercase leading-[0.85] text-foreground transition-none"
                  style={{
                    fontSize: 'clamp(3rem, 12vw, 9rem)',
                    opacity: titleOpacity,
                    transform: `translateX(-${textTranslateX}vw)`,
                  }}
                >
                  {title}
                </motion.h1>
                {subtitle && (
                  <motion.p
                    className="font-bold uppercase text-lg md:text-2xl text-cobalt max-w-xl text-balance drop-shadow-[0_2px_10px_oklch(0.06_0.01_255_/_0.8)]"
                    style={{
                      opacity: subtitleOpacity,
                      transform: `translateX(${textTranslateX}vw)`,
                    }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>

              {scrollHint && (
                <motion.p
                  className="absolute inset-x-0 bottom-16 text-center text-[11px] tracking-[0.3em] uppercase text-foreground drop-shadow-[0_2px_8px_oklch(0.06_0.01_255_/_0.8)]"
                  animate={
                    scrollProgress > 0.03
                      ? { opacity: 0 }
                      : { opacity: [0.65, 1, 0.65] }
                  }
                  transition={
                    scrollProgress > 0.03
                      ? { duration: 0.3 }
                      : { duration: 2.2, repeat: Infinity }
                  }
                >
                  {scrollHint}
                </motion.p>
              )}
            </div>

            {children && (
              <motion.section
                className="flex flex-col w-full px-6 py-16 md:px-16 md:py-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.7 }}
              >
                {children}
              </motion.section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
