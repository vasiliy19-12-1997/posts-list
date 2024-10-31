import { useEffect } from "react";
export const useObserver = (ref, loading, lastElement, callback) => {
  useEffect(() => {
    if (loading) return;
    if (ref.current) ref.current.disconnect();
    ref.current = new IntersectionObserver(callback);
    ref.current.observe(lastElement.current);
  }, [loading]);
};
