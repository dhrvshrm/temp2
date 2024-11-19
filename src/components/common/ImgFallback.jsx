import Image from "next/image";
import { useEffect, useState } from "react";
import imageLoader from "../../assets/image-loader.png";

const loaderSx = {
  width: "3.125rem",
  height: "3.125rem",
  objectFit: "contain",
  objectPosition: "center",
};

const ImageFallback = ({ src = "", style, alt, width, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  function onError() {
    setImgSrc(imageLoader);
  }

  const isLoader = imgSrc === imageLoader;

  return (
    <div style={{ ...style, ...(isLoader ? loaderSx : {}) }}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={width}
        layout="responsive"
        onError={onError}
        {...props}
        unoptimized={true}
        loading="lazy"
      />
    </div>
  );
};

export default ImageFallback;
