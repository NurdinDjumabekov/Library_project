import React from "react";
import styles from "./RecoveryAccount.module.css";

const RecoveryAccount = ({ setRestore }) => {
  return (
    <div className={styles.parentBlock_recovery}>
      <form action="">
        <input
          placeholder="E-mail "
          className={styles.input_email_recover}
          required
        />
        <input
          placeholder="- - - -"
          className={styles.input_numbers_recover}
          pattern="\d{4}"
          maxLength="4"
          required
        />
        <p>Введите код из 4 цифр</p>
        <button onClick={() => setRestore(false)}>Восстановить</button>
      </form>
    </div>
  );
};

export default RecoveryAccount;

// form
//     width: 100%
//     margin-bottom: 20px
//     .input_email_recover
//         width: 100%
//         height: 50px
//         border-radius: 8px
//         padding-left: 50px
//         border: 1px solid #2A2A2A
//         font-weight: 600
//         font-size: 16px
//         margin-bottom: 15px
//         background: url("../../../assests/images/windows/email.svg")
//         background-repeat: no-repeat
//         background-position-y: 50%
//         background-position: 15px
//         cursor: pointer
//     .input_numbers_recover
//         text-align: center
//         width: 100%
//         height: 50px
//         border-radius: 8px
//         border: 1px solid #2A2A2A
//         font-weight: 400
//         font-size: 30px
//         padding: 0 15px
//         margin-bottom: 155px
//         cursor: pointer
//         background: green
//         font-size: 50px
//     p
//         text-align: left
//         font-weight: 400
//         font-size: 12px
//         line-height: 44px
//         color: #2A2A2A
//     button
//         font-family: 'Roboto'
//         font-style: normal
//         font-weight: 500
//         font-size: 18px
//         line-height: 125.3%
//         color: #FFFFFF
//         width: 100%
//         height: 50px
//         background-color: #FF4004
//         border-radius: 8px
//         border: none
//         cursor: pointer

///////////////////////////////////
// div
//     form
//         width: 100%
//         margin-bottom: 20px
//         .input_email
//             width: 100%
//             height: 50px
//             border-radius: 8px
//             padding-left: 50px
//             border: 1px solid #2A2A2A
//             font-weight: 600
//             font-size: 16px
//             margin-bottom: 15px
//             background: url("../../../assests/images/windows/email.svg")
//             background-repeat: no-repeat
//             background-position-y: 50%
//             background-position: 15px
//             cursor: pointer
//         .input_password
//             width: 100%
//             height: 50px
//             border-radius: 8px
//             padding-left: 50px
//             border: 1px solid #2A2A2A
//             font-weight: 600
//             font-size: 16px
//             margin-bottom: 15px
//             background: url("../../../assests/images/windows/key.svg")
//             background-repeat: no-repeat
//             background-position-y: 50%
//             background-position: 15px
//             cursor: pointer
//             background: red
//         button
//             font-family: 'Roboto'
//             font-style: normal
//             font-weight: 500
//             font-size: 18px
//             line-height: 125.3%
//             color: #FFFFFF
//             width: 100%
//             height: 50px
//             background-color: #FF4004
//             border-radius: 8px
//             border: none
//             cursor: pointer
//     > span
//         font-weight: 400
//         font-size: 15px
//         line-height: 14px
//         color: #2A2A2A
//     > button
//         font-family: 'Roboto'
//         font-style: normal
//         font-weight: 400
//         font-size: 15px
//         line-height: 14px
//         color: #FF4004
//         border: none
//         background-color: transparent
//         margin-left: 5px
//         cursor: pointer
