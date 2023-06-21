import React, { useEffect, useState } from "react";
import styles from "./AddBookFavorite.module.css";
import { useDispatch } from "react-redux";
import { sendFavotiteBookUsers } from "../../store/reducers/sendRequestEveryBookSlice";

const AddBookFavorite = ({ id }) => {
  const [btn, setbtn] = useState(false);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //   if (btn) {
  //     dispatch(sendFavotiteBookUsers({ btn, id }));
  //   } else {
  //     dispatch(sendFavotiteBookUsers({ btn, id }));
  //   }
  //   }, [btn]);
  const sendRequestFavoriteBook = (state) => {
    setbtn(state);
    if (btn) {
      dispatch(sendFavotiteBookUsers({ btn, id }));
    } else {
      dispatch(sendFavotiteBookUsers({ btn, id }));
    }
  };
  return (
    <div className={styles.parent_addFavorite}>
      {btn ? (
        <button onClick={() => sendRequestFavoriteBook(false)}>
          <svg
            width="37"
            height="34"
            viewBox="0 0 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33203 6.49935C3.33203 5.69195 3.81751 4.96373 4.5628 4.6532L8.64078 2.95404C9.0865 2.76832 9.58437 2.75013 10.0425 2.90283L17.0934 5.25313C17.8461 5.50402 18.3793 6.1761 18.4524 6.9661L20.434 28.3677C20.5911 30.0639 18.6912 31.1674 17.2956 30.1905L6.3325 22.5163C6.00629 22.288 5.75567 21.9675 5.61273 21.5958L3.46534 16.0126C3.37722 15.7835 3.33203 15.5401 3.33203 15.2947V6.49935Z"
              fill="#FF4004"
            />
            <path
              d="M30.6881 2.66602C31.3969 2.66602 32.0527 3.0411 32.412 3.65198L36.2811 10.2294C36.6247 10.8135 36.6491 11.5318 36.3461 12.1379L32.9602 18.9096C32.8752 19.0797 32.7663 19.2368 32.637 19.3761L26.5174 25.9664C26.3944 26.0989 26.254 26.214 26.1 26.3088L21.3075 29.258C20.4607 29.7792 19.3595 29.599 18.7229 28.8351L17.8138 27.7441C17.5032 27.3715 17.3387 26.8987 17.3508 26.4137L17.8058 8.21697C17.8222 7.55901 18.1613 6.95127 18.7126 6.59173L22.432 4.16602L25.0097 2.87716C25.2875 2.73831 25.5937 2.66602 25.9042 2.66602L30.6881 2.66602Z"
              fill="#FF4004"
            />
            <mask id="path-3-inside-1_3287_2043" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 11.05C0 5.46508 3.8906 0 10.0909 0C12.9649 0 15.0166 0.818117 16.591 2.05343C17.338 2.63952 17.9622 3.31379 18.4956 3.97187C19.0231 3.31519 19.641 2.64106 20.3813 2.0566C21.953 0.815647 24.0079 0 26.9091 0C33.1804 0 37 5.47422 37 11.05C37 16.73 34.1844 21.5889 30.657 25.3805C27.1242 29.1779 22.7433 32.0561 19.2521 33.8205C18.7787 34.0598 18.2213 34.0598 17.7479 33.8205C14.2567 32.0561 9.87581 29.1779 6.343 25.3805C2.81561 21.5889 0 16.73 0 11.05ZM10.0909 3.4C6.20031 3.4 3.36364 6.85076 3.36364 11.05C3.36364 15.5457 5.59348 19.6117 8.79337 23.0513C11.7446 26.2236 15.4075 28.7346 18.5 30.3883C21.5925 28.7346 25.2554 26.2236 28.2066 23.0513C31.4065 19.6117 33.6364 15.5457 33.6364 11.05C33.6364 6.84162 30.8551 3.4 26.9091 3.4C24.7016 3.4 23.389 3.99614 22.4519 4.73607C21.5832 5.42189 20.9784 6.25773 20.2574 7.25395C20.1261 7.43535 19.991 7.62207 19.8498 7.81416C19.5325 8.24566 19.0319 8.5 18.5 8.5C17.9681 8.5 17.4675 8.24566 17.1502 7.81416C17.0295 7.64995 16.9127 7.48935 16.7987 7.33241C16.0555 6.31004 15.4251 5.44271 14.5285 4.73925C13.5782 3.99367 12.2624 3.4 10.0909 3.4Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 11.05C0 5.46508 3.8906 0 10.0909 0C12.9649 0 15.0166 0.818117 16.591 2.05343C17.338 2.63952 17.9622 3.31379 18.4956 3.97187C19.0231 3.31519 19.641 2.64106 20.3813 2.0566C21.953 0.815647 24.0079 0 26.9091 0C33.1804 0 37 5.47422 37 11.05C37 16.73 34.1844 21.5889 30.657 25.3805C27.1242 29.1779 22.7433 32.0561 19.2521 33.8205C18.7787 34.0598 18.2213 34.0598 17.7479 33.8205C14.2567 32.0561 9.87581 29.1779 6.343 25.3805C2.81561 21.5889 0 16.73 0 11.05ZM10.0909 3.4C6.20031 3.4 3.36364 6.85076 3.36364 11.05C3.36364 15.5457 5.59348 19.6117 8.79337 23.0513C11.7446 26.2236 15.4075 28.7346 18.5 30.3883C21.5925 28.7346 25.2554 26.2236 28.2066 23.0513C31.4065 19.6117 33.6364 15.5457 33.6364 11.05C33.6364 6.84162 30.8551 3.4 26.9091 3.4C24.7016 3.4 23.389 3.99614 22.4519 4.73607C21.5832 5.42189 20.9784 6.25773 20.2574 7.25395C20.1261 7.43535 19.991 7.62207 19.8498 7.81416C19.5325 8.24566 19.0319 8.5 18.5 8.5C17.9681 8.5 17.4675 8.24566 17.1502 7.81416C17.0295 7.64995 16.9127 7.48935 16.7987 7.33241C16.0555 6.31004 15.4251 5.44271 14.5285 4.73925C13.5782 3.99367 12.2624 3.4 10.0909 3.4Z"
              fill="#FF4004"
            />
            <path
              d="M16.591 2.05343L10.4181 9.92082L10.4181 9.92082L16.591 2.05343ZM18.4956 3.97187L10.7269 10.2685C12.6305 12.6171 15.4943 13.9785 18.5175 13.9718C21.5406 13.9652 24.3985 12.5913 26.2918 10.2344L18.4956 3.97187ZM20.3813 2.0566L14.1845 -5.79192L14.1845 -5.79192L20.3813 2.0566ZM30.657 25.3805L37.9785 32.1919H37.9785L30.657 25.3805ZM19.2521 33.8205L14.7414 24.8956L14.7414 24.8956L19.2521 33.8205ZM17.7479 33.8205L22.2586 24.8956L22.2586 24.8956L17.7479 33.8205ZM6.343 25.3805L-0.978529 32.1919H-0.978528L6.343 25.3805ZM8.79337 23.0513L16.1149 16.2399V16.2399L8.79337 23.0513ZM18.5 30.3883L13.7845 39.2066C16.7308 40.7821 20.2692 40.7821 23.2155 39.2066L18.5 30.3883ZM28.2066 23.0513L35.5282 29.8627V29.8627L28.2066 23.0513ZM22.4519 4.73607L28.6487 12.5846H28.6487L22.4519 4.73607ZM20.2574 7.25395L12.1562 1.39132L12.1562 1.39134L20.2574 7.25395ZM19.8498 7.81416L11.7936 1.88984L11.7936 1.88985L19.8498 7.81416ZM17.1502 7.81416L9.09401 13.7385L9.09402 13.7385L17.1502 7.81416ZM16.7987 7.33241L8.70982 13.2121L8.70983 13.2121L16.7987 7.33241ZM14.5285 4.73925L8.35564 12.6066L8.35564 12.6066L14.5285 4.73925ZM10.0909 -10C-3.12865 -10 -10 1.5681 -10 11.05H10C10 10.8048 10.0445 10.5491 10.1265 10.3187C10.2086 10.0877 10.304 9.94937 10.3526 9.89202C10.3947 9.84228 10.3724 9.88541 10.2613 9.93926C10.1321 10.0019 10.0455 10 10.0909 10V-10ZM22.7638 -5.81397C19.3332 -8.50567 15.079 -10 10.0909 -10V10C10.3342 10 10.4889 10.0172 10.5701 10.0298C10.6494 10.042 10.6694 10.0515 10.6451 10.0433C10.6199 10.0349 10.5757 10.0171 10.5233 9.98848C10.4717 9.9603 10.4353 9.93427 10.4181 9.92082L22.7638 -5.81397ZM26.2642 -2.32478C25.4473 -3.33272 24.2957 -4.61207 22.7638 -5.81397L10.4181 9.92082C10.3923 9.90055 10.4079 9.90976 10.4646 9.96795C10.5221 10.0269 10.6076 10.1213 10.7269 10.2685L26.2642 -2.32478ZM14.1845 -5.79192C12.6522 -4.58211 11.5055 -3.29421 10.6994 -2.29067L26.2918 10.2344C26.4101 10.0871 26.4934 9.99438 26.5477 9.93825C26.6013 9.88283 26.6116 9.87872 26.5781 9.90513L14.1845 -5.79192ZM26.9091 -10C21.9203 -10 17.6435 -8.52303 14.1845 -5.79192L26.5781 9.90513C26.5545 9.92376 26.5116 9.95419 26.4539 9.98578C26.3953 10.0178 26.3469 10.0371 26.3202 10.046C26.2946 10.0546 26.3165 10.0444 26.4018 10.0313C26.489 10.018 26.6529 10 26.9091 10V-10ZM47 11.05C47 1.63391 40.2474 -10 26.9091 -10V10C26.9865 10 26.9093 10.0087 26.7739 9.94311C26.6558 9.88594 26.6232 9.83515 26.6561 9.8742C26.6964 9.922 26.7891 10.0543 26.8712 10.2878C26.9532 10.5209 27 10.7871 27 11.05H47ZM37.9785 32.1919C42.4767 27.3568 47 20.1777 47 11.05H27C27 13.2822 25.8921 15.821 23.3355 18.5691L37.9785 32.1919ZM23.7628 42.7454C28.0168 40.5954 33.445 37.0649 37.9785 32.1919L23.3355 18.5691C20.8033 21.2908 17.4697 23.5168 14.7414 24.8956L23.7628 42.7454ZM13.2372 42.7454C16.5469 44.4182 20.4531 44.4182 23.7628 42.7454L14.7414 24.8956C17.1043 23.7015 19.8957 23.7015 22.2586 24.8956L13.2372 42.7454ZM-0.978528 32.1919C3.55496 37.0649 8.98315 40.5954 13.2372 42.7454L22.2586 24.8956C19.5303 23.5168 16.1967 21.2908 13.6645 18.5691L-0.978528 32.1919ZM-10 11.05C-10 20.1777 -5.4767 27.3568 -0.978529 32.1919L13.6645 18.5691C11.1079 15.821 10 13.2822 10 11.05H-10ZM13.3636 11.05C13.3636 11.1687 13.3247 11.6199 12.8443 12.1775C12.3016 12.8074 11.2945 13.4 10.0909 13.4V-6.6C-0.669065 -6.6 -6.63636 2.7783 -6.63636 11.05H13.3636ZM16.1149 16.2399C13.891 13.8494 13.3636 12.1032 13.3636 11.05H-6.63636C-6.63636 18.9881 -2.70403 25.3741 1.47184 29.8627L16.1149 16.2399ZM23.2155 21.5699C20.8252 20.2917 18.1299 18.4058 16.1149 16.2399L1.47184 29.8627C5.35937 34.0413 9.98984 37.1775 13.7845 39.2066L23.2155 21.5699ZM20.8851 16.2399C18.8701 18.4058 16.1748 20.2917 13.7845 21.5699L23.2155 39.2066C27.0102 37.1775 31.6406 34.0413 35.5282 29.8627L20.8851 16.2399ZM23.6364 11.05C23.6364 12.1032 23.109 13.8494 20.8851 16.2399L35.5282 29.8627C39.704 25.3741 43.6364 18.9881 43.6364 11.05H23.6364ZM26.9091 13.4C25.7697 13.4 24.742 12.8338 24.1604 12.1553C23.6557 11.5666 23.6364 11.1097 23.6364 11.05H43.6364C43.6364 2.819 37.7673 -6.6 26.9091 -6.6V13.4ZM28.6487 12.5846C28.3127 12.8499 27.8676 13.1095 27.3796 13.273C26.927 13.4245 26.7142 13.4 26.9091 13.4V-6.6C22.6109 -6.6 19.0773 -5.34081 16.255 -3.11246L28.6487 12.5846ZM28.3586 13.1166C28.5485 12.8542 28.6723 12.6835 28.7859 12.5319C28.8935 12.3883 28.9505 12.3175 28.9764 12.2866C29.0147 12.2406 28.8958 12.3894 28.6487 12.5846L16.255 -3.11246C14.1162 -1.42374 12.7391 0.585835 12.1562 1.39132L28.3586 13.1166ZM27.906 13.7385C28.0734 13.5108 28.2304 13.2938 28.3586 13.1166L12.1562 1.39134C12.0219 1.57688 11.9087 1.7333 11.7936 1.88984L27.906 13.7385ZM18.5 18.5C22.2389 18.5 25.7199 16.7113 27.906 13.7385L11.7936 1.88985C13.345 -0.219936 15.8249 -1.5 18.5 -1.5V18.5ZM9.09402 13.7385C11.2801 16.7113 14.7611 18.5 18.5 18.5V-1.5C21.1751 -1.5 23.655 -0.219936 25.2064 1.88985L9.09402 13.7385ZM8.70983 13.2121C8.8216 13.3659 8.95429 13.5485 9.09401 13.7385L25.2065 1.88987C25.1047 1.75143 25.0039 1.61284 24.8875 1.45273L8.70983 13.2121ZM8.35564 12.6066C8.11438 12.4173 8.00509 12.2778 8.05731 12.3401C8.0893 12.3783 8.15234 12.4564 8.26567 12.607C8.38498 12.7656 8.51445 12.9433 8.70982 13.2121L24.8875 1.45274C24.2865 0.625862 22.877 -1.42109 20.7013 -3.12815L8.35564 12.6066ZM10.0909 13.4C10.2543 13.4 10.0319 13.4202 9.58299 13.2694C9.10352 13.1083 8.67395 12.8564 8.35564 12.6066L20.7013 -3.12814C17.8966 -5.32876 14.3789 -6.6 10.0909 -6.6V13.4Z"
              fill="#FF4004"
              mask="url(#path-3-inside-1_3287_2043)"
            />
          </svg>
        </button>
      ) : (
        <button onClick={() => sendRequestFavoriteBook(true)}>
          <svg
            width="37"
            height="34"
            viewBox="0 0 37 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33203 6.49935C3.33203 5.69195 3.81751 4.96373 4.5628 4.6532L8.64078 2.95404C9.0865 2.76832 9.58437 2.75013 10.0425 2.90283L17.0934 5.25313C17.8461 5.50402 18.3793 6.1761 18.4524 6.9661L20.434 28.3677C20.5911 30.0639 18.6912 31.1674 17.2956 30.1905L6.3325 22.5163C6.00629 22.288 5.75567 21.9675 5.61273 21.5958L3.46534 16.0126C3.37722 15.7835 3.33203 15.5401 3.33203 15.2947V6.49935Z"
              fill="#FFf"
            />
            <path
              d="M30.6881 2.66602C31.3969 2.66602 32.0527 3.0411 32.412 3.65198L36.2811 10.2294C36.6247 10.8135 36.6491 11.5318 36.3461 12.1379L32.9602 18.9096C32.8752 19.0797 32.7663 19.2368 32.637 19.3761L26.5174 25.9664C26.3944 26.0989 26.254 26.214 26.1 26.3088L21.3075 29.258C20.4607 29.7792 19.3595 29.599 18.7229 28.8351L17.8138 27.7441C17.5032 27.3715 17.3387 26.8987 17.3508 26.4137L17.8058 8.21697C17.8222 7.55901 18.1613 6.95127 18.7126 6.59173L22.432 4.16602L25.0097 2.87716C25.2875 2.73831 25.5937 2.66602 25.9042 2.66602L30.6881 2.66602Z"
              fill="#FFf"
            />
            <mask id="path-3-inside-1_3287_2043" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 11.05C0 5.46508 3.8906 0 10.0909 0C12.9649 0 15.0166 0.818117 16.591 2.05343C17.338 2.63952 17.9622 3.31379 18.4956 3.97187C19.0231 3.31519 19.641 2.64106 20.3813 2.0566C21.953 0.815647 24.0079 0 26.9091 0C33.1804 0 37 5.47422 37 11.05C37 16.73 34.1844 21.5889 30.657 25.3805C27.1242 29.1779 22.7433 32.0561 19.2521 33.8205C18.7787 34.0598 18.2213 34.0598 17.7479 33.8205C14.2567 32.0561 9.87581 29.1779 6.343 25.3805C2.81561 21.5889 0 16.73 0 11.05ZM10.0909 3.4C6.20031 3.4 3.36364 6.85076 3.36364 11.05C3.36364 15.5457 5.59348 19.6117 8.79337 23.0513C11.7446 26.2236 15.4075 28.7346 18.5 30.3883C21.5925 28.7346 25.2554 26.2236 28.2066 23.0513C31.4065 19.6117 33.6364 15.5457 33.6364 11.05C33.6364 6.84162 30.8551 3.4 26.9091 3.4C24.7016 3.4 23.389 3.99614 22.4519 4.73607C21.5832 5.42189 20.9784 6.25773 20.2574 7.25395C20.1261 7.43535 19.991 7.62207 19.8498 7.81416C19.5325 8.24566 19.0319 8.5 18.5 8.5C17.9681 8.5 17.4675 8.24566 17.1502 7.81416C17.0295 7.64995 16.9127 7.48935 16.7987 7.33241C16.0555 6.31004 15.4251 5.44271 14.5285 4.73925C13.5782 3.99367 12.2624 3.4 10.0909 3.4Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 11.05C0 5.46508 3.8906 0 10.0909 0C12.9649 0 15.0166 0.818117 16.591 2.05343C17.338 2.63952 17.9622 3.31379 18.4956 3.97187C19.0231 3.31519 19.641 2.64106 20.3813 2.0566C21.953 0.815647 24.0079 0 26.9091 0C33.1804 0 37 5.47422 37 11.05C37 16.73 34.1844 21.5889 30.657 25.3805C27.1242 29.1779 22.7433 32.0561 19.2521 33.8205C18.7787 34.0598 18.2213 34.0598 17.7479 33.8205C14.2567 32.0561 9.87581 29.1779 6.343 25.3805C2.81561 21.5889 0 16.73 0 11.05ZM10.0909 3.4C6.20031 3.4 3.36364 6.85076 3.36364 11.05C3.36364 15.5457 5.59348 19.6117 8.79337 23.0513C11.7446 26.2236 15.4075 28.7346 18.5 30.3883C21.5925 28.7346 25.2554 26.2236 28.2066 23.0513C31.4065 19.6117 33.6364 15.5457 33.6364 11.05C33.6364 6.84162 30.8551 3.4 26.9091 3.4C24.7016 3.4 23.389 3.99614 22.4519 4.73607C21.5832 5.42189 20.9784 6.25773 20.2574 7.25395C20.1261 7.43535 19.991 7.62207 19.8498 7.81416C19.5325 8.24566 19.0319 8.5 18.5 8.5C17.9681 8.5 17.4675 8.24566 17.1502 7.81416C17.0295 7.64995 16.9127 7.48935 16.7987 7.33241C16.0555 6.31004 15.4251 5.44271 14.5285 4.73925C13.5782 3.99367 12.2624 3.4 10.0909 3.4Z"
              fill="#FF4004"
            />
            <path
              d="M16.591 2.05343L10.4181 9.92082L10.4181 9.92082L16.591 2.05343ZM18.4956 3.97187L10.7269 10.2685C12.6305 12.6171 15.4943 13.9785 18.5175 13.9718C21.5406 13.9652 24.3985 12.5913 26.2918 10.2344L18.4956 3.97187ZM20.3813 2.0566L14.1845 -5.79192L14.1845 -5.79192L20.3813 2.0566ZM30.657 25.3805L37.9785 32.1919H37.9785L30.657 25.3805ZM19.2521 33.8205L14.7414 24.8956L14.7414 24.8956L19.2521 33.8205ZM17.7479 33.8205L22.2586 24.8956L22.2586 24.8956L17.7479 33.8205ZM6.343 25.3805L-0.978529 32.1919H-0.978528L6.343 25.3805ZM8.79337 23.0513L16.1149 16.2399V16.2399L8.79337 23.0513ZM18.5 30.3883L13.7845 39.2066C16.7308 40.7821 20.2692 40.7821 23.2155 39.2066L18.5 30.3883ZM28.2066 23.0513L35.5282 29.8627V29.8627L28.2066 23.0513ZM22.4519 4.73607L28.6487 12.5846H28.6487L22.4519 4.73607ZM20.2574 7.25395L12.1562 1.39132L12.1562 1.39134L20.2574 7.25395ZM19.8498 7.81416L11.7936 1.88984L11.7936 1.88985L19.8498 7.81416ZM17.1502 7.81416L9.09401 13.7385L9.09402 13.7385L17.1502 7.81416ZM16.7987 7.33241L8.70982 13.2121L8.70983 13.2121L16.7987 7.33241ZM14.5285 4.73925L8.35564 12.6066L8.35564 12.6066L14.5285 4.73925ZM10.0909 -10C-3.12865 -10 -10 1.5681 -10 11.05H10C10 10.8048 10.0445 10.5491 10.1265 10.3187C10.2086 10.0877 10.304 9.94937 10.3526 9.89202C10.3947 9.84228 10.3724 9.88541 10.2613 9.93926C10.1321 10.0019 10.0455 10 10.0909 10V-10ZM22.7638 -5.81397C19.3332 -8.50567 15.079 -10 10.0909 -10V10C10.3342 10 10.4889 10.0172 10.5701 10.0298C10.6494 10.042 10.6694 10.0515 10.6451 10.0433C10.6199 10.0349 10.5757 10.0171 10.5233 9.98848C10.4717 9.9603 10.4353 9.93427 10.4181 9.92082L22.7638 -5.81397ZM26.2642 -2.32478C25.4473 -3.33272 24.2957 -4.61207 22.7638 -5.81397L10.4181 9.92082C10.3923 9.90055 10.4079 9.90976 10.4646 9.96795C10.5221 10.0269 10.6076 10.1213 10.7269 10.2685L26.2642 -2.32478ZM14.1845 -5.79192C12.6522 -4.58211 11.5055 -3.29421 10.6994 -2.29067L26.2918 10.2344C26.4101 10.0871 26.4934 9.99438 26.5477 9.93825C26.6013 9.88283 26.6116 9.87872 26.5781 9.90513L14.1845 -5.79192ZM26.9091 -10C21.9203 -10 17.6435 -8.52303 14.1845 -5.79192L26.5781 9.90513C26.5545 9.92376 26.5116 9.95419 26.4539 9.98578C26.3953 10.0178 26.3469 10.0371 26.3202 10.046C26.2946 10.0546 26.3165 10.0444 26.4018 10.0313C26.489 10.018 26.6529 10 26.9091 10V-10ZM47 11.05C47 1.63391 40.2474 -10 26.9091 -10V10C26.9865 10 26.9093 10.0087 26.7739 9.94311C26.6558 9.88594 26.6232 9.83515 26.6561 9.8742C26.6964 9.922 26.7891 10.0543 26.8712 10.2878C26.9532 10.5209 27 10.7871 27 11.05H47ZM37.9785 32.1919C42.4767 27.3568 47 20.1777 47 11.05H27C27 13.2822 25.8921 15.821 23.3355 18.5691L37.9785 32.1919ZM23.7628 42.7454C28.0168 40.5954 33.445 37.0649 37.9785 32.1919L23.3355 18.5691C20.8033 21.2908 17.4697 23.5168 14.7414 24.8956L23.7628 42.7454ZM13.2372 42.7454C16.5469 44.4182 20.4531 44.4182 23.7628 42.7454L14.7414 24.8956C17.1043 23.7015 19.8957 23.7015 22.2586 24.8956L13.2372 42.7454ZM-0.978528 32.1919C3.55496 37.0649 8.98315 40.5954 13.2372 42.7454L22.2586 24.8956C19.5303 23.5168 16.1967 21.2908 13.6645 18.5691L-0.978528 32.1919ZM-10 11.05C-10 20.1777 -5.4767 27.3568 -0.978529 32.1919L13.6645 18.5691C11.1079 15.821 10 13.2822 10 11.05H-10ZM13.3636 11.05C13.3636 11.1687 13.3247 11.6199 12.8443 12.1775C12.3016 12.8074 11.2945 13.4 10.0909 13.4V-6.6C-0.669065 -6.6 -6.63636 2.7783 -6.63636 11.05H13.3636ZM16.1149 16.2399C13.891 13.8494 13.3636 12.1032 13.3636 11.05H-6.63636C-6.63636 18.9881 -2.70403 25.3741 1.47184 29.8627L16.1149 16.2399ZM23.2155 21.5699C20.8252 20.2917 18.1299 18.4058 16.1149 16.2399L1.47184 29.8627C5.35937 34.0413 9.98984 37.1775 13.7845 39.2066L23.2155 21.5699ZM20.8851 16.2399C18.8701 18.4058 16.1748 20.2917 13.7845 21.5699L23.2155 39.2066C27.0102 37.1775 31.6406 34.0413 35.5282 29.8627L20.8851 16.2399ZM23.6364 11.05C23.6364 12.1032 23.109 13.8494 20.8851 16.2399L35.5282 29.8627C39.704 25.3741 43.6364 18.9881 43.6364 11.05H23.6364ZM26.9091 13.4C25.7697 13.4 24.742 12.8338 24.1604 12.1553C23.6557 11.5666 23.6364 11.1097 23.6364 11.05H43.6364C43.6364 2.819 37.7673 -6.6 26.9091 -6.6V13.4ZM28.6487 12.5846C28.3127 12.8499 27.8676 13.1095 27.3796 13.273C26.927 13.4245 26.7142 13.4 26.9091 13.4V-6.6C22.6109 -6.6 19.0773 -5.34081 16.255 -3.11246L28.6487 12.5846ZM28.3586 13.1166C28.5485 12.8542 28.6723 12.6835 28.7859 12.5319C28.8935 12.3883 28.9505 12.3175 28.9764 12.2866C29.0147 12.2406 28.8958 12.3894 28.6487 12.5846L16.255 -3.11246C14.1162 -1.42374 12.7391 0.585835 12.1562 1.39132L28.3586 13.1166ZM27.906 13.7385C28.0734 13.5108 28.2304 13.2938 28.3586 13.1166L12.1562 1.39134C12.0219 1.57688 11.9087 1.7333 11.7936 1.88984L27.906 13.7385ZM18.5 18.5C22.2389 18.5 25.7199 16.7113 27.906 13.7385L11.7936 1.88985C13.345 -0.219936 15.8249 -1.5 18.5 -1.5V18.5ZM9.09402 13.7385C11.2801 16.7113 14.7611 18.5 18.5 18.5V-1.5C21.1751 -1.5 23.655 -0.219936 25.2064 1.88985L9.09402 13.7385ZM8.70983 13.2121C8.8216 13.3659 8.95429 13.5485 9.09401 13.7385L25.2065 1.88987C25.1047 1.75143 25.0039 1.61284 24.8875 1.45273L8.70983 13.2121ZM8.35564 12.6066C8.11438 12.4173 8.00509 12.2778 8.05731 12.3401C8.0893 12.3783 8.15234 12.4564 8.26567 12.607C8.38498 12.7656 8.51445 12.9433 8.70982 13.2121L24.8875 1.45274C24.2865 0.625862 22.877 -1.42109 20.7013 -3.12815L8.35564 12.6066ZM10.0909 13.4C10.2543 13.4 10.0319 13.4202 9.58299 13.2694C9.10352 13.1083 8.67395 12.8564 8.35564 12.6066L20.7013 -3.12814C17.8966 -5.32876 14.3789 -6.6 10.0909 -6.6V13.4Z"
              fill="#FF4004"
              mask="url(#path-3-inside-1_3287_2043)"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AddBookFavorite;
