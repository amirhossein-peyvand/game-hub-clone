import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;

  const summary = expanded ? children : children.slice(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
