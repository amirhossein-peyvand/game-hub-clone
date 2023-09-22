import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bullEyes from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { alt: "Meh", src: meh, boxSize: "30px" },
    4: { alt: "Thumbs up", src: thumbsUp, boxSize: "30px" },
    5: { alt: "Bull eyes", src: bullEyes, boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
