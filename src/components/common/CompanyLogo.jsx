import useAspectRatio from "@/src/hooks/useAspectRatio";
import ImageFallback from "./ImgFallback";
import imageLoader from "@/src/assets/image-loader.png";

const CompanyLogo = ({ imageUrl, size }) => {
  const { isCloseToSquare } = useAspectRatio(imageUrl);
  const defaultSize = size || { square: 50, rectangle: 100 };

  return (
    <div>
      <ImageFallback
        src={imageUrl || imageLoader}
        style={{
          width: isCloseToSquare ? defaultSize.square : defaultSize.rectangle,
        }}
        alt="Company Logo"
        width={
          isCloseToSquare ? defaultSize.square * 2 : defaultSize.rectangle * 2
        }
      />
    </div>
  );
};

export default CompanyLogo;
