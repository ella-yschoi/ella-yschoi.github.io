'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SwipeConfig {
  minSwipeDistance?: number;
  maxSwipeTime?: number;
}

export const useSwipeGesture = (config: SwipeConfig = {}) => {
  const router = useRouter();
  const pathname = usePathname();
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );
  const touchEndRef = useRef<{ x: number; y: number; time: number } | null>(
    null
  );

  const { minSwipeDistance = 80, maxSwipeTime = 500 } = config;

  useEffect(() => {
    // Disable swipe gesture on home page
    if (pathname === '/') {
      return;
    }

    const handleTouchStart = (e: TouchEvent) => {
      // Ignore gesture when scrolling in a scrollable area
      if (e.target && (e.target as Element).closest('[data-scrollable]')) {
        return;
      }

      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchStartRef.current.x;
      const deltaY = Math.abs(currentY - touchStartRef.current.y);

      // Ignore gesture if vertical scroll is greater than horizontal swipe
      if (deltaY > Math.abs(deltaX)) {
        touchStartRef.current = null;
        return;
      }

      // Visual feedback while swiping from left to right
      if (deltaX > 20) {
        document.body.style.transform = `translateX(${Math.min(
          deltaX * 0.3,
          50
        )}px)`;
        document.body.style.transition = 'transform 0.1s ease-out';
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      // Remove visual feedback
      document.body.style.transform = '';
      document.body.style.transition = '';

      touchEndRef.current = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
        time: Date.now(),
      };

      const swipeDistance = touchEndRef.current.x - touchStartRef.current.x;
      const swipeTime = touchEndRef.current.time - touchStartRef.current.time;
      const verticalDistance = Math.abs(
        touchEndRef.current.y - touchStartRef.current.y
      );

      // Go back if swiped from left to right
      if (
        swipeDistance > minSwipeDistance &&
        swipeTime < maxSwipeTime &&
        verticalDistance < 100 // Ignore if vertical swipe is too large
      ) {
        // Back animation
        document.body.style.transform = 'translateX(100%)';
        document.body.style.transition = 'transform 0.3s ease-out';

        setTimeout(() => {
          router.back();
          document.body.style.transform = '';
          document.body.style.transition = '';
        }, 300);
      }

      // Reset state
      touchStartRef.current = null;
      touchEndRef.current = null;
    };

    // Enable swipe gesture only on mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      document.addEventListener('touchstart', handleTouchStart, {
        passive: true,
      });
      document.addEventListener('touchmove', handleTouchMove, {
        passive: true,
      });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        // Remove style on cleanup
        document.body.style.transform = '';
        document.body.style.transition = '';
      };
    }
  }, [router, pathname, minSwipeDistance, maxSwipeTime]);
};
