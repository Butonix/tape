import { base, components } from "./map";

type LiProps = {
  item: { id: string; label: string };
};

const Li = ({ item }: LiProps) => {
  const { id, label } = item;

  return (
    <li>
      <a
        className="-mx-3 group relative flex px-3 py-2 text-primary/70 capitalize"
        href={`#${id}`}
      >
        <span className="bg-[length:0%_2px] bg-gradient-to-r bg-left-bottom from-primary bg-no-repeat transition-all duration-200 ease-out group-hover:bg-[length:100%_2px] group-focus-visible:bg-[length:100%_2px]">
          {label}
        </span>
      </a>
    </li>
  );
};

export const Sidebar = () => {
  return (
    <aside className="no-scrollbar sticky top-[100px] bottom-0 z-10 hidden h-[calc(100vh-100px)] overflow-y-auto border-custom px-6 py-4 md:block md:border-x">
      <h1 className="select-none py-5 font-bold text-xs uppercase">
        Foundations
      </h1>
      <ul className="w-full font-medium text-sm">
        {base.map((item) => (
          <Li key={item.id} item={item} />
        ))}
      </ul>
      <h1 className="select-none py-5 font-bold text-xs uppercase">
        Components
      </h1>
      <ul className="w-full font-medium text-sm">
        {components.map((item) => (
          <Li key={item.id} item={item} />
        ))}
      </ul>
    </aside>
  );
};
