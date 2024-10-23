import s from "./MyModal.module.css";
export default function MyModal({ children, visible, setVisible }) {
  const rootStyle = [s.myModal];
  if (visible) {
    rootStyle.push(s.active);
  }
  return (
    <div className={rootStyle.join(" ")} onClick={() => setVisible(!visible)}>
      <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
