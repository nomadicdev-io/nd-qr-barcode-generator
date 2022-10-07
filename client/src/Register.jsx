import UIButton, { UISubmitButton } from "./components/UIButtons";
import UITitle from "./components/UITitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const createUser = async (data)=> {

        try {
            const postUser = await axios.post('http://localhost:5000/api/v1/userslist', data).then((response)=> {
                console.log(response);
            })

        } catch(err) {
            console.log(err)
        }
    }   

  return (
    <main className='main_'>
        <div className="container">
            <UITitle maintitle="Create New User">
                <UIButton title="Back" clicked={()=> navigate('/')}/>
            </UITitle>

            <form onSubmit={handleSubmit(createUser)} className="form_">
                <div className="input_">
                    <label>First Name</label>
                    <input type="text" {...register("firstname")} />
                </div>

                <div className="input_">
                    <label>Last Name</label>
                    <input type="text" {...register("lastname")}/>
                </div>

                <div className="input_">
                    <label>Email</label>
                    <input type="email" {...register("email")}/>
                </div>

                <div className="input_">
                    <label>Phone</label>
                    <input type="number" {...register("phone")}/>
                </div>

                <div className="input_">
                    <label>Gender</label>

                    <ul className="list_">
                        <li>
                            <input type="radio" {...register("gender")} value="Male"/>
                            <span>Male</span>
                        </li>
                        <li>
                            <input type="radio" {...register("gender")} value="Female"/>
                            <span>Female</span>
                        </li>
                    </ul>

                </div>

                <div className="input_">
                    <label>Date of Birth</label>
                    <input type="date" {...register("dob")}/>
                </div>

                <div className="input_">
                    <label>Country</label>
                    <input type="text" {...register("country")}/>
                </div>

                <div className="input_">
                    <label>Image</label>
                    <input type="text" {...register("imageUrl")}/>
                </div>

                <div className="input_ full_">
                    <UISubmitButton title="Create User"/>
                </div>
            </form>
        </div>
    </main>
  )
}
