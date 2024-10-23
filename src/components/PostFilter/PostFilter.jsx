import MySelect from "../UI/MySelect/MySelect";
import Input from "../UI/Input/Input";
export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={(selectSort) => setFilter({ ...filter, sort: selectSort })}
        defaultValue={"Сортировка по"}
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанияю" },
        ]}
      />
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
    </div>
  );
}
