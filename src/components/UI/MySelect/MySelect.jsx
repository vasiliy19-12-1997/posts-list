export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ margin: "20px 0px " }}
    >
      <option disabled value={defaultValue}></option>
      {options.map((opt) => (
        <option key={opt.name} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
