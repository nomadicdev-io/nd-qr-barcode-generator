import axios from "axios";
import { useState, useEffect } from "react";

const UIModal = ({close, id})=> {

    const [data, setData] = useState('');
    const [loaded, setLoaded] = useState(false);

    const getData = async ()=> {
        const req = await axios.get(`http://localhost:5000/api/v1/userslist/${id}`).then((res)=> {
          setData(res.data.data);
          console.log(res.data.data)
          setLoaded(true);
        })
      }
    
      useEffect(()=> {
        getData();
      }, [id])

    return (
        <div className="modal_">
            <div className="overlay_"></div>

            <div className="content_">
              <div className="inner_">

                <div className="image_wrap">
                  <div className="img_">
                    <img src={data.imageUrl} alt={data.imageUrl} />
                  </div>
                </div>

                <div className="desc_">
                  <div className="title_">
                    <h4>{data.firstname + ' ' + data.lastname}</h4>
                    <p>{data.email}</p>
                  </div>

                  <ul className="desc_list">
                    <li>
                      <span>Phone</span>
                      <strong>{data.phone}</strong>
                    </li>
                    <li>
                      <span>Gender</span>
                      <strong>{data.gender}</strong>
                    </li>
                    <li className="full_row">
                      <div className="barcode_">
                        <img src={data.qrcode} />
                      </div>
                    </li>
                    <li>
                      <span>Country</span>
                      <strong>{data.country}</strong>
                    </li>
                    <li className={`flex_ ${data.isValid ? 'valid_' : 'invalid_'}`}>
                      <strong>{data.isValid ? 'Verified' : 'Nonverified'}</strong>
                    </li>
                  </ul>

                </div>

                

              </div>
            </div>

            <div className="close_" onClick={close}>

            </div>
        </div>
    )
}

export default UIModal;