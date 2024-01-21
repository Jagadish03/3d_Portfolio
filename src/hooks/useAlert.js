import {useState} from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({show: false, tex:'', type:'danger'})

    const showAlert = ({text, type='danger'})=> setAlert({
        show: true,
        text,
        type
    })
    const hideAlert = ({text, type='danger'})=> setAlert({
        show: false,
        text:'',
        type:'danger'
    })
  return {alert, showAlert, hideAlert}
}

export default useAlert