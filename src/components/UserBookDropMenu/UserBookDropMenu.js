import React from 'react'
import styles from './userBookDropMenu.module.css'
import dropdownClose from '../../assests/images/UserBook/dropdownClose.svg'
import trashBin from '../../assests/images/UserBook/trashBin.svg'
import Select from 'react-select';
const UserBookDropMenu = ({bookmark,isOpen}) => {
    const options = [
        { value: "Читаю", label: "Читаю" },
        { value: "Прочитано", label: "Прочитано" },
        { value: "Брошено", label: "Брошено" },
      ];
    const fal = false;
    console.log(bookmark)
    const customStyles ={
        control: (defaultStyles) => ({
            ...defaultStyles,
            padding: '0',
            height: '43px',
            with: '355px'
          }),
          valueContainer:
          (defaultStyles) => ({
            ...defaultStyles,
            padding: '0',
            height: '43px',
            with: '355px'
          }),
          placeholder: (provided, state) => ({
            ...provided,
            padding: '0',
            height: '100%',
            paddingLeft: '12px',
            paddingTop:'10px',
            with: '355px'
          }),
          indicatorsContainer: (provided, state) => ({
            ...provided,
            padding: '0',
            height: '100%',
            with: '355px'
          }),
          singleValue: (defaultStyles) => ({ 
            ...defaultStyles,
            padding: '0',
            height: '100%',
            with: '355px',
            paddingLeft: '12px',
            paddingTop:'10px',
        })
      }
  return (
    <div className={styles.dropdown}>
        <div className={styles.dropdownMenu}>
            <h3>Редактирование</h3>
            <button className={styles.dropdownClose} onClick={isOpen}><img src={dropdownClose}/></button>
            <div className={styles.bookmarkDiv}>
                <p>Вкладка</p>
                <div className={styles.select}>
                    <Select
                        classNamePrefix={styles.select}
                        placeholder={bookmark}
                        isSearchable = {fal}
                        options={options}
                        styles={customStyles}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.saveBtn}>Сохранить</button>
                <button className={styles.deleteBtn}>
                    <img src={trashBin}/>
                    <p>Удалить</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserBookDropMenu