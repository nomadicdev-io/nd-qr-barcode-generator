export default function UITitle({children, maintitle}) {

    return (
    <div className="title_wrapper">
       <div>
            <p>Hello User, Please find the</p>
            <h1>{maintitle}</h1>
       </div>

       {children}
    </div>
  )
}
