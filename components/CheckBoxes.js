import { useState } from "react";

function Checkbox() {
  // ...
  const [isChecked, setisChecked] = useState(false)

  return (
    <label>
      {/* ... */}
      <svg
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
        />
      </svg>
      Don't you dare to check me!
    </label>
  );
}
export default Checkbox;
