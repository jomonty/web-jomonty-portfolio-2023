import { Sun, Moon } from "react-feather";

const NavDarkModeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="flex rounded-full py-2 px-3 shadow dark:bg-zinc-800 dark:ring-1 dark:ring-white/10">
      <button onClick={() => toggleTheme()}>
        {darkMode ? <Moon color="#71717a" /> : <Sun color="rgb(21 128 61)" />}
      </button>
    </div>
  );
};

export default NavDarkModeToggle;
