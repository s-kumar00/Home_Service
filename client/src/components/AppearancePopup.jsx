import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const AppearancePopup = ({ closePopup, closeProfileModal }) => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (selectedTheme) => {
    if (selectedTheme !== theme) {
      dispatch(toggleTheme());
    }
    closePopup();
    closeProfileModal();
  };

  return (
    <div className="bg-white rounded-lg">
      <button
        className="w-full text-left px-5 py-6"
        onClick={() => handleThemeChange("light")}
      >
        Light
      </button>
      <button
        className="w-full text-left px-5 py-6"
        onClick={() => handleThemeChange("dark")}
      >
        Dark
      </button>
    </div>
  );
};

export default AppearancePopup;
