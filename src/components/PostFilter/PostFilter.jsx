import MySelect from "../UI/MySelect/MySelect";
import Input from "../UI/Input/Input";
export default function PostFilter({ filter, setFilter, limit, setLimit }) {
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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: -1, name: "Максимально постов" },
        ]}
      />
    </div>
  );
}
