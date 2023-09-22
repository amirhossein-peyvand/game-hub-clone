import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);
  const first = data?.results[0];

  if (error || isLoading) return null;
  if (!first) return null;

  return (
    <video
      src={first?.data[480]}
      poster={first?.preview}
      controls
      style={{ marginBottom: 4 }}
    />
  );
};

export default GameTrailer;
