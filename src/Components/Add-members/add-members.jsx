import './add-members.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, deletee } from '../../Store/actions/memberActions';
import TextField from '@mui/material/TextField';
import 'react-toastify/dist/ReactToastify.css';
import { AddUserRequest, DeleteUserRequest } from '../../Store/sagas';

export default function Members() {

    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [about, setAbout] = useState();


    const members = useSelector((state) => {
        return state.members
    })


    const submit = () => {
        dispatch(AddUserRequest({
            id: Math.random(),
            name: name,
            surname: surname,
            email: email,
            about: about,
        }))
    }

    const remove = (id) => {
        dispatch(DeleteUserRequest(id))
    }

    return (<div className='members-content'>
        <div className='form-container'>
            <h1 className='title'>Add a new member</h1>

            <div className='name-surname-mail-container'>
                <TextField id="outlined-basic" label="Name" variant="outlined" className='name-input' onChange={(e) => setName(e.target.value)} />
                <TextField id="outlined-basic" label="Surname" variant="outlined" className='surname-input' onChange={(e) => setSurname(e.target.value)} />
                <TextField id="outlined-basic" label="Email" variant="outlined" className='mail-input' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <TextField fullWidth label="About yourself" id="fullWidth" className='about' onChange={(e) => setAbout(e.target.value)} />
            <input type="button" value="ADD" className='submit-btn' onClick={() => submit()} />
        </div>

        <div>
            <table className='table'>
                <tr>
                    <td>NAME</td>
                    <td>SURNAME</td>
                    <td>EMAIL</td>
                    <td>DELETE</td>
                </tr>
                {
                    members.map((member, index) => {
                        console.log(member)
                        return (<tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.surname}</td>
                            <td>{member.email}</td>
                            <td><button onClick={() => remove(member.id)}>Delete</button></td>
                        </tr>)
                    })
                }
            </table>
        </div>
    </div>)
}