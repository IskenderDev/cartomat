export const useTheme = () => {
  const onChangeTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }

  const getThemeStatus = () => {
    return document.body.classList.contains("dark");
  }

  return { getThemeStatus, onChangeTheme }
}

