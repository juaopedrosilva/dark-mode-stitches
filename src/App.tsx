import { GlobalStyles, darkTheme } from "../stitches.config";

export default function App() {
  GlobalStyles();

  const toggleTheme = () => {
    if (document.body.className.includes("dark-theme")) {
      document.body.classList.remove(...document.body.classList);
      return;
    }

    document.body.classList.add(darkTheme);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
}
