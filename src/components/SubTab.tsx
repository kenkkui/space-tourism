interface SubTabProps {
  subTabName: string;
  map: number[];
  handleClick: React.Dispatch<React.SetStateAction<number>>;
  clickState: number;
}

export default function SubTab({
  subTabName,
  map,
  handleClick,
  clickState,
}: SubTabProps) {
  return (
    <section className={`${subTabName}-select`}>
      {map.map((_, i) => {
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={i === clickState ? "active" : ""}
          >
            {subTabName !== "crew" && i}
          </button>
        );
      })}
    </section>
  );
}
