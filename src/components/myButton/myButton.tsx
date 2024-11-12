//  ------ ВАРИАНТ КОДА БЕЗ ДЕСТРУКТУРИЗАЦИИ ------
// import './myButton.css'

// function MyButton(props) {
//      console.log(props)
//      return <button 
//           onClick={props.func} 
//           className='my-button'>{props.text}
//      </button>;
// }

//    export default MyButton;


//  ------ ВАРИАНТ КОДА С ДЕСТРУКТУРИЗАЦИЕЙ ------
// Забираем значения из объекта по ключам и кладем их в переменные с определенным именем в одну строчку
import './myButton.css'

interface IMyButtonProps {
     text?: string,
     isDanger?: boolean
     myType?: "button" | "submit" | "reset"
     func?: () => void
}

const handleDefaultClick = () => {
     console.log('default click!')
}

// Интерфейс указываем вкруглых скобках после деструктуризации пропс после двоеточия
function MyButton({func = handleDefaultClick, isDanger = true, text = 'Click', myType = 'button'}:IMyButtonProps) {
     console.log(isDanger)
     return <button 
          type = {myType}
          onClick = {func} 
          className = {`my-button ${isDanger ? 'btn-danger' : 'btn-primary'}`}>
          {text}
     </button>;
}

   export default MyButton;


