
interface Props {
  strings: string[];
  setLanguange: (e: string) => void;
}

export default function Selector({ strings, setLanguange }: Props) {
  return (
    <div>
      <select onChange={e => setLanguange(e.target.value)}>
        {strings && strings.map((str) => <option value={str} key={str} id={str}>{str}</option>)}
      </select>
    </div>
  );
}
