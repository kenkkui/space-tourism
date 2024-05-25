interface SubTabProps {
  map: number[];
  handleClick: React.Dispatch<React.SetStateAction<number>>;
  clickState: number;
}

export default function SubTab({ map, handleClick, clickState }: SubTabProps) {
  return (
    <section className="crew-select">
      {map.map((item, i) => {
        return (
          <button
            key={item}
            onClick={() => handleClick(i)}
            className={i === clickState ? "active" : ""}
          ></button>
        );
      })}
    </section>
  );
}
