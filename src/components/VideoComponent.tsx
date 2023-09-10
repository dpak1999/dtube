import Image from "next/image";
import { type FC } from "react";

interface VideoComponentProps {
  type: string;
}

export const UserImage: FC<{ image: string; className?: string }> = ({
  image,
  className = "",
}) => {
  return (
    <div className={`relative h-9 w-9 ${className}`}>
      <Image
        src={image || "/profile.jpg"}
        alt=""
        className="absolute rounded-full"
        fill
      />
    </div>
  );
};

const VideoComponent: FC<VideoComponentProps> = ({}) => {
  return <div>VideoComponent</div>;
};

export default VideoComponent;
