

export default function UIUser({data, clicked}) {
  return (
    <div className="item_" onClick={clicked}>

        <div className="top_">

            <div className="tags_wrap">


                <div className={`tag_ ${data.isValid ? 'valid_' : 'invalid_'}`} >{data.isValid ? 'Verified' : 'Nonverified'}</div>
            </div>

            <div className="image_">
                <img src={data.imageUrl}  alt="Picture of the author"/>
            </div>
        </div>

        <div className="content_">
            <h4>{data.firstname + ' ' + data.lastname}</h4>
            <p>{data.email}</p>
        </div>


    </div>
  )
}
