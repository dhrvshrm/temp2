import { useState, useEffect } from "react";

const useAspectRatio = (imageUrl) => {
  const [isCloseToSquare, setIsCloseToSquare] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImgLoading(true);
      const aspectRatio = img.width / img.height;
      const tolerance = 0.1;
      const closeToSquare = Math.abs(1 - aspectRatio) < tolerance;
      setIsCloseToSquare(closeToSquare);
      setHasError(false);
      setImgLoading(false);
    };
    img.onerror = () => {
      setHasError(true);
      setIsCloseToSquare(false);
      setImgLoading(false);
    };
  }, [imageUrl]);

  return { isCloseToSquare, hasError, imgLoading };
};

export default useAspectRatio;
