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

const handleDefaultClick = () => {
     console.log('default click!')
}

function MyButton({func = handleDefaultClick, isDanger = true, text = 'Click', myType = 'button'}) {
     console.log(isDanger)
     return <button 
          type = {myType}
          onClick = {func} 
          className = {`my-button ${isDanger ? 'btn-danger' : 'btn-primary'}`}>
          {text}
     </button>;
}

   export default MyButton;


