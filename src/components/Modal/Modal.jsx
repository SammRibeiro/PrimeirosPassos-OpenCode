import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
export default function Modal({ children, onClose, label }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const focusable = dialogRef.current?.querySelectorAll(
      "button,input,select",
    );
    const onKey = (e) => {
      if (e.key === "Tab" && focusable?.length) {
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div
      className={styles.backdrop}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={label}
      >
        {children}
      </div>
    </div>
  );
}
