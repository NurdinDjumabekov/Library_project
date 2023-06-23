import React, { useImperativeHandle, useRef } from 'react'
import styles from './inputFourDigits.module.css'

function InputFourDigits({digits,onChange},ref) {
    const updateArray = (array,index,newValue) => {
        const copy = [...array]
        copy[index] = newValue
        return copy
    }
    const handleChange = (index, newValue) =>{
        const oldDigit = digits[index]
        const newDigit = newValue.trim().replace(oldDigit, '');
        if(newDigit < '0' || newDigit > '9'){
            return
        }
        const inputs = inputRefs.current
        if(index < inputs.length-1){
            inputs[index+1].focus();
        }else {
            inputs[index].blur()
        }
        onChange(updateArray(digits,index,newDigit))
    }
    const inputRefs = useRef(new Array(digits.length))
    const handleKeyDown = (index,keyPressed) =>{
        if(keyPressed !== 'Backspace'){
            return
        }
        if(digits[index]){
            onChange(updateArray(digits,index,''))
        }else if(index>0){
            inputRefs.current[index-1].focus()
        }
    }
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRefs.current[0].focus()
        }
    }))
    return (
        <div className={styles.inputPos}>
          {digits.map((digit, index) => {
            return (
              <input
                key={index}
                value={digit}
                placeholder='___'
                className={styles.input}
                onChange={(event) => handleChange(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event.nativeEvent.key)}
                ref={(ref) => {
                  inputRefs.current[index] = ref
                }}
              />
            );
          })}
        </div>
      );
}

export default React.forwardRef(InputFourDigits)