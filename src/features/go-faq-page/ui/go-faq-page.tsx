import { useNavigate } from "react-router";
import FAQ_icon from 'shared/assets/icons/FAQ_icon2.svg'
import { Router } from "shared/config/Router";
import styles from './styles.module.scss'

export const GoFaqPage = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(Router.FAQ_Page);
  };

  return (
    <button className={styles.FaqButton} onClick={() => onClickNavigate()}>
      <img src={FAQ_icon} alt="FAQ" />
      <span>FAQ</span>
    </button>
  );
};
