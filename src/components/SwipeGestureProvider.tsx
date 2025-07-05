'use client';

import { useSwipeGesture } from '../hooks/useSwipeGesture';

interface SwipeGestureProviderProps {
  children: React.ReactNode;
}

const SwipeGestureProvider = ({ children }: SwipeGestureProviderProps) => {
  // Enable swipe gesture
  useSwipeGesture({
    minSwipeDistance: 50,
    maxSwipeTime: 300,
  });

  return <>{children}</>;
};

export default SwipeGestureProvider;
