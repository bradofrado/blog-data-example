import React, {useEffect, useState} from "react";

export const NavbarComponent = ({
  items,
  title,
  path,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const { expandClass, onExpand } = useExpand();
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isToggled) {
      body.className = 'dark';
    } else {
      body.className = '';
    }
  }, [isToggled]);
  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-20">
        <div className="flex flex-wrap items-center justify-between w-full p-4 h-full">
          <ToggleSwitch value={isToggled} onChange={setIsToggled}/>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => {
              onExpand();
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto z-20 ${expandClass}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
              {items.map((item, i) => {
                const selected = path.includes(item.link);
                return (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent aria-selected:text-blue-700 dark:aria-selected:text-blue-500"
                      aria-current="page"
                      aria-selected={selected}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const ToggleSwitch = ({label, value, onChange}) => {
  return <>
  <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="sr-only peer"/>
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-light dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      {label && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>}
  </label>
  </>
}

const useExpand = (trueClass = "block", falseClass = "hidden") => {
  const [expand, setExpand] = useState(false);

  return {
    expandClass: expand ? trueClass : falseClass,
    onExpand: (force) => setExpand(force ?? !expand),
  };
};